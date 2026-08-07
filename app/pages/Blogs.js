import Link from "next/link";
import SubHeadingMarquee from "../components/SubHeadingMarquee";
import BlogCard from "../components/BlogCard";
import { getBlogs } from "../data/getBlogs";

const PER_PAGE = 10;

const Blogs = async ({ searchParams }) => {
  const blogs = await getBlogs();

  const currentPage = Number(searchParams?.page || 1);

  const sorted = [...blogs].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const totalPages = Math.ceil(sorted.length / PER_PAGE);

  const start = (currentPage - 1) * PER_PAGE;

  const pageBlogs = sorted.slice(start, start + PER_PAGE);

  const featured = pageBlogs[0];
  const topRight = pageBlogs.slice(1, 2);
  const bottom = pageBlogs.slice(2, 13);

  return (
    <section className="mx-auto mt-20 w-full max-w-425 px-5 py-6 lg:px-8 lg:py-10">
      <SubHeadingMarquee
        text="OUR BLOGS"
        color="black"
      />

      <div className="mt-6">
        <h2 className="font-mona-bold text-[clamp(4rem,10vw,9rem)] uppercase leading-[0.88]">
          OUR <span className="text-[#8F8F8F]">BLOGS</span>
        </h2>
      </div>

      {/* Featured + Top 4 */}

      <div className="mt-12 flex flex-col gap-6 xl:flex-row">
        <div className="xl:w-[60%]">
          {featured && (
            <BlogCard
              post={featured}
              large
            />
          )}
        </div>

        <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-1">
          {topRight.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
            />
          ))}
        </div>
      </div>

      {/* Remaining 5 */}

      {bottom.length > 0 && (
        <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {bottom.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
            />
          ))}
        </div>
      )}

      {/* Pagination */}

      {totalPages > 1 && (
        <div className="mt-16 flex justify-center gap-3">
          {Array.from({ length: totalPages }, (_, index) => {
            const p = index + 1;

            return (
              <Link
                key={p}
                href={`/blogs?page=${p}`}
                className={`flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 ${
                  p === currentPage
                    ? "bg-black text-white"
                    : "bg-[#ECECEC] hover:bg-black hover:text-white"
                }`}
              >
                {p}
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default Blogs;