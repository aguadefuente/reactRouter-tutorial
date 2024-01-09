import { Link, useLoaderData } from "react-router-dom";

export default function Careers() {
  //en el useLoaderData hook se store la data que nos return el data loader function
  const careers = useLoaderData(); //en vez de usar useEffect()
  console.log("nuestro json", careers);

  //accedemos a la data que nos trae el Loader
  return (
    <div className="careers">
      {careers.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
}

// Loader function: data loader
export const careersLoader = async () => {
  const res = await fetch("http://localhost:4000/careers");

  if (!res.ok) {
    throw Error("Could not fetch the careers data");
  } //ver el error agregando un s al final del endpoint del fetch ej)  const res = await fetch("http://localhost:4000/careersss");

  return res.json(); //esto trae una promise. React router la resolve por nosotros, así acceder a los datos sin que tengamos que hacer nada más
};

//importamos el loader a App.jsx y llamamos a la función en el <Route> donde queremos usarla
//asi react-router resuelve la promise
//y podremos acceder a la data y usarla en el componente
//CareerDetails() que creamos aquí
