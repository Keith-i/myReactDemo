import "./style.scss";

let PlaceholderImg = () => {
  let imgsrc =
    "https://iph.href.lu/300x300?text=%E5%86%85%E5%AE%B9&fg=674ea7&bg=8e7cc3";
  return (
    <>
      <div>图片占位符</div>
      <img alt="" src={imgsrc} />
    </>
  );
};

export default PlaceholderImg;
