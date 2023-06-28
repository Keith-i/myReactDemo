import "./style.scss";
import { Grid } from "react-vant";

// 工具项
let ToolItem = (props) => {
  // 跳转到工具详情
  let toToolDetail = (item) => {
    console.log(item, "工具id");
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
    },
    {
      id: 2,
      name: "提取颜色版2",
    },
    {
      id: 3,
      name: "提取颜色版3",
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
