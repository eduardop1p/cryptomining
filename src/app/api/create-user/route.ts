/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server';

import { connectDb } from '../db';
import { usersModel } from './model';

export interface ErrorCustom {
  msg: string;
  code: number;
}

export async function POST(req: Request, res: NextResponse) {
  let user;
  const errors: ErrorCustom[] = [];
  await connectDb();

  const body = await req.json();

  try {
    user =
      (await usersModel.findOne({
        name: body.name,
      })) ||
      (await usersModel.findOne({
        email: body.email,
      }));
    console.log(user);
  } catch (err) {
    errors.push({
      msg: 'internal error server.',
      code: 500,
    });
  }

  if (user) {
    return NextResponse.json(
      {
        message:
          'user exists in the database try with another email or username',
      },
      { status: 400 }
    );
  }

  try {
    await usersModel.create(body);
  } catch (err) {
    errors.push({
      msg: 'internal error server.',
      code: 500,
    });
  }

  if (errors.length) {
    return NextResponse.json(
      { message: errors[0].msg },
      { status: errors[0].code }
    );
  }

  return NextResponse.json({ message: 'user successfully created' });
}
