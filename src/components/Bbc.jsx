import "./Bbc.css";

function Bbc() {
  return (
    <nav className="bbcnav">

      <div className="logdiv">BBC</div>

      <div className="acc">
        <i className="fa-solid fa-user"></i>
        <span>Sign in</span>
      </div>

      <div>News</div>
      <div>Sport</div>
      <div>Reel</div>
      <div>Worklife</div>
      <div>Travel</div>
      <div>Future</div>

      <div className="more">
        <span>More</span>
        <i className="fa-solid fa-angle-down"></i>
      </div>

      <div className="bbc-search">
        <input type="text" placeholder="Search" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

    </nav>
  );
}

export default Bbc;