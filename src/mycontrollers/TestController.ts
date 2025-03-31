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

@Controller('/test')
export class TestController {
  @Get('/hello')
  async thisIsAMethod(@Headers('userToken') userToken: string) {
    return userToken;
  }

  @Get('/hello/:name')
  async hello(@Param('name') name: string) {
    return `Hello ${name}!`;
  }

  @Get('/weishuai/:name')
  async weishuai(@Param('name') name: string) {
    return `weishuai ${name}!`;
  }
}
