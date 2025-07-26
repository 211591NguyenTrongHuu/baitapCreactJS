import React, { useState } from "react";
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import { Divider, Layout, Menu, Switch } from "antd";
import context from "../context";
import "../styles/siderbar.css";
function SiderBar() {
  const { Sider } = Layout;
  const [mode, setMode] = useState("inline");
  const [theme, setTheme] = useState("light");
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const [collapsed, setCollapsed] = useState(false);

  const rootSubmenuKeys = ["sub1", "sub2"];

  const items = [
    {
      key: "1",
      icon: <MailOutlined />,
      label: "Facebook",
    },
    {
      key: "2",
      icon: <CalendarOutlined />,
      label: "Calendar",
    },
    {
      key: "sub1",
      label: "Cultures",
      icon: <AppstoreOutlined />,
      children: [
        { key: "3", label: "Viet Nam" },
        { key: "4", label: "English" },
        { key: "5", label: "Korea" },
        { key: "6", label: "China" },
        { key: "7", label: "Japan" },
        {
          key: "sub1-2",
          label: "Languages",
          children: [
            { key: "8", label: "Vietnamese" },
            { key: "9", label: "English" },
            { key: "10", label: "Korean" },
            { key: "11", label: "Chinese" },
            { key: "12", label: "Japanese" },
          ],
        },
      ],
    },
    {
      key: "sub2",
      label: "Setting",
      icon: <SettingOutlined />,
      children: [
        { key: "13", label: "Languages" },
        { key: "14", label: "Styles" },
      ],
    },
    {
      key: "link",
      icon: <LinkOutlined />,
      label: (
        <a
          href="http://nguyentronghuu.id.vn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
      ),
    },
  ];

  const changeMode = (value) => {
    setMode(value ? "vertical" : "inline");
  };

  const changeTheme = (value) => {
    setTheme(value ? "dark" : "light");
  };

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => !openKeys.includes(key));
    if (rootSubmenuKeys.includes(latestOpenKey)) {
      setOpenKeys([latestOpenKey]);
    } else {
      setOpenKeys(keys);
    }
  };

  return (
    <Sider
      width="25%"
      className="sider"
      collapsed={collapsed}
      collapsible
      trigger={null}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div style={{ padding: 8 }}>
        <button
          className="toggle-menu-btn"
          onClick={() => setCollapsed(!collapsed)}
        >
          <img
            className="headerImg"
            src={context.Menu}
            alt="Trang chủ vui vẻ"
          />
          {/* {collapsed ? "Mở rộng" : "Thu gọn"} */}
        </button>
        <div style={{ width: "100%" }}>
          <Switch onChange={changeMode} /> Chế độ
          <Divider type="vertical" />
          <Switch onChange={changeTheme} /> Giao diện
        </div>
        <Menu
          style={{ width: "100%" }}
          selectedKeys={["1"]}
          openKeys={collapsed ? [] : openKeys} // khi thu gọn thì đóng tất cả menu
          onOpenChange={onOpenChange}
          mode={mode}
          theme={theme}
          items={items}
        />
      </div>
    </Sider>
  );
}

export default SiderBar;
