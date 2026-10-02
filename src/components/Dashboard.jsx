import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      {/* PAGE TITLE */}
      <div className="dashboard-heading">
        <h1>Dashboard</h1>
        <p>Welcome to the Student Management System</p>
      </div>


      {/* STAT CARDS */}
      <div className="dashboard-stats">

        <div className="dashboard-stat student-stat">

          <div className="stat-icon blue-icon">
            👥
          </div>

          <div className="stat-info">
            <p>Total Students</p>
            <h3>5</h3>
          </div>

        </div>


        <div className="dashboard-stat course-stat">

          <div className="stat-icon purple-icon">
            📚
          </div>

          <div className="stat-info">
            <p>Total Courses</p>
            <h3>4</h3>
          </div>

        </div>

      </div>


      {/* RECENT SECTION */}
      <div className="dashboard-grid">


        {/* RECENT STUDENTS */}
        <div className="dashboard-card">

          <h2>Recent Students</h2>

          <div className="student-list">

            <div className="student-row">

              <div className="student-avatar">
                R
              </div>

              <div className="student-details">
                <h4>Rahul Sharma</h4>
                <p>Computer Science</p>
              </div>

              <span className="status active-status">
                Active
              </span>

            </div>


            <div className="student-row">

              <div className="student-avatar">
                P
              </div>

              <div className="student-details">
                <h4>Priya Patel</h4>
                <p>Information Technology</p>
              </div>

              <span className="status active-status">
                Active
              </span>

            </div>


            <div className="student-row">

              <div className="student-avatar">
                A
              </div>

              <div className="student-details">
                <h4>Arjun Singh</h4>
                <p>Electronics</p>
              </div>

              <span className="status inactive-status">
                InActive
              </span>

            </div>


            <div className="student-row">

              <div className="student-avatar">
                S
              </div>

              <div className="student-details">
                <h4>Sneha Gupta</h4>
                <p>Mechanical Engineering</p>
              </div>

              <span className="status active-status">
                Active
              </span>

            </div>

          </div>


          <button className="view-button">
            View All Students →
          </button>

        </div>


        {/* RECENT MARKS */}
        <div className="dashboard-card">

          <h2>Recent Marks</h2>

          <div className="marks-list">

            <div className="mark-row">

              <div className="mark-info">
                <h4>Rahul Sharma</h4>
                <p>Data Structures-Mid-term</p>
              </div>

              <div className="mark-value">
                <strong>85/100</strong>
                <span>85.0%</span>
              </div>

            </div>


            <div className="mark-row">

              <div className="mark-info">
                <h4>Priya Patel</h4>
                <p>Database Management-Final</p>
              </div>

              <div className="mark-value">
                <strong>92/100</strong>
                <span>92.0%</span>
              </div>

            </div>


            <div className="mark-row">

              <div className="mark-info">
                <h4>Arjun Singh</h4>
                <p>Digital Electronics-Mid-term</p>
              </div>

              <div className="mark-value">
                <strong>78/100</strong>
                <span className="red-percent">
                  78.0%
                </span>
              </div>

            </div>


            <div className="mark-row">

              <div className="mark-info">
                <h4>Rahul Sharma</h4>
                <p>Algorithms-Final</p>
              </div>

              <div className="mark-value">
                <strong>88/100</strong>
                <span>88.0%</span>
              </div>

            </div>

          </div>


          <button className="view-button">
            View All Marks →
          </button>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;