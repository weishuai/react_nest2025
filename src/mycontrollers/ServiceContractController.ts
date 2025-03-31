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
import { ServiceContractService } from '../myservices/ServiceContractService';
import {
  ServiceContractSearchVo,
  ServiceContractVo,
} from '../myvo/ServiceContractVo';

@Controller('/serviceContract')
export class ServiceContractController {
  private serviceContractService = new ServiceContractService();

  @Post('/createServiceContract')
  async createServiceContract(@Body() ServiceContractVo: ServiceContractVo) {
    return this.serviceContractService.createServiceContract(ServiceContractVo);
  }

  @Put('/updateServiceContract/:Id')
  async updateaServiceContract(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() ServiceContractVo: ServiceContractVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.serviceContractService.updateaServiceContract(
      Id,
      userId,
      ServiceContractVo,
    );
  }

  @Get('/removeServiceContract/:Id')
  async removeServiceContract(@Param('Id') Id: string) {
    return this.serviceContractService.removeServiceContract([Id]);
  }

  @Get('/getServiceContractById/:Id')
  async getServiceContractById(@Param('Id') Id: string) {
    return this.serviceContractService.getServiceContractById(Id);
  }

  @Get('/getServiceContract')
  async getServiceContract(
    @Headers('userToken') userToken: string,
    @Query() search: ServiceContractSearchVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.serviceContractService.getServiceContract(userId, search);
  }

  @Get('/getServiceContractAll')
  async getServiceContractAll(@Query() search: ServiceContractSearchVo) {
    return this.serviceContractService.getServiceContractAll(search);
  }

  @Get('/getServiceContractAllView')
  async getServiceContractAllView() {
    return this.serviceContractService.getServiceContractAllView();
  }
}
