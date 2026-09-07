import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import BlogsSingle from '../../pages/BlogsSingle'
import { getBlogBySlug } from '../../data/getBlogs'

interface PageProps {
    params: Promise<{
        slug: string
    }>
}

export default async function Page({
    params,
}: PageProps) {
    const { slug } = await params

    const post = await getBlogBySlug(slug)

    if (!post) {
        notFound()
    }

    return <BlogsSingle post={post} />
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { slug } = await params

    const post = await getBlogBySlug(slug)

    if (!post) {
        return {
            title: 'Blog Not Found | SparkCloud',
        }
    }

    const seo = post.yoast_head_json

    const title =
        seo?.title ||
        post.title?.rendered.replace(/<[^>]+>/g, '')

    const description =
        seo?.description ||
        post.excerpt?.rendered.replace(/<[^>]+>/g, '')

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: seo?.og_image?.[0]?.url
                ? [seo.og_image[0].url]
                : [],
        },
    }
}