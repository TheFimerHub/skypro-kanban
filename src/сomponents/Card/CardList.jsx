import "../../App.css";
import Card from "./Card.jsx";

const CardList = ({ cards }) => {
  return (
    <div className="cards">
      {cards.map((card) => (
        <div className="cards__item" key={card.id}>
          <Card {...card} />
        </div>
      ))}
    </div>
  );
};

export default CardList;
