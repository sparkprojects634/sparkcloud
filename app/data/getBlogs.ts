const GRAPHQL_URL =
  process.env.WP_GRAPHQL_API ||
  'https://sparkcloud.in/graphql'

export async function getBlogs() {
  const query = `
    query GetBlogs {
      posts(first: 100) {
        nodes {
          id
          slug
          title
          date
          excerpt

          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
  `

  const res = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
    next: {
      revalidate: 60,
    },
  })

  const json = await res.json()

  return json.data.posts.nodes
}

export async function getBlogBySlug(slug: any) {
  const query = `
    query GetBlogBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        id
        slug
        title
        date
        excerpt
        content

        featuredImage {
          node {
            sourceUrl
            altText
          }
        }

        author {
          node {
            name
          }
        }

        categories {
          nodes {
            name
            slug
          }
        }

        seo {
          title
          metaDesc
        }
      }
    }
  `

  const res = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: {
        slug,
      },
    }),
    next: {
      revalidate: 60,
    },
  })

  const json = await res.json()

  return json.data.post
}