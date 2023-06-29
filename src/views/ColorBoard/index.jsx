import "./style.scss";
import React, { useState, useEffect } from "react";
import { Uploader } from "react-vant";
import ColorThief from "colorthief";

// 提取颜色列表
let ColorList = (props) => {
  return (
    <>
      <div>
        {props.colorListData.map((item, index) => (
          <div key={item.id}>
            <div className="flexbox">
              <span>主要颜色：</span>
              <div
                className="color-item"
                style={{ background: item.colorPrimary }}
              ></div>
            </div>
            <div className="flexbox">
              <span>调色板：</span>
              {item.colorPaletteHEX.map((item2, index2) => (
                <div
                  className="color-item"
                  key={index2}
                  style={{ background: item2 }}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const ColorBoard = () => {
  const [colorListData, setColorListData] = useState([]); // 色卡
  const [uploadData, setUploadData] = useState([]);
  const [deling, setDeling] = useState(false); // 是否正在删除

  // RGBA 值
  const rgbaString = (rgb) => {
    const [r, g, b] = rgb;
    return `rgba(${r}, ${g}, ${b}, 1)`;
  };

  // 十六进制色块
  const hexString = (rgb) => {
    const [r, g, b] = rgb;
    const hex = ((r << 16) | (g << 8) | b).toString(16).padStart(6, "0");
    return `#${hex}`;
  };

  // 图片变化时调用
  const onChangeFn = (fileList) => {
    console.log(fileList, "fileList");
    setUploadData(fileList);
  };

  // 删除图片调用
  const onDeleteFn = (item) => {
    console.log(item.key, "删除");
    console.log(colorListData, "MMM");
    setDeling(true);
    const updatedColorListData = colorListData.filter(
      (color) => color.id !== item.key
    );
    setColorListData(updatedColorListData);
    // const updatedColorListData = colorListData.filter(
    //   (item) => item.id !== item.key
    // );
    // console.log(updatedColorListData, "1111");
    // setColorListData(updatedColorListData);
    // console.log(colorListData, "ColorListData====");
  };

  useEffect(() => {
    console.log(uploadData, "uploadData");
    console.log(colorListData, "colorListData");
    if (deling) {
      setDeling(false);
      return
    }
    if (colorListData.length > 0 && uploadData.length > 0) {
      let hasColorList = colorListData.some(
        (item) => item.id === uploadData[uploadData.length - 1].key
      );
      if (hasColorList) {
        console.log("这里执行");
        return;
      }
    }
    if (uploadData && uploadData.length > 0) {
      const image = new Image();
      image.onload = () => {
        const colorThief = new ColorThief();
        const colorPrimary = colorThief.getColor(image); // 获取图片的主要颜色
        const colorPalette = colorThief.getPalette(image, 10); // 获取图片的调色板，包含8个主要颜色

        console.log("色卡:", colorPalette);
        console.log("RGBA色:", rgbaString(colorPrimary));
        console.log("16位色", hexString(colorPrimary));
        let objItem = {
          id: uploadData[uploadData.length - 1].key,
          colorPrimary: rgbaString(colorPrimary),
          colorPaletteRGBA: colorPalette.map((item) => rgbaString(item)),
          colorPaletteHEX: colorPalette.map((item) => hexString(item)),
        };
        setColorListData((prevData) => [...prevData, objItem]);        
      };

      image.src = uploadData[uploadData.length - 1].url;
    }
  }, [uploadData, colorListData, deling]);

  return (
    <div>
      <Uploader
        accept="image/*"
        value={uploadData}
        onDelete={onDeleteFn}
        onChange={onChangeFn}
      />
      <ColorList colorListData={colorListData} />
      <div
        onClick={() => {
          console.log(uploadData, "uploadData");
        }}
      ></div>
    </div>
  );
};

export default ColorBoard;
