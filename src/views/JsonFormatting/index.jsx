import React from "react";
import ReactJson from "react-json-view";

const JsonFormatting = () => {
  const jsonData = {
    name: "John Doe",
    age: 25,
    address: {
      street: "123 Main St",
      city: "New York",
      country: "USA",
    },
  };

  return (
    <div>
      <h2>JSON 数据格式化</h2>
      <ReactJson src={jsonData} theme="rjv-default" />
    </div>
  );
};

export default JsonFormatting;
