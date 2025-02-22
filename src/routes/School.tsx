import Layout from "../Layout";
import DynamicHelmet from "../components/DynamicHelmet";
import SchoolPage from "../pages/SchoolPage";

const School = () => {
  return (
    <Layout>
      <DynamicHelmet page="scuola" />
      <SchoolPage />
    </Layout>
  );
};

export default School;
