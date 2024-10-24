import { Router } from "express";
import {body, param} from "express-validator";
import { createSitVivienda, getSitVivienda, getSitViviendaById, updateSitVivienda, deleteSitVivienda } from "../handlers/sitViviendas";
import { inputErrors } from "../middleware";

const routerSitViviendas = Router()

routerSitViviendas.get('/', getSitVivienda)
routerSitViviendas.get('/:id',param('id').isNumeric().withMessage('El id ingresado no es válido'), inputErrors,getSitViviendaById)
routerSitViviendas.post('/'
    ,body('nombre')
    .notEmpty().withMessage('El nombre de sitViviendas no puede estar vacio')
    ,inputErrors
    , createSitVivienda)
routerSitViviendas.put('/:id'
    ,param('id')
    .isNumeric().withMessage('El id ingresado no es valido')
    ,body('nombre')
    .notEmpty().withMessage('El nombre de sitViviendas no puede estar vacio')
    ,inputErrors
    ,updateSitVivienda)
routerSitViviendas.delete('/:id'
    ,param('id')
    .isNumeric().withMessage('El id ingresado no es valido')
    ,inputErrors
    , deleteSitVivienda)

export default routerSitViviendas