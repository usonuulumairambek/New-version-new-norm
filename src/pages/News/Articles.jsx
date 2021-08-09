import React from "react";
import "./style.css";
import "./News.css";
import { NavLink } from "react-router-dom";
import images from "./images.js";

function Articles() {
  return (
    <div>
      <div className="news">
        <div data-aos="fade-up" className="news_title">
          Cтатьи
        </div>
        <div className="news__content">
          <div className="news_stati">
            <NavLink className="news_stati-btn" to="articles">
              Cтатьи{" "}
            </NavLink>
            <NavLink className="news_stati-btn" to="news">
              Новости{" "}
            </NavLink>{" "}
          </div>
          <div className="articless__container">
            <div className="articless__container-box">
              <div className="articless__container-img">
                <img src={images.img100} alt="" />
              </div>
              <div className="articless__container-tittle">
                <h2>
                  Группа Компаний “Новая Норма” и Исследовательский институт по
                  изучению Блокчейн «Централ Эйжа Интернэшнл» начинают
                  сотрудничество.
                </h2>
              </div>
              <div className="articless__container-btn">
                <NavLink to="/articles1"> Подробнее</NavLink>
              </div>
            </div>
            <div className="articless__container-box">
              <div className="articless__container-img">
                <img src={images.img100} alt="" />
              </div>
              <div className="articless__container-tittle">
                <h2>
                  Группа Компаний “Новая Норма” и Исследовательский институт по
                  изучению Блокчейн «Централ Эйжа Интернэшнл» начинают
                  сотрудничество.
                </h2>
              </div>
              <div className="articless__container-btn">
                <NavLink to="/articles1"> Подробнее</NavLink>
              </div>
            </div>
            <div className="articless__container-box">
              <div className="articless__container-img">
                <img src={images.img100} alt="" />
              </div>
              <div className="articless__container-tittle">
                <h2>
                  Группа Компаний “Новая Норма” и Исследовательский институт по
                  изучению Блокчейн «Централ Эйжа Интернэшнл» начинают
                  сотрудничество.
                </h2>
              </div>
              <div className="articless__container-btn">
                <NavLink to="/articles1"> Подробнее</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
