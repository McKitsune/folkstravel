import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // Cargar variables de entorno

const app = express();

// Configuración de CORS
app.use(cors({
    origin: ['https://folkstravels.com'],
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
    credentials: true
}));

app.use(express.json());

// Ruta básica para ver si el backend está vivo (necesaria para Render)
app.get('/', (req, res) => {
    res.send('Servidor backend funcionando correctamente 🚀');
});

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

// Puerto desde Render o por defecto
const PORT = process.env.PORT || 5000;

console.log('PORT desde Render:', process.env.PORT);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor corriendo en http://0.0.0.0:${PORT}`);
});
