import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: 'tu-correo@gmail.com',
    subject: 'Prueba desde backend',
    text: 'Este es un correo de prueba enviado desde nodemailer'
}, (error, info) => {
    if (error) {
        return console.error('❌ Error:', error.message);
    }
    console.log('✅ Correo enviado:', info.response);
});
