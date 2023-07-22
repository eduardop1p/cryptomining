/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server';

import { connectDb } from '../db';
import { usersModel } from '../create-user/model';

import { ErrorCustom } from '../create-user/route';

export async function POST(req: NextRequest, res: NextResponse) {
  let user;
  const errors: ErrorCustom[] = [];
  await connectDb();

  const { emailOrUserName } = await req.json();

  try {
    user =
      (await usersModel
        .findOne({
          name: emailOrUserName,
        })
        .select(['name', 'email'])) ||
      (await usersModel
        .findOne({
          email: emailOrUserName,
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
        message: 'incorrect username or email or user does not exist.',
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

  return NextResponse.json({
    message: `we send an email to ${user.email} with instructions.`,
  });
}
