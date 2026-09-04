import Image from "next/image"
import Link from "next/link"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa"
const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Services", href: "/services" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "Design", href: "/services/design" },
      { label: "Development", href: "/services/development" },
      { label: "SEO/ AEO/ GEO", href: "/services/seo-aeo-geo" },
      { label: "SEM/ SMM/ SMO", href: "/services/sem-smm-smo" },
    ],
  },
]

const legalLinks = [
  {
    label: "Terms & Conditions",
    href: "/terms-conditions",
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
]

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/profile.php?id=61559918630209",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/company/sparkcloud/?viewAsMember=true",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/sparkcloudofficial/",
  },
]

const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  const formData = new FormData(e.currentTarget)
  const email = formData.get("email") as string

  try {
    const res = await fetch("/api/subscribe-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })

    const data = await res.json()

    if (data.success) {
      alert("Subscribed successfully."),
      (e.target as HTMLFormElement).reset()
    } else {
      alert("Something went wrong.")
    }
  } catch (error) {
    console.error(error)
    alert("Unable to subscribe.")
  }
}

const Footer = () => {
  return (
    <footer className="pt-12">
      <div className="mx-auto w-full max-w-350 px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.5fr]">
          {/* Company Info */}
          <div className="space-y-6">
            <Image
              src="/images/sparkcloud-dark.svg"
              alt="SparkCloud"
              width={180}
              height={40}
            />

            <p className="max-w-xs text-sm font-medium text-neutral-700">
              3rd floor, Ps Abacus, Unit 337, Action Area IIIE,
              Newtown, Kolkata, West Bengal 700157
            </p>

            <div className="space-y-2">
              <Link
                href="tel:+917439381155"
                className="block font-semibold transition hover:opacity-70"
              >
                +91 74393 81155
              </Link>

              <Link
                href="mailto:info@sparkcloud.us"
                className="block font-semibold transition hover:opacity-70"
              >
                info@sparkcloud.us
              </Link>
            </div>

            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 hover:scale-110"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-block border-b border-neutral-300 pb-1 text-lg font-medium transition hover:border-black"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Sign up for our newsletter today.
            </h3>

            <form className="flex overflow-hidden rounded-xl border-2 border-slate-900 bg-[#01091d]" onSubmit={handleSubscribe}>
              <input
                type="email"
                name="email"
                placeholder="Your mail"
                className="flex-1 bg-transparent px-4 py-3 text-white outline-none placeholder:text-gray-500"
              />

              <button
                type="submit"
                className="m-1 rounded-lg bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-neutral-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 rounded-t-4xl bg-black">
        <div className="mx-auto flex w-full max-w-350 flex-col gap-6 px-6 py-6 text-white lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p className="text-sm">
            Copyright © 2026 All rights reserved
          </p>

          <div className="flex flex-wrap gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm transition hover:opacity-70"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer