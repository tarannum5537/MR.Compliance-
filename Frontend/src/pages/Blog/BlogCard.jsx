import { Link } from "react-router-dom";
import { urlFor } from "../../lib/sanityClient";
import "./BlogCard.scss";

function BlogCard({ blog }) {
  const imageUrl = blog.externalImageUrl
    ? blog.externalImageUrl
    : blog.image
    ? urlFor(blog.image).width(600).height(400).url()
    : "/placeholder.jpg";

  return (
    <Link className="blog-card" to={`/blog/${blog.slug}`}>
      <div className="blog-card__image">
        <img src={imageUrl} alt={blog.imageAlt} loading="lazy" />
      </div>

      <div className="blog-card__body">
        <span className="blog-card__category">{blog.category}</span>
        <h2 className="blog-card__title">{blog.title}</h2>
        <p className="blog-card__excerpt">{blog.excerpt}</p>

        <div className="blog-card__meta">
          <time dateTime={blog.dateTime}>{blog.date}</time>
          {/* <span aria-hidden="true">·</span> */}
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;