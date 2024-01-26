import { useLocation, Link } from "react-router-dom";
//useLocation hook

export default function Breadcrumbs() {
  const location = useLocation();
  console.log("location", location); //nos traerá un pathname ej) /help o /help/contact según donde hagamos click en la aplicacion

  let currentLink = "";

  const crumbs = location.pathname //usamos el pathname del useLocation()
    .split("/") //así nos convierta el pathname en un array dde haya un / ej) [help, contact]
    .filter((crumb) => crumb !== "") //nos filtra si el pathname tiene elementos un empty string ej) help/contact/ (el último no entrará en el array)
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  return <div className="breadcrumbs">{crumbs}</div>;
}
