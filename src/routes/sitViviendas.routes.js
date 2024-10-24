import { Router } from "express";
import {body, param} from "express-validator";
import { createSitVivienda, getSitVivienda, getSitViviendaById, updateSitVivienda, deleteSitVivienda } from "../controllers/sitViviendas.controller";


const sitViviendasRoutes = Router()

sitViviendasRoutes.get('/', getSitVivienda)
sitViviendasRoutes.get('/:id',param('id').isNumeric().withMessage('El id ingresado no es válido'),getSitViviendaById)
sitViviendasRoutes.post('/'
    ,body('nombre')
    .notEmpty().withMessage('El nombre de sitViviendas no puede estar vacio')
    ,createSitVivienda)
sitViviendasRoutes.put('/:id'
    ,param('id')
    .isNumeric().withMessage('El id ingresado no es valido')
    ,body('nombre')
    .notEmpty().withMessage('El nombre de sitViviendas no puede estar vacio')
    ,updateSitVivienda)
sitViviendasRoutes.delete('/:id'
    ,param('id')
    .isNumeric().withMessage('El id ingresado no es valido')
    ,deleteSitVivienda)

export default sitViviendasRoutes