/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';

import { connectDb } from '../db';
import { usersModel } from '../create-user/model';

import { ErrorCustom } from '../create-user/route';

interface User {
  _id: string;
  name: string;
  email: string;
}

export async function POST(req: NextRequest, res: NextResponse) {
  let user;
  const errors: ErrorCustom[] = [];
  await connectDb();

  const body = await req.json();

  try {
    user =
      (await usersModel
        .findOne({
          name: body.emailOrUserName,
          password: body.password,
        })
        .select(['name', 'email'])) ||
      (await usersModel
        .findOne({
          email: body.emailOrUserName,
          password: body.password,
        })
        .select(['name', 'email']));
  } catch (err) {
    errors.push({
      msg: 'internal error server.',
      code: 500,
    });
  }

  if (!user) {
    return NextResponse.json(
      {
        message: 'incorrect credentials or user does not exist.',
      },
      { status: 401 }
    );
  }

  if (errors.length) {
    return NextResponse.json(
      { message: errors[0].msg },
      { status: errors[0].code }
    );
  }

  const { _id: id, name, email }: User = user;
  const { rememberPassword } = body;
  const message = 'Login successful.';

  const token = jwt.sign({ id }, process.env.NEXT_PUBLIC_SECRET as string, {
    expiresIn: rememberPassword ? '10d' : '5h',
  });

  return new Response(JSON.stringify({ id, message, token }), {
    status: 200,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  // return new Response(
  //   JSON.stringify({ id, message, name, email, rememberPassword, token }),
  //   {
  //     status: 200,
  //     headers: {
  //       'Set-Cookie': serialize('token', token, {
  //         httpOnly: true,
  //         maxAge: rememberPassword ? 864000 : 18000,
  //         path: '/',
  //       }),
  //       'Content-Type': 'application/json',
  //     },
  //   }
  // );
}
