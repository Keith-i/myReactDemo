import "./style.scss";
import { Button, hooks } from "react-vant";

let PlaceholderImg = () => {
  //   let imgsrc =
  //     "https://iph.href.lu/300x300?text=%E5%86%85%E5%AE%B9&fg=674ea7&bg=8e7cc3";
  const [state, updateState] = hooks.useSetState({
    imgsrc: "",
    width: 123,
    height: 123,
    text: "",
  });

  let postImgFn = () => {
    console.log(state);
    let url = `https://iph.href.lu/${state.width}x${state.height}?text=${state.text}&fg=674ea7&bg=8e7cc3`;
    console.log(url)
    updateState({
      imgsrc: url,
    });
  };

  return (
    <>
      <div>图片占位符</div>
      <img alt="" src={state.imgsrc} />
      <div className="input-item">
        <div className="inptit">图片大小</div>
        <div className="inpgrop">
          <input
            value={state.width}
            type="number"
            placeholder="宽"
            onChange={(e) => updateState({ width: e.target.value })}
          />
          <span>×</span>
          <input
            value={state.height}
            type="number"
            placeholder="高"
            onChange={(e) => updateState({ height: e.target.value })}
          />
        </div>
      </div>
      <div className="input-item">
        <div className="inptit">文字颜色</div>
        <div>选择文字颜色</div>
      </div>
      <div className="input-item">
        <div className="inptit">背景颜色</div>
        <div>背景颜色</div>
      </div>
      <div className="input-item">
        <div className="inptit">显示文字</div>
        <input
          value={state.text}
          placeholder="内容"
          onChange={(e) => updateState({ text: e.target.value })}
        />
      </div>
      <div className="btn">
        <Button type="primary" onClick={postImgFn}>
          生成图片
        </Button>
      </div>
    </>
  );
};

export default PlaceholderImg;
