import React from "react";
import GoodsCard from "./GoodsCard";

export default function GoodsGallery() {
  const goods = [
    {
      photo: "https://picsum.photos/seed/g1/400/260",
      name: "Навушники Bluetooth",
      price: "₴1299",
    },
    {
      photo: "https://picsum.photos/seed/g2/400/260",
      name: "Клавіатура механічна",
      price: "₴2199",
    },
    {
      photo: "https://picsum.photos/seed/g3/400/260",
      name: "Миша ігрова",
      price: "₴899",
    },
    {
      photo: "https://picsum.photos/seed/g4/400/260",
      name: "Павербанк 20000mAh",
      price: "₴1099",
    },
    {
      photo: "https://picsum.photos/seed/g5/400/260",
      name: "Флешка 128GB",
      price: "₴499",
    },
    {
      photo: "https://picsum.photos/seed/g6/400/260",
      name: "Колонка портативна",
      price: "₴1599",
    },
  ];

  return (
    <section className="goodsSection">
      <h3>Галерея товарів</h3>
      <div className="goodsGrid">
        {goods.map((g) => (
          <GoodsCard key={g.name} photo={g.photo} name={g.name} price={g.price} />
        ))}
      </div>
    </section>
  );
}
