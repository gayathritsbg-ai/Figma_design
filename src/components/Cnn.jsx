import "./Cnn.css";

function Cnn() {
  return (
    <nav className="cnnnav">

      <div className="cnnlogo">CNN</div>

      <div>World</div>
      <div>US Politics</div>
      <div>Business</div>
      <div>Health</div>
      <div>Entertainment</div>
      <div>Style</div>
      <div>Travel</div>
      <div>Sports</div>
      <div>Videos</div>

      <div className="cnnright">
        <span>Edition</span>
        <i className="fa-solid fa-chevron-down"></i>
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-regular fa-circle-user"></i>
        <i className="fa-solid fa-bars"></i>
      </div>

    </nav>
  );
}

export default Cnn;