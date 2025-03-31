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
import { FeedbackService } from '../myservices/FeedbackService';
import { FeedbackSearchVo, FeedbackVo } from '../myvo/FeedbackVo';

@Controller('/feedback')
export class FeedbackController {
  private feedbackService = new FeedbackService();

  @Post('/createFeedback')
  async createFeedback(@Body() FeedbackVo: FeedbackVo) {
    return this.feedbackService.createFeedback(FeedbackVo);
  }

  @Put('/updateFeedback/:Id')
  async updateaFeedback(
    @Headers('userToken') userToken: string,
    @Param('Id') Id: string,
    @Body() FeedbackVo: FeedbackVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.feedbackService.updateaFeedback(Id, userId, FeedbackVo);
  }

  @Get('/removeFeedback/:Id')
  async removeFeedback(@Param('Id') Id: string) {
    return this.feedbackService.removeFeedback([Id]);
  }

  @Get('/getFeedbackById/:Id')
  async getFeedbackById(@Param('Id') Id: string) {
    return this.feedbackService.getFeedbackById(Id);
  }

  @Get('/getFeedback')
  async getFeedback(@Query() search: FeedbackSearchVo) {
    return this.feedbackService.getFeedback(search);
  }

  @Get('/getFeedbackAll')
  async getFeedbackAll(@Query() search: FeedbackSearchVo) {
    return this.feedbackService.getFeedbackAll(search);
  }

  @Get('/getFeedbackAllView')
  async getFeedbackAllView() {
    return this.feedbackService.getFeedbackAllView();
  }
}
