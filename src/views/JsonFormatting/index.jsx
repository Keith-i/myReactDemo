import "./style.scss";
import React, { useState } from "react";
import ReactJson from "react-json-view";
import { Input, Button, Toast } from "react-vant";

const JsonFormatting = () => {
  const [jsonDataStr, setJsonDataStr] = useState(""); // 输入json数据
  const [jsonData, setJsonData] = useState({}); // 输出json数据

  // 格式化
  const formatFn = () => {
    let mytest = cleanJsonString(jsonDataStr);
    console.log(mytest, "mytest");
    try {
      let validJsonString = cleanJsonString(jsonDataStr);
      let obj = JSON.parse(validJsonString);
      setJsonData(obj);
      console.log(obj, "obj");
    } catch (error) {
      Toast.fail("无效 JSON 格式");
    }
  };

  // 清理 JSON 字符串，去除注释和多行字符串
  const cleanJsonString = (str) => {
    // 去除注释
    const regexComments = /\/\/.*$|\/\*[\s\S]*?\*\//gm;
    const cleanedStr = str.replace(regexComments, "");

    // 去除多行字符串
    const regexMultilineStrings =
      /(?<!\\)(?:\\\\)*'''[\s\S]*?'''|(?<!\\)(?:\\\\)*"""[\s\S]*?"""/gm;
    const cleanedStrWithoutMultilineStrings = cleanedStr.replace(
      regexMultilineStrings,
      ""
    );

    // 去除干扰符号
    const regexInterferingSymbols = /[^\x20-\x7E]+/g;
    const cleanedStrWithoutInterferingSymbols =
      cleanedStrWithoutMultilineStrings.replace(regexInterferingSymbols, "");

    // 去除多余换行符和空白字符
    const cleanedStrWithoutExtraSpaces =
      cleanedStrWithoutInterferingSymbols.replace(/(\r?\n|\s)+/g, "");

    // 删除最后一个属性后面的逗号
    const regexLastComma = cleanedStrWithoutExtraSpaces.replace(
      /,(?=\s*[\]}])/g,
      ""
    );

    // 将属性名加上双引号
    const debleyh = regexLastComma.replace(/([a-zA-Z0-9]+)(?=:)/g, '"$1"');

    return debleyh.trim();
  };

  return (
    <div className="box">
      <h2 style={{ textAlign: "center" }}>JSON 数据格式化</h2>
      <div>
        <div>请输入JSON内容</div>
        <div className="inpbox">
          <Input.TextArea
            placeholder="请输入JSON内容"
            className="textareabox"
            autoSize={{
              maxHeight: 200,
              minHeight: 80,
            }}
            onChange={setJsonDataStr}
          />
        </div>
        <Button type="primary" block onClick={formatFn}>
          格式化
        </Button>
      </div>
      {/* 解释出来的内容 */}
      <div className="outbox">
        <ReactJson src={jsonData} theme="rjv-default" />
      </div>
    </div>
  );
};

export default JsonFormatting;
