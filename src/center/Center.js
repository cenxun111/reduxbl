import React from "react";
import CenteredGrid from "./CenterLay";
import head2 from "../images/head2.jpeg";
import c2 from "../images/c2.PNG";
const center = () => {
  return (
    <div>
      <h1 className="bg-gray-50 text-3xl mt-10">内容列表</h1>
      <h1 className="bg-gray-50 text-xl pt-6">
        本頁面預設以更新順序排序，最近更新的動畫會在最上面。
      </h1>
      <CenteredGrid />
    </div>

  );
};

export default center;
