import express from "express";
import projectRoutes from './routes/project.routes.js'

const app = express();

//middleware
app.use(express.json());


app.use(projectRoutes);

export default app;