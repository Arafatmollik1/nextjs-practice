import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const Name = searchParams.get('name');
 
  try {
    if (!Name) throw new Error('Names required');
    await sql`INSERT INTO tour_names (Name_of_the_tour, Time_created) VALUES (${Name}, now());`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const names = await sql`SELECT * FROM tour_names;`;
  return NextResponse.json({ names }, { status: 200 });
} 