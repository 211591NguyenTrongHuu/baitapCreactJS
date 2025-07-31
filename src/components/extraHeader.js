import { Link } from "react-router-dom";
import "../styles/home.css";
import context from "../context";
import {
  Layout,
  Button,
  Divider,
  Tooltip,
  Col,
  Row,
  Space,
  Avatar,
  Badge,
} from "antd";
import "../styles/headerBar.css";
import { BellFilled, BellOutlined, BellTwoTone } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
const url =
  "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg";
const { Header } = Layout;
const colors = ["blue"];
function HeaderComponents() {
  return (
    <>
      <Row className="header">
        <Col span={6}>
          <Header className="header">
            <img
              className="headerImg"
              src={context.contextImg.HappyHome}
              alt="Trang chủ vui vẻ"
            />
            <div className="headerText">
              <h1>
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  TransCult
                </Link>
              </h1>
            </div>
          </Header>
        </Col>
        <Col span={14} className="custom-search-container">
        </Col>
        <Col span={4}>
          <Row>
            <Col span={8}>
              <div className="bellContainer">
                <Badge count={5} size="small" offset={[-3, 3]}>
                  <video
                    className="videoBell"
                    autoPlay
                    muted
                    loop
                    src={context.contextVideo.videoBell}
                    alt="VideoBell"
                  ></video>
                </Badge>
              </div>
            </Col>
            <Col span={14} className="langContainer">
              <img
                className="langImg"
                src={context.contextImg.VietNam}
                alt="vn"
              ></img>
              <div className="langText">Việt Nam</div>
            </Col>
            <Col span={2}>
              <>
                <Space wrap>
                  {colors.map((color) => (
                    <Tooltip
                      title="nguyentronghuu.07052003@gmail.com"
                      color={color}
                      key={color}
                      overlayClassName="emailText"
                    >
                      <Avatar
                        className="avataImg"
                        style={{ backgroundColor: "#108ee9" }}
                        icon={<UserOutlined />}
                      />
                    </Tooltip>
                  ))}
                </Space>
              </>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default HeaderComponents;
