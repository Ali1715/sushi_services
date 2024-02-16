import express, { Application } from 'express';
import productosRoutes from '../../routes/productosRoutes';
import cors from 'cors';
import db from '../../config/conection';
class Server{

    private app: Application;
    private port: String;
    private apiPaths = {
        productos: '/api/productos',
    }

    constructor(){

        this.app = express();
        this.port=process.env.PORT || '8000';

        //dbConection
        this.dbConnection();
        //middelwares
        this.middlewares();
        //mis rutas
        this.routes();
    }


async dbConnection(){

    try{
        await db.authenticate();
        console.log(`Database is connected`);

    }catch(e){
        throw new Error("Error connecting to database");
    }
 
}

    middlewares(){
        //cors
        this.app.use(cors());
        //body read
        this.app.use(express.json());
        //public file
        this.app.use(express.static('public')) ;
        this.app.use(express.static('public/img/'));
    }

    routes(){
        this.app.use(this.apiPaths.productos, productosRoutes)
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log('Server listening on port!' + this.port);
        })
    }

}

export default Server;