#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { AwsTypescriptStack } from "../lib/aws_typescript-stack";

const app = new cdk.App();
new AwsTypescriptStack(app, "AwsTypescriptStack", {});
//You can deploy more than 1 stack with  "cdk deploy --all"
//new AwsTypescriptStack(app, "AwsTypescriptStack2", {});
