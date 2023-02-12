import { t } from 'i18next';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routerConfig } from '../config/routerConfig';

const AppRouter = () => (
    <Suspense fallback={<div>{t('Загрузка...')}</div>}>
        <div className="page-wrapper">
            <Routes>
                {Object.values(routerConfig).map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                ))}
            </Routes>
        </div>
    </Suspense>
);

export default AppRouter;
