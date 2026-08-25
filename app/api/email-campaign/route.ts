import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 465),
    secure: Number(process.env.SMTP_PORT || 465) === 465,

    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
})

const escapeHtml = (value: string = '') => {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
}

export async function POST(request: Request) {
    try {
        const body = await request.json()

        const {
            name,
            email,
            phone,
            website,
        } = body

        if (!name || !email || !phone) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Name, email and phone are required.',
                },
                { status: 400 }
            )
        }

        const safeName = escapeHtml(name)
        const safeEmail = escapeHtml(email)
        const safePhone = escapeHtml(phone)
        const safeWebsite = escapeHtml(website)

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

    <style>
        body {
            margin: 0;
            padding: 0;
            background: #f4f4f4;
            font-family: Arial, Helvetica, sans-serif;
            color: #111111;
        }

        .wrapper {
            padding: 40px 20px;
        }

        .container {
            max-width: 620px;
            margin: auto;
            background: #ffffff;
            border-radius: 20px;
            overflow: hidden;
        }

        .header {
            background: #050505;
            padding: 35px;
            text-align: center;
        }

        .logo {
            max-width: 180px;
        }

        .content {
            padding: 40px;
        }

        .title {
            font-size: 28px;
            font-weight: 700;
            margin: 0 0 10px;
        }

        .subtitle {
            color: #777777;
            font-size: 14px;
            margin-bottom: 30px;
        }

        .row {
            padding: 18px 0;
            border-bottom: 1px solid #eeeeee;
        }

        .label {
            display: block;
            color: #999999;
            font-size: 11px;
            text-transform: uppercase;
            margin-bottom: 6px;
        }

        .value {
            font-size: 16px;
            color: #111111;
        }

        .footer {
            padding: 25px 40px;
            background: #f7f7f7;
            color: #999999;
            font-size: 12px;
            text-align: center;
        }
    </style>
</head>

<body>

<div class="wrapper">

    <div class="container">

        <div class="header">
            <img
                src="https://sparkcloud.us/images/logo-white.svg"
                alt="SparkCloud"
                class="logo"
            />
        </div>

        <div class="content">

            <h1 class="title">
                New Website Enquiry
            </h1>

            <p class="subtitle">
                A new lead has submitted the website enquiry form.
            </p>

            <div class="row">
                <span class="label">Name</span>
                <div class="value">
                    ${safeName}
                </div>
            </div>

            <div class="row">
                <span class="label">Email</span>
                <div class="value">
                    ${safeEmail}
                </div>
            </div>

            <div class="row">
                <span class="label">Phone</span>
                <div class="value">
                    ${safePhone}
                </div>
            </div>

            <div class="row">
                <span class="label">Website</span>
                <div class="value">
                    ${safeWebsite || 'Not provided'}
                </div>
            </div>

        </div>

        <div class="footer">
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

    <style>
        body {
            margin: 0;
            padding: 0;
            background: #f4f4f4;
            font-family: Arial, Helvetica, sans-serif;
        }

        .wrapper {
            padding: 40px 20px;
        }

        .container {
            max-width: 620px;
            margin: auto;
            background: #ffffff;
            border-radius: 20px;
            overflow: hidden;
        }

        .header {
            background: #050505;
            padding: 35px;
            text-align: center;
        }

        .logo {
            max-width: 180px;
        }

        .content {
            padding: 45px 40px;
            color: #111111;
        }

        h1 {
            font-size: 30px;
            margin: 0 0 15px;
        }

        p {
            font-size: 15px;
            line-height: 1.7;
            color: #555555;
        }

        .highlight {
            margin: 30px 0;
            padding: 25px;
            background: #f5f5f5;
            border-radius: 15px;
            border-left: 4px solid #287CF5;
        }

        .highlight strong {
            display: block;
            color: #111111;
            margin-bottom: 5px;
        }

        .button {
            display: inline-block;
            padding: 15px 28px;
            border-radius: 50px;
            background: #287CF5;
            color: #ffffff !important;
            text-decoration: none;
            font-weight: bold;
        }

        .footer {
            padding: 25px 40px;
            background: #f7f7f7;
            color: #999999;
            font-size: 12px;
            text-align: center;
        }
    </style>
</head>

<body>

<div class="wrapper">

    <div class="container">

        <div class="header">
            <img
                src="https://sparkcloud.us/images/logo-white.svg"
                alt="SparkCloud"
                class="logo"
            />
        </div>

        <div class="content">

            <h1>
                Thanks, ${safeName}.
            </h1>

            <p>
                We have received your website enquiry.
                Our team will review your requirements and
                get back to you shortly.
            </p>

            <div class="highlight">

                <strong>
                    Your enquiry has been received.
                </strong>

                <span>
                    We appreciate your interest in SparkCloud.
                </span>

            </div>

            <p>
                If your enquiry is urgent, you can contact us
                directly at:
            </p>

            <p>
                <strong>info@sparkcloud.us</strong>
            </p>

            <a
                href="https://sparkcloud.us"
                class="button"
            >
                VISIT SPARKCLOUD
            </a>

        </div>

        <div class="footer">
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
            from: `"SparkCloud Website" <${process.env.MAIL_FROM}>`,
            to: process.env.ADMIN_EMAIL,
            replyTo: email,

            subject: `New Website Enquiry — ${name}`,

            html: adminEmail,
        })


        /*
        |--------------------------------------------------------------------------
        | SEND USER CONFIRMATION
        |--------------------------------------------------------------------------
        */

        await transporter.sendMail({
            from: `"SparkCloud" <${process.env.MAIL_FROM}>`,
            to: email,

            subject: 'We received your enquiry — SparkCloud',

            html: userEmail,
        })


        return NextResponse.json({
            success: true,
            message: 'Message sent successfully.',
        })

    } catch (error) {

        console.error(
            'Contact form error:',
            error
        )

        return NextResponse.json(
            {
                success: false,
                message: 'Unable to send message.',
            },
            {
                status: 500,
            }
        )
    }
}