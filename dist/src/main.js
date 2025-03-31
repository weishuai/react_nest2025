"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
require("reflect-metadata");
const socket_controllers_1 = require("socket-controllers");
const FHMessageControllerv1_1 = require("./mycontrollers/FHMessageControllerv1");
(0, socket_controllers_1.createSocketServer)(3001, {
    controllers: [FHMessageControllerv1_1.FHMessageController]
});
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(3009);
}
bootstrap();
//# sourceMappingURL=main.js.map