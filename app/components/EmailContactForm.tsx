'use client'

import { useState } from 'react'

const EmailContactForm = () => {
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState('')

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        website: '',
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault()

        setLoading(true)
        setStatus('')

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(
                    data?.message || 'Something went wrong.'
                )
            }

            setStatus('success')

            setForm({
                name: '',
                email: '',
                phone: '',
                website: '',
            })
        } catch (error) {
            console.error(error)
            setStatus('error')
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className="w-full ">
            <div className="mx-auto w-full max-w-350">

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-3 rounded-[28px] border border-white/40 py-3 px-2 md:rounded-[30px] md:py-6 md:px-4 lg:flex-row lg:items-center lg:gap-5"
                >

                    {/* NAME */}

                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="h-13 w-full rounded-xl bg-white px-5 text-sm text-black outline-none placeholder:text-[#777] md:h-13.5 lg:flex-1"
                    />


                    {/* EMAIL */}

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="h-[52px] w-full rounded-xl bg-white px-5 text-sm text-black outline-none placeholder:text-[#777] md:h-[54px] lg:flex-1"
                    />


                    {/* PHONE */}

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        className="h-[52px] w-full rounded-xl bg-white px-5 text-sm text-black outline-none placeholder:text-[#777] md:h-[54px] lg:flex-1"
                    />


                    {/* WEBSITE */}

                    <input
                        type="text"
                        name="website"
                        placeholder="Website Name/URL"
                        value={form.website}
                        onChange={handleChange}
                        className="h-[52px] w-full rounded-xl bg-white px-5 text-sm text-black outline-none placeholder:text-[#777] md:h-[54px] lg:flex-[1.4]"
                    />


                    {/* SUBMIT */}

                    <button
                        type="submit"
                        disabled={loading}
                        className="h-[52px] w-full shrink-0 rounded-xl bg-[#287CF5] px-10 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1769dc] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 md:h-[54px] lg:w-auto"
                    >
                        {loading ? 'SENDING...' : 'SUBMIT'}
                    </button>

                </form>


                {/* STATUS */}

                {status === 'success' && (
                    <p className="mt-4 text-center text-sm text-[#287CF5]">
                        Thank you. We&apos;ll get back to you shortly.
                    </p>
                )}

                {status === 'error' && (
                    <p className="mt-4 text-center text-sm text-red-400">
                        Unable to send your message. Please try again.
                    </p>
                )}

            </div>
        </section>
    )
}

export default EmailContactForm