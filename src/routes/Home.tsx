import Layout from "../Layout";
import DynamicHelmet from "../components/DynamicHelmet";
import HomePage from "../pages/HomePage";

const Home = () => {
  return (
    <Layout>
      <DynamicHelmet page="home" />
      <HomePage />
    </Layout>
  );
};

export default Home;
