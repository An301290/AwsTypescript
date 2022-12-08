import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Duration } from "aws-cdk-lib";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsTypescriptStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new Bucket(this, "awsTypescriptBucket", {
      lifecycleRules: [
        {
          expiration: Duration.days(5),
        },
      ],
    });

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'AwsTypescriptQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
