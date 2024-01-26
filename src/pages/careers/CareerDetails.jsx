import { useLoaderData, useParams } from "react-router-dom";

//Parameter: is a changeable section of a route eg) products/1, products/2...etc
//ver file App.jsx que el path properties del <Route element={CarrerrDetails}> (es decir el route de este componente) es path=":id", éste es el parameter, podemos usar cualquier nombre, en este caso le pusimos id
//ese es el parameter que guardaremos en useParams()
export default function CareerDetails() {
  const { id } = useParams(); //tenemos que usar mismo pathe name que en el App.jsx. Como le pusimos id acá tb debe llamarse id
  const career = useLoaderData();

  return (
    <div className="career-details">
      {console.log("the param is", id)}
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed
          sunt ipsam quam assumenda quasi ipsa facilis laborum rerum voluptatem!
        </p>
      </div>
    </div>
  );
}

// data loader usando el useParam hook
//queremos agarrar una de las carrers según su id param
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params; //asignamos id al parámetro de la función

  const res = await fetch("http://localhost:4000/careers/" + id);

  //error handler - ver CarrersError.jsx
  if (!res.ok) {
    throw Error("Could not find that career");
  }

  return res.json();
};
