# OBSERVABILITY-IN-A-CONTAINER (Overseer)

## Description

**observability-in-a-container** is a project that provides a docker-compose configuration to start a complete observability stack, including logging, distributed tracing functionalities and metrics. It aims to offer a reference technology stack with basic configurations that are ready out-of-the-box for immediate use. This project is ideal for developers, software project teams, and general users who need a quick and easy way to set up observability tools for their applications.

## Technology Stack

- **Grafana**: For data visualization and monitoring.
- **Grafana Tempo**: For distributed tracing.
- **Grafana Loki**: For log aggregation.
- **OpenTelemetry Collector**: For collecting and exporting telemetry data.
- **Prometheus**: For metrics collection and monitoring.
- **Docker**: For containerization.

## Prerequisites

- **Docker Engine**: Ensure Docker is installed on your system. You can download and install Docker from [here](https://docs.docker.com/get-docker/).

## Setup and Installation

1. **Clone the Repository**

   First, clone the repository to your local machine using the following command:

   ```sh
   git clone https://github.com/aocs-main/observability-in-a-container.git
   ```

2. **Navigate to the Project Docker Directory**

    Change to the project docker directory:

    ```sh
    cd observability-in-a-container/docker
    ```

3. **Run Docker Compose**

    Start the observability stack using Docker Compose:

    ```sh
    docker compose up -d
    ```

    This command will pull the necessary Docker images and start the services defined in the `docker-compose.yml` file.

## Usage

Once the Docker Compose setup is complete, you can interact with the observability stack using the provided interfaces:

- **Grafana**: Access Grafana at http://localhost:3000 for data visualization and monitoring dashboards.
- **Grafana Tempo**: Used for distributed tracing, accessible through Grafana.
- **Grafana Loki**: Log aggregation can be visualized in Grafana.
- **Prometheus**: Metrics collection, accessible at http://localhost:9090.

## Sample Application

The repository includes a sample application written in TypeScript. This application can be used to demonstrate the functionality of the observability stack. To run the sample application, navigate to the `sample` directory and follow the instructions provided in the README file within that directory.