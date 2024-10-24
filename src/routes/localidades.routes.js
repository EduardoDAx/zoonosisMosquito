import { Router } from "express";
import {body, param} from "express-validator";
import { createLocalidad, getLocalidad, getLocalidadById, updateLocalidad, deleteLocalidad } from "../controllers/localidades.controller";


const localidadesRoutes = Router()

localidadesRoutes.get('/', getLocalidad)
localidadesRoutes.get('/:id',param('id').isNumeric().withMessage('El id ingresado no es válido'),getLocalidadById)
localidadesRoutes.post('/'
    ,body('nombre')
    .notEmpty().withMessage('El nombre de la localidad no puede estar vacio')
    ,body('estado')
    .notEmpty().withMessage('El estado de la localidad no puede estar vacia')
    ,createLocalidad)
localidadesRoutes.put('/:id'
    ,param('id')
    .isNumeric().withMessage('El id ingresado no es valido')
    ,body('nombre')
    .notEmpty().withMessage('El nombre de la localidad no puede estar vacio')
    ,body('estado')
    .notEmpty().withMessage('El estado de la localidad no puede estar vacia')
    ,updateLocalidad)
localidadesRoutes.delete('/:id'
    ,param('id')
    .isNumeric().withMessage('El id ingresado no es valido')
    ,deleteLocalidad)

export default localidadesRoutes