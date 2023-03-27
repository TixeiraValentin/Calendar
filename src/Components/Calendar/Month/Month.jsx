import React from "react";
import Day from "../Day/Day";
import "./month.css"

function transpose(matrix) {
  return matrix[0].map((_, columnIndex) => matrix.map(row => row[columnIndex]));
}

export default function Month({ month }) {

  const transposedMonth = transpose(month);
  
  return (
    <div className="containerMonth">
      {transposedMonth.map((row, i) => (
        <div className="containerDayDesdeMonth" key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} isFirst={idx === 0} />
          ))}
        </div>
      ))}
    </div>
  );
}
