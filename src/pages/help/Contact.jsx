import { Form, redirect, useActionData } from "react-router-dom";
//estos componentes nos facilita traer la data del formulario sin tener que usar useState() y su eventHandler function
//<Form> component no guarda la data en un request object y la pasa a una action function

export default function Contact() {
  const data = useActionData();

  return (
    <div className="contact">
      <h3>Contact Us</h3>
      <Form method="post" action="/help/contact">
        {/*method property post queda en frontEnd para acceder a la data. No es un post request al server en sí mismo 
        action property busca el route que ponemos y ejecutará la action función asociada 
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
        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  );
}

//action function
export const contactAction = async ({ request }) => {
  console.log("request", request);

  const data = await request.formData();
  const submission = {
    email: data.get("email"),
    message: data.get("message"),
  };
  console.log("submission", submission);

  //send post request to some api (simulacion en el front)
  if (submission.message.length < 10) {
    return { error: "message must be over 10 char or longer" };
  }

  //redirect the user
  return redirect("/");
};
