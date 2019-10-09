import React from "react";
import "./card.css";

const nameReducer = (total, next) => `${total} ${next}`;

export default function Card({
  title,
  description,
  children,
  image = { src: "", alt: "" },
  styles: {
    card: cardStyles = [],
    header: headerStyles = [],
    description: descriptionStyles = [],
    imageFrame: imageFrameStyles = [],
    imageStyle = []
  }
}) {
  console.log(cardStyles);
  return (
    <div className={["card", ...cardStyles].reduce(nameReducer)}>
      <div className="card__text">
        <h2 className={["card__header", ...headerStyles].reduce(nameReducer)}>
          {title}
        </h2>
        <p
          className={["card__description", ...descriptionStyles].reduce(
            nameReducer
          )}
        >
          {description}
        </p>
        {children}
      </div>
      <div
        className={["card__image-frame", ...imageFrameStyles].reduce(
          nameReducer
        )}
      >
        <img
          className={["card__image", ...imageStyle].reduce(nameReducer)}
          src={image.src}
          alt={image.alt}
        />
      </div>
    </div>
  );
}
