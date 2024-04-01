import { menuItems } from "@/utils";
import styles from "./Menue.module.scss";

interface MenuProps {
  isToggle: boolean;
  setIsToggle: (value: boolean) => void;
}

const Menu = ({ isToggle, setIsToggle }: MenuProps) => {
  return (
    <nav className={`${styles.wrapper} ${isToggle ? styles.active : ""}`}>
      <div>
        <ul>
          {menuItems.map((item) => (
            <li key={item.id} onClick={() => setIsToggle(false)}>
              <a href={`#${item.link}`}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
