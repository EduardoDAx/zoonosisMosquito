import { Router } from "express";
import {body, param} from "express-validator";
import { createDelegacion, getDelegacion, getDelegacionById, updateDelegacion, deleteDelegacion } from "../handlers/delegaciones";
import { inputErrors } from "../middleware";

const routerDelegacion = Router()

routerDelegacion.get('/', getDelegacion)
routerDelegacion.get('/:id',param('id').isNumeric().withMessage('El id ingresado no es válido'), inputErrors,getDelegacionById)
routerDelegacion.post('/'
    ,body('nombre')
    .notEmpty().withMessage('El nombre de la delegacion no puede estar vacio')
    ,body('estado').isNumeric()
    .notEmpty().withMessage('El estado de la delegacion no puede estar vacio')
    ,body('id_localidad').isNumeric()
    .notEmpty().withMessage('El id_localidad de la delegacion no puede estar vacio')
    ,inputErrors
    , createDelegacion)
routerDelegacion.put('/:id'
    ,param('id')
    .isNumeric().withMessage('El id ingresado no es valido')
    ,body('nombre')
    .notEmpty().withMessage('El nombre de la delegacion no puede estar vacio')
    ,body('estado').isNumeric()
    .notEmpty().withMessage('El estado de la delegacion no puede estar vacio')
    ,body('id_localidad').isNumeric()
    .notEmpty().withMessage('El id_localidad de la delegacion no puede estar vacio')
    ,inputErrors
    ,updateDelegacion)
routerDelegacion.delete('/:id'
    ,param('id')
    .isNumeric().withMessage('El id ingresado no es valido')
    ,inputErrors
    , deleteDelegacion)

export default routerDelegacion