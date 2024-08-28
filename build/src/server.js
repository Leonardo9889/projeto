"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
require("dotenv/config");
const route_1 = require("./routes/route");
const database_service_1 = require("./database/database.service");
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
const routeService = (0, express_1.Router)();
const prismaClient = new client_1.PrismaClient();
const dataBaseService = new database_service_1.DataBaseService(prismaClient);
const route = new route_1.RouterService(routeService, prismaClient);
app.use(express_1.default.json());
app.use(route.exec);
async function exec() {
    try {
        await dataBaseService.connection();
        app.listen(process.env.PORT, () => {
            console.log(`listen on port ${process.env.PORT}`);
        });
    }
    catch (error) {
        console.log(`Fail to initializing server. Error: ${error && error.message}`);
        process.exit(1);
    }
}
exec();
