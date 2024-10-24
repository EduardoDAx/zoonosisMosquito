import { Router } from "express";
import {body, param} from "express-validator";
import { createVisitas, getVisitas, getVisitasById, updateVisitas, deleteVisitas } from "../controllers/visitas.controller";

const visitasRoutes = Router()

visitasRoutes.get('/', getVisitas)
visitasRoutes.get('/:id',param('id').isNumeric().withMessage('El id ingresado no es válido'),getVisitasById)
visitasRoutes.post('/'
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
    ,createVisitas)
visitasRoutes.put('/:id'
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
    ,updateVisitas)
visitasRoutes.delete('/:id'
    ,param('id')
    .isNumeric().withMessage('El id ingresado no es valido')
    ,deleteVisitas)

export default visitasRoutes        