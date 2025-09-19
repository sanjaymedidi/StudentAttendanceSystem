
import React, { useState, useEffect } from "react";

const Summary = ({ section }) => {
  const [summaryData, setSummaryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sections = section ? [section] : ["CSE-A", "CSE-B", "CSE-C"];
        const data = [];

        for (let sec of sections) {
          const res = await fetch(`/studentSection${sec}.json`);
          const students = await res.json();
          const total = students.length;
          const presentCount = students.filter(s => s.present).length;
          const percentage = total ? Math.round((presentCount / total) * 100) : 0;
          data.push({ class: sec, total, presentCount, percentage });
        }

        setSummaryData(data);
      } catch (err) {
        console.error(err);
        setSummaryData([]);
      }
    };

    fetchData();
  }, [section]);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Attendance Summary</h2>
      <table style={{ margin: "0 auto", borderCollapse: "collapse", width: "60%" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Class</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Total Students</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Present</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Attendance %</th>
          </tr>
        </thead>
        <tbody>
          {summaryData.map(item => (
            <tr key={item.class}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.class}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.total}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.presentCount}</td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.percentage}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Summary;
