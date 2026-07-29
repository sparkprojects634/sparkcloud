'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
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
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
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
        {loading
          ? 'Sending...'
          : 'SEND MESSAGE'}
      </button>
    </form>
  )
}