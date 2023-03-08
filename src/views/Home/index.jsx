import "./style.scss";
import { Button, Swiper, Toast } from "react-vant";

// 轮播内容
let MySwiperItem = () => {
  const colors = ["#ace0ff", "#bcffbd", "#e4fabd", "#ffcfac"];
  let items = colors.map((color, index) => (
    <Swiper.Item key={color}>
      <div
        className="itembox"
        style={{ background: color }}
        onClick={() => {
          Toast.info(`你点击了卡片${index + 1}`);
        }}
      ></div>
    </Swiper.Item>
  ));
  return items;
};

// 卡种列表
let CardBox = (props) => {
  return (
    <>
      <div>选择卡种回收</div>
      <div className="groupbox">
        <div className="gridbox">
          {props.list.map((item) => (
            <div className="vanitem" key={item.id}>
              <img
                src={item.img_url}
                alt={item.img_url}
              />
              <div className="vanname">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// 主要内容
let Home = () => {
  const cardList = [
    {
      id: 1,
      name: "万里通",
      img_url:
        "http://mtest.mf178.cn/uploads/mf_card/card_kind_config/card_kind_config1611905230.png",
    },
    {
      id: 2,
      name: '联通话费卡',
      img_url: 'http://mtest.mf178.cn/uploads/mf_card/card_kind_config/card_kind_config1611905119.png'
    },
  ];
  return (
    <>
      <div className="banner">
        <Swiper autoplay={3000}>{MySwiperItem()}</Swiper>
      </div>
      <CardBox list={cardList} />
      <div className="title">这是首页</div>
      <Button>我是内容新</Button>
    </>
  );
};

export default Home;
