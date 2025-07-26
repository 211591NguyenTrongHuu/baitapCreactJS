import { Flex, Layout } from "antd";
import Header from "../components/mainHeader";
import SiderBar from "../components/siderbar";
import Footer from "../components/footer";
import Content from "../components/mainContent";
import SiderButtom from "../components/siderButtom";
import "../styles/footer.css";
function MainPlayout() {
  return (
    <Flex gap="middle" wrap>
      <Layout className="layout">
        <Header />
        <Layout>
          <SiderBar />
          <Content />
        </Layout>
        <SiderButtom />
        <Footer />
      </Layout>
    </Flex>
  );
}

export default MainPlayout;
