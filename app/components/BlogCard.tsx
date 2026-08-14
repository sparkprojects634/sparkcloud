'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

type BlogCardProps = {
  post: any
  large?: boolean
}

export default function BlogCard({
  post,
  large = false,
}: BlogCardProps) {
  return (
    <article
      className="group overflow-hidden rounded-[28px] bg-[#ECECEC] p-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      <Link
        href={`/blogs/${post.slug}`}
        className="block"
      >
        <div className="overflow-hidden rounded-2xl">
          <Image
            src={
              post.featuredImage?.node?.sourceUrl ||
              '/images/blog-placeholder.webp'
            }
            alt={
              post.featuredImage?.node?.altText ||
              post.title
            }
            width={900}
            height={600}
            unoptimized
            className={`w-full object-cover object-top transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-110 ${
              large
                ? 'aspect-video'
                : 'aspect-video'
            }`}
          />
        </div>

        <div className="mt-6 flex justify-between gap-4">
          <div>
            <h3
              className={`font-mona-bold uppercase leading-tight transition-colors duration-300 group-hover:text-[#0079FF] line-clamp-2 ${
                large
                  ? 'text-[clamp(2rem,3vw,3rem)]'
                  : 'text-[clamp(1.2rem,1.6vw,2rem)]'
              }`}
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: post.title,
                }}
              />
            </h3>

            <p className="mt-6 uppercase text-[#9C9C9C]">
              {new Date(post.date).toLocaleDateString(
                'en-US',
                {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                }
              )}
            </p>
          </div>

          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-black">
            <div className="relative h-5 w-5">
              <ArrowUpRight
                size={20}
                className="absolute text-white transition-all duration-300 group-hover:translate-x-8 group-hover:-translate-y-8"
              />

              <ArrowUpRight
                size={20}
                className="absolute -translate-x-8 translate-y-8 text-white transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0"
              />
            </div>
          </div>
        </div>
      </Link>
    </article>
  )
}