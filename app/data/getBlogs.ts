const WORDPRESS_API =
    process.env.WP_API_URL ||
    'https://console.sparkcloud.in/wp-json/wp/v2'

export type BlogPost = {
    id: number
    slug: string
    date: string

    title: {
        rendered: string
    }

    excerpt: {
        rendered: string
    }

    link: string

    featured_media: number

    yoast_head_json?: {
        title?: string
        description?: string
        og_title?: string
        og_description?: string
        og_image?: {
            url?: string
        }[]
    }

    _embedded?: {
        ['wp:featuredmedia']?: {
            source_url?: string
            alt_text?: string
        }[]

        ['author']?: {
            name?: string
        }[]

        ['wp:term']?: {
            name?: string
            slug?: string
        }[][]
    }
}

export async function getBlogs(): Promise<BlogPost[]> {
    const url =
        `${WORDPRESS_API}/posts` +
        `?per_page=100` +
        `&_embed`

    const res = await fetch(url, {
        next: {
            revalidate: 60,
        },
    })

    if (!res.ok) {
        throw new Error(
            `WordPress API failed: ${res.status}`
        )
    }

    const posts = await res.json()

    return posts
}

/*
|--------------------------------------------------------------------------
| GET SINGLE BLOG
|--------------------------------------------------------------------------
*/

export async function getBlogBySlug(
    slug: string
): Promise<BlogPost | null> {
    const url =
        `${WORDPRESS_API}/posts` +
        `?slug=${encodeURIComponent(slug)}` +
        `&per_page=1` +
        `&_embed`

    const res = await fetch(url, {
        next: {
            revalidate: 60,
        },
    })

    if (!res.ok) {
        throw new Error(
            `WordPress API failed: ${res.status}`
        )
    }

    const posts = await res.json()

    return posts[0] ?? null
}

function graphqlRequest<T>(query: string, arg1: { slug: string }) {
    throw new Error("Function not implemented.")
}
