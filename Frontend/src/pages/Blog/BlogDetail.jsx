import { useEffect, useState } from "react";
// import { FaXTwitter, FaLinkedinIn, FaLink } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import { client, urlFor } from "../../lib/sanityClient";
import "./BlogDetail.scss";
import PageLayout from "../../components/PageLayout/PageLayout";

function BlogDetail() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setBlog(null);
    setError(false);

    client
      .fetch(
        `*[_type == "blog" && slug.current == $slug][0]{
          _id,
          title,
          category,
          date,
          dateTime,
          image,
          externalImageUrl,
          imageAlt,
          intro,
          content,
          faq
        }`,
        { slug }
      )
      .then((data) => setBlog(data))
      .catch((err) => {
        console.error("Failed to fetch blog:", err);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <PageLayout>
        <div className="blog-detail">
          <div className="blog-detail__missing">
            <p>Loading...</p>
          </div>
        </div>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout>
        <div className="blog-detail">
          <div className="blog-detail__missing">
            <h1>Something went wrong</h1>
            <p>Couldn't load this article right now.</p>
            <Link to="/blog">Back to blog</Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  if (!blog) {
    return (
      <PageLayout>
        <div className="blog-detail">
          <div className="blog-detail__missing">
            <h1>Article not found</h1>
            <Link to="/blog">Back to blog</Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  const imageUrl = blog.externalImageUrl
    ? blog.externalImageUrl
    : blog.image
    ? urlFor(blog.image).width(1200).url()
    : null;


//     const shareUrl = window.location.href;

// const shareOnX = () => {
//   const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl
//   )}&text=${encodeURIComponent(blog.title)}`;

//   window.open(url, "_blank", "noopener,noreferrer");
// };

// const shareOnLinkedIn = () => {
//   const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
//     shareUrl
//   )}`;

//   window.open(url, "_blank", "noopener,noreferrer");
// };

// const copyLink = async () => {
//   try {
//     await navigator.clipboard.writeText(shareUrl);
//   } catch (error) {
//     console.error("Failed to copy link:", error);
//   }
// };

  return (
    <PageLayout>
      <div className="blog-detail">
        <main>
          <article className="blog-detail__article">
            <header className="blog-detail__intro">
              <Link className="blog-detail__back" to="/blog">
                ← Back to blog
              </Link>
              <div className="blog-detail__category">{blog.category}</div>
              <h1>{blog.title}</h1>

<div className="blog-detail__share">
  <span>Share</span>

  <button
    type="button"
    onClick={shareOnX}
    aria-label="Share on X"
  >
    <FaXTwitter />
  </button>

  <button
    type="button"
    onClick={shareOnLinkedIn}
    aria-label="Share on LinkedIn"
  >
    <FaLinkedinIn />
  </button>

  <button
    type="button"
    onClick={copyLink}
    aria-label="Copy link"
  >
    <FaLink />
  </button>
</div>

<div className="blog-detail__meta">
  <time dateTime={blog.dateTime}>{blog.date}</time>
</div>
            </header>

            {imageUrl && (
              <div className="blog-detail__image">
                <img src={imageUrl} alt={blog.imageAlt} />
              </div>
            )}

           {blog.content?.filter((section) => section.heading?.trim()).length > 0 && (
  <nav className="blog-detail__toc" aria-label="In this article">
    <div className="blog-detail__toc-title">In this article</div>

    <ol>
      {blog.content
        .filter((section) => section.heading?.trim())
        .map((section, i) => (
          <li key={section._key || i}>
            <a href={`#${section.id?.current}`}>
              {section.heading}
            </a>
          </li>
        ))}
    </ol>
  </nav>
)}

            <div className="blog-detail__body">
              {blog.intro?.map((text, i) => (
                <p key={i}>{text}</p>
              ))}

             {blog.content?.map((section, i) => (
  <section key={section._key || i}>
    <h2 id={section.id?.current}>{section.heading}</h2>

    {section._type === "tableSection" ? (() => {
      const textBlocks = section.blocks?.map((block, j) =>
        block._type === "list" ? (
          block.style === "number" ? (
            <ol key={block._key || j}>
              {block.items?.map((item, k) => (
                <li key={k}>
                  {item?.bold && <strong>{item.bold}</strong>}
                  {item?.bold && item?.text ? " " : ""}
                  {item?.text}
                </li>
              ))}
            </ol>
          ) : (
            <ul key={block._key || j}>
              {block.items?.map((item, k) => (
                <li key={k}>
                  {item?.bold && <strong>{item.bold}</strong>}
                  {item?.bold && item?.text ? " " : ""}
                  {item?.text}
                </li>
              ))}
            </ul>
          )
        ) : (
          <p key={block._key || j}>{block.text}</p>
        )
      );

      const tableEl = (
        <div className="blog-detail__table-wrap">
          <table className="blog-detail__table">
            {section.headers?.length > 0 && (
              <thead>
                <tr>
                  {section.headers.map((h, hi) => (
                    <th key={hi}>{h}</th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {section.rows?.map((row, ri) => (
                <tr key={row._key || ri}>
                  {row.cells?.map((cell, ci) => (
                    <td key={ci}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

      return section.tablePosition === "before" ? (
        <>
          {tableEl}
          {textBlocks}
        </>
      ) : (
        <>
          {textBlocks}
          {tableEl}
        </>
      );
    })() : (
      section.blocks?.map((block, j) =>
        block._type === "list" ? (
          block.style === "number" ? (
            <ol key={block._key || j}>
              {block.items?.map((item, k) => (
                <li key={k}>
                  {item?.bold && <strong>{item.bold}</strong>}
                  {item?.bold && item?.text ? " " : ""}
                  {item?.text}
                </li>
              ))}
            </ol>
          ) : (
            <ul key={block._key || j}>
              {block.items?.map((item, k) => (
                <li key={k}>
                  {item?.bold && <strong>{item.bold}</strong>}
                  {item?.bold && item?.text ? " " : ""}
                  {item?.text}
                </li>
              ))}
            </ul>
          )
        ) : (
          <p key={block._key || j}>{block.text}</p>
        )
      )
    )}
  </section>
))}
            </div>

            {blog.faq?.length > 0 && (
              <section className="blog-detail__faq">
                <h2 id="faq">Frequently Asked Questions</h2>
                {blog.faq.map((item, i) => (
                  <div className="blog-detail__faq-item" key={item._key || i}>
                    <h3>{item.question}</h3>
                    <p>{item.answer}</p>
                  </div>
                ))}
              </section>
            )}
          </article>
        </main>
      </div>
    </PageLayout>
  );
}

export default BlogDetail;