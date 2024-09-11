import pino from 'pino';

export default pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      ignore: 'pid,hostname',
      messageFormat: '[CS-SKIN-STORE] {msg}',
    },
  },
});
