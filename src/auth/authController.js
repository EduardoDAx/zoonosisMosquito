import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { Usuarios } from '../models/usuario.js';

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);

    // Busca al usuario en la base de datos
    const user = await Usuarios.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    // Compara la contraseña ingresada con la almacenada en la base de datos
    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    // Si las credenciales son válidas, genera un JWT
    const token = jwt.sign({ id: user.id }, 'your-secret-key', { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
