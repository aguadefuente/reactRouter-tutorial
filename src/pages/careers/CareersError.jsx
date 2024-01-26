import { Link, useRouteError } from "react-router-dom";

const CareersError = () => {
  const error = useRouteError(); //con este hook accedemos al error message que pusimos en el CareeDetails.jsx - ver App.jsx
  return (
    <div className="careers-error">
      <h2>Error</h2>
      <p>{error.message}</p>
      <Link to="/">Back to the homepage</Link>{" "}
      {/*para que redireccione al homepage */}
    </div>
  );
};

export default CareersError;

//si ponemos en el Browser cualquier id ej) http://127.0.0.1:5174/careers/sdadfadf
//veremos que aparece el error.message
