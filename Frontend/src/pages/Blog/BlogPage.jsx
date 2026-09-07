import { useEffect, useState } from "react";
import { client } from "../../lib/sanityClient";
import BlogCard from "./BlogCard";
import PageLayout from "../../components/PageLayout/PageLayout";
import "./BlogPage.scss";
import PageHero from "../../components/PageHero/PageHero";

function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "blog"] | order(dateTime desc){
          _id,
          title,
          "slug": slug.current,
          category,
          excerpt,
          image,
          externalImageUrl,
          imageAlt,
          date,
          dateTime
        }`,
      )
      .then(setBlogs)
      .catch((err) => console.error("Failed to fetch blogs:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <PageLayout>
      <PageHero
        eyebrow="Mr.Compliance's Blog"
        title="
Security moves fast.
Stay ahead of the  
"
        accent="conversation."
        text="Stay informed on the latest in security and compliance, with insights designed to help you make smarter business decisions.
"
      />
      <div className="blog-page">
        <main>
          <section className="blog-page__list">
            <div className="blog-page__grid">
              {loading ? (
                <p>Loading...</p>
              ) : (
                blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)
              )}
            </div>
          </section>
        </main>
      </div>
    </PageLayout>
  );
}

export default BlogPage;
