import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Configuración de CORS
app.use(cors({
    origin: ['https://folkstravels.com'],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    credentials: true
}));

app.use(express.json());

// Configurar Nodemailer con variables de entorno
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Ruta para enviar correo
app.post('/api/enviarCorreo', (req, res) => {
    const { name, email, message } = req.body;

    console.log("Datos recibidos:", req.body);

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'ventas@folkstravels.com',
        subject: `Nuevo mensaje desde Folkstravels.com de ${name}`,
        text: `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error al enviar el correo:', error);
            return res.status(500).json({ message: 'Hubo un error al enviar el correo.', error: error.message });
        }
        console.log('Correo enviado: ' + info.response);
        res.status(200).json({ message: 'Correo enviado con éxito', response: info.response });
    });
});

// Puerto desde el .env o por defecto 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
