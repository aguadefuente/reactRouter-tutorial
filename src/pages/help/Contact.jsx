import { Form, redirect, useActionData } from "react-router-dom";
//estos componentes nos facilita traer la data del formulario sin tener que usar useState() y su eventHandler function
//<Form> component nos guarda la data en un request object y la pasa a una action function
//nota: sólo funcionan si usamos createBrowserRouter() y el routerProvider() en App.jsx

export default function Contact() {
  const theError = useActionData(); //aquí alojamos el objeto error

  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="post" action="/help/contact">
        {/*method property post queda en frontEnd para acceder a la data. No es un post request al server en sí mismo 
        action property busca el route que ponemos y ejecutará la action function asociada 
        cuando el formulario sea submited - ver App.jsx <Route path="help"...<Route path="contact"...action={contactAction}>>*/}
        <label>
          <span>Your email:</span>
          <input type="email" name="email" required />
        </label>
        <label>
          <span>Your message:</span>
          <textarea name="message" required></textarea>
        </label>
        <button>Submit</button>
        {theError && theError.error && <p>{theError.error}</p>}
      </Form>
    </div>
  );
}

//action function
export const contactAction = async ({ request }) => {
  console.log("request", request); //request argument contain all the form data ej) input values, textarea values nota: es importante que tengan el name attribute! en dichos tags

  const data = await request.formData(); //así podemos acceder a los distintos form values

  //cuando tengamos la data la representamos en un objeto
  const submission = {
    email: data.get("email"),
    message: data.get("message"),
  };
  console.log("submission", submission);

  //send post request to some api (simulacion en el front)
  if (submission.message.length < 10) {
    return { error: "message must be over 10 char or longer" };
  } //para acceder a este error object es que usamos el useActionData()

  //redirect the user
  return redirect("/");
};
