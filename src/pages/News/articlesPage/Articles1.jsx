import React from "react";
import { NavLink } from "react-router-dom";
import images from "./../images";
import "./../News.css";
import "./../style.css";
function Articles1() {
  return (
    <div className="news__content">
      <div className="news__item">
        <NavLink className="articles-btn" to="/articles">
          Назад
        </NavLink>
        <span className="news__date">06.08.2021</span>
        <p className="news__title">
          Группа Компаний “Новая Норма” и Исследовательский институт по изучению
          Блокчейн «Централ Эйжа Интернэшнл» начинают сотрудничество.
        </p>
        <div className="news__line news__line-1" />
        <span className="news__info">
          <p>
            06 августа 2021 г. Группой Компаний “Новая Норма” был подписан
            меморандум о дальнейшем сотрудничестве с Исследовательским
            институтом по изучению Блокчейн «Централ Эйжа Интернэшнл» по
            вопросам развития цифровой трансформации Кыргызской Республики.{" "}
            <br /> <br />
            Меморандум поможет объединить усилия для обеспечения эффективного
            функционирования и развития отрасли цифровых технологий и
            автоматизации в нашей стране. <br /> <br />
            Сотрудничество будет проходить по следующим направлениям: <br /> -
            проведение совместных аналитических исследований (в том числе
            отраслевых и региональных) по широкому кругу вопросов по
            цифровизации, а также подготовка совместных аналитических обзоров и
            публикаций; <br /> - подготовка предложений по реализации проектов
            (в том числе интеграционного характера); <br /> - подготовка
            предложений по совершенствованию в гармонизации законодательства по
            цифровой трансформации Кыргызской Республики;
            <br />- иные направления, представляющие взаимный интерес.
            Исследовательский институт по изучению Блокчейн «Централ Эйжа
            Интернэшнл» занимается IT-технологичным производством по
            исследованию и применению блокчейн, цифровой индустриализацией,
            обучению конструкторско-технологическому производству и многим
            другим. <br /> <br /> В рамках меморандума планируются проведения
            совместных конференций, форумов, консультаций, учебно-практических
            семинаров, круглых столов и иных мероприятий по вопросам цифровых
            технологий, искусственного интеллекта и автоматизации. <br /> <br />{" "}
            В завершении встречи стороны отметили важность развития цифровой
            трансформации и обмена накопленного опыта и знаний в данной области.
            <div className="news__pic">
              <img src={images.img100} alt="pic" />
            </div>
          </p>
        </span>
        <div className="news__line news__line-2" />
      </div>
    </div>
  );
}

export default Articles1;
