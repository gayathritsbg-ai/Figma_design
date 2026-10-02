import "./Attendance.css";

function Attendance() {
  return (
    <div className="attendance">

      <h2>Attendance</h2>

      <p className="attendance-subtitle">
        Manage student attendance
      </p>

      <div className="attendance-controls">

        <div className="attendance-field">
          <label>Date</label>
          <input type="date" />
        </div>

        <div className="attendance-field">
          <label>Course</label>

          <select>
            <option>Computer Science</option>
            <option>Information Technology</option>
            <option>Electronics</option>
          </select>
        </div>

        <button className="save-attendance-btn">
          Save Attendance
        </button>

      </div>

      <div className="attendance-stats">

        <div className="attendance-stat">
          <div>👥</div>
          <div>
            <p>Total</p>
            <h3>5</h3>
          </div>
        </div>

        <div className="attendance-stat">
          <div>✅</div>
          <div>
            <p>Present</p>
            <h3>4</h3>
          </div>
        </div>

        <div className="attendance-stat">
          <div>❌</div>
          <div>
            <p>Absent</p>
            <h3>1</h3>
          </div>
        </div>

      </div>

      <div className="attendance-list">

        <h3>Student Attendance</h3>

        <div className="attendance-row">
          <span>Rahul Sharma</span>

          <div>
            <button className="present-btn">Present</button>
            <button className="absent-btn">Absent</button>
          </div>
        </div>

        <div className="attendance-row">
          <span>Priya Patel</span>

          <div>
            <button className="present-btn">Present</button>
            <button className="absent-btn">Absent</button>
          </div>
        </div>

        <div className="attendance-row">
          <span>Arjun Singh</span>

          <div>
            <button className="present-btn">Present</button>
            <button className="absent-btn">Absent</button>
          </div>
        </div>

        <div className="attendance-row">
          <span>Sneha Gupta</span>

          <div>
            <button className="present-btn">Present</button>
            <button className="absent-btn">Absent</button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Attendance;