import express, { Application } from 'express';
import productosRoutes from '../../routes/productosRoutes';
import categoriasRoutes from '../../routes/categoriasRoutes';
import clientesRoutes from '../../routes/clientesRoutes';
import descuentosRoutes from '../../routes/descuentosRoutes';
import estadosRoutes from '../../routes/estadosRoutes';
import pedidosRoutes from '../../routes/pedidosRoutes';
import detPedidosRoutes from '../../routes/detPedidosRoutes';
import pedidosLastRoutes from '../../routes/pedidosLastRoutes';
import detPedidosLastRoutes from '../../routes/detPedidosLastRoutes';
import cors from 'cors';
import db from '../../config/conection';
class Server{

    private app: Application;
    private port: String;
    private apiPaths = {
        productos: '/api/productos',
        pedidos: '/api/pedidos',
        clientes: '/api/clientes',
        categorias: '/api/categorias',
        descuentos: '/api/descuentos',
        estados: '/api/estados',
        pagos: '/api/pagos',
        facturas: '/api/facturas',
        detPedidos: '/api/detPedidos',
        pedidosLast: '/api/lastpedidos',
        detPedidosLast: '/api/lastdetpedidos',

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
        this.app.use(this.apiPaths.categorias, categoriasRoutes)
        this.app.use(this.apiPaths.clientes, clientesRoutes)
        this.app.use(this.apiPaths.descuentos, descuentosRoutes)
        this.app.use(this.apiPaths.estados, estadosRoutes)
        this.app.use(this.apiPaths.pedidos, pedidosRoutes)
        this.app.use(this.apiPaths.detPedidos, detPedidosRoutes)
        this.app.use(this.apiPaths.pedidosLast, pedidosLastRoutes)
        this.app.use(this.apiPaths.detPedidosLast, detPedidosLastRoutes)
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log('Server listening on port' + this.port);
        })
    }

}

export default Server;