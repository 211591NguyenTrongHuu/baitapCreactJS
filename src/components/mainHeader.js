import { Link } from "react-router-dom";
import "../styles/home.css";
import context from "../context";
import { Layout, Button, Tooltip, Col, Row, Space, Avatar, Badge } from "antd";
import "../styles/headerBar.css";
import SearchComponents from "../components/search";
import { UserOutlined } from "@ant-design/icons";
const url =
  "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg";
const { Header } = Layout;
const colors = ["blue"];
function HeaderComponents() {
  const isLogin = false;
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
        <Col span={12} className="custom-search-container">
          <SearchComponents />
        </Col>
        <Col span={6}>
          {isLogin ? (
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
                />
                <div className="langText">Việt Nam</div>
              </Col>
              <Col span={2}>
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
              </Col>
            </Row>
          ) : (
            <Row>
              <Col span={6}></Col>
              <Col span={10}>
                <Button type="primary">
                  <Link to="/register" className="login-link">
                    Đăng ký
                  </Link>
                </Button>
              </Col>
              <Col span={8}>
                <Button type="primary">
                  <Link to="/login" className="login-link">
                    Đăng nhập
                  </Link>
                </Button>
              </Col>
            </Row>
          )}
        </Col>
      </Row>
    </>
  );
}

export default HeaderComponents;
