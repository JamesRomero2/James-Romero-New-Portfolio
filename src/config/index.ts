import dotenv from 'dotenv';

dotenv.config()

const development = process.env.NODE_ENV !== 'production';

export const server = development ? "http://localhost:3000" : 'https://jamesromero.tech'