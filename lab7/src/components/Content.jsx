import React from "react";
import ImageBlock from "./Image";
import GoodsGallery from "./GoodsGallery";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEl7Active: false,
      isEl8Active: false,
    };
  }

  handleEl7Click = () => {
    this.setState((prev) => ({ isEl7Active: !prev.isEl7Active }));
  };

  handleEl8Click = () => {
    this.setState((prev) => ({ isEl8Active: !prev.isEl8Active }));
  };

  render() {
    const { isEl7Active, isEl8Active } = this.state;

    return (
      <>
        <section id="el6">
          <h3
            id="el7"
            className={isEl7Active ? "active" : ""}
            onClick={this.handleEl7Click}
            style={{ cursor: "pointer" }}
            title="Клік: toggle active (el7)"
          >
            Мої хобі
          </h3>

          <ul
            id="el8"
            className={isEl8Active ? "active" : ""}
            onClick={this.handleEl8Click}
            style={{ cursor: "pointer" }}
            title="Клік: toggle active (el8)"
          >
            <li>Програмування на JS</li>
            <li>Гра на гітарі</li>
            <li>Гірський туризм</li>
          </ul>
        </section>

        <section id="el9">
          <h3>Улюблені книги та фільми</h3>
          <ol>
            <li>Книга "Мізері" — Стівен Кінг</li>
            <li>Фільм "Джанго Вільний" — Квентін Тарантіно</li>
            <li>Фільм "Початок" — Крістофер Нолан</li>
          </ol>
        </section>

        <ImageBlock />

        <GoodsGallery />
      </>
    );
  }
}
