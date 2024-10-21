import { Router } from "express";
import {body, param} from "express-validator";
import { createVisitas, getVisitas, getVisitasById, updateVisitas, deleteVisitas } from "../handlers/visitas";
import { inputErrors } from "../middleware";

const routerVisitas = Router()

routerVisitas.get('/', getVisitas)
routerVisitas.get('/:id',param('id').isNumeric().withMessage('El id ingresado no es válido'), inputErrors,getVisitasById)
routerVisitas.post('/'
    ,body('fecha')
    .notEmpty().withMessage('La fecha de la visita no puede estar vacia')
    ,body('colecta_ext').isNumeric()
    .notEmpty().withMessage('La colecta_ext de la visita no puede estar vacia')
    ,body('colecta_int').isNumeric()
    .notEmpty().withMessage('La colecta_int de la visita no puede estar vacia')
    ,body('puesta_ext').isNumeric()
    .notEmpty().withMessage('La puesta_ext de la visita no puede estar vacia')
    ,body('puesta_int').isNumeric()
    .notEmpty().withMessage('La puesta_int de la visita no puede estar vacia')
    ,body('observacion')
    .notEmpty().withMessage('La observacion de la visita no puede estar vacia')
    ,body('fecha_sistema')
    .notEmpty().withMessage('La fecha_sistema de la visita no puede estar vacia')
    ,body('estado').isNumeric()
    .notEmpty().withMessage('El estado de la visita no puede estar vacio')
    ,body('id_asignacion_sensor').isNumeric()
    .notEmpty().withMessage('El id_asignacion_sensor de la visita no puede estar vacio')
    ,body('id_usuario').isNumeric()
    .notEmpty().withMessage('El id_usuario de la visita no puede estar vacio')
    ,body('id_sit_vivienda').isNumeric()
    .notEmpty().withMessage('El id_sit_vivienda de la visita no puede estar vacio')
    ,inputErrors
    , createVisitas)
routerVisitas.put('/:id'
    ,param('id')
    .isNumeric().withMessage('El id ingresado no es valido')
    ,body('fecha')
    .notEmpty().withMessage('La fecha de la visita no puede estar vacia')
    ,body('colecta_ext').isNumeric()
    .notEmpty().withMessage('La colecta_ext de la visita no puede estar vacia')
    ,body('colecta_int').isNumeric()
    .notEmpty().withMessage('La colecta_int de la visita no puede estar vacia')
    ,body('puesta_ext').isNumeric()
    .notEmpty().withMessage('La puesta_ext de la visita no puede estar vacia')
    ,body('puesta_int').isNumeric()
    .notEmpty().withMessage('La puesta_int de la visita no puede estar vacia')
    ,body('observacion')
    .notEmpty().withMessage('La observacion de la visita no puede estar vacia')
    ,body('fecha_sistema')
    .notEmpty().withMessage('La fecha_sistema de la visita no puede estar vacia')
    ,body('estado').isNumeric()
    .notEmpty().withMessage('El estado de la visita no puede estar vacio')
    ,body('id_asignacion_sensor').isNumeric()
    .notEmpty().withMessage('El id_asignacion_sensor de la visita no puede estar vacio')
    ,body('id_usuario').isNumeric()
    .notEmpty().withMessage('El id_usuario de la visita no puede estar vacio')
    ,body('id_sit_vivienda').isNumeric()
    .notEmpty().withMessage('El id_sit_vivienda de la visita no puede estar vacio')
    ,inputErrors
    ,updateVisitas)
routerVisitas.delete('/:id'
    ,param('id')
    .isNumeric().withMessage('El id ingresado no es valido')
    ,inputErrors
    , deleteVisitas)

export default routerVisitas          