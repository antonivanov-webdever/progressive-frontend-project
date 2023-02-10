import {classNames} from "shared/libs/classNames/classNames";
import cls from "./Navbar.module.scss";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to="/" className={cls.link} theme={AppLinkTheme.SECONDARY}>HOME</AppLink>
        <AppLink to="/about" className={cls.link} theme={AppLinkTheme.SECONDARY}>ABOUT</AppLink>
      </div>
    </div>
  );
};
