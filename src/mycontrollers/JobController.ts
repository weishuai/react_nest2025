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
import { JobService } from '../myservices/JobService';
import { JobSearchVo, JobVo } from '../myvo/JobVo';

@Controller('/job')
export class JobController {
  private jobService = new JobService();

  @Post('/createJob')
  async createJob(@Body() JobVo: JobVo) {
    return this.jobService.createJob(JobVo);
  }

  @Put('/updateJob/:Id')
  async updateaJob(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() JobVo: JobVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.jobService.updateaJob(Id, userId, JobVo);
  }

  @Get('/removeJob/:Id')
  async removeJob(@Param('Id') Id: string) {
    return this.jobService.removeJob([Id]);
  }

  @Get('/getJobById/:Id')
  async getJobById(@Param('Id') Id: string) {
    return this.jobService.getJobById(Id);
  }

  @Get('/getJob')
  async getJob(
    @Headers('userToken') userToken: string,
    @Query() search: JobSearchVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }

    return this.jobService.getJob(userId, search);
  }

  @Get('/getJobAll')
  async getJobAll( @Query() search: JobSearchVo) {
    return this.jobService.getJobAll(search);
  }

  @Get('/getJobAllView')
  async getJobAllView() {
    return this.jobService.getJobAllView();
  }
}
