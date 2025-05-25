import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        const { data, error } = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "awarri74@gmail.com",
            subject: subject,
            html: `
        <p>You have a new message from ${name} (${email}):</p>
        <p>${message}</p>
      `,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 400 });
        }

        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}