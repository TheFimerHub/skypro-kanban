import "../../App.css";

const PopUser = () => {
  return (
    <div className="pop-exit" id="popExit">
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <form className="pop-exit__form" id="formExit" action="#">
            <div className="pop-exit__form-group">
              <a
                href="modal/signin.html"
                className="pop-exit__exit-yes _hover01"
              >
                Да, выйти
              </a>
              <a href="main.html" className="pop-exit__exit-no _hover03">
                Нет, остаться
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopUser;
