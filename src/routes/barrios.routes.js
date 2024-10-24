import { Router } from "express";
import {body, param} from "express-validator";
import { createBarrio, getBarrio, getBarrioById, updateBarrio, deleteBarrio } from "../handlers/barrios";
import { inputErrors } from "../middleware";

const routerBarrio = Router()

routerBarrio.get('/', getBarrio)
routerBarrio.get('/:id',param('id').isNumeric().withMessage('El id ingresado no es válido'), inputErrors,getBarrioById)
routerBarrio.post('/'
    ,body('nombre')
    .notEmpty().withMessage('El nombre del barrio no puede estar vacio')
    ,body('estado').isNumeric()
    .notEmpty().withMessage('El estado del barrio no puede estar vacio')
    ,body('id_delegacion').isNumeric()
    .notEmpty().withMessage('El id_delegacion del barrio no puede estar vacio')
    ,inputErrors
    , createBarrio)
routerBarrio.put('/:id'
    ,param('id')
    .isNumeric().withMessage('El id ingresado no es valido')
    ,body('nombre')
    .notEmpty().withMessage('El nombre del barrio no puede estar vacio')
    ,body('estado').isNumeric()
    .notEmpty().withMessage('El estado del barrio no puede estar vacio')
    ,body('id_delegacion').isNumeric()
    .notEmpty().withMessage('El id_delegacion del barrio no puede estar vacio')
    ,inputErrors
    ,updateBarrio)
routerBarrio.delete('/:id'
    ,param('id')
    .isNumeric().withMessage('El id ingresado no es valido')
    ,inputErrors
    , deleteBarrio)

export default routerBarrio