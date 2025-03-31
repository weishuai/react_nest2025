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
import { CurrentUserToken } from '../myutils/current.user.token';
import _ from 'lodash';
import { FHUserService } from '../myservices/FHUserService';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FHUserSearchVo, FHUserVo } from '../myvo/FHUserVo';
@Controller('/FHUser')
export class FHUserController {
  private fhuserService = new FHUserService();
  async createFHUser(FHUserVo: FHUserVo) {
    return this.fhuserService.createFHUser(FHUserVo);
  }
  @Post('/FHUserLog')
  async UsersLogin(@Body() query) {
    ///const issue = new Fhtest();
    const email: string = query.email;
    const password: string = query.password;
    return this.fhuserService.UsersLogin(email, password);
  }

  async updateaFHUser(userToken: string, Id: string, FHUserVo: FHUserVo) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.fhuserService.updateaFHUser(Id, userId, FHUserVo);
  }
  async removeFHUser(Id: string) {
    return this.fhuserService.removeFHUser([Id]);
  }
  @Get('/getFHUserById/:Id')
  async getFHUserById(@Param('Id') Id: string) {
    return this.fhuserService.getFHUserById(Id);
  }
  async getFHUser(search: FHUserSearchVo) {
    return this.fhuserService.getFHUser(search);
  }
  @Get('/getFHUserAll')
  async getFHUserAll() {
    return this.fhuserService.getFHUserAll();
  }
  @Get('/getFHUserAll002')
  async getFHUserAll002(@Query() search: FHUserSearchVo) {
    return this.fhuserService.getFHUserAll002(search);
  }


  async getFHUserAllView() {
    return this.fhuserService.getFHUserAllView();
  }
}
