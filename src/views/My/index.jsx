// import "./style.scss";
import styles from "./style.module.scss";
import React from "react";
console.log(styles);
// 顶部内容
const Topcom = () => {
  return (
    <div className={styles.headbox}>
      <img
        src="http://ktest.mf178.cn/themes/vue/img/test.96a573c9.png"
        alt="http://ktest.mf178.cn/themes/vue/img/test.96a573c9.png"
      />
      <div className={styles.txtbox}>
        <div className={styles.name}>小明</div>
        <div className={styles.userid}>用户ID：00001</div>
      </div>
    </div>
  );
};

// 钱包部分
const Wallet = () => {
  return (
    <div className={styles.pricebox}>
      <div className={styles.pricecenter}>
        <div className={styles.tit}>未提现金额</div>
        <div className={styles.pricemm}>1000000元</div>
        <div className={styles.btn}>快速提现</div>
      </div>
    </div>
  );
};

class My extends React.Component {
  render() {
    return (
      <>
        <Topcom />
        <Wallet />
      </>
    );
  }
}

export default My;
