import React, { useState } from "react";

const PRAHA_URL =
  "https://st2.depositphotos.com/1000128/5477/i/450/depositphotos_54772305-stock-photo-evening-scenery-of-prague-czech.jpg";

export default function ImageBlock() {
  const [images, setImages] = useState([
    { id: crypto.randomUUID(), src: PRAHA_URL, scale: 1 },
  ]);

  const addImage = () => {
    setImages((prev) => [
      ...prev,
      { id: crypto.randomUUID(), src: PRAHA_URL, scale: 1 },
    ]);
  };

  const zoomIn = () => {
    setImages((prev) => {
      if (prev.length === 0) return prev;
      const next = [...prev];
      const last = next[next.length - 1];
      next[next.length - 1] = { ...last, scale: +(last.scale + 0.1).toFixed(2) };
      return next;
    });
  };

  const zoomOut = () => {
    setImages((prev) => {
      if (prev.length === 0) return prev;
      const next = [...prev];
      const last = next[next.length - 1];
      if (last.scale <= 0.2) return prev;
      next[next.length - 1] = { ...last, scale: +(last.scale - 0.1).toFixed(2) };
      return next;
    });
  };

  const removeImage = () => {
    setImages((prev) => (prev.length > 0 ? prev.slice(0, -1) : prev));
  };

  return (
    <section id="el10">
      <h3>Моє улюблене місто</h3>
      <p>Моє улюблене місто — Прага.</p>

      <div id="image-container">
        {images.map((img, idx) => (
          <img
            key={img.id}
            className="cityImage"
            src={img.src}
            alt={`Краєвид Праги ${idx + 1}`}
            style={{ transform: `scale(${img.scale})` }}
          />
        ))}
      </div>

      <div className="buttons">
        <button onClick={addImage}>Додати</button>
        <button onClick={zoomIn}>Збільшити</button>
        <button onClick={zoomOut}>Зменшити</button>
        <button onClick={removeImage}>Видалити</button>
      </div>
    </section>
  );
}
