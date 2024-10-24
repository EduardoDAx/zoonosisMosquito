import { Router } from "express";
import {body, param} from "express-validator";
import { createNombreSensores, getNombreSensores, getNombreSensoresById, updateNombreSensores, deleteNombreSensores } from "../handlers/nombreSensores";
import { inputErrors } from "../middleware";

const routerNombreSensores = Router()

routerNombreSensores.get('/', getNombreSensores)
routerNombreSensores.get('/:id',param('id').isNumeric().withMessage('El id ingresado no es válido'), inputErrors,getNombreSensores)
routerNombreSensores.post('/'
    ,body('nombre')
    .notEmpty().withMessage('El nombre del sensor no puede estar vacio')
    ,inputErrors
    , createNombreSensores)
routerNombreSensores.put('/:id'
    ,param('id')
    .isNumeric().withMessage('El id ingresado no es valido')
    ,body('nombre')
    .notEmpty().withMessage('El nombre del sensor no puede estar vacio')
    ,inputErrors
    ,updateNombreSensores)
routerNombreSensores.delete('/:id'
    ,param('id')
    .isNumeric().withMessage('El id ingresado no es valido')
    ,inputErrors
    , deleteNombreSensores)

export default routerNombreSensores