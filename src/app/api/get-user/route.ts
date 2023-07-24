/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

import { connectDb } from '../db';
import { usersModel } from '../create-user/model';

export async function GET(req: NextRequest, res: NextResponse) {
  let user;

  const authorization = req.headers.get('authorization');
  if (!authorization) {
    return NextResponse.json(
      {
        message: 'unauthorized request',
      },
      {
        status: 401,
      }
    );
  }
  const [, token] = authorization.split(' ');

  await connectDb();
  const data = jwt.decode(token as string) as any;

  try {
    user = await usersModel.findById(data.id).select(['id', 'name', 'email']);
  } catch (err) {
    return NextResponse.json(
      {
        message: 'internal error server.',
      },
      { status: 500 }
    );
  }

  if (!user) {
    return NextResponse.json(
      {
        message: 'user does not exist.',
      },
      { status: 400 }
    );
  }

  const { _id: id, name, email } = user;

  return NextResponse.json({ user: { id, name, email } });
}
