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
          <NavLink to="/articles3">
              <div className="articless__container-box">
                <div className="articless__container-img">
                  <img src={images.artimg5} alt="" />
                </div>
                <div className="articless__container-tittle">
                  <h2>
                  ГК “Новая Норма” предоставляет маркировку молочной продукции в Кыргызстане. 
                  </h2>
                </div>
                <div className="articless__container-btn">
                  <NavLink to="/articles3"> Подробнее</NavLink>
                </div>
              </div>
            </NavLink>
            <NavLink to="/articles2">
              <div className="articless__container-box">
                <div className="articless__container-img">
                  <img src={images.artimg1} alt="" />
                </div>
                <div className="articless__container-tittle">
                  <h2>
                    ГК “Новая Норма” предоставляет маркировку легкой
                    промышленности в Кыргызстане.
                  </h2>
                </div>
                <div className="articless__container-btn">
                  <NavLink to="/articles2"> Подробнее</NavLink>
                </div>
              </div>
            </NavLink>
         
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
