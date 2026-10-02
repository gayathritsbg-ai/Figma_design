import "./Courses.css";

function Courses() {
  return (
    <div className="courses">

      <div className="courses-header">
        <div>
          <h2>Courses</h2>
          <p className="courses-subtitle">
            Manage available courses
          </p>
        </div>

        <button className="add-course-btn">
          + Add Course
        </button>
      </div>

      <table className="courses-table">

        <thead>
          <tr>
            <th>Course ID</th>
            <th>Course Name</th>
            <th>Department</th>
            <th>Duration</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>C101</td>
            <td>Computer Science</td>
            <td>Engineering</td>
            <td>4 Years</td>
          </tr>

          <tr>
            <td>C102</td>
            <td>Information Technology</td>
            <td>Engineering</td>
            <td>4 Years</td>
          </tr>

          <tr>
            <td>C103</td>
            <td>Electronics</td>
            <td>Engineering</td>
            <td>4 Years</td>
          </tr>

          <tr>
            <td>C104</td>
            <td>Mechanical Engineering</td>
            <td>Engineering</td>
            <td>4 Years</td>
          </tr>
        </tbody>

      </table>

    </div>
  );
}

export default Courses;