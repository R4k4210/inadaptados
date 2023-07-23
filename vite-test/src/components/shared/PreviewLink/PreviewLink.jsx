import { Link } from "react-router-dom";
import { PROFILE } from "../../../constants/routes";

const PreviewLink = ({ name }) => {
  return <Link to={PROFILE.replace(":name", name)}>{name}</Link>;
};

export default PreviewLink;
