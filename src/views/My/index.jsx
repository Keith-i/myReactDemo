// import "./style.scss";
import styles from "./style.module.scss";
import React from "react";
console.log(styles)
// 顶部内容
const Topcom = () => {
  return (
    <div className="headbox">
      <div className={styles.headtit}>测试内容<span className={styles.myt}>ccc</span></div>
    </div>
  );
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
