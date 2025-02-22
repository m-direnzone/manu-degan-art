import Layout from "../Layout";
import DynamicHelmet from "../components/DynamicHelmet";
import ContactsPage from "../pages/ContactsPage";

const Contacts = () => {
  return (
    <Layout>
      <DynamicHelmet page="contatti" />
      <ContactsPage />
    </Layout>
  );
};

export default Contacts;
