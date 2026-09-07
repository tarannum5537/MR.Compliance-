import { Link } from "react-router-dom";

import PageLayout from "../../components/PageLayout/PageLayout";
import PageHero from "../../components/PageHero/PageHero";
import useSeo from "../../hooks/useSeo";

function NotFoundPage() {
  useSeo({
    title: "Page not found - Mr.Compliance",
    description: "The page you are looking for does not exist or has moved.",
    path: "/",
  });

  return (
    <PageLayout withCta={false}>
      <PageHero
        eyebrow="404"
        title="Page"
        accent="not found."
        text="The page you are looking for doesn't exist or has been moved."
      />
      <section className="psec">
        <div className="psec__inner">
          <div className="pactions">
            <Link className="btn btn--primary" to="/">
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

export default NotFoundPage;
