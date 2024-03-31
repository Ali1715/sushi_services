"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productosRoutes_1 = __importDefault(require("../../routes/productosRoutes"));
const categoriasRoutes_1 = __importDefault(require("../../routes/categoriasRoutes"));
const clientesRoutes_1 = __importDefault(require("../../routes/clientesRoutes"));
const descuentosRoutes_1 = __importDefault(require("../../routes/descuentosRoutes"));
const estadosRoutes_1 = __importDefault(require("../../routes/estadosRoutes"));
const pedidosRoutes_1 = __importDefault(require("../../routes/pedidosRoutes"));
const detPedidosRoutes_1 = __importDefault(require("../../routes/detPedidosRoutes"));
const pedidosLastRoutes_1 = __importDefault(require("../../routes/pedidosLastRoutes"));
const detPedidosLastRoutes_1 = __importDefault(require("../../routes/detPedidosLastRoutes"));
const cors_1 = __importDefault(require("cors"));
const conection_1 = __importDefault(require("../../config/conection"));
class Server {
    constructor() {
        this.apiPaths = {
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
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8000';
        //dbConection
        this.dbConnection();
        //middelwares
        this.middlewares();
        //mis rutas
        this.routes();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield conection_1.default.authenticate();
                console.log(`Database is connected`);
            }
            catch (e) {
                throw new Error("Error connecting to database");
            }
        });
    }
    middlewares() {
        //cors
        this.app.use((0, cors_1.default)());
        //body read
        this.app.use(express_1.default.json());
        //public file
        this.app.use(express_1.default.static('public'));
        this.app.use(express_1.default.static('public/img/'));
    }
    routes() {
        this.app.use(this.apiPaths.productos, productosRoutes_1.default);
        this.app.use(this.apiPaths.categorias, categoriasRoutes_1.default);
        this.app.use(this.apiPaths.clientes, clientesRoutes_1.default);
        this.app.use(this.apiPaths.descuentos, descuentosRoutes_1.default);
        this.app.use(this.apiPaths.estados, estadosRoutes_1.default);
        this.app.use(this.apiPaths.pedidos, pedidosRoutes_1.default);
        this.app.use(this.apiPaths.detPedidos, detPedidosRoutes_1.default);
        this.app.use(this.apiPaths.pedidosLast, pedidosLastRoutes_1.default);
        this.app.use(this.apiPaths.detPedidosLast, detPedidosLastRoutes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Server listening on port' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map