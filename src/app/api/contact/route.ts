import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, projectType, budget, message } = body;

  if (!name || !email || !projectType || !message) {
    return NextResponse.json(
      { error: 'Missing required fields' },
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL!,
      subject: `New inquiry from ${name} — ${projectType}`,
      text: `
Name: ${name}
Email: ${email}
Project Type: ${projectType}
Budget: ${budget || 'Not specified'}

Message:
${message}
      `.trim(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Resend error:', err);
    return NextResponse.json(
      { error: 'Failed to send' },
      { status: 500 }
    );
  }
}
