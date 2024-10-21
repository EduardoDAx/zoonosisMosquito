import { Router } from "express";
import {body, param} from "express-validator";
import { createTipo, getTipo, getTipoById, updateTipo, deleteTipo } from "../handlers/tipos";
import { inputErrors } from "../middleware";

const routerTipos = Router()

routerTipos.get('/', getTipo)
routerTipos.get('/:id',param('id').isNumeric().withMessage('El id ingresado no es válido'), inputErrors,getTipoById)
routerTipos.post('/'
    ,body('nombre')
    .notEmpty().withMessage('El nombre del tipo no puede estar vacio')
    ,inputErrors
    , createTipo)
   routerTipos.put('/:id'
    ,param('id')
    .isNumeric().withMessage('El id ingresado no es valido')
    ,body('nombre')
    .notEmpty().withMessage('El nombre del tipo no puede estar vacio')
    ,inputErrors
    ,updateTipo)
routerTipos.delete('/:id'
    ,param('id')
    .isNumeric().withMessage('El id ingresado no es valido')
    ,inputErrors
    , deleteTipo)

export default routerTipos