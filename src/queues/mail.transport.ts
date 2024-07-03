import { config } from '@notifications/config';
import { emailTemplates } from '@notifications/helpers';
import { IEmailLocals, winstonLogger } from '@quysterben/jobber-shared';
import { Logger } from 'winston';

const log: Logger = winstonLogger(`${config.ELASTIC_SEARCH_URL}`, 'mailTransport', 'debug');

async function sendEmail(template: string, receiverEmail: string, locals: IEmailLocals) {
  try {
    emailTemplates(template, receiverEmail, locals);
    log.info('Notification Service Email sent successfully');
  } catch (error) {
    log.log('error', 'Notification Service error MailTransport sendEmail() method:', error);
  }
}

export { sendEmail };
