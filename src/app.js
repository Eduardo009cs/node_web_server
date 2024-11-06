import { envs } from './config/env.js';
import { startServer } from './server/server.js';

const main = () => {

    startServer({
        port: envs.PORT,
        public_path : envs.PUBLIC_PATH
    })
    
}


// Funcion agnostica autoconvocada
// Agnóstica por que no tiene nombre 


( async () => {
    main()
})()