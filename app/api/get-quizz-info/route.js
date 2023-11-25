import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
 
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const GameID = searchParams.get('id');
 
  try {
    if (!GameID) throw new Error('GameID required');
    result = await sql`SELECT Quizz_picture, Quizz_headline, Quizz_text, Quizz_options FROM quizzes;`;
  }  catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  return NextResponse.json({ result }, { status: 200 });
} 