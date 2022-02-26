import 'dotenv/config';
import 'module-alias/register';
import validateEnv from '@/utils/validateEnv';
import App from './api/app';

// validate the environment variables
validateEnv();

// initialize app
const app = new App([], Number(process.env.PORT));

app.listen();