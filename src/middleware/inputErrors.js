// src/middlewares/inputErrors.js
import { validationResult } from 'express-validator';

const inputErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

export default inputErrors;
