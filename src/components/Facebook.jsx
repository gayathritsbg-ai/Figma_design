import "./Facebook.css";

function Facebook() {
  return (
    <nav className="facebook">

      <div className="facebook-logo">f</div>

      <div className="facebook-search">
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      <div className="facebook-center">
        <div className="facebook-menu active">
          <i className="fa-solid fa-house"></i>
        </div>

        <div className="facebook-menu">
          <i className="fa-regular fa-flag"></i>
        </div>

        <div className="facebook-menu">
          <i className="fa-solid fa-tv"></i>
        </div>

        <div className="facebook-menu">
          <i className="fa-solid fa-store"></i>
        </div>
      </div>

      <div className="facebook-right">
        <i className="fa-solid fa-bars"></i>
        <i className="fa-solid fa-plus"></i>
        <i className="fa-brands fa-facebook-messenger"></i>
        <i className="fa-solid fa-bell"></i>
        <i className="fa-solid fa-caret-down"></i>
      </div>

    </nav>
  );
}

export default Facebook;