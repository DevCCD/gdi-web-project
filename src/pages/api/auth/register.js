// import { validateEmail } from '@/utils/valid';
// import { PrismaClient } from '@prisma/client'
// import bcrypt from 'bcrypt';

// const prisma = new PrismaClient()

// export default async function registerUser(req, res) {
//     if (req.method === 'POST') {
//         // Desestructuramos los datos del usuario
//         const { name, email, password, confirmPassword } = req.body;
//         // Validamos que los campos no estén vacíos
//         if (!name || !email || !password || !confirmPassword) {
//             return res.status(400).json({ error: 'Por favor, rellene todos los campos' });
//         }
//         // Validamos que las contraseñas coincidan
//         if (password !== confirmPassword) {
//             return res.status(400).json({ error: 'Las contraseñas no coinciden' });
//         }
//         // Validamos el email
//         if (!validateEmail(email)) {
//             return res.status(400).json({ error: 'El email no es válido' });
//         }
//         // Validamos que el email no esté registrado
//         const user = await prisma.usersDashboard.findUnique({
//             where: {
//                 email
//             }
//         })
//         if (user) {
//             return res.status(400).json({ error: 'El email ya está registrado' });
//         }
//         // Encripta la contraseña del usuario
//         const hashedPassword = await bcrypt.hash(password, 10);
//         try {
//             // CREAR UN NUEVO USUARIO EN LA BASE DE DATOS
//             const newUser = await prisma.usersDashboard.create({
//                 data: {
//                     name,
//                     email,
//                     password: hashedPassword
//                 }
//             })

//             res.status(200).json(newUser);
//         } catch (error) {
//             console.log(error);
//             res.status(400).json({ error: 'Ocurrió un error al registrar el usuario' });
//         }

//     } else {
//         res.status(405).json({ error: 'Método HTTP no permitido' });
//     }
// }