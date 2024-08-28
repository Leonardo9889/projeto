"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataBaseService = void 0;
const client_1 = require("@prisma/client");
class DataBaseService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async connection() {
        try {
            this.prisma = new client_1.PrismaClient({
                datasourceUrl: process.env.DATABASE_URL,
                log: ['error', 'info', 'warn'],
            });
            await this.prisma.$connect();
            console.log("DataBase running!");
        }
        catch (error) {
            await this.prisma.$disconnect();
            console.error(`Fail to connect in database - Error ${error}`);
        }
    }
}
exports.DataBaseService = DataBaseService;
