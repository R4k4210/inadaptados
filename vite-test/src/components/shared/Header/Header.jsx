import { Link } from "react-router-dom";
import { HOME } from "../../../constants/routes";
import "./Header.css";

const Header = () => {
  return (
    <Link to={HOME}>
      <div className="header">HEADER</div>
    </Link>
  );
};

export default Header;
