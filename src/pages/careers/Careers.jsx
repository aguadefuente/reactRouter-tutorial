import { Link, useLoaderData } from "react-router-dom";

export default function Careers() {
  const careers = useLoaderData();
  console.log("nuestro json", careers);

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

  return res.json();
};
