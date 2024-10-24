import { Router } from "express";
import {body, param} from "express-validator";
import { createDelegacion, getDelegacion, getDelegacionById, updateDelegacion, deleteDelegacion } from "../controllers/delegaciones.controller";

const delegacionroutes = Router()

delegacionroutes.get('/', getDelegacion)
delegacionroutes.get('/:id',param('id').isNumeric().withMessage('El id ingresado no es válido'),getDelegacionById)
delegacionroutes.post('/'
    ,body('nombre')
    .notEmpty().withMessage('El nombre de la delegacion no puede estar vacio')
    ,body('estado').isNumeric()
    .notEmpty().withMessage('El estado de la delegacion no puede estar vacio')
    ,body('id_localidad').isNumeric()
    .notEmpty().withMessage('El id_localidad de la delegacion no puede estar vacio')
    ,createDelegacion)
delegacionroutes.put('/:id'
    ,param('id')
    .isNumeric().withMessage('El id ingresado no es valido')
    ,body('nombre')
    .notEmpty().withMessage('El nombre de la delegacion no puede estar vacio')
    ,body('estado').isNumeric()
    .notEmpty().withMessage('El estado de la delegacion no puede estar vacio')
    ,body('id_localidad').isNumeric()
    .notEmpty().withMessage('El id_localidad de la delegacion no puede estar vacio')
    ,updateDelegacion)
delegacionroutes.delete('/:id'
    ,param('id')
    .isNumeric().withMessage('El id ingresado no es valido')
    ,deleteDelegacion)

export default delegacionroutes