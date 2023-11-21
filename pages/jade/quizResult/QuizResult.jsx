import React from "react";
export default function QuizResult() {
  return (
    <div className="p-8 bg-stone-100 h-screen">
      <QuizResultHeader />
      <QuizResultContent />
    </div>
  );
}

function QuizResultHeader(params) {
  return (
    <div className="flex justify-between items-center flex-wrap lg:flex-nowrap gap-y-4 max-w-5xl mb-12 mx-auto">
      <button className=" px-5 py-3  rounded-lg shadow-md transform hover:scale-105 transition-all hover:bg-stone-200 outline-none focus:outline-none ">
        ﹤返回
      </button>

      <div className="flex">

        <select name="" id="" className="bg-stone-200 px-5 py-3 rounded-lg me-3">
          <option value="">一年一班</option>
          <option value="">一年二班</option>
          <option value="">一年三班</option>
        </select>
        <div className="text-2xl">11/9小考</div>
      </div>
      <button className=" px-5 py-3  rounded-lg shadow-md transform hover:scale-105 transition-all hover:bg-stone-200 outline-none focus:outline-none ">
        列印
      </button>
    </div>
  );
}

function QuizResultContent(params) {
  return (
    <div className="flex flex-col flex-wrap lg:flex-nowrap gap-y-4 max-w-5xl mb-12 mx-auto">
      <div className="">開始日期：2023年11月9日10：00am</div>
      <div className="">結束日期：2023年11月9日10：30am</div>
      <div className="">學生完成數：28/30</div>
    </div>
  );
}
