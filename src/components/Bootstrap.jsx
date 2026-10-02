import "./Bootstrap.css";

function Bootstrap() {
  return (
    <nav className="bootstrap">

      <div className="bootstrap-logo">B</div>

      <div>Home</div>
      <div>Documentation</div>
      <div>Examples</div>
      <div>Icons</div>
      <div>Themes</div>
      <div>Expo</div>
      <div>Blog</div>

      <div className="bootstrap-version">
        v4.5 <i className="fa-solid fa-angle-down"></i>
      </div>

      <div className="bootstrap-icons">
        <i className="fa-brands fa-github"></i>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-slack"></i>
        <i className="fa-solid fa-circle-half-stroke"></i>
      </div>

      <button>Download</button>

    </nav>
  );
}

export default Bootstrap;