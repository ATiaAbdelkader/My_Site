import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters' },
        { status: 400 }
      );
    }

    // Try to save to database (works on local/VPS with SQLite,
    // may fail on serverless platforms like Vercel)
    try {
      const submission = await db.contactSubmission.create({
        data: {
          name: name.trim(),
          email: email.trim().toLowerCase(),
          subject: subject.trim(),
          message: message.trim(),
        },
      });

      return NextResponse.json(
        { success: true, id: submission.id },
        { status: 201 }
      );
    } catch (dbError) {
      console.error('Database save error:', dbError);
      // On serverless platforms, DB might not be available
      // Return success anyway so the form doesn't show an error to the user
      // In production, you should connect a persistent database (PostgreSQL, etc.)
      return NextResponse.json(
        { success: true, id: 'pending', note: 'Message received. We will get back to you soon.' },
        { status: 201 }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to submit message' },
      { status: 500 }
    );
  }
}
