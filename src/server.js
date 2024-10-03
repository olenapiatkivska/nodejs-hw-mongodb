import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import dotenv from 'dotenv';
import { env } from './utils/env.js';

// Завантажуємо змінні оточення з .env файлу
dotenv.config();

const PORT = Number(env('PORT', '3000'));

export const setupServer = () => {
  // Створення серверу express
  const app = express();

  // Налаштування CORS
  app.use(cors());

  // Налаштовуємо логер pino
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  // Обробка неіснуючих маршрутів
  app.use((req, res, next) => {
    res.status(404).json({
      message: 'Not found',
    });
  });

  // Запуск сервера
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
