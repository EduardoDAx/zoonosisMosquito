import { Router } from "express";
import {body, param} from "express-validator";
import { createBarrio, getBarrio, getBarrioById, updateBarrio, deleteBarrio } from "../controllers/barrios.controller";


const barrioRoutes = Router()

barrioRoutes.get('/', getBarrio)
barrioRoutes.get('/:id',param('id').isNumeric().withMessage('El id ingresado no es válido'),getBarrioById)
barrioRoutes.post('/'
    ,body('nombre')
    .notEmpty().withMessage('El nombre del barrio no puede estar vacio')
    ,body('estado').isNumeric()
    .notEmpty().withMessage('El estado del barrio no puede estar vacio')
    ,body('id_delegacion').isNumeric()
    .notEmpty().withMessage('El id_delegacion del barrio no puede estar vacio')
    , createBarrio)
barrioRoutes.put('/:id'
    ,param('id')
    .isNumeric().withMessage('El id ingresado no es valido')
    ,body('nombre')
    .notEmpty().withMessage('El nombre del barrio no puede estar vacio')
    ,body('estado').isNumeric()
    .notEmpty().withMessage('El estado del barrio no puede estar vacio')
    ,body('id_delegacion').isNumeric()
    .notEmpty().withMessage('El id_delegacion del barrio no puede estar vacio')
    ,updateBarrio)
barrioRoutes.delete('/:id'
    ,param('id')
    .isNumeric().withMessage('El id ingresado no es valido')
   , deleteBarrio)

export default barrioRoutes