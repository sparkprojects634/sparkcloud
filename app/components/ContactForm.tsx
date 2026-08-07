'use client'

import { useState } from 'react'
import { MapPin, Phone } from 'lucide-react'

export default function ContactForm() {
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    setLoading(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (data.success) {
        alert('Message sent successfully.')

        setForm({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
      } else {
        alert('Something went wrong.')
      }
    } catch {
      alert('Unable to send message.')
    }

    setLoading(false)
  }

  return (
    <section className="mx-auto w-full max-w-450 px-5 py-16">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">

        {/* LEFT */}

        <div>

          <h2 className="font-mona-bold text-5xl text-[#34476A] md:text-6xl">
            Keep In Touch
          </h2>

          <div className="mt-14 space-y-14">

            <div className="flex items-start gap-6">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FDB515] text-white">
                <MapPin size={24} />
              </div>

              <div>
                <h3 className="font-mona-bold text-3xl text-black">
                  Kolkata Office:
                </h3>

                <p className="mt-3 text-xl leading-relaxed text-[#777]">
                  3rd Floor, Ps Abacus,
                  Unit 337,
                  Action Area IIE,
                  <br />
                  Newtown,
                  Kolkata,
                  West Bengal 700157
                </p>
              </div>

            </div>

            <div className="flex items-start gap-6">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#FDB515] text-white">
                <MapPin size={24} />
              </div>

              <div>
                <h3 className="font-mona-bold text-3xl text-black">
                  Gurugram Office:
                </h3>

                <p className="mt-3 text-xl leading-relaxed text-[#777]">
                  360P,
                  Sector 28,
                  Gurugram,
                  Haryana -122002
                </p>
              </div>

            </div>

            <div className="flex items-start gap-6">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#2EB89D] text-white">
                <Phone size={24} />
              </div>

              <div>
                <h3 className="font-mona-bold text-3xl text-black">
                  Phone
                </h3>

                <a
                  href="tel:+917439381155"
                  className="mt-3 block text-xl text-[#777] hover:text-black"
                >
                  +91 7439381155
                </a>

                <a
                  href="mailto:info@sparkcloud.us"
                  className="mt-2 block text-xl text-[#777] hover:text-black"
                >
                  info@sparkcloud.us
                </a>
              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div>

          <h3 className="font-mona-bold text-center text-4xl uppercase text-[#6B6B6B]">
            Need Technical Support?
          </h3>

          <form
            onSubmit={handleSubmit}
            className="mt-12 space-y-6"
          >

            <div>
              <label className="mb-2 block text-sm font-semibold uppercase">
                Name
              </label>

              <input
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                className="h-16 w-full rounded-full bg-[#2C2C2C] px-6 text-white outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold uppercase">
                Email Address
              </label>

              <input
                type="email"
                required
                name="email"
                value={form.email}
                onChange={handleChange}
                className="h-16 w-full rounded-full bg-[#2C2C2C] px-6 text-white outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold uppercase">
                Subject
              </label>

              <input
                required
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="h-16 w-full rounded-full bg-[#2C2C2C] px-6 text-white outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold uppercase">
                Message
              </label>

              <textarea
                required
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-[30px] bg-[#2C2C2C] p-6 text-white outline-none"
              />
            </div>

            <button
              disabled={loading}
              className="h-16 w-full rounded-full bg-white text-black transition hover:bg-neutral-200 disabled:opacity-50"
            >
              {loading ? 'Sending...' : 'SEND MESSAGE'}
            </button>

          </form>

        </div>

      </div>
    </section>
  )
}