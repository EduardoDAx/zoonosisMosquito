import { Router } from "express";
import {body, param} from "express-validator";
import { createVecino, getVecino, getVecinoById, updateVecino, deleteVecino } from "../handlers/vecinos";
import { inputErrors } from "../middleware";

const routerVecino = Router()

routerVecino.get('/', getVecino)
routerVecino.get('/:id',param('id').isNumeric().withMessage('El id ingresado no es válido'), inputErrors,getVecinoById)
routerVecino.post('/'
    ,body('nombre')
    .notEmpty().withMessage('El nombre del vecino no puede estar vacio')
    ,body('apellido')
    .notEmpty().withMessage('El apellido del vecino no puede estar vacio')
    ,body('dni').isNumeric()
    .notEmpty().withMessage('El dni del vecino no puede estar vacio')
    ,body('fecha_nacimiento')
    .notEmpty().withMessage('La fecha de nacimiento del vecino no puede estar vacia')
    ,body('calle')
    .notEmpty().withMessage('La calle del vecino no puede estar vacia')
    ,body('altura').isNumeric()
    .notEmpty().withMessage('La altura del vecino no puede estar vacia')
    ,body('observacion')
    .notEmpty().withMessage('La observacion del vecino no puede estar vacia')
    ,body('fecha_carga')
    .notEmpty().withMessage('La fecha_carga del vecino no puede estar vacia')
    ,body('fecha_sistema')
    .notEmpty().withMessage('La fecha_sistema del vecino no puede estar vacia')
    ,body('estado').isNumeric()
    .notEmpty().withMessage('El estado del vecino no puede estar vacio')
    ,inputErrors
    , createVecino)
routerVecino.put('/:id'
    ,param('id')
    .isNumeric().withMessage('El id ingresado no es valido')
    ,body('nombre')
    .notEmpty().withMessage('El nombre del vecino no puede estar vacio')
    ,body('apellido')
    .notEmpty().withMessage('El apellido del vecino no puede estar vacio')
    ,body('dni').isNumeric()
    .notEmpty().withMessage('El dni del vecino no puede estar vacio')
    ,body('fecha_nacimiento')
    .notEmpty().withMessage('La fecha de nacimiento del vecino no puede estar vacia')
    ,body('calle')
    .notEmpty().withMessage('La calle del vecino no puede estar vacia')
    ,body('altura').isNumeric()
    .notEmpty().withMessage('La altura del vecino no puede estar vacia')
    ,body('observacion')
    .notEmpty().withMessage('La observacion del vecino no puede estar vacia')
    ,body('fecha_carga')
    .notEmpty().withMessage('La fecha_carga del vecino no puede estar vacia')
    ,body('fecha_sistema')
    .notEmpty().withMessage('La fecha_sistema del vecino no puede estar vacia')
    ,body('estado').isNumeric()
    .notEmpty().withMessage('El estado del vecino no puede estar vacio')
    ,inputErrors
    ,updateVecino)
routerVecino.delete('/:id'
    ,param('id')
    .isNumeric().withMessage('El id ingresado no es valido')
    ,inputErrors
    , deleteVecino)

export default routerVecino