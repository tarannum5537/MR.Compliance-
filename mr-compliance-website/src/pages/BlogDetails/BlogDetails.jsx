import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPostBySlug } from "../../services/sanity.js";
import "./BlogDetails.scss";

// Single blog article page. The slug comes from the URL: /blog/:slug
export default function BlogDetails() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);

    getPostBySlug(slug).then((data) => {
      if (active) {
        setPost(data);
        setLoading(false);
      }
    });

    return () => {
      active = false;
    };
  }, [slug]);

  return (
    <main className="post">
      <div className="post__inner">
        <Link className="post__back" to="/blog">
          ← All articles
        </Link>

        {loading && <p className="post__empty">Loading article…</p>}
        {!loading && !post && <p className="post__empty">Article not found.</p>}

        {post && (
          <article>
            <span className="post__date">{post.date}</span>
            <h1 className="post__title">{post.title}</h1>
            {post.body.map((paragraph, i) => (
              <p className="post__para" key={i}>
                {paragraph}
              </p>
            ))}
          </article>
        )}
      </div>
    </main>
  );
}
