import PageLayout from "../../components/PageLayout/PageLayout";
import Accelerator from "../../components/Accelerator/Accelerator";
import useSeo from "../../hooks/useSeo";

const TITLE = "Scrut Compliance Advisory Services | Mr.Compliance";
const DESC = "Stuck in Scrut setup or looking for an alternative? Our human-led advisory gets you SOC 2 and ISO 27001 audit-ready fast. Speak with an advisor today.";

function ScrutPage() {
  useSeo({ title: TITLE, description: DESC, path: "/scrut" });

  return (
    <PageLayout>
      <Accelerator tool="Scrut" />
    </PageLayout>
  );
}

export default ScrutPage;
