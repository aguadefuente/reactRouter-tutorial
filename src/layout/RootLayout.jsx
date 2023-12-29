import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <div className="root-layout">
        <header>
          <nav>
            <h1>React-Router Tutorial</h1>
            {/* <Link to="/">Home</Link> */}
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>{" "}
            {/*el NavLink tiene un Class attribute que al hacerle click se pone class="active"
             verlo en el inspector de google. Permite stylizarlo según ese attribute*/}
            <NavLink to="help">Help</NavLink>
            <NavLink to="careers">Careers</NavLink>
          </nav>
        </header>
        <main>
          <Outlet />{" "}
          {/*acá le digo donde renderizar los children route que fijamos en App.jsx */}
        </main>
      </div>
    </>
  );
};

export default RootLayout;
