import "./Marks.css";

function Marks() {
  return (
    <div className="marks">

      {/* HEADER */}
      <div className="marks-header">

        <div>
          <h1>Marks</h1>

          <p>
            Manage student marks and grades
          </p>
        </div>

        <button className="add-marks-btn">
          Add Marks
        </button>

      </div>


      {/* STAT CARDS */}
      <div className="marks-stats">

        <div className="marks-stat">

          <div className="marks-stat-icon records-icon">
            📊
          </div>

          <div>
            <p>Total Records</p>
            <h3>4</h3>
          </div>

        </div>


        <div className="marks-stat">

          <div className="marks-stat-icon highest-icon">
            ♙
          </div>

          <div>
            <p>Highest Marks</p>
            <h3>92</h3>
          </div>

        </div>


        <div className="marks-stat">

          <div className="marks-stat-icon pass-icon">
            ◇
          </div>

          <div>
            <p>Pass Rate</p>
            <h3>100.0%</h3>
          </div>

        </div>

      </div>


      {/* MARKS TABLE */}
      <div className="marks-table-container">

        <table className="marks-table">

          <thead>
            <tr>
              <th>STUDENT NAME</th>
              <th>COURSE</th>
              <th>SUBJECT</th>
              <th>MARKS</th>
              <th>MAX MARKS</th>
              <th>PERCENTAGE</th>
            </tr>
          </thead>


          <tbody>

            <tr>
              <td>Rahul Sharma</td>
              <td>CSE</td>
              <td>Data Structures</td>
              <td>85</td>
              <td>100</td>
              <td>85.0%</td>
            </tr>


            <tr>
              <td>Priya Patel</td>
              <td>Mechanical</td>
              <td>Data Structures</td>
              <td>75</td>
              <td>100</td>
              <td>78.0%</td>
            </tr>


            <tr>
              <td>Arjun Singh</td>
              <td>Electronics</td>
              <td>Data Structures</td>
              <td>95</td>
              <td>100</td>
              <td>93.0%</td>
            </tr>


            <tr>
              <td>Rahul Sharma</td>
              <td>CSE</td>
              <td>Data Structures</td>
              <td>65</td>
              <td>100</td>
              <td>65.0%</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Marks;