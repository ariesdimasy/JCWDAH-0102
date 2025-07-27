import card from "./Card.module.css";
// import "./Card.css";

interface ICard {
  color: string;
  bg: string;
  fontSize: number;
}

export default function Card(props: ICard) {
  const { color, bg, fontSize } = props; // destructuring

  return (
    <div
      className={card.box}
      style={{ backgroundColor: bg, fontSize: fontSize }}
    >
      <div className="box" style={{ color: color }}>
        BOX : {color}
      </div>
    </div>
  );
}
