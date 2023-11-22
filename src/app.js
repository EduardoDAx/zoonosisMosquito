import express from "express";
import projectRoutes from './routes/user.routes.js'
import comRoutes from './routes/comercio.routes.js'
import cors  from "cors";

const app = express();

//middleware
app.use(express.json());
app.use(cors());

app.get('/', (req,res) =>{
    res.send('Hola Mundo')
})
app.use(projectRoutes);
app.use(comRoutes);
export default app;