import { Router } from "express";
import {body, param} from "express-validator";
import { createLaboratorio, getLaboratorio, getLaboratorioById, updateLaboratorio, deleteLaboratorio } from "../handlers/laboratorios";
import { inputErrors } from "../middleware";

const routerLaboratiorios = Router()

routerLaboratiorios.get('/', getLaboratorio)
routerLaboratiorios.get('/:id',param('id').isNumeric().withMessage('El id ingresado no es válido'), inputErrors,getLaboratorioById)
routerLaboratiorios.post('/'
    ,body('colecta_ext_via').isNumeric()
    .notEmpty().withMessage('El colecta_ext_via del laboratorio no puede estar vacio')
    ,body('colecta_ext_inv').isNumeric()
    .notEmpty().withMessage('El colecta_ext_inv del laboratorio no puede estar vacio')
    ,body('colecta_ext_eclos').isNumeric()
    .notEmpty().withMessage('El colecta_ext_eclos del laboratorio no puede estar vacio')
    ,body('ext_lineas').isNumeric()
    .notEmpty().withMessage('ext_lineas del laboratorio no puede estar vacio')
    ,body('colecta_int_via').isNumeric()
    .notEmpty().withMessage('El colecta_int_via del laboratorio no puede estar vacio')
    ,body('colecta_int_inv').isNumeric()
    .notEmpty().withMessage('El colecta_int_inv del laboratorio no puede estar vacio')
    ,body('colecta_int_eclos').isNumeric()
    .notEmpty().withMessage('El colecta_int_eclos del laboratorio no puede estar vacio')
    ,body('int_lineas').isNumeric()
    .notEmpty().withMessage('El int_lineas del laboratorio no puede estar vacio')
    ,body('fecha')
    .notEmpty().withMessage('La fecha del laboratorio no puede estar vacia')
    ,body('fecha_sistema')
    .notEmpty().withMessage('La fecha_sistema del laboratorio no puede estar vacia')
    ,body('observaciones')
    .notEmpty().withMessage('Las observaiones del laboratorio no pueden estar vacias')
    ,body('estado').isNumeric()
    .notEmpty().withMessage('El estado del laboratorio no puede estar vacio')
    ,body('id_visita').isNumeric()
    .notEmpty().withMessage('El id_visita del laboratorio no puede estar vacio')
    ,inputErrors
    , createLaboratorio)
routerLaboratiorios.put('/:id'
    ,param('id')
    .isNumeric().withMessage('El id ingresado no es valido')
    ,body('colecta_ext_via').isNumeric()
    .notEmpty().withMessage('El colecta_ext_via del laboratorio no puede estar vacio')
    ,body('colecta_ext_inv').isNumeric()
    .notEmpty().withMessage('El colecta_ext_inv del laboratorio no puede estar vacio')
    ,body('colecta_ext_eclos').isNumeric()
    .notEmpty().withMessage('El colecta_ext_eclos del laboratorio no puede estar vacio')
    ,body('ext_lineas').isNumeric()
    .notEmpty().withMessage('ext_lineas del laboratorio no puede estar vacio')
    ,body('colecta_int_via').isNumeric()
    .notEmpty().withMessage('El colecta_int_via del laboratorio no puede estar vacio')
    ,body('colecta_int_inv').isNumeric()
    .notEmpty().withMessage('El colecta_int_inv del laboratorio no puede estar vacio')
    ,body('colecta_int_eclos').isNumeric()
    .notEmpty().withMessage('El colecta_int_eclos del laboratorio no puede estar vacio')
    ,body('int_lineas').isNumeric()
    .notEmpty().withMessage('El int_lineas del laboratorio no puede estar vacio')
    ,body('fecha')
    .notEmpty().withMessage('La fecha del laboratorio no puede estar vacia')
    ,body('fecha_sistema')
    .notEmpty().withMessage('La fecha_sistema del laboratorio no puede estar vacia')
    ,body('observaciones')
    .notEmpty().withMessage('Las observaiones del laboratorio no pueden estar vacias')
    ,body('estado').isNumeric()
    .notEmpty().withMessage('El estado del laboratorio no puede estar vacio')
    ,body('id_visita').isNumeric()
    .notEmpty().withMessage('El id_visita del laboratorio no puede estar vacio')
    ,inputErrors
    ,updateLaboratorio)
routerLaboratiorios.delete('/:id'
    ,param('id')
    .isNumeric().withMessage('El id ingresado no es valido')
    ,inputErrors
    , deleteLaboratorio)

export default routerLaboratiorios