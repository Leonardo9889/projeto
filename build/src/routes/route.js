"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterService = void 0;
const createClient_controller_1 = require("../service/createClient.controller");
class RouterService {
    constructor(route, prisma) {
        this.route = route;
        this.prisma = prisma;
        this.routes = this.route;
        this.prismaClient = this.prisma;
    }
    exec() {
        const clientController = new createClient_controller_1.CreateClietService(this.prismaClient);
        this.routes.use('/api/v1');
        this.routes.get(`/`, () => { console.log(`TESTE`); });
        this.routes.post('/create', (req, res) => clientController.create(req.body));
        return this.routes;
    }
}
exports.RouterService = RouterService;
