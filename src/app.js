import express from "express";
import projectRoutes from './routes/user.routes.js'
import comRoutes from './routes/comercio.routes.js'
import cors  from "cors";
import walletRoutes  from "./routes/wallet.routes.js";
import cuponRoutes  from "./routes/cupon.routes.js";
import catRoutes  from "./routes/category.reoutes.js";

const app = express();

//middleware
app.use(express.json());
app.use(cors());

app.get('/', (req,res) =>{
    res.send('Hola Mundo')
})
app.use(projectRoutes);
app.use(comRoutes);
app.use(walletRoutes);
app.use(cuponRoutes);
app.use(catRoutes);
export default app;