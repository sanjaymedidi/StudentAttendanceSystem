import React, { useState, useEffect } from "react";
import ToggleButton from "../components/ToggleButton";
import Summary from "./Summary";
import "../styles/TakeAttendance.css";

const TakeAttendance = () => {
 const [students, setStudents] = useState([]);
  const [currentSection, setCurrentSection] = useState("CSE-A");
  const [showSummary, setShowSummary] = useState(false); 


  const fetchStudents = async (section) => {
    try {
      const res = await fetch(`/studentSection${section}.json`);
      const data = await res.json();
      setStudents(data);
    } catch (err) {
      console.error(err);
      setStudents([]); // clear if error
    }
  };

  useEffect(() => {
    fetchStudents(currentSection);
  }, [currentSection]); // fetch again when section changes

  const toggleAttendance = (regdNo) => {
    const updated = students.map((stu) =>
      stu.regdNo === regdNo ? { ...stu, present: !stu.present } : stu
    );
    setStudents(updated);
  };

  return (
    <div className="dashboard-container">
      <h1>Take Attendance</h1>


      {/* Section Buttons */}
      <div className="section-buttons">
        {["CSE-A", "CSE-B", "CSE-C"].map((section) => (
          <button
            key={section}
            className={currentSection === section ? "active" : ""}
            onClick={() => setCurrentSection(section)}
          >
            {section}
          </button>
        ))}
      </div>

      <table className="student-table">
        <thead>
          <tr>
            <th>Regd No</th>
            <th>Name</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {students.map((stu) => (
            <tr key={stu.regdNo}>
              <td>{stu.regdNo}</td>
              <td>{stu.name}</td>
              <td>
                <ToggleButton
                  isPresent={stu.present}
                  onToggle={() => toggleAttendance(stu.regdNo)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div style={{ marginTop: "20px"}}>
  <button
    onClick={() => setShowSummary(!showSummary)}
    style={{
      padding: "10px 20px",
      borderRadius: "5px",
      backgroundColor: "#28a745",
      color: "#fff",
      border: "none",
      cursor: "pointer",
    }}
  >
    {showSummary ? "Hide Summary" : "View Summary"}
  </button>
</div>
{showSummary && <Summary section={currentSection} />}

    </div>
    
  );
};

export default TakeAttendance;
