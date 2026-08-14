import Image from "next/image";
import SubHeadingMarquee from "../components/SubHeadingMarquee";

export default function BlogsSingle({ post }) {
  if (!post) {
    return (
      <section className="mx-auto mt-32 max-w-7xl px-5">
        <h2 className="text-4xl font-bold">Blog not found.</h2>
      </section>
    );
  }

  return (
    <section className="mx-auto mt-24 w-full max-w-6xl px-5 py-8 lg:py-12">
      <SubHeadingMarquee
        text="READ OUR BLOG"
        color="black"
      />

      {/* Heading */}

      <h1 className="mt-6 font-mona-bold text-[clamp(3rem,6vw,2rem)] uppercase leading-none tracking-wide text-black">
        <span
          dangerouslySetInnerHTML={{
            __html: post.title,
          }}
        />
      </h1>

      {/* Featured Image */}

      {/* {post.featuredImage?.node?.sourceUrl && (
        <div className="mt-10 overflow-hidden rounded-4xl">
          <Image
            src={post.featuredImage.node.sourceUrl}
            alt={
              post.featuredImage.node.altText ||
              post.title
            }
            width={1600}
            height={900}
            unoptimized
            className="h-full w-full object-cover"
          />
        </div>
      )} */}

      {/* Meta */}

      <div className="mt-8 flex flex-wrap gap-6 border-b border-neutral-200 pb-8 text-sm uppercase tracking-wider text-neutral-500">
        <span>
          {new Date(post.date).toLocaleDateString(
            "en-US",
            {
              day: "numeric",
              month: "long",
              year: "numeric",
            }
          )}
        </span>

        {post.author?.node && (
          <span>
            By {post.author.node.name}
          </span>
        )}

        {post.categories?.nodes?.length > 0 && (
          <span>
            {post.categories.nodes
              .map((c) => c.name)
              .join(", ")}
          </span>
        )}
      </div>

      {/* Title Again */}

      {/* <h2 className="mt-10 font-mona-bold text-[clamp(2rem,4vw,3rem)] uppercase leading-tight">
        <span
          dangerouslySetInnerHTML={{
            __html: post.title,
          }}
        />
      </h2> */}

      {/* Content */}

      <article
        className="
          prose
          prose-neutral
          prose-lg
          lg:prose-xl
          mt-10
          max-w-none
          prose-headings:font-mona-bold
          prose-headings:uppercase
          prose-p:text-neutral-700
          prose-p:leading-8
          prose-a:text-blue-600
          prose-img:rounded-3xl
          prose-ul:list-disc
          prose-ol:list-decimal
        "
        dangerouslySetInnerHTML={{
          __html: post.content,
        }}
      />
    </section>
  );
}