
import React, { useState, useEffect } from "react";
import "../styles/StudentDashboard.css";

const sections = ["CSE-A", "CSE-B", "CSE-C"];

const StudentDashboard = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchAllSections = async () => {
      try {
        let allStudents = [];

        for (const section of sections) {
          const res = await fetch(`/studentSection${section}.json`);
          const data = await res.json();
          // Add section info to each student
          const dataWithSection = data.map(s => ({ ...s, section }));
          allStudents = [...allStudents, ...dataWithSection];
        }

        setStudents(allStudents);
      } catch (err) {
        console.error("Failed to fetch students:", err);
        setStudents([]);
      }
    };

    fetchAllSections();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Student Dashboard</h1>

      <table className="student-table">
        <thead>
          <tr>
            <th>Regd No</th>
            <th>Name</th>
            <th>Section</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {students.map(stu => (
            <tr key={`${stu.section}-${stu.regdNo}`}>
              <td>{stu.regdNo}</td>
              <td>{stu.name}</td>
              <td>{stu.section}</td>
              <td>
                <button
                  disabled
                  style={{
                    padding: "5px 15px",
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: stu.present ? "#28a745" : "#dc3545",
                    color: "#fff",
                    cursor: "default"
                  }}
                >
                  {stu.present ? "Present" : "Absent"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentDashboard;
