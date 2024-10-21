import { Router } from "express";
import {body, param} from "express-validator";
import { createLocalidad, getLocalidad, getLocalidadById, updateLocalidad, deleteLocalidad } from "../handlers/localidades";
import { inputErrors } from "../middleware";

const routerLocalidad = Router()

routerLocalidad.get('/', getLocalidad)
routerLocalidad.get('/:id',param('id').isNumeric().withMessage('El id ingresado no es válido'), inputErrors,getLocalidadById)
routerLocalidad.post('/'
    ,body('nombre')
    .notEmpty().withMessage('El nombre de la localidad no puede estar vacio')
    ,body('estado')
    .notEmpty().withMessage('El estado de la localidad no puede estar vacia')
    ,inputErrors
    , createLocalidad)
routerLocalidad.put('/:id'
    ,param('id')
    .isNumeric().withMessage('El id ingresado no es valido')
    ,body('nombre')
    .notEmpty().withMessage('El nombre de la localidad no puede estar vacio')
    ,body('estado')
    .notEmpty().withMessage('El estado de la localidad no puede estar vacia')
    ,inputErrors
    ,updateLocalidad)
routerLocalidad.delete('/:id'
    ,param('id')
    .isNumeric().withMessage('El id ingresado no es valido')
    ,inputErrors
    , deleteLocalidad)

export default routerLocalidad