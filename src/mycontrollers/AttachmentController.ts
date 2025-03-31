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
import { AttachmentService } from '../myservices/AttachmentService';
import { AttachmentVo } from '../myvo/AttachmentVo';
@Controller('/attachment')
export class AttachmentController {
  private attachmentService = new AttachmentService();

  @Get('/getIssueAttachments')
  async getIssueAttachments(@Query('issueId') issueId: string) {
    return this.attachmentService.getAttachments(issueId);
  }

  @Post('/addIssueAttachment')
  async addIssueAttachment(
    @Headers('userToken') userToken: string,
    @Body()
    attachmentVo: AttachmentVo,
  ) {
    let userId = '';
    if (userToken != '') {
      userId = userToken;
    }
    return this.attachmentService.addAttachment(attachmentVo, userId);
  }

  @Get('/removeAttachment/:id')
  async removeAttachment(@Param('id') id: string) {
    return this.attachmentService.removeAttachment(id);
  }

  @Get('/task/attachments')
  async queryTaskAttachments(
    @Query('when') when: string,
    @Query('mid') mid: string,
  ) {
    return this.attachmentService.queryTaskAttachments(when, mid);
  }

  @Post('/taskAttachment')
  async addTaskAttachment(@Body() attachmentVo: AttachmentVo) {
    return this.attachmentService.addTaskAttachment(attachmentVo);
  }
}
