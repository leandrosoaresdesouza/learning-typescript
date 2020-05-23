interface MailTo {
  name: string;
  email: string;
}

interface MailMessage {
  subject: string;
  body: string;
  attachment?: string[];
}

interface MessageDTO {
  to: MailTo;
  message: MailMessage;
}
// DTO = Data Transfer Object (DDD)

interface EmailService {
  sendEmail(request: MessageDTO): void;
}
class EmailService implements EmailService {
  sendMail({ to, message }: MessageDTO) {
    console.log(`Email sent to ${to.name}: ${message.subject}`);
  }
}

export default EmailService;
