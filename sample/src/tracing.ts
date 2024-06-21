import { trace } from '@opentelemetry/api';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { NodeSDK } from '@opentelemetry/sdk-node';
import {
  BasicTracerProvider,
  ConsoleSpanExporter,
  SimpleSpanProcessor,
} from '@opentelemetry/sdk-trace-node';
import { Resource } from '@opentelemetry/resources';

const exporter = new OTLPTraceExporter({ url: "http://localhost:4318/v1/traces"});

const provider = new BasicTracerProvider(
{
resource: new Resource({
    'service.name': 'test-app',
}),
});

try {
    // Export spans to console (useful for debugging)
    provider.addSpanProcessor(
        new SimpleSpanProcessor(new ConsoleSpanExporter()),
    );

    // Export spans to opentelemetry collector
    provider.addSpanProcessor(new SimpleSpanProcessor(exporter));
    provider.register();

    const sdk = new NodeSDK({
    traceExporter: exporter,
    instrumentations: [
        getNodeAutoInstrumentations({
        '@opentelemetry/instrumentation-fs': { enabled: false },
        }),
    ],
    });

    sdk.start();

} catch (e) {
    console.error('Failed to initialize the tracer', e);
}

const tracer = trace.getTracer("test-application", "0.1.0");

export default tracer;