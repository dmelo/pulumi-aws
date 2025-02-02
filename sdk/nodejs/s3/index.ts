// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

// Export members:
export * from "./accessPoint";
export * from "./accountPublicAccessBlock";
export * from "./analyticsConfiguration";
export * from "./bucket";
export * from "./bucketIntelligentTieringConfiguration";
export * from "./bucketMetric";
export * from "./bucketNotification";
export * from "./bucketObject";
export * from "./bucketOwnershipControls";
export * from "./bucketPolicy";
export * from "./bucketPublicAccessBlock";
export * from "./bucketReplicationConfig";
export * from "./cannedAcl";
export * from "./getBucket";
export * from "./getBucketObject";
export * from "./getBucketObjects";
export * from "./getCanonicalUserId";
export * from "./inventory";
export * from "./objectCopy";
export * from "./routingRules";
export * from "./s3Mixins";

// Export enums:
export * from "../types/enums/s3";

// Import resources to register:
import { AccessPoint } from "./accessPoint";
import { AccountPublicAccessBlock } from "./accountPublicAccessBlock";
import { AnalyticsConfiguration } from "./analyticsConfiguration";
import { Bucket } from "./bucket";
import { BucketIntelligentTieringConfiguration } from "./bucketIntelligentTieringConfiguration";
import { BucketMetric } from "./bucketMetric";
import { BucketNotification } from "./bucketNotification";
import { BucketObject } from "./bucketObject";
import { BucketOwnershipControls } from "./bucketOwnershipControls";
import { BucketPolicy } from "./bucketPolicy";
import { BucketPublicAccessBlock } from "./bucketPublicAccessBlock";
import { BucketReplicationConfig } from "./bucketReplicationConfig";
import { Inventory } from "./inventory";
import { ObjectCopy } from "./objectCopy";

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "aws:s3/accessPoint:AccessPoint":
                return new AccessPoint(name, <any>undefined, { urn })
            case "aws:s3/accountPublicAccessBlock:AccountPublicAccessBlock":
                return new AccountPublicAccessBlock(name, <any>undefined, { urn })
            case "aws:s3/analyticsConfiguration:AnalyticsConfiguration":
                return new AnalyticsConfiguration(name, <any>undefined, { urn })
            case "aws:s3/bucket:Bucket":
                return new Bucket(name, <any>undefined, { urn })
            case "aws:s3/bucketIntelligentTieringConfiguration:BucketIntelligentTieringConfiguration":
                return new BucketIntelligentTieringConfiguration(name, <any>undefined, { urn })
            case "aws:s3/bucketMetric:BucketMetric":
                return new BucketMetric(name, <any>undefined, { urn })
            case "aws:s3/bucketNotification:BucketNotification":
                return new BucketNotification(name, <any>undefined, { urn })
            case "aws:s3/bucketObject:BucketObject":
                return new BucketObject(name, <any>undefined, { urn })
            case "aws:s3/bucketOwnershipControls:BucketOwnershipControls":
                return new BucketOwnershipControls(name, <any>undefined, { urn })
            case "aws:s3/bucketPolicy:BucketPolicy":
                return new BucketPolicy(name, <any>undefined, { urn })
            case "aws:s3/bucketPublicAccessBlock:BucketPublicAccessBlock":
                return new BucketPublicAccessBlock(name, <any>undefined, { urn })
            case "aws:s3/bucketReplicationConfig:BucketReplicationConfig":
                return new BucketReplicationConfig(name, <any>undefined, { urn })
            case "aws:s3/inventory:Inventory":
                return new Inventory(name, <any>undefined, { urn })
            case "aws:s3/objectCopy:ObjectCopy":
                return new ObjectCopy(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("aws", "s3/accessPoint", _module)
pulumi.runtime.registerResourceModule("aws", "s3/accountPublicAccessBlock", _module)
pulumi.runtime.registerResourceModule("aws", "s3/analyticsConfiguration", _module)
pulumi.runtime.registerResourceModule("aws", "s3/bucket", _module)
pulumi.runtime.registerResourceModule("aws", "s3/bucketIntelligentTieringConfiguration", _module)
pulumi.runtime.registerResourceModule("aws", "s3/bucketMetric", _module)
pulumi.runtime.registerResourceModule("aws", "s3/bucketNotification", _module)
pulumi.runtime.registerResourceModule("aws", "s3/bucketObject", _module)
pulumi.runtime.registerResourceModule("aws", "s3/bucketOwnershipControls", _module)
pulumi.runtime.registerResourceModule("aws", "s3/bucketPolicy", _module)
pulumi.runtime.registerResourceModule("aws", "s3/bucketPublicAccessBlock", _module)
pulumi.runtime.registerResourceModule("aws", "s3/bucketReplicationConfig", _module)
pulumi.runtime.registerResourceModule("aws", "s3/inventory", _module)
pulumi.runtime.registerResourceModule("aws", "s3/objectCopy", _module)
