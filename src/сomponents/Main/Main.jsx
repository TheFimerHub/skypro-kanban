import "../../App.css";

const Main = ({ children }) => {
  return (
    <div className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {children}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
