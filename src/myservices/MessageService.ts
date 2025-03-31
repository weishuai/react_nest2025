import _ from 'lodash';
import { FHUserRepo } from '../myrepositories';
export type UserToken = {
  uid: string;
  jwtid: string;
  app: string;
};
export class MessageService {
  private FHuserRepo = new FHUserRepo();
  ///private events: DistributedEvents;

  //使用
  ///await this.sendMailUser(issue.raisedBy, issue.caseId, 'wip_admin');
  //await this.sendMailRfqSoq(issueId, council.id, 'SOQ')
  async sendMailUser(userId: string, refNumber: string, temp: string) {
    const user = await this.FHuserRepo.getFHUsersById(userId);
    if (_.isNil(user)) {
      return;
    }
    /*
    return this.events.pub(
      MsgEvents.SENDING_MESSAGE,
      new SendingMessage({
        app: 'crm',
        toEmail: user.email,
        template: new Template({
          name: temp,
          data: {
            refNumber,
            adminName: user.userName,
          },
        }),
        channels: ['EMAIL', 'SITE', 'PUSH'],
      }),
    );
    */
  }
}
