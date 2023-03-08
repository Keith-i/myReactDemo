// import "./style.scss";
import styles from "./style.module.scss";
import React from "react";
import { Cell } from "react-vant";
import { ShopO, PhoneO, Idcard, Alipay } from "@react-vant/icons";
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

// 列表
const CellListMy = () => {
  return (
    <>
      <Cell title="提现记录" icon={<ShopO />} isLink>
        <div></div>
      </Cell>
      <Cell title="手机号" icon={<PhoneO />} isLink>
        <div></div>
      </Cell>
      <Cell title="银行卡" icon={<Idcard />} isLink>
        <div></div>
      </Cell>
      <Cell title="银行卡" icon={<Alipay />} isLink>
        <div></div>
      </Cell>
    </>
  );
};

// const My = () => {
//   return (
//     <>
//       <Topcom />
//       <Wallet />
//       <CellListMy />
//     </>
//   );
// };

class My extends React.Component {
  render() {
    return (
      <>
        <Topcom />
        <Wallet />
        <CellListMy />
      </>
    );
  }
}

export default My;
