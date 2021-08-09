import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Autoplay } from "swiper"
import "swiper/swiper-bundle.css"
import "./Partners.css"
import partner1 from "./partners/1.png"
import partner2 from "./partners/2.png"
import partner4 from "./partners/4.png"
import partner5 from "./partners/5.png"
import partner6 from "./partners/6.png"
import partner7 from "./partners/7.png"
import partner8 from "./partners/8.png"
import partner9 from "./partners/megacom.png"
import partner10 from "./partners/mtk.png"
import partner12 from "./partners/mmc.jpg"
import partnerx from "./partners/tpp-kg.jpg"
import codify from "./partners/codify.png"
import briskly from "./partners/Briskly.svg"

export default function Partners() {
  SwiperCore.use([Autoplay])

  let amount = 9
  if (window.matchMedia("(max-width:500px)").matches) {
    amount = 3
  } else if (window.matchMedia("(max-width:768px)").matches) {
    amount = 6
  }
  return (
    <div className="partners">
      <Swiper
        spaceBetween={50}
        slidesPerView={amount}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000 }}
      >
        <SwiperSlide className="swiper_partners">
          <div className="swiper_partners">
            <a  target="_blank" rel="noopener noreferrer"   href="https://www.trekmark.ru/">
              <img src={partner1} alt="Маркировка в бишкеке" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper_partners">
          <div className="swiper_partners">
            <a rel="noopener noreferrer"  target='_blank'  href="https://www.codifylab.com/">
              <img src={codify} alt="Маркировка в бишкеке" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper_partners">
          <div className="swiper_partners">
            <a  target='_blank' rel="noopener noreferrer"  href="https://sbis.ru/">
              <img src={partner2} alt="Маркировка в бишкеке"/>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper_partners">
          <div className="swiper_partners">
            <a
               target='_blank' 
               rel="noopener noreferrer" 
              href="https://www.rightscan.ru/download-center/solutions/rs-mobile-acs/"
            >
              <img src={partner4} alt="Маркировка в бишкеке" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper_partners">
          <div className="swiper_partners">
            <a  target='_blank' rel="noopener noreferrer"  href="https://dreamkas.ru/">
              <img src={partner5} alt="Маркировка в бишкеке"  />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper_partners">
          <div className="swiper_partners">
            <a  target='_blank' rel="noopener noreferrer"  href="http://lora.kg/">
              <img src={partner6} alt="Маркировка в бишкеке"/>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper_partners">
          <div className="swiper_partners">
            <a  target='_blank' rel="noopener noreferrer"   href="https://eurasiabusiness.ru/">
              <img src={partner7} alt="Маркировка в бишкеке" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper_partners">
          <div className="swiper_partners">
            <a  target='_blank' rel="noopener noreferrer"   href="https://www.cleverence.ru/">
              <img src={partner8}  alt="Маркировка в бишкеке"/>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper_partners">
          <div className="swiper_partners">
            <a  target='_blank' rel="noopener noreferrer"  href="https://www.megacom.kg/">
              <img src={partner9} rel="noopener noreferrer"  />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper_partners">
          <div className="swiper_partners">
            <a  target='_blank' rel="noopener noreferrer"  href="http://cci.kg/">
              <img src={partnerx} alt="Маркировка в бишкеке" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper_partners">
          <div className="swiper_partners">
            <a  target='_blank' rel="noopener noreferrer"   href="http://mir-mtk.ru/">
              <img src={partner10}alt="Маркировка в бишкеке" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper_partners">
          <div className="swiper_partners">
            <a  target='_blank' rel="noopener noreferrer"   href="">
              <img src={partner12}alt="Маркировка в бишкеке" />
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper_partners">
          <div className="swiper_partners">
            <a  target='_blank' rel="noopener noreferrer"  href="https://briskly.online/">
              <img src={briskly} alt="Маркировка в бишкеке"/>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
