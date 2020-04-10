# calfisher.com
This is a repository hosting my current web portfolio. It is written in JavaScript, HTML, and CSS using the AngularJS framework.

## Deployment
The deployment of this web application uses Github Workflow to build and deploy a Docker container to AWS Fargate.

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
 
5. Create an ECS task definition, cluster, and service.
* This documentation was significantly more helpful than the information provided by Github Actions: https://aws.amazon.com/blogs/opensource/github-actions-aws-fargate/

    1. Create the ECS task definition file and register with ECS (it requires image to be provided, which is counterintuitive since it doesn't exist until the first time we run):
    * Task Defintion File: [config/ecs_task_def.json](config/ecs_task_def.json)
    ```
    aws ecs register-task-definition \
      --region us-east-2 \
      --cli-input-json file:///<PATH>/<TO>/calfisher.com/config/ecs_task_def.json
    ```

    2. Create an ECS cluster:
    ```
    aws ecs create-cluster \
      --region us-east-2 \
      --cluster-name cbfshr
    ```

    3. Create a Fargate service:
    ```
    aws ecs create-service \
      --region us-east-2 \
      --cluster cbfshr \
      --service-name calfishernginx \
      --task-definition calfishernginx:1 \
      --desired-count 2 \
      --launch-type "FARGATE" \
      --network-configuration "awsvpcConfiguration={subnets=[subnet-31034e58],securityGroups=[sg-07852e1c2d28cafcc]}"
    ```

### Setting up Docker Locally to Push and Pull from ECR
#### Docker Login
```
aws ecr get-login-password --region us-east-2 | docker login --username AWS --password-stdin <AWS ACCOUNT ID>.dkr.ecr.us-east-1.amazonaws.com
```

#### Docker Tag
```
docker tag <ECR REGISTRY NAME>:<TAG> <AWS ACCOUNT ID>.dkr.ecr.us-east-2.amazonaws.com/my-first-repo:latest
```

#### Docker Push and Pull
[AWS User Guide: Docker Pull ECR Image](https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-pull-ecr-image.html)
[AWS User Guide: Docker Push ECR Image](https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-push-ecr-image.html)

## References
* [AWS ECS: Building, Deploying, and Operating Conainerized Applicatons with AWS Fargate](https://aws.amazon.com/blogs/compute/building-deploying-and-operating-containerized-applications-with-aws-fargate/)
* [Github Actions and AWS Fargate](https://aws.amazon.com/blogs/opensource/github-actions-aws-fargate/)
* [AWS Route53: DNS Routing Traffic for Subdomains](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/dns-routing-traffic-for-subdomains.html)

