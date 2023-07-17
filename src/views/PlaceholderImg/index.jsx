import "./style.scss";
import { useState } from "react";
import { Button, hooks } from "react-vant";
import { ColorSelector } from "color-selector-react";
import "color-selector-react/dist/es/index.css";

let ColorSelectorFn = (props) => {
  const [visible, setVisible] = useState(false);
  const { colorVal, onSelectClick } = props;
  return (
    <>
      <div
        style={{ position: "relative", display: "inline-block"}}
      >
        <div
          color={colorVal}
          onClick={() => setVisible(!visible)}
          style={{
            width: 20,
            height: 20,
            border: "1px solid #ccc",
            backgroundColor: colorVal,
          }}
        />
        {
          <ColorSelector
            style={{ position: "absolute", zIndex: 3, backgroundColor: "#fff" }}
            color={colorVal}
            visible={visible}
            onChange={({ color }) => onSelectClick(color)}
            onVisibleChange={(v) => setVisible(v)}
          />
        }
      </div>
    </>
  );
};

let PlaceholderImg = () => {
  //   let imgsrc =
  //     "https://iph.href.lu/300x300?text=%E5%86%85%E5%AE%B9&fg=674ea7&bg=8e7cc3";
  const [state, updateState] = hooks.useSetState({
    imgsrc: "",
    width: 123,
    height: 123,
    text: "", // 文字
    fg: "", // 设置文字颜色
    bg: "", // 设置背景色
  });

  let postImgFn = () => {
    console.log(state,);
    let fg = state.fg.slice(1);
    let bg = state.bg.slice(1);
    console.log(fg, bg)
    let url = `https://iph.href.lu/${state.width}x${state.height}?text=${state.text}&fg=${fg}&bg=${bg}`;
    console.log(url, 'kkk');
    updateState({
      imgsrc: url,
    });
  };

  //   颜色选择
  let handColorSel = (val, keyName) => {
    console.log(val, keyName, "颜色");
    updateState({ [keyName]: val });
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
        <div>
          <ColorSelectorFn
            onSelectClick={(colorVal) => handColorSel(colorVal, "fg")}
            colorVal={state.fg}
          />
        </div>
      </div>
      <div className="input-item">
        <div className="inptit">背景颜色</div>
        <div>
          <ColorSelectorFn
            onSelectClick={(colorVal) => handColorSel(colorVal, "bg")}
            colorVal={state.bg}
          />
        </div>
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
