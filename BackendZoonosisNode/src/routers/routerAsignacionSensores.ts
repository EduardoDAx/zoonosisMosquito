import { Router } from "express";
import {body, param} from "express-validator";
import { createAsignacionSensores, getAsignacionSensores, getAsignacionSensoresById, updateAsignacionSensores, deleteAsignacionSensores } from "../handlers/asignacionSensores";
import { inputErrors } from "../middleware";

const routerAsignacionSensores = Router()

routerAsignacionSensores.get('/', getAsignacionSensores)
routerAsignacionSensores.get('/:id',param('id').isNumeric().withMessage('El id ingresado no es válido'), inputErrors,getAsignacionSensoresById)
routerAsignacionSensores.post('/'
    ,body('coordenadas_x').isNumeric()
    .notEmpty().withMessage('Las coordenadas_x de la asignaciónSensores no pueden estar vacias')
    ,body('coordenadas_y').isNumeric()
    .notEmpty().withMessage('Las coordenadas_x de la asignaciónSensores no pueden estar vacias')
    ,body('fecha_carga')
    .notEmpty().withMessage('La fecha de carga de la asignaciónSensores no puede estar vacia')
    ,body('fecha_sistema')
    .notEmpty().withMessage('La fecha de sistema de la asignaciónSensores no puede estar vacia')
    ,body('id_nombre_sensor').isNumeric()
    .notEmpty().withMessage('El id_nombre_sensor de la asignaciónSensores no puede estar vacio')
    ,body('id_vecino').isNumeric()
    .notEmpty().withMessage('El id_vecino de la asignaciónSensores no puede estar vacio')
    ,body('id_barrio').isNumeric()
    .notEmpty().withMessage('El id_barrio de la asignaciónSensores no puede estar vacio')
    ,inputErrors
    , createAsignacionSensores)
routerAsignacionSensores.put('/:id'
    ,param('id')
    .isNumeric().withMessage('El id ingresado no es valido')
    ,body('coordenadas_x').isNumeric()
    .notEmpty().withMessage('Las coordenadas_x de la asignaciónSensores no pueden estar vacias')
    ,body('coordenadas_y').isNumeric()
    .notEmpty().withMessage('Las coordenadas_x de la asignaciónSensores no pueden estar vacias')
    ,body('fecha_carga')
    .notEmpty().withMessage('La fecha de carga de la asignaciónSensores no puede estar vacia')
    ,body('fecha_sistema')
    .notEmpty().withMessage('La fecha de sistema de la asignaciónSensores no puede estar vacia')
    ,body('id_nombre_sensor').isNumeric()
    .notEmpty().withMessage('El id_nombre_sensor de la asignaciónSensores no puede estar vacio')
    ,body('id_vecino').isNumeric()
    .notEmpty().withMessage('El id_vecino de la asignaciónSensores no puede estar vacio')
    ,body('id_barrio').isNumeric()
    .notEmpty().withMessage('El id_barrio de la asignaciónSensores no puede estar vacio')
    ,inputErrors
    ,updateAsignacionSensores)
routerAsignacionSensores.delete('/:id'
    ,param('id')
    .isNumeric().withMessage('El id ingresado no es valido')
    ,inputErrors
    , deleteAsignacionSensores)

export default routerAsignacionSensores