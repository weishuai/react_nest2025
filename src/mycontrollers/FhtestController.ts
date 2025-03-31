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
import { FhtestService } from '../myservices/FhtestService';
import { FhtestAddVo } from '../myvo/FhtestVo';

@Controller('/fhtest')
export class FhtestController {
  private fhtestService = new FhtestService();
  @Put('/createFhtest')
  async createFhtest(@Body() fhtestVo: FhtestAddVo) {
    return this.fhtestService.createFhtest(fhtestVo);
  }

  @Put('/update_Fhtest/:Id')
  async update_Fhtest(@Param('Id') Id: string, @Body() fhtestVo: FhtestAddVo) {
    return this.fhtestService.updateFhtest(Id, fhtestVo);
  }

  @Get('/removeFhtest/:Id')
  async removeFhtest(@Param('Id') Id: string) {
    return this.fhtestService.removeFhtest([Id]);
  }
}
