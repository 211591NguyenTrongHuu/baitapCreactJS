import { Layout } from "antd";
import "../styles/footer.css";
import { Col, Row } from "antd";
import { CopyrightOutlined } from "@ant-design/icons";
import context from "../context";
const style = {
  textAlign: "left",
  paddingLeft: "16px",
  paddingTop: "8px",
  paddingBottom: "8px",
};

const { Footer } = Layout;
function FooterComponents() {
  return (
    <Footer className="footer">
      <Row gutter={[16, 24]}>
        <Col className="gutter-row" span={6}>
          <div style={style}>Educate</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>News</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>Useful links</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>Map</div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div style={style}>Phone: 0795486956</div>
          <div style={style}>Email: nguyentronghuu.07052003@gmail.com</div>
        </Col>
      </Row>
      <div className="footer">
        <div className="footer-border"></div>
      </div>
      <>
        <Row>
          {/* Bên trái */}
          <Col span={12} className="left">
            COPYRIGHT 2025 <CopyrightOutlined /> NH
          </Col>

          {/* Bên phải */}
          <Col className="right" span={12}>
            <Row>
              <Col span={15} className="rightPhone">
                PHONE: 0795486956
              </Col>
              <Col span={3} className="rightFollow">
                FOLLOW US
              </Col>
              <Col span={6} className="rightR">
                <Row>
                  <Col span={6} className="rightFace">
                    <img
                      className="footerImg"
                      src={context.Facebook}
                      alt="Trang chủ vui vẻ"
                    />
                  </Col>
                  <Col span={6} className="rightGoogle">
                    <img
                      className="footerImg"
                      src={context.Google}
                      alt="Trang chủ vui vẻ"
                    />
                  </Col>
                  <Col span={6} className="rightTikTok">
                    <img
                      className="footerImg"
                      src={context.Tiktok}
                      alt="Trang chủ vui vẻ"
                    />
                  </Col>
                  <Col span={6} className="rightYouTuBe">
                    <img
                      className="footerImg"
                      src={context.Youtube}
                      alt="Trang chủ vui vẻ"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    </Footer>
  );
}

export default FooterComponents;
