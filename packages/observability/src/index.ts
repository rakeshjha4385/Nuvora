export interface LogContext {
  requestId?: string;
  userId?: string;
  operation?: string;
  durationMs?: number;
  service?: string;
  environment?: string;
}

export function createLogger(service: string) {
  return {
    info(message: string, context: LogContext = {}) {
      console.info(JSON.stringify({ level: 'info', service, ...context, message }));
    },
    warn(message: string, context: LogContext = {}) {
      console.warn(JSON.stringify({ level: 'warn', service, ...context, message }));
    },
    error(message: string, context: LogContext = {}) {
      console.error(JSON.stringify({ level: 'error', service, ...context, message }));
    },
  };
}
