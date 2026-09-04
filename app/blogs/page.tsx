import { Metadata } from "next";
import Blogs from "../pages/Blogs";

export const metadata: Metadata = {
  title: 'Blogs | SparkCloud',
  description:
    'Read the latest news, insights and updates from SparkCloud’s blog, covering industry trends, company announcements and expert perspectives.',
}

interface PageProps {
  searchParams: any;
}

export default async function Page({
  searchParams,
}: PageProps) {
  const params = await searchParams;

  return <Blogs searchParams={params} />;
}