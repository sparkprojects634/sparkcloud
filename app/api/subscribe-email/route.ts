import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
})

const escapeHtml = (value: string = "") =>
    value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;")

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        const email = body?.email

        if (!email) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Email is required.",
                },
                { status: 400 }
            )
        }

        const safeEmail = escapeHtml(email)

        /*
        |--------------------------------------------------------------------------
        | ADMIN EMAIL
        |--------------------------------------------------------------------------
        */

        const adminEmail = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
</head>

<body style="margin:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;color:#111">

<div style="padding:40px 20px">

    <div style="
        max-width:620px;
        margin:auto;
        background:#fff;
        border-radius:20px;
        overflow:hidden;
    ">

        <div style="
            background:#f7f7f7;
            padding:35px;
            text-align:center;
        ">
            <img
                src="https://sparkcloud.in/wp-content/uploads/2026/08/sparkcloud-logo-black.png"
                alt="SparkCloud"
                width="180"
            />
        </div>

        <div style="padding:40px">

            <h1 style="
                font-size:28px;
                margin:0 0 10px;
            ">
                New Email Subscription
            </h1>

            <p style="
                color:#777;
                font-size:14px;
                margin:0 0 30px;
            ">
                A new subscriber has joined the SparkCloud mailing list.
            </p>

            <div style="
                padding:18px 0;
                border-bottom:1px solid #eee;
            ">
                <div style="
                    color:#999;
                    font-size:11px;
                    text-transform:uppercase;
                    margin-bottom:6px;
                ">
                    Email
                </div>

                <div style="
                    font-size:16px;
                    color:#111;
                ">
                    ${safeEmail}
                </div>
            </div>

        </div>

        <div style="
            padding:25px 40px;
            background:#f7f7f7;
            color:#999;
            font-size:12px;
            text-align:center;
        ">
            SparkCloud — Digital Experience & Growth
        </div>

    </div>

</div>

</body>
</html>
`

        /*
        |--------------------------------------------------------------------------
        | USER EMAIL
        |--------------------------------------------------------------------------
        */

        const userEmail = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
</head>

<body style="margin:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif">

<div style="padding:40px 20px">

    <div style="
        max-width:620px;
        margin:auto;
        background:#fff;
        border-radius:20px;
        overflow:hidden;
    ">

        <div style="
            background:#f7f7f7;
            padding:35px;
            text-align:center;
        ">
            <img
                src="https://sparkcloud.in/wp-content/uploads/2026/08/sparkcloud-logo-black.png"
                alt="SparkCloud"
                width="180"
            />
        </div>

        <div style="
            padding:45px 40px;
            color:#111;
        ">

            <h1 style="
                font-size:30px;
                margin:0 0 15px;
            ">
                Thank You!
            </h1>

            <p style="
                font-size:15px;
                line-height:1.7;
                color:#555;
            ">
                Thank you for subscribing to SparkCloud.
                You are now on our mailing list and will receive
                updates, news and insights from us.
            </p>

            <div style="
                margin:30px 0;
                padding:25px;
                background:#f5f5f5;
                border-radius:15px;
                border-left:4px solid #287CF5;
            ">

                <strong style="
                    display:block;
                    color:#111;
                    margin-bottom:5px;
                ">
                    Subscription confirmed
                </strong>

                <span style="color:#555">
                    ${safeEmail}
                </span>

            </div>

            <p style="
                font-size:14px;
                line-height:1.7;
                color:#555;
            ">
                We appreciate your interest in SparkCloud.
            </p>

            <a
                href="https://sparkcloud.in"
                style="
                    display:inline-block;
                    padding:15px 28px;
                    border-radius:50px;
                    background:#287CF5;
                    color:#fff;
                    text-decoration:none;
                    font-weight:bold;
                "
            >
                VISIT SPARKCLOUD
            </a>

        </div>

        <div style="
            padding:25px 40px;
            background:#f7f7f7;
            color:#999;
            font-size:12px;
            text-align:center;
        ">
            © 2026 SparkCloud. All Rights Reserved.
        </div>

    </div>

</div>

</body>
</html>
`

        /*
        |--------------------------------------------------------------------------
        | SEND ADMIN EMAIL
        |--------------------------------------------------------------------------
        */

        await transporter.sendMail({
            from: `"SparkCloud Website" <${process.env.SMTP_USER}>`,
            to: process.env.ADMIN_EMAIL,
            subject: "New Email Subscription",
            html: adminEmail,
            replyTo: email,
        })

        /*
        |--------------------------------------------------------------------------
        | SEND USER CONFIRMATION
        |--------------------------------------------------------------------------
        */

        await transporter.sendMail({
            from: `"SparkCloud" <${process.env.SMTP_USER}>`,
            to: email,
            subject: "Thank you for subscribing to SparkCloud",
            html: userEmail,
        })

        return NextResponse.json({
            success: true,
            message: "Subscribed successfully.",
        })
    } catch (error) {
        console.error("Subscribe email error:", error)

        return NextResponse.json(
            {
                success: false,
                message:
                    error instanceof Error
                        ? error.message
                        : "Internal Server Error",
            },
            { status: 500 }
        )
    }
}