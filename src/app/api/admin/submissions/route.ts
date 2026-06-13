import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const submissions = await db.contactSubmission.findMany({
      orderBy: { createdAt: 'desc' },
      take: 100,
    });
    return NextResponse.json(submissions);
  } catch (error) {
    console.error('Admin API error:', error);
    return NextResponse.json([], { status: 200 });
  }
}
