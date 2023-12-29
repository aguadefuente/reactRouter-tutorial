import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

//para Modo 1
//import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
//para MODO 2
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
///careers
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareerDetails, {
  careerDetailsLoader,
} from "./pages/careers/CareerDetails";
////help
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";

//layouts
import RootLayout from "./layout/RootLayout";
import HelpLayout from "./layout/HelpLayout";

import CareersLayout from "./layout/CareersLayout";

//MODO 2
const router = createBrowserRouter(
  createRoutesFromElements(
    /*PARENT ROUTE */

    <Route path="/" element={<RootLayout />}>
      {/*CHILDREN ROUTES */}
      <Route index element={<Home />} />
      {/*o path="/" */}
      <Route path="about" element={<About />} />
      {/* o path="/about" - aún sin el slash sabe que es deespués del root*/}
      {/*Nesting */}
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} /> {/* /help/faq */}
        <Route path="contact" element={<Contact />} /> {/* /help/contact */}
      </Route>
      <Route path="careers" element={<CareersLayout />}>
        <Route index element={<Careers />} loader={careersLoader} />
        <Route
          path=":id"
          element={<CareerDetails />}
          loader={careerDetailsLoader}
        />
      </Route>
      <Route path="*" element={<NotFound />} /> {/*Error page */}
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

//MODO 1

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <header>
//           <nav>
//             <h1>React-Router Tutorial</h1>
//             {/* <Link to="/">Home</Link> */}
//             <NavLink to="/">Home</NavLink>
//             <NavLink to="about">About</NavLink>{" "}
//             {/*el NavLink tiene un Class attribute que al hacerle click se pone class="active"
//             verlo en el inspector de google. Permite stylizarlo según ese attribute*/}
//           </nav>
//         </header>
//         <main>
//           <Routes>
//             <Route index element={<Home />} />
//             {/*o path="/" */}
//             <Route path="about" element={<About />} />
//             {/* o path="/about" - aún sin el slash sabe que es deespués del root*/}
//           </Routes>
//         </main>
//       </BrowserRouter>
//     </>
//   );
// }

export default App;
