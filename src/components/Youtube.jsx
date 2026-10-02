import "./Youtube.css";

function Youtube() {
  return (
    <nav className="youtube">

      <i className="fa-solid fa-bars youtube-menu"></i>

      <div className="youtube-logo">
        YouTube
      </div>

      <div className="youtube-search">
        <input type="text" placeholder="Zoeken" />
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <div className="youtube-icons">
        <i className="fa-solid fa-video"></i>
        <i className="fa-solid fa-grip"></i>
        <i className="fa-solid fa-bell"></i>
        <i className="fa-solid fa-user"></i>
      </div>

    </nav>
  );
}

export default Youtube;