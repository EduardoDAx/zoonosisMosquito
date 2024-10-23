import express from "express";
import cors from "cors"; // Esto es para los permisos de quien le puede mandar peticiones al backend
import userRoutes from './routes/user.routes.js';
import { loginUser } from "./auth/authController.js";
import tipoRoutes from './routes/tipo.routes.js';

const app = express();

//middleware
app.use(express.json());

    //cors le permite al backend dar permisos "osea que cualquier otro no puede"
app.get('/', (req,res) =>{
    res.send('Hola Mundo')
})
app.use(cors(
 {
     origin: 'http://localhost:5173', // Permitir el acceso desde el puerto 5173
     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    credentials: true // Habilitar el uso de cookies y cabeceras de autorización si es necesario
  }
));
 app.post('/login', loginUser);
app.use(userRoutes);
app.use(tipoRoutes);
// Middleware para manejar rutas no encontradas
app.use((req, res, next) => {
    res.status(404).send('Ruta no encontrada');
});

// Middleware para manejo de errores generales
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo salió mal');
});


export default app;