import {cleanEnv, str, port} from 'envalid';

function validateEnv() {
    cleanEnv(process.env, {
        NODE_ENV: str({choices: ['production', 'development', 'test']}),
        PORT: port({default: 5000}),
        MONGO_PATH: str(),
        MONGO_USER: str(),
        MONGO_PASSWORD: str()
    });
}

export default validateEnv;