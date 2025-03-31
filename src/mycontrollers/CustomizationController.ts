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
import { CustomizationService } from '../myservices/CustomizationService';
import {
  CustomizationSearchVo,
  CustomizationVo,
} from '../myvo/CustomizationVo';

@Controller('/customization')
export class CustomizationController {
  private customizationService = new CustomizationService();

  @Post('/createCustomization')
  async createCustomization(@Body() CustomizationVo: CustomizationVo) {
    return this.customizationService.createCustomization(CustomizationVo);
  }

  @Put('/updateCustomization/:Id')
  async updateaCustomization(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() CustomizationVo: CustomizationVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.customizationService.updateaCustomization(
      Id,
      userId,
      CustomizationVo,
    );
  }

  @Get('/removeCustomization/:Id')
  async removeCustomization(@Param('Id') Id: string) {
    return this.customizationService.removeCustomization([Id]);
  }

  @Get('/getCustomizationById/:Id')
  async getCustomizationById(@Param('Id') Id: string) {
    return this.customizationService.getCustomizationById(Id);
  }

  @Get('/getCustomization')
  async getCustomization(@Query() search: CustomizationSearchVo) {
    return this.customizationService.getCustomization(search);
  }

  @Get('/getCustomizationAll')
  async getCustomizationAll(@Query() search: CustomizationSearchVo) {
    return this.customizationService.getCustomizationAll(search);
  }

  @Get('/getCustomizationAllView')
  async getCustomizationAllView() {
    return this.customizationService.getCustomizationAllView();
  }
}
