/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextRequest, NextResponse } from 'next/server';

// esse código abaixo é um esqueleto de uma api no nextJs, obs: ela tem que retonar uma response e ser async
// as tipagem para typescript não funciona em req e res para retornos de funções;
// no nome function colocamos qual vai ser esse método de requisição
export async function GET(req: NextRequest, res: NextResponse) {
  // await new Promise(r => setTimeout(r, 2000));

  return NextResponse.json({ status: 200 });
  // return new Response(null, {
  //   status: 200,
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  //     'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  //   },
  // });
}
