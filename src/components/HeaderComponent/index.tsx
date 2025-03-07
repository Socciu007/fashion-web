import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";
import TabComponent from "../TabComponent";
import type { TabsProps } from "antd";
import "./style.scss";
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const navigate = useNavigate()
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Home"
    },
    {
      key: "2",
      label: "About",
    }
  ];

  return (
    <div className="header-component">
      <div className="header-component__menu">
        <div className="header-component__menu-item">
          <TabComponent items={items} onChange={() => {}} />
        </div>
        <div className="header-component__menu-item">
          <Link to="/login">Login</Link>
        </div>
      </div>
      <div className="header-component__logo">
        <div className="header-component__logo-item">
          <img style={{ cursor: "pointer" }} src={logo} alt="img-logo" onClick={() => navigate("/")} />
        </div>
      </div>
      <div className="header-component__type">
        <div className="header-component__type-item">BAGS</div>
        <div className="header-component__type-item">FRAGRANCE</div>
        <div className="header-component__type-item">JEWELLERY</div>
      </div>
    </div>
  );
};

export default HeaderComponent;
