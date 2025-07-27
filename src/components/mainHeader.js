import { Layout } from "antd";
import "../styles/home.css";
import context from "../context";

const { Header } = Layout;

function HeaderComponents() {
  return (
    <Header className="header">
      <img className="headerImg" src={context.contextImg.HappyHome} alt="Trang chủ vui vẻ" />
      <div className="headerText">
        <h1>Home Page</h1>
      </div>
    </Header>
  );
}

export default HeaderComponents;
