import { Router } from "express";
import {body, param} from "express-validator";
import { createNombreSensores, getNombreSensores, getNombreSensoresById, updateNombreSensores, deleteNombreSensores } from "../controllers/nombreSensores.controller.js";


const nombreSensoresRoutes = Router()

nombreSensoresRoutes.get('/', getNombreSensores)
nombreSensoresRoutes.get('/:id',param('id').isNumeric().withMessage('El id ingresado no es válido'),getNombreSensoresById)
nombreSensoresRoutes.post('/'
    ,body('nombre')
    .notEmpty().withMessage('El nombre del sensor no puede estar vacio')
    ,createNombreSensores)
nombreSensoresRoutes.put('/:id'
    ,param('id')
    .isNumeric().withMessage('El id ingresado no es valido')
    ,body('nombre')
    .notEmpty().withMessage('El nombre del sensor no puede estar vacio')
    ,updateNombreSensores)
nombreSensoresRoutes.delete('/:id'
    ,param('id')
    .isNumeric().withMessage('El id ingresado no es valido')
    ,deleteNombreSensores)

export default nombreSensoresRoutes