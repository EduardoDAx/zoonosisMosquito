import { Router } from "express";
import {body, param} from "express-validator";
import { createUsuario, getUsuario, getUsuarioById, updateUsuario, deleteUsuario } from "../handlers/usuarios";
import { inputErrors } from "../middleware";

const routerUsuario = Router()

routerUsuario.get('/', getUsuario)
routerUsuario.get('/:id',param('id').isNumeric().withMessage('El id ingresado no es válido'), inputErrors,getUsuarioById)
routerUsuario.post('/'
    ,body('nombre')
    .notEmpty().withMessage('El nombre del usuario no puede estar vacio')
    ,body('apellido')
    .notEmpty().withMessage('El apellido del usuario no puede estar vacio')
    ,body('dni').isNumeric()
    .notEmpty().withMessage('El dni del usuario no puede estar vacio')
    ,body('fecha_nacimiento')
    .notEmpty().withMessage('La fecha de nacimiento del usuario no puede estar vacia')
    ,body('celular')
    .notEmpty().withMessage('El celular del usuario no puede estar vacio')
    ,body('email')
    .notEmpty().withMessage('El email del usuario no puede estar vacio')
    ,body('username')
    .notEmpty().withMessage('El username del usuario no puede estar vacio')
    ,body('password_hash')
    .notEmpty().withMessage('El password_hash del usuario no puede estar vacio')
    ,body('estado').isNumeric()
    .notEmpty().withMessage('El estado del usuario no puede estar vacio')
    ,body('id_tipo').isNumeric()
    .notEmpty().withMessage('El id_tipo del usuario no puede estar vacio')
    ,inputErrors
    , createUsuario)
routerUsuario.put('/:id'
    ,param('id')
    .isNumeric().withMessage('El id ingresado no es valido')
    ,body('nombre')
    .notEmpty().withMessage('El nombre del usuario no puede estar vacio')
    ,body('apellido')
    .notEmpty().withMessage('El apellido del usuario no puede estar vacio')
    ,body('dni').isNumeric()
    .notEmpty().withMessage('El dni del usuario no puede estar vacio')
    ,body('fecha_nacimiento')
    .notEmpty().withMessage('La fecha de nacimiento del usuario no puede estar vacia')
    ,body('celular')
    .notEmpty().withMessage('El celular del usuario no puede estar vacio')
    ,body('email')
    .notEmpty().withMessage('El email del usuario no puede estar vacio')
    ,body('username')
    .notEmpty().withMessage('El username del usuario no puede estar vacio')
    ,body('password_hash')
    .notEmpty().withMessage('El password_hash del usuario no puede estar vacio')
    ,body('estado').isNumeric()
    .notEmpty().withMessage('El estado del usuario no puede estar vacio')
    ,body('id_tipo').isNumeric()
    .notEmpty().withMessage('El id_tipo del usuario no puede estar vacio')
    ,inputErrors
    ,updateUsuario)
    routerUsuario.delete('/:id'
    ,param('id')
    .isNumeric().withMessage('El id ingresado no es valido')
    ,inputErrors
    , deleteUsuario)

export default routerUsuario