# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

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
