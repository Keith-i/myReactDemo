import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Tabbar } from "react-vant";
import { useState, useEffect } from "react";
import { FriendsO, HomeO, Search } from "@react-vant/icons";

let IndexMain = () => {
  const [name, setName] = useState("/home");
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    setName(location.pathname)
  }, [location]);
  const goLink = (v) => {
    navigate(v, {
      replace: true,
    });
    setName(v);
  };
  return (
    <>
      <div className="main">
        <Outlet />
      </div>
      <div className="demo-tabbar">
        <Tabbar value={name} onChange={(v) => goLink(v)}>
          <Tabbar.Item name="/home" icon={<HomeO />}>
            首页
          </Tabbar.Item>
          <Tabbar.Item name="/list" icon={<Search />}>
            列表
          </Tabbar.Item>
          <Tabbar.Item name="/my" icon={<FriendsO />}>
            我的
          </Tabbar.Item>
        </Tabbar>
      </div>
    </>
  );
};

export default IndexMain;
