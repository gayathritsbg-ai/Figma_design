import "./Students.css";

function Students() {
  return (
    <div className="students">

      {/* HEADER */}
      <div className="students-header">

        <div>
          <h1>Students</h1>
          <p>Manage student information(4 total)</p>
        </div>

        <div className="student-actions">

          <div className="view-toggle">
            <button className="view-active">Cards</button>
            <button>Table</button>
          </div>

          <button className="add-student-btn">
            Add Student
          </button>

        </div>

      </div>


      {/* STUDENT CARDS */}
      <div className="students-grid">


        {/* RAHUL */}
        <div className="student-card">

          <div className="student-top">

            <div className="student-avatar">
              R
            </div>

            <div className="student-info">

              <h3>Rahul Sharma</h3>

              <p>Roll:CS001</p>
              <p>Email:rahul.sharma@email.com</p>
              <p>Course:Computer Science</p>
              <p>Phone:+91-9867543001</p>
              <p className="location">Mumbai,Maharashtra</p>

            </div>

            <span className="student-status active">
              Active
            </span>

          </div>


          <div className="student-buttons">

            <button className="edit-btn">
              Edit
            </button>

            <button className="delete-btn">
              Delete
            </button>

          </div>

        </div>


        {/* PRIYA */}
        <div className="student-card">

          <div className="student-top">

            <div className="student-avatar">
              P
            </div>

            <div className="student-info">

              <h3>Priya Patel</h3>

              <p>Roll:IT002</p>
              <p>Email:priya.patel@email.com</p>
              <p>Course:Information Technology</p>
              <p>Phone:+91-9867543001</p>
              <p className="location">Ahmedabad,Gujarat</p>

            </div>

            <span className="student-status active">
              Active
            </span>

          </div>


          <div className="student-buttons">

            <button className="edit-btn">
              Edit
            </button>

            <button className="delete-btn">
              Delete
            </button>

          </div>

        </div>


        {/* SNEHA */}
        <div className="student-card">

          <div className="student-top">

            <div className="student-avatar">
              S
            </div>

            <div className="student-info">

              <h3>Sneha Gupta</h3>

              <p>Roll:ME004</p>
              <p>Email:sneha.gupta@email.com</p>
              <p>Course:Mechanical Engineering</p>
              <p>Phone:+91-9867543001</p>
              <p className="location">Pune,Maharashtra</p>

            </div>

            <span className="student-status inactive">
              Inactive
            </span>

          </div>


          <div className="student-buttons">

            <button className="edit-btn">
              Edit
            </button>

            <button className="delete-btn">
              Delete
            </button>

          </div>

        </div>


        {/* ARJUN */}
        <div className="student-card">

          <div className="student-top">

            <div className="student-avatar">
              A
            </div>

            <div className="student-info">

              <h3>Arjun Singh</h3>

              <p>Roll:EC003</p>
              <p>Email:arjun.singh@email.com</p>
              <p>Course:Electronics</p>
              <p>Phone:+91-9867543001</p>
              <p className="location">Delhi,India</p>

            </div>

            <span className="student-status active">
              Active
            </span>

          </div>


          <div className="student-buttons">

            <button className="edit-btn">
              Edit
            </button>

            <button className="delete-btn">
              Delete
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Students;