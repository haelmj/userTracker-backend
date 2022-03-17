import 'dotenv/config';
import 'module-alias/register';
import validateEnv from '@/utils/validateEnv';
import App from './app';
import { AttendanceController } from 'api/attendance/attendance.controller';
import {BranchController} from 'api/branch/branch.controller';
import {UserController} from 'api/user/user.controller';

// validate the environment variables
validateEnv();

// initialize app
const app = new App([], Number(process.env.PORT));

app.listen();