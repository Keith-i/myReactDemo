import React, { useState, useEffect } from "react";
import { Uploader } from "react-vant";

const ColorBoard = () => {
  const [uploadData, setUploadData] = useState([]);

  const onChangeFn = (file) => {
    console.log(file, "file");
    setUploadData(file);
  };

  useEffect(() => {
    console.log(uploadData, "uploadData");
  }, [uploadData]);

  return (
    <div>
      <Uploader accept="image/*" value={uploadData} onChange={onChangeFn} />
      <div
        onClick={() => {
          console.log(uploadData, "uploadData");
        }}
      >
        测试
      </div>
    </div>
  );
};

export default ColorBoard;
