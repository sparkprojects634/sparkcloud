import { Metadata } from "next";
import { notFound } from "next/navigation";

import BlogsSingle from "../../pages/BlogsSingle";
import { getBlogBySlug } from "../../data/getBlogs";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function Page({
  params,
}: PageProps) {
  const { slug } = await params;

  const post = await getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogsSingle post={post} />;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const post = await getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title:
      post.seo?.title ||
      post.title.replace(/<[^>]+>/g, ""),

    description:
      post.seo?.metaDesc ||
      post.excerpt.replace(/<[^>]+>/g, ""),
  };
}