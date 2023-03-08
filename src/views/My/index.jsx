import "./style.scss";
import React from "react";
// 顶部内容
const Topcom = () => {
  return (
    <div className="headbox">
      <div className="headtit">测试内容</div>
    </div>
  )
};

class My extends React.Component {
  render() {
    return (
      <>
        <Topcom />
        <div>我的</div>
      </>
    );
  }
}

export default My;
