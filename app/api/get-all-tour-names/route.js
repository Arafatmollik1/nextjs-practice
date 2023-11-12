import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET() {
    var result = '';
  try {
      result = await sql`SELECT Id, Name_of_the_tour, Time_created  FROM tour_names;`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  return NextResponse.json({ result }, { status: 200 });
} 