import { DiagConsoleLogger, DiagLogLevel, diag } from '@opentelemetry/api';
import { logs } from '@opentelemetry/api-logs';
import {
  LoggerProvider,
  SimpleLogRecordProcessor,
} from '@opentelemetry/sdk-logs';
import { registerInstrumentations } from '@opentelemetry/instrumentation';
import { OTLPLogExporter } from '@opentelemetry/exporter-logs-otlp-http';
import { WinstonInstrumentation } from '@opentelemetry/instrumentation-winston';

// Setting up the exporter to connect to the otel-collector
const logExporter = new OTLPLogExporter({
  url: 'http://localhost:4318/v1/logs' // *keep this if you are running the docker compose locally
});

// Optional and only needed to see the internal diagnostic logging (during development)
diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.DEBUG);

// Configuring the Logger provider and registering the usage of Winston logger
const loggerProvider = new LoggerProvider();
loggerProvider.addLogRecordProcessor(
  new SimpleLogRecordProcessor(logExporter)
);
logs.setGlobalLoggerProvider(loggerProvider);
registerInstrumentations({
  instrumentations: [
      new WinstonInstrumentation({}),
  ],
});

// Configuring and initializing Winston logger for overall logging
const winston = require('winston');
const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.json(),
  defaultMeta: { service: 'test-service' },  
})

export default logger;