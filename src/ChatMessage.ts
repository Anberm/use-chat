import { MessageContentType, MessageDirection, MessageStatus } from "./enums";
import { MessageContent } from "./interfaces/MessageContent";
import { ChatMessageId } from "./Types";

export type ChatMessageParams<T extends MessageContentType> = {
  id: ChatMessageId;
  status: MessageStatus;
  contentType: T;
  senderId: string;
  direction: MessageDirection;
  content: MessageContent<T>;
  date: Date;
};

export class ChatMessage<T extends MessageContentType> {
  id: ChatMessageId;
  status: MessageStatus;
  contentType: MessageContentType;
  senderId: string;
  direction: MessageDirection;
  content: MessageContent<T>;
  date: Date;

  constructor({
    id,
    status,
    contentType,
    senderId,
    direction,
    content,
    date,
  }: ChatMessageParams<MessageContentType>) {
    this.id = id;
    this.status = status;
    this.contentType = contentType;
    this.senderId = senderId;
    this.direction = direction;
    this.content = content;
    this.date = date;
  }
}
