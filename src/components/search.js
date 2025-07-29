import { Input, Button, AutoComplete } from "antd";
import "../styles/headerBar.css";
import { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";

function SearchComponents() {

  const [value, setValue] = useState("");


  const [options, setOptions] = useState([]);

   const suggestions = [
    "Việt Nam",
    "Văn hóa",
    "Ngôn ngữ",
    "Nhật Bản",
    "Anh Quốc",
    "Truyền thống quốc gia",
    "Hàn Quốc",
    "Trung Quốc",
    "Tiếng Việt",
    "Tiếng Nhật Bản"
  ];
  const handleSearchChange = (searchText) => {
    const filtered = suggestions
      .filter((item) =>
        item.toLowerCase().includes(searchText.toLowerCase())
      )
      .map((item) => ({ value: item }));

    setOptions(filtered);
    setValue(searchText);
  };

  const handleSelect = (data) => {
    setValue(data);
    onSearch(data);
  };

  const onSearch = (keyword) => {
    console.log("Tìm kiếm:", keyword);
  };

  const handleSearch = () => {
    onSearch(value);
  };
  
  return (
<>
      <Button
        type="primary"
        icon={<SearchOutlined />}
        onClick={handleSearch}
        className="search-button"
      />
      <AutoComplete
        options={options}
        value={value}
        onChange={handleSearchChange}
        onSelect={handleSelect}
        className="search-input" 
      >
        <Input
          placeholder="Nhập từ khóa tìm kiếm"
          onPressEnter={handleSearch}
        />
      </AutoComplete>
</>
);
};
export default SearchComponents;
