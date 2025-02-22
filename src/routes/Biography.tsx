import Layout from "../Layout";
import DynamicHelmet from "../components/DynamicHelmet";
import BiographyPage from "../pages/BiographyPage";

const Biography = () => {
  return (
    <Layout>
      <DynamicHelmet page="biografia" />
      <BiographyPage />
    </Layout>
  );
};

export default Biography;
