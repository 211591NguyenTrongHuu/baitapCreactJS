import { Layout } from "antd";
import "../styles/footer.css";
import { Col, Row } from "antd";
import { CopyrightOutlined } from "@ant-design/icons";
import context from "../context";
import { Link } from "react-router-dom";

const { Footer } = Layout;
function FooterComponents() {
  return (
    <Footer className="footer">
      <Row gutter={[16, 24]}>
        <Col className="gutter-row" span={6}>
          <div className="style">
            <h1>Educate & Culture</h1>
            <p>
              Giáo dục bao gồm các hoạt động, quá trình, và hệ thống nhằm truyền
              đạt kiến thức, kỹ năng, giá trị, và thái độ cho cá nhân.
              <p>
                Giáo dục có thể diễn ra ở nhiều môi trường khác nhau như gia
                đình, nhà trường, cộng đồng, và xã hội.
              </p>
            </p>
            <p>
              Về văn hóa là một hệ thống các giá trị, niềm tin, phong tục, tập
              quán, nghệ thuật, và tri thức được chia sẻ trong một cộng đồng
              hoặc xã hội. Văn hóa định hình cách con người suy nghĩ, cảm nhận,
              và hành động.
            </p>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className="style">
            <h1>News</h1>
            <ul>
              <li>
                <Link
                  to="https://vnexpress.net/crossword-giai-o-chu-o-chu-ai-duoc-menh-danh-la-thanh-quat-4904989.html"
                  className="custom-link"
                >
                  Ai được mệnh danh là 'Thánh Quát'?
                  <img
                    className="imgWorld"
                    src={context.contextImg.VietNam}
                    alt="Việt Nam"
                  ></img>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.qdnd.vn/van-hoa/sach/xuat-ban-cuon-sach-nhan-dien-van-hoa-trong-khong-gian-so-838708"
                  className="custom-link"
                >
                  Xuất bản cuốn sách “Nhận diện văn hóa trong không gian số”
                  <img
                    className="imgWorld"
                    src={context.contextImg.VietNam}
                    alt="Việt Nam"
                  ></img>
                </Link>
              </li>
              <li>
                <Link
                  to="https://heritagevietnamairlines.com/van-hoa-dan-toc-viet-nam-va-nhung-dac-trung-tieu-bieu/"
                  className="custom-link"
                >
                  Văn hóa dân tộc Việt Nam và những đặt trưng tiêu biểu
                  <img
                    className="imgWorld"
                    src={context.contextImg.VietNam}
                    alt="Việt Nam"
                  ></img>
                </Link>
              </li>
              <li>
                <Link
                  to="https://namu.wiki/w/%EB%8C%80%ED%95%9C%EB%AF%BC%EA%B5%AD/%EB%AC%B8%ED%99%94"
                  className="custom-link"
                >
                  대한민국/문화
                  <img
                    className="imgWorld"
                    src={context.contextImg.Korea}
                    alt="Hàn Quốc"
                  ></img>
                </Link>
              </li>
              <li>
                <Link
                  to="https://www.yeongnam.com/web/view.php?key=20201110010001432"
                  className="custom-link"
                >
                  [우리말과 한국문학] 언어는 문화를 담는 그릇
                  <img
                    className="imgWorld"
                    src={context.contextImg.Korea}
                    alt="Hàn Quốc"
                  ></img>
                </Link>
              </li>
              <li>
                <Link
                  to="http://www.kesad.or.kr/zbxe/index.php?mid=board2&page=5&document_srl=127626"
                  className="custom-link"
                >
                  한국의 언어가 한국의 문화와 어떠한 연관성이 있으며 세계 속의
                  한국어에 대해서 기술하시오
                  <img
                    className="imgWorld"
                    src={context.contextImg.Korea}
                    alt="Hàn Quốc"
                  ></img>
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className="style">
            <h1>Useful Links</h1>
            <ul>
              <li>
                <Link
                  to="https://vi.wikipedia.org/wiki/V%C4%83n_h%C3%B3a_Vi%E1%BB%87t_Nam"
                  className="custom-link"
                >
                  Văn hóa Việt Nam
                  <img
                    className="imgWorld"
                    src={context.contextImg.VietNam}
                    alt="custom-link"
                  ></img>
                </Link>
              </li>
              <li>
                <Link
                  to="https://vi.wikipedia.org/wiki/V%C4%83n_h%C3%B3a_H%C3%A0n_Qu%E1%BB%91c"
                  className="custom-link"
                >
                  Văn hóa Hàn Quốc
                  <img
                    className="imgWorld"
                    src={context.contextImg.Korea}
                    alt="custom-link"
                  ></img>
                </Link>
              </li>
              <li>
                <Link
                  to="https://vi.wikipedia.org/wiki/V%C4%83n_h%C3%B3a_V%C6%B0%C6%A1ng_qu%E1%BB%91c_Li%C3%AAn_hi%E1%BB%87p_Anh"
                  className="custom-link"
                >
                  Văn hóa Vương quốc Liên hiệp Anh
                  <img
                    className="imgWorld"
                    src={context.contextImg.Enghlish}
                    alt="custom-link"
                  ></img>
                </Link>
              </li>
              <li>
                <Link
                  to="https://vi.wikipedia.org/wiki/V%C4%83n_h%C3%B3a_Trung_Qu%E1%BB%91c"
                  className="custom-link"
                >
                  Văn hóa Trung Quốc
                  <img
                    className="imgWorld"
                    src={context.contextImg.China}
                    alt="custom-link"
                  ></img>
                </Link>
              </li>
              <li>
                <Link
                  to="https://vi.wikipedia.org/wiki/V%C4%83n_h%C3%B3a_Nh%E1%BA%ADt_B%E1%BA%A3n"
                  className="custom-link"
                >
                  Văn hóa Nhật Bản
                  <img
                    className="imgWorld"
                    src={context.contextImg.Japan}
                    alt="custom-link"
                  ></img>
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col className="gutter-row" span={6}>
          <div className="style">
            <h1>Map</h1>
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99476.79904581788!2d127.51821790906381!3d34.94482427939163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356e72ca4a99abd1%3A0x3f837d9dbeaec660!2z6rWs67SJ7IKwIOyghOunneuMgA!5e1!3m2!1svi!2s!4v1753616184274!5m2!1svi!2s"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Col>
        <Col className="gutter-row" span={18}>
          <row>
            <div className="style-row">
              <Col className="gutter-row" span={8}>
                <div>
                  <div className="styleleft">Phone: 0795486956</div>
                  <div className="styleleft">
                    Email: nguyentronghuu.07052003@gmail.com
                  </div>
                </div>
              </Col>
              <Col className="gutter-row" span={16}>
                <div className="styleright">
                  <Row>
                    <Col className="gutter-row" span={4}>
                      <video
                        className="videoWorld"
                        autoPlay
                        muted
                        loop
                        src={context.contextVideo.VideoVietNam}
                        alt="Video Việt Nam"
                      ></video>
                    </Col>
                    <Col className="gutter-row" span={5}>
                      <video
                        className="videoWorld"
                        autoPlay
                        muted
                        loop
                        src={context.contextVideo.VideoChina}
                        alt="Video Việt Nam"
                      ></video>
                    </Col>
                    <Col className="gutter-row" span={5}>
                      <video
                        className="videoWorld"
                        autoPlay
                        muted
                        loop
                        src={context.contextVideo.videoEnglish}
                        alt="Video Việt Nam"
                      ></video>
                    </Col>
                    <Col className="gutter-row" span={5}>
                      <video
                        className="videoWorld"
                        autoPlay
                        muted
                        loop
                        src={context.contextVideo.videoJapan}
                        alt="Video Việt Nam"
                      ></video>
                    </Col>
                    <Col className="gutter-row" span={5}>
                      <video
                        className="videoWorld"
                        autoPlay
                        muted
                        loop
                        src={context.contextVideo.videoKorea}
                        alt="Video Việt Nam"
                      ></video>
                    </Col>
                  </Row>
                </div>
              </Col>
            </div>
          </row>
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
                      src={context.contextImg.Facebook}
                      alt="Trang chủ vui vẻ"
                    />
                  </Col>
                  <Col span={6} className="rightGoogle">
                    <img
                      className="footerImg"
                      src={context.contextImg.Google}
                      alt="Trang chủ vui vẻ"
                    />
                  </Col>
                  <Col span={6} className="rightTikTok">
                    <img
                      className="footerImg"
                      src={context.contextImg.Tiktok}
                      alt="Trang chủ vui vẻ"
                    />
                  </Col>
                  <Col span={6} className="rightYouTuBe">
                    <img
                      className="footerImg"
                      src={context.contextImg.Youtube}
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
