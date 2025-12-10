import Layout from "../Layout";
import DynamicHelmet from "../components/DynamicHelmet";
import HomePage from "../pages/HomePage";

const Home = () => {
  return (
    <Layout>
      <DynamicHelmet page="in-primo-piano" />
      <HomePage />
    </Layout>
  );
};

export default Home;
