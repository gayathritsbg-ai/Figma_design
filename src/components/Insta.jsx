import "./Insta.css";

function Insta() {
  return (
    <nav className="insta">

      <div className="insta-logo">
        Instagram
      </div>

      <div className="insta-search">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search" />
      </div>

      <div className="insta-icons">
        <i className="fa-solid fa-house"></i>
        <i className="fa-regular fa-paper-plane"></i>
        <i className="fa-regular fa-compass"></i>
        <i className="fa-regular fa-heart"></i>
        <i className="fa-regular fa-circle-user"></i>
      </div>

    </nav>
  );
}

export default Insta;