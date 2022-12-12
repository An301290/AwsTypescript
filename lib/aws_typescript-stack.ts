import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { CfnOutput, Duration, CfnParameter } from "aws-cdk-lib";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsTypescriptStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const duration = new CfnParameter(this, "duration", {
      type: "Number",
      default: 6,
      maxValue: 10,
      minValue: 1,
    });
    const myBucket = new Bucket(this, "awsTypescriptBucket", {
      lifecycleRules: [
        {
          expiration: Duration.days(duration.valueAsNumber),
        },
      ],
    });

    new CfnOutput(this, "my-bucket-angel", {
      value: myBucket.bucketName,
    });

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'AwsTypescriptQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
