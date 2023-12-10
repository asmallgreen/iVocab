import React from "react";
import PieChart from "../../components/students/chart_data";

const TableComponent = ({ headers }) => {
  //圓餅圖
  const average = {
    labels: ["Remaining", "Average Score"],
    datasets: [
      {
        data: [25, 75],
        backgroundColor: ["#00000000", "#70B9B1"],
        borderColor: ["transparent", "rgba(0, 0, 0, 0)"],
        // borderWidth: 1,
        borderAlign: "inner",
      },
    ],
  };

  const heighest = {
    labels: ["Remaining", "Heighest Score"],
    datasets: [
      {
        data: [10, 90],
        backgroundColor: ["#00000000", "#EAB25F"],
        borderColor: ["transparent", "rgba(0, 0, 0, 0)"],
        // borderWidth: 1,
        borderAlign: "inner",
      },
    ],
  };

  const lowest = {
    labels: ["Remaining", "Lowest Score"],
    datasets: [
      {
        data: [55, 45],
        backgroundColor: ["#00000000", "#F66178"],
        borderColor: ["transparent", "rgba(0, 0, 0, 0)"],
        // borderWidth: 1,
        borderAlign: "inner",
      },
    ],
  };

  return (
    <div className="container mx-auto flex items-center">
      <table className="table-auto text-dark">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="border px-20 py-2 bg-light">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-20 py-2 place-content-center">
              <PieChart data={average} />
            </td>
            <td className="border px-20 py-2 place-content-center">
              <PieChart data={heighest} />
            </td>
            <td className="border px-20 py-2 place-content-center">
              <PieChart data={lowest} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
