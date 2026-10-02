import "./Linkedin.css";

function Linkedin() {
  return (
    <nav className="linkedin">

      <div className="linkedin-logo">in</div>

      <div className="linkedin-search">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search" />
      </div>

      <div className="linkedin-items">
        <i className="fa-solid fa-house"></i>
        <i className="fa-solid fa-user-group"></i>
        <i className="fa-solid fa-briefcase"></i>
        <i className="fa-solid fa-comment-dots"></i>
        <i className="fa-solid fa-bell"></i>
        <i className="fa-solid fa-user"></i>
        <i className="fa-solid fa-table-cells"></i>
        <i className="fa-solid fa-newspaper"></i>
      </div>

    </nav>
  );
}

export default Linkedin;