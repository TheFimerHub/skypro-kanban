import "../../App.css";
import CardList from "../Card/CardList";

const Column = ({ title, cards }) => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <CardList cards={cards} />
    </div>
  );
};

export default Column;

