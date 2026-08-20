import PageLayout from "../../components/PageLayout/PageLayout";
import Accelerator from "../../components/Accelerator/Accelerator";
import useSeo from "../../hooks/useSeo";

const TITLE = "Vanta-Powered SOC 2 Accelerator - Mr.Compliance";
const DESC = "Get real SOC 2 progress in weeks: Vanta integrations, control mapping, evidence strategy and hands-on implementation support for lean SaaS teams.";

function VantaPage() {
  useSeo({ title: TITLE, description: DESC, path: "/vanta/" });

  return (
    <PageLayout>
      <Accelerator tool="Vanta" />
    </PageLayout>
  );
}

export default VantaPage;
