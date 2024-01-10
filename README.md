TUTORIAL: https://www.youtube.com/playlist?list=PL4cUxeGkcC9iVKmtNuCeIswnQ97in2GGf

PARA ARRANCAR: npm run dev
PARA EL SERVIDOR:

- usamos un package llamado json-server:
  --para instalarlo ponemos en terminal: nmp install -g json-server
  --para arrancarlo: json-server -p 4000 -w ./data/db.json
  (
  -p es port: ponemos 4000 porque react ya está usando el 3000
  -w es watch, es para que se actualice ante cq cambio
  )
  Al hacer enter nos creará un endpoint para fetch la data
  - en terminal veremos que sale:
    Resouces
    http://localhost:4000/careers
    allí veremos nuestro json con la data en nuestro browser
    Home
    http://localhost:4000
