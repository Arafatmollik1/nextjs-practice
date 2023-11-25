import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
export async function GET(request) {
    var result = '';
    const { searchParams } = new URL(request.url);
    const Game_id = searchParams.get('id');
  try {
      if (!Game_id) throw new Error('Game id required');
      result = await sql`SELECT Game_id
      Quizz_headline,
      Quizz_text,
      All_extra,
      Quizz_options,
      Quizz_picture FROM quizzes WHERE Game_id=${Game_id};`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  return NextResponse.json({ result }, { status: 200 });
} 
