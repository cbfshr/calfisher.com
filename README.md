# calfisher.com
This is a repository hosting my current web portfolio. It is written with JavaScript using the AngularJS framework.

## Deployment
The deployment of this web application uses Github Workflow to deploy to an EC2 instance with Docker.

### Initial Setup
Documenting initial setup for future reference.

1. [Install AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)

2. Setup IAM Admin Group and User
* [Getting Started: Create Admin Group](https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started_create-admin-group.html]

3. Configure AWS CLI (using the credentials from step 2)
```
aws configure
```

4. Create an ECS task definition, an ECS cluster, and an ECS service.
* Task Defintion File: [config/ecs_task_def.json](config/ecs_task_def.json)

5. Create an ECR repository to store images
```
aws ecr create-repository --repository-name cbfshr --region us-east-1
```
 