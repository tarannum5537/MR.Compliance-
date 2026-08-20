import PageLayout from "../../components/PageLayout/PageLayout";
import Accelerator from "../../components/Accelerator/Accelerator";
import useSeo from "../../hooks/useSeo";

const TITLE = "Drata-Powered SOC 2 Accelerator — Mr.Compliance";
const DESC = "Drata implementation plus practical GRC consulting - integrations, control implementation and audit-ready evidence for SaaS teams pursuing SOC 2.";

function DrataPage() {
  useSeo({ title: TITLE, description: DESC, path: "/drata/" });

  return (
    <PageLayout>
      <Accelerator tool="Drata" />
    </PageLayout>
  );
}

export default DrataPage;
