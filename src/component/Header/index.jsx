import ButtonHomeBack from "../ButtonBackHome"
import { Link , useLocation} from "react-router-dom"
import data from "../../js/data";
import './index.css'

const Header = () => {
  const currentLocation = useLocation();
  console.log(currentLocation);
  return (
    <header className="header">
      <h2 className="header__title">My Header</h2>
      {currentLocation.pathname !== "/" && (
        <ButtonHomeBack />
      )}
      {currentLocation.pathname === "/" && (
        <ul className="header__menu">
          {data.map((item) => (
            <li key={item.id}>
              <Link to={`${currentLocation.pathname}${item.id}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Header
