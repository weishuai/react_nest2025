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
import { PaymentTermService } from '../myservices/PaymentTermService';
import { PaymentTermSearchVo, PaymentTermVo } from '../myvo/PaymentTermVo';

@Controller('/paymentTerm')
export class PaymentTermController {
  private paymentTermService = new PaymentTermService();

  @Post('/createPaymentTerm')
  async createPaymentTerm(@Body() PaymentTermVo: PaymentTermVo) {
    return this.paymentTermService.createPaymentTerm(PaymentTermVo);
  }

  @Put('/updatePaymentTerm/:Id')
  async updateaPaymentTerm(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() PaymentTermVo: PaymentTermVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.paymentTermService.updateaPaymentTerm(
      Id,
      userId,
      PaymentTermVo,
    );
  }

  @Get('/removePaymentTerm/:Id')
  async removePaymentTerm(@Param('Id') Id: string) {
    return this.paymentTermService.removePaymentTerm([Id]);
  }

  @Get('/getPaymentTermById/:Id')
  async getPaymentTermById(@Param('Id') Id: string) {
    return this.paymentTermService.getPaymentTermById(Id);
  }

  @Get('/getPaymentTerm')
  async getPaymentTerm(@Query() search: PaymentTermSearchVo) {
    return this.paymentTermService.getPaymentTerm(search);
  }

  @Get('/getPaymentTermAll')
  async getPaymentTermAll(@Query() search: PaymentTermSearchVo) {
    return this.paymentTermService.getPaymentTermAll(search);
  }

  @Get('/getPaymentTermAllView')
  async getPaymentTermAllView() {
    return this.paymentTermService.getPaymentTermAllView();
  }
}
