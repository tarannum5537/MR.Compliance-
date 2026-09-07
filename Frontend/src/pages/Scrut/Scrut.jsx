import PageLayout from "../../components/PageLayout/PageLayout";
import Accelerator from "../../components/Accelerator/Accelerator";
import useSeo from "../../hooks/useSeo";

const TITLE = "Scrut - Powered SOC&nbsp;2 Accelerator - Mr.Compliance";
const DESC = "Fast-track SOC 2 readiness with the Scrut platform plus hands-on consulting: integrations, control mapping and evidence strategy delivered in weeks.";

function ScrutPage() {
  useSeo({ title: TITLE, description: DESC, path: "/scrut/" });

  return (
    <PageLayout>
      <Accelerator tool="Scrut" />
    </PageLayout>
  );
}

export default ScrutPage;
