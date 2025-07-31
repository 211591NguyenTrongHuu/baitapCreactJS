import React, { useState } from "react";
import {
  FacebookFilled,
  CalendarFilled,
  AppstoreFilled,
  SettingFilled,
  LinkedinFilled,
  SendOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Divider, Layout, Menu, Switch, Calendar, theme } from "antd";
import context from "../context";
import "../styles/siderbar.css";
import useCalendarPanel from "../hooks/useCalendarPanel";
import { Link } from "react-router-dom";

function SiderBar() {
  const { Sider } = Layout;
  const { token } = theme.useToken();
  const [mode, setMode] = useState("inline");
  const [themeType, setThemeType] = useState("light");
  const [openKeys, setOpenKeys] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("1");

  const { showCalendar, toggleCalendar, hideCalendar, onPanelChange } =
    useCalendarPanel();
  const changeMode = (value) => {
    setMode(value ? "vertical" : "inline");
  };

  const changeTheme = (value) => {
    setThemeType(value ? "dark" : "light");
  };
  const rootSubmenuKeys = ["sub1", "sub2"];
  const items = [
    {
      key: "1",
      icon: <FacebookFilled />,
      label: "Facebook",
    },
    {
      key: "2",
      icon: <CalendarFilled />,
      label: "Lịch",
    },
    {
      key: "sub1",
      label: "Văn hóa",
      icon: <AppstoreFilled />,
      children: [
        { key: "3", label: "Việt Nam" },
        { key: "4", label: "Vương Quốc Anh" },
        { key: "5", label: "Hàn Quốc" },
        { key: "6", label: "Trung Quốc" },
        { key: "7", label: "NHật Bản" },
      ],
    },
    {
      key: "sub5",
      label: "Ngôn ngữ Việt Nam",
      icon: (
        <img
          src={context.contextImg.VietNam}
          alt="Ngôn ngữ"
          className="imgWorlds"
        />
      ),
      children: [
        { key: "8", label: "Từ vựng" },
        { key: "9", label: "Ngữ pháp" },
        { key: "10", label: "Nghe" },
        { key: "11", label: "Đọc" },
      ],
    },
    {
      key: "sub6",
      label: "Ngôn ngữ Anh",
      icon: (
        <img
          src={context.contextImg.Enghlish}
          alt="Ngôn ngữ"
          className="imgWorlds"
        />
      ),
      children: [
        { key: "12", label: "Từ vựng" },
        { key: "13", label: "Ngữ pháp" },
        { key: "14", label: "Nghe" },
        { key: "15", label: "Đọc" },
      ],
    },
    {
      key: "sub7",
      label: "Ngôn ngữ Hàn Quốc",
      icon: (
        <img
          src={context.contextImg.Korea}
          alt="Ngôn ngữ"
          className="imgWorlds"
        />
      ),
      children: [
        { key: "16", label: "Từ vựng" },
        { key: "17", label: "Ngữ pháp" },
        { key: "18", label: "Nghe" },
        { key: "19", label: "Đọc" },
      ],
    },
    {
      key: "sub8",
      label: "Ngôn ngữ Trung Quốc",
      icon: (
        <img
          src={context.contextImg.China}
          alt="Ngôn ngữ"
          className="imgWorlds"
        />
      ),
      children: [
        { key: "20", label: "Từ vựng" },
        { key: "21", label: "Ngữ pháp" },
        { key: "22", label: "Nghe" },
        { key: "23", label: "Đọc" },
      ],
    },
    {
      key: "sub9",
      label: "Ngôn ngữ Nhật Bản",
      icon: (
        <img
          src={context.contextImg.Japan}
          alt="Ngôn ngữ"
          className="imgWorlds"
        />
      ),
      children: [
        { key: "24", label: "Từ vựng" },
        { key: "25", label: "Ngữ pháp" },
        { key: "26", label: "Nghe" },
        { key: "27", label: "Đọc" },
      ],
    },
    {
      key: "sub3",
      label: "Chủ đề nổi bậc",
      icon: <SendOutlined />,
      children: [
        { key: "28", label: "Thành tựu nhân loại" },
        { key: "29", label: "Văn hóa doanh nghiệp" },
        { key: "30", label: "Văn hóa con người" },
        { key: "31", label: "Thành tích nổi bậc" },
      ],
    },
    {
      key: "sub10",
      label: (
        <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
          Về chúng tôi
        </Link>
      ),
      icon: <HomeOutlined />,
    },
    {
      key: "sub2",
      label: "Cài đặt",
      icon: <SettingFilled />,
      children: [
        {
          key: "32",
          label: "Ngôn ngữ",
          children: [
            {
              key: "33",
              label: (
                <span className="switchTabContainer">
                  <div className="switchTaptext">Tiếng Việt Nam</div>
                  <Switch onChange={changeTheme} />
                </span>
              ),
            },
            {
              key: "34",
              label: (
                <span className="switchTabContainer">
                  <div className="switchTaptext">Tiếng Hàn Quốc</div>
                  <Switch onChange={changeTheme} />
                </span>
              ),
            },
            {
              key: "35",
              label: (
                <span className="switchTabContainer">
                  <div className="switchTaptext">Tiếng Nhật Bản</div>
                  <Switch onChange={changeTheme} />
                </span>
              ),
            },
            {
              key: "36",
              label: (
                <span className="switchTabContainer">
                  <div className="switchTaptext">Tiếng Trung Quốc</div>
                  <Switch onChange={changeTheme} />
                </span>
              ),
            },
            {
              key: "37",
              label: (
                <span className="switchTabContainer">
                  <div className="switchTaptext">Tiếng Anh</div>
                  <Switch className="switchTab" onChange={changeTheme} />
                </span>
              ),
            },
          ],
        },
      ],
    },
    {
      key: "link",
      icon: <LinkedinFilled />,
      label: (
        <a
          href="http://nguyentronghuu.id.vn/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Thông tin thêm
        </a>
      ),
    },
  ];
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => !openKeys.includes(key));
    console.log(
      "keys:",
      keys,
      "prevOpenKeys:",
      openKeys,
      "latest:",
      latestOpenKey
    );

    if (
      keys.length === 0 ||
      (latestOpenKey && latestOpenKey.startsWith("sub"))
    ) {
      hideCalendar();
    }
    if (rootSubmenuKeys.includes(latestOpenKey)) {
      setOpenKeys([latestOpenKey]);
    } else {
      setOpenKeys(keys);
    }
  };

  const onMenuClick = ({ key }) => {
    console.log("key", key);
    if (key === "2") {
      toggleCalendar();
      setSelectedKey("2");
    } else {
      hideCalendar();
      setSelectedKey(key);
    }
  };

  const renderContent = () => {
    if (showCalendar) {
      return (
        <div
          className="calendarContainer"
          style={{
            border: `1px solid ${token.colorBorderSecondary}`,
            borderRadius: token.borderRadiusLG,
            backgroundColor: token.colorBorderSecondary,
          }}
        >
          <Calendar
            className="calendar"
            fullscreen={false}
            onPanelChange={onPanelChange}
            style={{
              backgroundColor: token.colorPrimaryTextHover,
            }}
          />
        </div>
      );
    }
    return null;
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
      <div>
        <div
          className={`menuContainer ${collapsed ? "collapsed" : "expanded"}`}
        >
          <button
            className={`toggle-menu-btn ${collapsed ? "collapsed" : "expanded"}`}
            onClick={() => setCollapsed(!collapsed)}
          >
            <img
              className="menuImg"
              src={context.contextImg.Menu}
              alt="Trang chủ vui vẻ"
            />
          </button>
        </div>
        <div style={{ width: "85%" }}>
          <Switch onChange={changeMode} /> Chế độ
          <Divider type="vertical" />
          <Switch onChange={changeTheme} /> Giao diện
        </div>
        <Menu
          style={{ width: "100%" }}
          selectedKeys={[selectedKey]}
          openKeys={collapsed ? [] : openKeys}
          onOpenChange={onOpenChange}
          onClick={onMenuClick}
          mode={mode}
          theme={themeType}
          items={items}
        />
        {renderContent()}
      </div>
    </Sider>
  );
}

export default SiderBar;
