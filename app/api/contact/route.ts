import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export async function POST(req: Request) {
    try {
        const body = await req.json();

        const { name, email, subject, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false },
                { status: 400 }
            );
        }

        await transporter.sendMail({
            from: `"SparkCloud Website" <${process.env.SMTP_USER}>`,
            to: process.env.ADMIN_EMAIL,
            subject: `New Contact - ${subject}`,
            html: adminTemplate({
                name,
                email,
                subject,
                message,
            }),
        });

        await transporter.sendMail({
            from: `"SparkCloud" <${process.env.SMTP_USER}>`,
            to: email,
            subject: "Thank you for contacting SparkCloud",
            html: userTemplate(name),
        });

        return NextResponse.json({
            success: true,
        });
    } catch (e) {
        console.log(e);

        return NextResponse.json(
            { success: false },
            { status: 500 }
        );
    }
}

function adminTemplate(data: any) {
    return `
<!DOCTYPE html>
<html>
<body style="margin:0;background:#f5f5f5;font-family:Arial,sans-serif">
<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center">
<table width="650" cellpadding="40" cellspacing="0" style="background:#fff;border-radius:18px">
<tr>
<td align="center">
<img
src="https://console.sparkcloud.in/wp-content/uploads/2026/08/sparkcloud-logo-black.png"
width="180"
/>
<h2 style="margin-top:30px">
New Contact Form Submission
</h2>
</td>
</tr>
<tr>
<td>
<table width="100%" cellpadding="14">
<tr>
<td><b>Name</b></td>
<td>${data.name}</td>
</tr>
<tr>
<td><b>Email</b></td>
<td>${data.email}</td>
</tr>
<tr>
<td><b>Subject</b></td>
<td>${data.subject}</td>
</tr>
<tr>
<td><b>Message</b></td>
<td>${data.message}</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>
`;
}

function userTemplate(name: string) {
    return `
<!DOCTYPE html>
<html>
<body style="margin:0;background:#f5f5f5;font-family:Arial,sans-serif">
<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center">
<table width="650" cellpadding="40" cellspacing="0" style="background:#fff;border-radius:18px">
<tr>
<td align="center">
<img
src="https://console.sparkcloud.in/wp-content/uploads/2026/08/sparkcloud-logo-black.png"
width="180"
/>
<h1
style="
font-size:32px;
margin-top:35px;
"
>
Thank You!
</h1>
<p
style="
font-size:17px;
color:#666;
line-height:1.7;
"
>
Hi ${name},
<br><br>
We've received your enquiry.
One of our specialists will review your message and respond within 24 hours.
</p>
<table
align="center"
cellpadding="0"
cellspacing="0"
style="margin-top:30px"
>
<tr>
<td
style="
background:#111;
padding:16px 38px;
border-radius:999px;
"
>
<a
href="https://sparkcloud.in"
style="
color:#fff;
text-decoration:none;
font-weight:bold;
"
>
Visit SparkCloud
</a>
</td>
</tr>
</table>
<hr
style="
margin:45px 0;
border:none;
border-top:1px solid #eee;
"
/>
<p
style="
font-size:13px;
color:#999;
"
>
SparkCloud Digital Agency
<br>
info@sparkcloud.us
</p>
</td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>
`;
}