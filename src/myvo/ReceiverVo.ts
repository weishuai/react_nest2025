export class EventGetVo {
  eventId: string;

  event: string;

  description: string;

  receiverIds: string[];

  receiverNames: string[];
}

export class ReceiverSetVo {
  eventId: string;

  receiverIds: string[];
}
