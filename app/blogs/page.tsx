import Blogs from "../pages/Blogs";

interface PageProps {
  searchParams: any;
}

export default async function Page({
  searchParams,
}: PageProps) {
  const params = await searchParams;

  return <Blogs searchParams={params} />;
}