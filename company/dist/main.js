"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.connectMicroservice({
        transport: microservices_1.Transport.TCP,
        options: {
            host: 'localhost',
            port: 3004
        }
    });
    app.startAllMicroservicesAsync();
    await app.listen(3030);
    console.log(`Company Service is running on ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map