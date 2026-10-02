import "./Gmail.css";

function Gmail() {
  return (
    <nav className="gmail">

      <div className="gmail-menu">
        <i className="fa-solid fa-bars"></i>
      </div>

      <div className="gmail-logo">M</div>

      <div className="gmail-title">Gmail</div>

      <div className="gmail-search">
        <i className="fa-solid fa-magnifying-glass"></i>

        <input
          type="text"
          placeholder="Search mail"
        />

        <i className="fa-solid fa-sliders"></i>
      </div>

      <div className="gmail-right">
        <i className="fa-regular fa-circle-question"></i>
        <i className="fa-solid fa-gear"></i>
        <i className="fa-solid fa-table-cells"></i>
        <i className="fa-solid fa-user"></i>
      </div>

    </nav>
  );
}

export default Gmail;