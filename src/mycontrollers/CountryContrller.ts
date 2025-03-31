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
import { CountryService } from '../myservices/CountryService';
import { CountrySearchVo, CountryVo } from '../myvo/CountryVo';

@Controller('/country')
export class CountryController {
  private countryService = new CountryService();

  @Post('/createCountry')
  async createCountry(@Body() CountryVo: CountryVo) {
    return this.countryService.createCountry(CountryVo);
  }

  @Put('/updateCountry/:Id')
  async updateaCountry(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() CountryVo: CountryVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.countryService.updateaCountry(Id, userId, CountryVo);
  }

  @Get('/removeCountry/:Id')
  async removeCountry(@Param('Id') Id: string) {
    return this.countryService.removeCountry([Id]);
  }

  @Get('/getCountryById/:Id')
  async getCountryById(@Param('Id') Id: string) {
    return this.countryService.getCountryById(Id);
  }

  @Get('/getCountry')
  async getCountry(@Query() search: CountrySearchVo) {
    return this.countryService.getCountry(search);
  }

  @Get('/getCountryAll')
  async getCountryAll(@Query() search: CountrySearchVo) {
    return this.countryService.getCountryAll(search);
  }

  @Get('/getCountryAllView')
  async getCountryAllView() {
    return this.countryService.getCountryAllView();
  }
}
