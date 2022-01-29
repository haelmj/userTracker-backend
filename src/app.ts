import express, { Request, Response, Application, NextFunction} from 'express';
import mongoose from 'mongoose';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import ErrorMiddleware from '@/middlewares/error.middleware';
import Controller from '@/utils/interfaces/controller.interface';



// setup express app
class App {
    public express: Application;
    public port: number;

    constructor(controller: Controller[], port: number) {
        this.express = express();
        this.port = port;

        this.initialiseDatabaseConnection();
        this.initialiseMiddleware();
        this.initialiseController(controller);
        this.initialiseErrorHandler();
    }

    private initialiseMiddleware(): void {
        this.express.use(helmet());
        this.express.use(cors());
        this.express.use(morgan('dev'));
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: false }));
        this.express.use(express.raw());
        this.express.use("/static", express.static(path.join(__dirname, "public")));
    }

    private initialiseController(controller: Controller[]): void {
        controller.forEach((controller: Controller) => {
            this.express.use('/', controller.router);
        });
    }

    private initialiseErrorHandler(): void {
        this.express.use(ErrorMiddleware);
    }

    private initialiseDatabaseConnection(): void {
        const { MONGO_USER, MONGO_PASSWORD, MONGO_PATH } = process.env;
        mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_PATH}`);
    }

    public listen(): void {
        this.express.listen(this.port, () => {
            console.log(`Listening on port ${this.port}`);
        });
    }
}

export default App;