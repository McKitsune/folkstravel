import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { exec } from 'child_process';

// Carpetas donde están tus multimedia
const foldersToOptimize = ['public/assets', 'src/assets'];
const outputSuffix = '-optimized';

// Optimiza imágenes: resize y convierte a WebP con calidad 75%
async function optimizeImage(inputPath, outputPath) {
    await sharp(inputPath)
        .resize({ width: 1920, withoutEnlargement: true })
        .webp({ quality: 75 })
        .toFile(outputPath);
}

// Optimiza videos: reduce resolución y bitrate con ffmpeg
function optimizeVideo(inputPath, outputPath) {
    return new Promise((resolve, reject) => {
        const cmd = `ffmpeg -i "${inputPath}" -vf "scale='min(1920,iw)':'min(1080,ih)':force_original_aspect_ratio=decrease" -b:v 1M -c:a copy "${outputPath}" -y`;
        exec(cmd, (error, stdout, stderr) => {
            if (error) reject(error);
            else resolve(stdout);
        });
    });
}

// Procesa carpeta recursivamente optimizando multimedia
async function processFolder(inputDir, outputDir) {
    fs.mkdirSync(outputDir, { recursive: true });
    const files = fs.readdirSync(inputDir);

    for (const file of files) {
        const inputPath = path.join(inputDir, file);
        const stat = fs.statSync(inputPath);
        const ext = path.extname(file).toLowerCase();
        const isImage = /\.(jpg|jpeg|png|gif)$/i.test(ext);
        const isVideo = /\.(mp4|mov|webm|avi)$/i.test(ext);
        const outputPath = isImage
            ? path.join(outputDir, file.replace(/\.(jpg|jpeg|png|gif)$/i, '.webp'))
            : path.join(outputDir, file);

        if (stat.isDirectory()) {
            await processFolder(inputPath, path.join(outputDir, file));
        } else if (isImage) {
            await optimizeImage(inputPath, outputPath);
            console.log(`Imagen optimizada: ${inputPath} → ${outputPath}`);
        } else if (isVideo) {
            await optimizeVideo(inputPath, outputPath);
            console.log(`Video optimizado: ${inputPath} → ${outputPath}`);
        } else {
            fs.copyFileSync(inputPath, outputPath);
        }
    }
}

// Ejecutar optimización en todas las carpetas configuradas
(async () => {
    try {
        for (const folder of foldersToOptimize) {
            const inputDir = path.resolve(folder);
            const outputDir = path.resolve(folder + outputSuffix);
            console.log(`Optimizando carpeta: ${inputDir} → ${outputDir}`);
            await processFolder(inputDir, outputDir);
        }
        console.log('Optimización multimedia completada');
    } catch (error) {
        console.error('Error durante optimización:', error);
    }
})();
