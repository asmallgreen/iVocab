import React from "react";
import TableComponent from "@/components/students/chart_table";
import HorizontalBarChart from "@/components/students/barChart";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);
import { IoChevronBackCircleOutline, IoPrintOutline } from "react-icons/io5";

function IndividualScore() {
  //表格標題
  const headers = ["The Average", "The Highest", "The Lowest"];

  //表格內容
  const cells = ["30", "40", "20"];

  //長條圖
  const quizData = {
    labels: ["Quiz 1", "Quiz 2", "Quiz 3", "Quiz 4"],
    values: [20, 50, 75, 97], // Replace these with your actual data
  };

  return (
    <div className="max-w-[1160px] bg-[#f5f5f5]">
      {/* Head */}
      <div className="head place-content-between justify-between flex items-center px-9 pt-8 space-x-20">
        {/* 返回 */}
        <div className="icons justify-between flex items-center space-x-4">
          <IoChevronBackCircleOutline className="text-dark" size={24} />
          <p className="text-dark text-xl">返回</p>
        </div>
        {/* 標題 */}
        <div className="text-3xl text-dark relative whitespace-nowrap">
          101班 1號{" "}
          <select className="place-content-center">
            <option value="">黃小婷</option>
            <option value="">林興柔</option>
            <option value="">鄧阿元</option>
            <option value="">趙小妤</option>
            <option value="">黃小婷</option>
          </select>{" "}
          的歷次檢測整理報告
        </div>
        {/* icon */}
        <div className="icons justify-between flex items-center space-x-4">
          <IoPrintOutline className="text-dark" size={24} />
        </div>
      </div>
      {/* Body */}
      <div className="body px-9 py-8">
        <div className="flex items-center">
          <div className="flex items-center space-x-4 border-s-4 ps-2 mb-8 text-dark">
            <div className="text-2xl text-dark">Accuracy Rates</div>
          </div>
        </div>
        <div className="flex items-center place-content-center justify-center">
          <TableComponent headers={headers} cells={cells} />
          {/* <button className="px-5 text-main border-spacing-4 border-main border-2 rounded-xl hover:bg-main hover:text-white">
            Click
          </button> */}
        </div>
      </div>
      <div className="px-9 py-8">
        <div className="flex items-center">
          <div className="flex items-center space-x-4 border-s-4 ps-2 mb-8 text-dark">
            <div className="text-2xl text-dark">The Average Passing Rate</div>
          </div>
        </div>
        <div className="flex items-center place-content-center justify-center">
          <TableComponent headers={headers} cells={cells} />
        </div>
      </div>
      <div className="px-9 py-8">
        <div className="flex items-center">
          <div className="flex items-center space-x-4 border-s-4 ps-2 mb-8 text-dark">
            <div className="text-2xl text-dark">
              Quizzes Score Range Distribution
            </div>
          </div>
        </div>
        <div className="flex items-center place-content-center justify-center">
          <HorizontalBarChart data={quizData} />
        </div>
      </div>
      <div className="body px-9 py-8">
        <div className="flex items-center">
          <div className="flex items-center space-x-4 border-s-4 ps-2 mb-8 text-dark">
            <div className="text-2xl text-dark">Word(s) Spelt/Chosen Wrong</div>
          </div>
        </div>
        <div className="flex items-center place-content-center justify-center pb-6">
          <div className="container mx-auto items-center">
            <div className="text-2xl text-dark">Quiz 1</div>
            <table className="table-auto text-dark text-center">
              <thead>
                <tr>
                  <th className="border px-5 py-2 bg-light">編號</th>
                  <th className="border px-20 py-2 bg-light">中文</th>
                  <th className="border px-20 py-2 bg-light">詞性</th>
                  <th className="border px-20 py-2 bg-light">英文</th>
                  <th className="border px-20 py-2 bg-light">來源</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-5 py-2">1</td>
                  <td className="border px-20 py-2">蘋果</td>
                  <td className="border px-20 py-2">名詞</td>
                  <td className="border px-20 py-2">apple</td>
                  <td className="border px-20 py-2">龍騰第一冊第一課</td>
                </tr>
                <tr>
                  <td className="border px-5 py-2">2</td>
                  <td className="border px-20 py-2">香蕉</td>
                  <td className="border px-20 py-2">名詞</td>
                  <td className="border px-20 py-2">banana</td>
                  <td className="border px-20 py-2">Level1 Unit2</td>
                </tr>
                <tr>
                  <td className="border px-5 py-2">3</td>
                  <td className="border px-20 py-2">橘子</td>
                  <td className="border px-20 py-2">名詞</td>
                  <td className="border px-20 py-2">orange</td>
                  <td className="border px-20 py-2">大家說英語</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex items-center place-content-center justify-center">
          <div className="container mx-auto items-center">
            <div className="text-2xl text-dark">Quiz 2</div>
            <table className="table-auto text-dark text-center">
              <thead>
                <tr>
                  <th className="border px-5 py-2 bg-light">編號</th>
                  <th className="border px-20 py-2 bg-light">中文</th>
                  <th className="border px-20 py-2 bg-light">詞性</th>
                  <th className="border px-20 py-2 bg-light">英文</th>
                  <th className="border px-20 py-2 bg-light">來源</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-5 py-2">1</td>
                  <td className="border px-20 py-2">蘋果</td>
                  <td className="border px-20 py-2">名詞</td>
                  <td className="border px-20 py-2">apple</td>
                  <td className="border px-20 py-2">龍騰第一冊第一課</td>
                </tr>
                <tr>
                  <td className="border px-5 py-2">2</td>
                  <td className="border px-20 py-2">香蕉</td>
                  <td className="border px-20 py-2">名詞</td>
                  <td className="border px-20 py-2">banana</td>
                  <td className="border px-20 py-2">Level1 Unit2</td>
                </tr>
                <tr>
                  <td className="border px-5 py-2">3</td>
                  <td className="border px-20 py-2">橘子</td>
                  <td className="border px-20 py-2">名詞</td>
                  <td className="border px-20 py-2">orange</td>
                  <td className="border px-20 py-2">大家說英語</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndividualScore;
