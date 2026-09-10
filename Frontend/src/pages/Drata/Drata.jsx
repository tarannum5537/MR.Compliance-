import PageLayout from "../../components/PageLayout/PageLayout";
import Accelerator from "../../components/Accelerator/Accelerator";
import useSeo from "../../hooks/useSeo";

const TITLE = "Drata Compliance Advisory Services | Mr.Compliance";
const DESC = "Struggling to configure Drata for your audit? Our senior security consultants step in to handle policy writing, controls, and auditor readiness directly.";

function DrataPage() {
  useSeo({ title: TITLE, description: DESC, path: "/drata" });

  return (
    <PageLayout>
      <Accelerator tool="Drata" />
    </PageLayout>
  );
}

export default DrataPage;
