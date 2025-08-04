import { Layout, Carousel, Button } from "antd";
import "../styles/home.css";
import { useRef, useEffect, useState } from "react";

const { Content } = Layout;

const slides = [
  {
    country: "🇻🇳 Việt Nam",
    greeting: "Xin chào!",
    tts: "Xin chào",
    image:
      "https://lh5.googleusercontent.com/proxy/jF8oAzzG2e_-TXfD6SRDdy3vW8vmvOd-PLhdc2P-zDGleq_3EjAYpW3-faoRENY_QDjCgJ1VcYP14cv4dlr90UGkQOF5YdqyfmjIZ9J9zZTEeaHYW2SZ4ugaYA",
    link: "https://vi.wikipedia.org/wiki/Văn_hóa_Việt_Nam",
  },
  {
    country: "🇬🇧 United Kingdom",
    greeting: "Hello!",
    tts: "Hello",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/cd/London_Montage_L.jpg",
    link: "https://en.wikipedia.org/wiki/Culture_of_the_United_Kingdom",
  },
  {
    country: "🇰🇷 South Korea",
    greeting: "안녕하세요! (Annyeonghaseyo)",
    tts: "Annyeonghaseyo",
    image:
      "https://vikogo.vn/wp-content/uploads/2023/10/Le-Hoi-O-Han-Quoc.jpeg",
    link: "https://en.wikipedia.org/wiki/Culture_of_South_Korea",
  },
  {
    country: "🇨🇳 China",
    greeting: "你好! (Nǐ hǎo)",
    tts: "Ni hao",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d6/Forbidden_City_Beijing_Shenwumen_Gate.JPG",
    link: "https://en.wikipedia.org/wiki/Culture_of_China",
  },
  {
    country: "🇯🇵 Japan",
    greeting: "こんにちは! (Konnichiwa)",
    tts: "Konnichiwa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/06/Mount_Fuji_from_Hakone.jpg",
    link: "https://en.wikipedia.org/wiki/Culture_of_Japan",
  },
];

function speak(text) {
  const msg = new SpeechSynthesisUtterance(text);
  msg.lang = "en-US";
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(msg);
}

function ContentComponents() {
  const carouselRef = useRef();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    speak(slides[current].tts);
  }, [current]);

  const next = () => {
    carouselRef.current.next();
  };

  const prev = () => {
    carouselRef.current.prev();
  };

  return (
    <Content className="content">
      

      <Carousel
        ref={carouselRef}
        afterChange={(index) => setCurrent(index)}
        effect="fade"
        dots
        autoplay={false}
      >
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <div
              className="carousel-bg"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="carousel-text">
                <h1>{slide.country}</h1>
                <p>{slide.greeting}</p>
                <Button
                  type="primary"
                  size="large"
                  href={slide.link}
                  target="_blank"
                  style={{ marginTop: 24 }}
                >
                  Tìm hiểu thêm
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="carousel-controls">
        <Button onClick={prev} type="default" size="large">
          ⟨ Trước
        </Button>
        <Button onClick={next} type="default" size="large">
          Tiếp ⟩
        </Button>
      </div>
    </Content>
  );
}

export default ContentComponents;
