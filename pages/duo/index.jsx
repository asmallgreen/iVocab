import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { IoHomeOutline,IoSettingsOutline,IoCalendarOutline } from "react-icons/io5";
import { PiBooks,PiStudent,PiFlagCheckeredFill } from "react-icons/pi";
import { RiPencilRulerLine } from "react-icons/ri";
import Link from 'next/link';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Home() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  // 學生列表與測驗分數列表
const fakeStudentsData = [
  { id: 1, name: '陳小明明' },
  { id: 2, name: '林小華' },
  { id: 3, name: '張小美' },
  { id: 4, name: '王小強' },
  { id: 5, name: '黃小玲' },
  { id: 6, name: '劉小明' },
  { id: 7, name: '楊小蓮' },
  { id: 8, name: '周小偉' },
  { id: 9, name: '李小婷' },
  { id: 10, name: '蔡小青' },
  { id: 11, name: '陳小明' },
  { id: 12, name: '林小華' },
  { id: 13, name: '張小美' },
  { id: 14, name: '王小強' },
  { id: 15, name: '黃小玲' },
  { id: 16, name: '劉小明' },
  { id: 17, name: '楊小蓮' },
  { id: 18, name: '周小偉' },
  { id: 19, name: '李小婷' },
  { id: 20, name: '蔡小青' },
  { id: 21, name: '陳小明' },
  { id: 22, name: '林小華' },
  { id: 23, name: '張小美' },
  { id: 24, name: '王小強' },
  { id: 25, name: '黃小玲' },
  { id: 26, name: '劉小明' },
  { id: 27, name: '楊小蓮' },
  { id: 28, name: '周小偉' },
  { id: 29, name: '李小婷' },
  { id: 30, name: '蔡小青' },
];
const maxLength = fakeStudentsData.reduce((max, student) => {
  return Math.max(max, student.name.length);
}, 0);
const examsWithScores = [
  { examName: '11/29小考', scores: [85, 92, 78, 65, 90, 87, 72, 95, 88, 76, 83, 70, 94, 81, 77, 89, 73, 91, 84, 79, 96, 68, 82, 74, 97, 86, 75, 69, 98, 93] },
  { examName: '11/30晨考', scores: [72, 89, 94, 78, 85, 76, 91, 80, 88, 83, 95, 77, 82, 96, 69, 75, 98, 84, 73, 90, 87, 81, 68, 93, 79, 74, 97, 86, 71, 92] },
  { examName: '12/1期中考', scores: [93, 79, 85, 72, 98, 86, 71, 94, 78, 88, 81, 95, 74, 90, 77, 68, 91, 84, 82, 89, 96, 75, 69, 92, 73, 76, 97, 83, 80, 87] },
  { examName: '12/5期末考', scores: [70, 88, 74, 95, 81, 77, 93, 82, 96, 69, 87, 84, 78, 91, 75, 83, 89, 71, 68, 92, 79, 97, 86, 90, 76, 94, 85, 73, 98, 72] },
];
const averages = examsWithScores.map(exam => ({
  examName: exam.examName,
  averageScore: (exam.scores.reduce((acc, score) => acc + score, 0) / exam.scores.length).toFixed(1),
}));

  // 接受過的考試數量
  const QuizTakenPieChart = () => {
    const data = {
      labels: ['Remaining', 'Quiz Taken Rate'],
      datasets: [
        {
          data: [2, 8],
          backgroundColor: ['#00000000', '#d6e6f8'],
          borderColor: ['transparent', 'rgba(0, 0, 0, 1)'],
          borderWidth: 1,
          borderAlign:'inner',
        },
      ],
    };
  
    const options = {
      plugins: {
        legend: {
          display: false,
        },
      },
    };
  
    return (
      <div style={{ width: '150px', height: '150px' }}>
        <Pie data={data} options={options} />
      </div>
    );
  };

  // 平均正確率
  const AccuracyPieChart = () => {
    const data = {
      labels: ['Remaining', 'Accuracy Rate'],
      datasets: [
        {
          data: [10, 90],
          backgroundColor: ['#00000000', '#ffcdd2'],
          borderColor: ['transparent', 'rgba(0, 0, 0, 1)'],
          borderWidth: 1,
          borderAlign:'inner',
        },
      ],
    };
  
    const options = {
      plugins: {
        legend: {
          display: false,
        },
      },
    };
  
    return (
      <div style={{ width: '150px', height: '150px' }}>
        <Pie data={data} options={options} />
      </div>
    );
  };
  // 平均通過率
  const PassingPieChart = () => {
    const data = {
      labels: ['Remaining', 'Passing Rate'],
      datasets: [
        {
          data: [10, 90],
          backgroundColor: ['#00000000', '#e5ffdb'],
          borderColor: ['transparent', 'rgba(0, 0, 0, 1)'],
          borderWidth: 1,
          borderAlign:'inner',
        },
      ],
    };
  
    const options = {
      plugins: {
        legend: {
          display: false,
        },
      },
    };
  
    return (
      <div style={{ width: '150px', height: '150px' }}>
        <Pie data={data} options={options} />
      </div>
    );
  };
  // 平均分數
  const ScorePieChart = () => {
    const data = {
      labels: ['Remaining', 'Average Score'],
      datasets: [
        {
          data: [16.5, 83.5],
          backgroundColor: ['#00000000', '#f1f1d1'],
          borderColor: ['transparent', 'rgba(0, 0, 0, 1)'],
          borderWidth: 1,
          borderAlign:'inner',
        },
      ],
    };
  
    const options = {
      plugins: {
        legend: {
          display: false,
        },
      },
    };
  
    return (
      <div style={{ width: '150px', height: '150px' }}>
        <Pie data={data} options={options} />
      </div>
    );
  };
  
  return (
    <>
    <div className="flex justify-start">
      <div className="left-sidebar bg-light min-h-screen">
        <div><div className="flex items-center justify-center p-8"><img className="" src="./logo.png"></img></div></div>
        <div className="pt-8 flex justify-center">
          <ul className="text-main side-list text-h2">
          <Link href='/duo/overview'><li className="group px-7 flex flex-grow items-center hover:bg-main hover:rounded-xl"><IoHomeOutline className="order-1 mr-5  group-hover:text-light"/><span className="order-2 group-hover:text-light">Overview</span></li></Link>
            <li className="group px-7 flex flex-grow items-center hover:bg-main hover:rounded-xl"><PiBooks className="order-1 mr-5 group-hover:text-light"/><span className="order-2 group-hover:text-light">Library</span></li>
            <li className="group px-7 flex flex-grow items-center hover:bg-main hover:rounded-xl"><RiPencilRulerLine className="order-1 mr-5 group-hover:text-light"/><span className="order-2 group-hover:text-light">Quiz</span></li>
            <li className="group px-7 flex flex-grow items-center bg-main rounded-xl hover:bg-main hover:rounded-xl"><PiStudent className="order-1 mr-5 group-hover:text-light text-light"/>
            <span className="order-2 group-hover:text-light text-light">Students</span></li>
            <li className="group px-7 flex flex-grow items-center hover:bg-main hover:rounded-xl"><PiFlagCheckeredFill className="order-1 mr-5 group-hover:text-light"/>
<span className="order-2 group-hover:text-light">Stage</span></li>
            <li className="group px-7 flex flex-grow items-center hover:bg-main hover:rounded-xl"><IoSettingsOutline className="order-1 mr-5 group-hover:text-light"/>
<span className="order-2 group-hover:text-light">Setting</span></li>
          </ul>
        </div>
        <div>
        <div className="small-data mx-auto mt-5">
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="text-wrapper-2 text-dark">learning hours</div>
          <div className="text-wrapper-3 text-dark">students</div>
          <div className="text-wrapper-4 text-dark">1290</div>
          <div className="text-wrapper-5 text-dark">54</div>
          <img className="student" alt="Student" src="./student 1.png" />
        </div>
      </div>
        </div>
      </div>
{/* 右側section */}
      <div className="flex-grow bg-primary text-dark">
        {/* 班級&日期區間 */}
        <div className="flex p-10">
          <div><span>班級：
            <select className="class-selection bg-light p-2 rounded-xl">
              <option>101班</option>
            </select>
            </span></div>
          <div className="ps-20 relative whitespace-nowrap">
            <IoCalendarOutline className='text-dark z-10 top-2 right-4 absolute text-2xl'/>
            <IoCalendarOutline className='text-dark top-2 right-60 z-10 absolute text-2xl'/>
            <span>日期區間：
            <DatePicker
            className='bg-light p-2 rounded-xl mx-2'
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        placeholderText="開始日期"
      />
      
      至
      <DatePicker
      className='bg-light p-2 rounded-xl mx-2'
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        placeholderText="結束日期"
      />
      </span>
      </div>
        </div>
        {/* 班級整體概況 */}
        <div className='px-10'>
          <div className='text-h3'>101班整體概況：</div>
          <div className='grid grid-cols-4 font-bold'>
            <div className='border p-2 flex flex-col items-center'><div>No. of Quizzes Taken:</div><div>5</div></div>
            <div className='border-y border-r p-2 flex flex-col items-center'><div>Average Accuracy Rate:</div><div>90%</div></div>
            <div className='border-y border-r p-2 flex flex-col items-center'><div>Average Passing Rate:</div><div>75%</div></div>
            <div className='border-y border-r p-2 flex flex-col items-center'><div>Average Score:</div><div>83.5</div></div>
            <div className='border-x border-b p-2 flex justify-center bg-light'><QuizTakenPieChart/></div>
            <div className='border-r border-b p-2 flex justify-center bg-light'><AccuracyPieChart/></div>
            <div className='border-r border-b p-2 flex justify-center bg-light'><PassingPieChart/></div>
            <div className='border-r border-b p-2 flex justify-center bg-light'><ScorePieChart/></div>
          </div>
        </div>
        {/* 班級學生概況 */}
        <div className='p-10 text-h3'>
          <div className='text-h3'>101班學生概況：</div>
          <div>
            
          </div>
            <div className={`grid auto-cols-min grid-flow-col`}>
          <div className='w-48 border'>
               <div className='text-right p-1 pr-5'><span>測驗</span></div>
               <div className='p-1 pl-5'><span>學生</span></div>
            </div>
          {examsWithScores.map((exam, examIndex) => (
          <div key={examIndex} className='col-span-1 w-20 p-2 border-r border-y'>{exam.examName}</div>
          ))}
          </div>
          <div className={`grid auto-cols-min grid-flow-col flex items-center`}>
          <div className='w-48 p-5 border-b border-x text-center'>平均分數</div>
              {averages.map((average,averageIndex)=>(
                <div key={averageIndex} className='w-20 p-5 text-center border-r border-b'>{average.averageScore}</div>
              ))}
          </div>
          <div className='flex'>
          <div>
          {fakeStudentsData.map((student,studentIndex)=>(
         <div className='grid grid-cols-5 w-48 text-center'>
          <div className='px-2 py-4 border-x border-b col-span-2'>{student.id}號</div>
          <div className='p-4 border-r border-b col-span-3'>{student.name}</div>
         </div>
          ))}
          </div>
            {examsWithScores.map((scores, scoresIndex)=>( 
              <div key={scoresIndex} className='grid grid-cols-1'>
                {scores.scores.map((score,scoreIndex)=>(
                  <div key={scoreIndex} className='w-20 p-4 text-center border-r border-b'>{score}</div>
                ))}
          </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>

  )
}

