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

4. Create an ECR repository to store images
```
aws ecr create-repository --repository-name cbfshr --region us-east-2
```
 
5. Create an ECS task definition, an ECS cluster, and an ECS service.
* This documentation was significantly more helpful than the information provided by Github Actions: https://aws.amazon.com/blogs/opensource/github-actions-aws-fargate/

    1. Create the ECS task definition file and register with ECS (it requires image to be provided, which is counterintuitive since it doesn't exist until the first time we run):
    * Task Defintion File: [config/ecs_task_def.json](config/ecs_task_def.json)
    ```
    aws ecs register-task-definition --region us-east-2 --cli-input-json file:///Users/cal/workspace/calfisher.com/config/ecs_task_def.json
    ```

    2. Create an ECS cluster:
    ```
    aws ecs create-cluster --region us-east-2 --cluster-name cbfshr
    ```

    3. Create a Fargate service:
    ```
    aws ecs create-service --region us-east-2 --cluster cbfshr --service-name calfisher --task-definition calfisher:1 --desired-count 2 --launch-type "FARGATE" --network-configuration "awsvpcConfiguration={subnets=[subnet-31034e58],securityGroups=[sg-fbc7d492]}"
    ```
