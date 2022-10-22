import { NavLinkProps, NavLink } from "react-router-dom";
import styles from "@/components/NavBar.module.css";

const NavBarButton = (props: NavLinkProps) => (
  <NavLink
    className={
      styles.button +
      " flex items-center rounded border-2 border-b-4 border-gray-500 border-b-amber-600 px-4 py-2 font-semibold transition-colors duration-150 hover:bg-gray-400"
    }
    {...props}
  />
);

const NavBar = () => {
  return (
    <div class="y-0 fixed flex w-full items-center justify-center gap-4 border-b-2 border-b-gray-700 py-4">
      <NavBarButton to="/" end>
        Home
      </NavBarButton>
    </div>
  );
};

export default NavBar;
