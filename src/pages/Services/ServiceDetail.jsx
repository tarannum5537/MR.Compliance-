import { Link, useParams } from "react-router-dom";
import useSeo from "../../hooks/useSeo";
import PageLayout from "../../components/PageLayout/PageLayout";
import PageHero from "../../components/PageHero/PageHero";
import ServicePage from "../../components/ServicePage/ServicePage";
import Soc2Page from "../../components/Soc2Page/Soc2Page";
import {
  getCatalogPage,
  getCatalogService,
  getRelatedServices
} from "../../data/services";
function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getCatalogService(slug);

  useSeo({
    title: service ? service.seoTitle : "Service not found — Mr. Compliance",
    description: service ? service.seoDescription : "",
    path: `/services/${slug}/`
  });

  if (!service) return <ServiceNotFound />;

  const related = getRelatedServices(service.slug);
  if (service.customComponent === "soc2") {
    return <PageLayout>
        <Soc2Page />
      </PageLayout>;
  }
  const page = getCatalogPage(service);
  if (!page) return <ServiceNotFound />;
  return <PageLayout>
      <ServicePage
    page={page}
    category={service.category}
    related={related.map((r) => ({
      slug: r.slug,
      title: r.title,
      category: r.category,
      short: r.short
    }))}
  />
    </PageLayout>;
}
function ServiceNotFound() {
  return <PageLayout withCta={false}>
      <PageHero
    eyebrow="Services"
    title="Service"
    accent="not found."
    text="That service does not exist or has been moved."
  />
      <section className="psec">
        <div className="psec__inner">
          <div className="pactions">
            <Link className="btn btn--primary" to="/services">
              Back to services
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>;
}

export default ServiceDetailPage;
