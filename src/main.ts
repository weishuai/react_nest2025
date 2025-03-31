import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
///import logger from "morgan";
import * as express from 'express';
///import { Logger } from './myutils/log4js';
//import { LoggerMiddleware } from './logger.middleware';
import { ValidationPipe } from '@nestjs/common';

// Socket
///import "es6-shim"; 
import "reflect-metadata"; 
import {createSocketServer} from "socket-controllers";
import {FHMessageController} from "./mycontrollers/FHMessageControllerv1";
import { TransformInterceptor } from './filter/transform.interceptor';

 //以下代码暂时注销
// import { AllExceptionsFilter } from './filter/any-exception.filter';
createSocketServer(3001, {
    controllers: [FHMessageController]
});


async function bootstrap() {
  ///const app = await NestFactory.create(AppModule);
  //await app.listen(3009);
  const app = await NestFactory.create(AppModule, { cors: true });

  //日志

  // 开启一个全局验证管道
  app.useGlobalPipes(new ValidationPipe()) 
  //logger.('weishuaiok');
  //app.use(express.json()); // For parsing application/json
  //app.use(express.urlencoded({ extended: true })); 
  // For parsing application/x-www-form-urlencoded
  // 监听所有的请求路由，并打印日志
  ///app.use(Logger);
  // 使用拦截器打印出参
  //app.useGlobalInterceptors(new TransformInterceptor());
  //app.setGlobalPrefix('nest-zero-to-one');
  // 过滤处理 HTTP 异常
  //app.useGlobalFilters(new HttpExceptionFilter());

  // app.useGlobalFilters(new AllExceptionsFilter());
  
  //Logger.info('weishuai');
  // DOESN'T WORK

  //以下代码暂时注销
  // app.enableCors();
  // app.use((req, res, next) => {
  //   res.header('Access-Control-Allow-Origin', '*');
  //   res.header(
  //     'Access-Control-Allow-Methods',
  //     'GET,PUT,POST,DELETE,PATCH,OPTIONS,UPGRADE,CONNECT,TRACE',
  //   );
  //   res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
  //   next();
  // });

  await app.listen(3009);
}
bootstrap();
