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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const express = require("express");
const sequelize_1 = __importDefault(require("../etc/sequelize"));
const express_1 = require("express");
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const index_1 = __importDefault(require("../routes/index"));
const errorMiddleware_1 = __importDefault(require("../src/shared/Infrastructure/Http/errorMiddleware"));
try {
    const authenticate = async () => await sequelize_1.default.authenticate();
    authenticate();
    console.log('Connection has been established successfully.');
}
catch (error) {
    console.error('Unable to connect to the database:', error);
}
const app = express();
app.use((0, express_1.json)());
app.use((0, express_fileupload_1.default)({
    useTempFiles: true,
    tempFileDir: 'tmp',
    limits: {
        fileSize: 10000000, // Around 10MB
    },
    abortOnLimit: true,
}));
app.use('/api', index_1.default);
app.use(errorMiddleware_1.default);
const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Avashop listening on port 3000!');
});
