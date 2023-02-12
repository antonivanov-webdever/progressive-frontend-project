import { t } from 'i18next';
import { classNames } from 'shared/libs/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink
                to="/"
                className={cls.link}
                theme={AppLinkTheme.SECONDARY}
            >
                {t('Домашняя')}
            </AppLink>
            <AppLink
                to="/about"
                className={cls.link}
                theme={AppLinkTheme.SECONDARY}
            >
                {t('О нас')}
            </AppLink>
        </div>
    </div>
);
