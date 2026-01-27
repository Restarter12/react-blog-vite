import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import style from './layout.module.scss';

function Layout() {
  return (
    <div className={style.layout}>
      <Header />
      <main className={style.mainContent}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
  