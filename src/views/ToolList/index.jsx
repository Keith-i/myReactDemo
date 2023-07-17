import "./style.scss";
import { Grid } from "react-vant";
import { useNavigate } from "react-router-dom";

// 工具项
let ToolItem = (props) => {
  let navigate = useNavigate();
  // 跳转到工具详情
  let toToolDetail = (item) => {
    console.log(item, "工具id");
    if (item.path) {
      navigate(item.path);
    } else {
      return;
    }
  };
  return (
    <>
      <Grid columnNum={3}>
        {props.toolList.map((item) => (
          <Grid.Item key={item.id} onClick={() => toToolDetail(item)}>
            <div>{item.name}</div>
          </Grid.Item>
        ))}
      </Grid>
    </>
  );
};

let ToolList = () => {
  let toolList = [
    {
      id: 1,
      name: "提取颜色版",
      path: "/color-board",
    },
    {
      id: 2,
      name: "JSON格式化",
      path: "/json-format",
    },
    {
      id: 3,
      name: "占位图片",
      path: '/placeholder-img'
    },
    {
      id: 4,
      name: "提取颜色版4",
    },
    {
      id: 5,
      name: "提取颜色版5",
    },
    {
      id: 6,
      name: "提取颜色版6",
    },
  ];
  return (
    <>
      <div>工具列表</div>
      <ToolItem toolList={toolList} />
    </>
  );
};

export default ToolList;
