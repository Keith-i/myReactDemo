import "./style.scss";
import React, { useState } from "react";
import ReactJson from "react-json-view";
import { Input, Button, Toast } from "react-vant";

const JsonFormatting = () => {
  const [jsonDataStr, setJsonDataStr] = useState(""); // 输入json数据
  const [jsonData, setJsonData] = useState({}); // 输出json数据

  // 格式化
  const formatFn = () => {
    try {
      let validJsonString = cleanJsonString(jsonDataStr).replace(
        /([a-zA-Z0-9]+)(?=:)/g,
        '"$1"'
      );
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

    return cleanedStrWithoutInterferingSymbols.trim();
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
