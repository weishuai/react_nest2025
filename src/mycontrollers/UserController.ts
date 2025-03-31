import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Query,
  Headers,
} from '@nestjs/common';
import _ from 'lodash';
import { UserService } from '../myservices/UserService';

@Controller('/user')
export class UserController {
  private userService = new UserService();

  @Get('/getUserBaseAll')
  async getUserBaseAll() {
    return this.userService.getUserBaseAll();
  }

  @Get('/getUserBaseAllView')
  async getUserBaseAllView() {
    return this.userService.getUserBaseAllView();
  }

  @Get('/getUserBaseById/:Id')
  async getUserBaseById(@Param('Id') Id: string) {
    return this.userService.getUserBaseById(Id);
  }
}
