"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const fs_1 = require("fs");
const path_1 = require("path");
let uploadController = class uploadController {
    doAdd(fhname, file) {
        let originalname = file.originalname;
        console.log("originalname" + originalname);
        fhname = fhname + "." + originalname.split(".")[1];
        console.log("fhname:" + fhname);
        const cws = (0, fs_1.createWriteStream)((0, path_1.join)(__dirname, '../../public/upload/', `${fhname}`));
        cws.write(file.buffer);
        return '上传图片成功';
    }
};
__decorate([
    (0, common_1.Post)('/doAdd/:fhname'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('pic')),
    __param(0, (0, common_1.Param)('fhname')),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], uploadController.prototype, "doAdd", null);
uploadController = __decorate([
    (0, common_1.Controller)('/upload')
], uploadController);
exports.uploadController = uploadController;
//# sourceMappingURL=uploadController.js.map