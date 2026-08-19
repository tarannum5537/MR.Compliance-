import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../../services/sanity.js";
import "./Blog.scss";

// Blog listing page.
// Right now getPosts() returns a small local array. When you connect a CMS
// (Sanity), only services/sanity.js changes — this page stays the same.
export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    getPosts().then((data) => {
      if (active) {
        setPosts(data);
        setLoading(false);
      }
    });

    return () => {
      active = false;
    };
  }, []);

  return (
    <main className="blog">
      <div className="blog__inner">
        <p className="blog__eyebrow">Insights</p>
        <h1 className="blog__title">
          Compliance <span>notes</span>.
        </h1>

        {loading && <p className="blog__empty">Loading articles…</p>}
        {!loading && posts.length === 0 && (
          <p className="blog__empty">No articles published yet.</p>
        )}

        <div className="blog__grid">
          {posts.map((post) => (
            <Link className="blog__card" key={post.slug} to={`/blog/${post.slug}`}>
              <span className="blog__date">{post.date}</span>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <em aria-hidden="true">↗</em>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
