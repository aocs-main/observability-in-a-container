import tracer from './tracing';
import logger from './logging';

const main = async () => {

    // Sample logging
    logger.info('Application started');
    logger.info("Started logging");
    logger.error("testing error");
    logger.debug("Ended logging");
    logger.info('Application finished');

    //sample tracing
    const span = tracer.startSpan("main");
    span.setAttribute("test-attribute-2", "test-value-2");
    span.end();
};

main().catch(err => {
  logger.error('Application error', { error: err });
});

