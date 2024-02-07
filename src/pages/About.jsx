import { useState } from "react";
import { Navigate } from "react-router-dom";

export default function About() {
  //authentication check simulation
  const [user, setUser] = useState("mario");

  if (!user) {
    return <Navigate to="/" replace={true} />;
  } //replace={true} attribute hace que la history de mi navegación sea reemplazada con lo que ponemos en el to attribute
  //ejemplo: aprieto el link about, luego el logout que me redirige a home, si aprieto las flechitas de mi navegador para ir a la página anterior no va a ir a about page sino que será reeplazada por la home page

  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident
        consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut
        dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis
        quia illum officia obcaecati provident nulla odio molestiae suscipit
        quasi.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident
        consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut
        dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis
        quia illum officia obcaecati provident nulla odio molestiae suscipit
        quasi.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui provident
        consequuntur vel omnis quisquam rem harum, maxime expedita, ullam ut
        dolore! Distinctio eos minima voluptatum totam id hic! Sapiente debitis
        quia illum officia obcaecati provident nulla odio molestiae suscipit
        quasi.
      </p>
      <button onClick={() => setUser(null)}>Logout</button>
    </div>
  );
}
