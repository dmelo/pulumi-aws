// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs, enums } from "../types";
import * as utilities from "../utilities";

/**
 * Provides an independent configuration resource for S3 bucket [replication configuration](http://docs.aws.amazon.com/AmazonS3/latest/dev/crr.html).
 *
 * ## Example Usage
 * ### Using replication configuration
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const central = new aws.Provider("central", {region: "eu-central-1"});
 * const replicationRole = new aws.iam.Role("replicationRole", {assumeRolePolicy: `{
 *   "Version": "2012-10-17",
 *   "Statement": [
 *     {
 *       "Action": "sts:AssumeRole",
 *       "Principal": {
 *         "Service": "s3.amazonaws.com"
 *       },
 *       "Effect": "Allow",
 *       "Sid": ""
 *     }
 *   ]
 * }
 * `});
 * const destination = new aws.s3.Bucket("destination", {versioning: {
 *     enabled: true,
 * }});
 * const source = new aws.s3.Bucket("source", {
 *     acl: "private",
 *     versioning: {
 *         enabled: true,
 *     },
 * }, {
 *     provider: aws.central,
 * });
 * const replicationPolicy = new aws.iam.Policy("replicationPolicy", {policy: pulumi.interpolate`{
 *   "Version": "2012-10-17",
 *   "Statement": [
 *     {
 *       "Action": [
 *         "s3:GetReplicationConfiguration",
 *         "s3:ListBucket"
 *       ],
 *       "Effect": "Allow",
 *       "Resource": [
 *         "${source.arn}"
 *       ]
 *     },
 *     {
 *       "Action": [
 *         "s3:GetObjectVersionForReplication",
 *         "s3:GetObjectVersionAcl",
 *          "s3:GetObjectVersionTagging"
 *       ],
 *       "Effect": "Allow",
 *       "Resource": [
 *         "${source.arn}/*"
 *       ]
 *     },
 *     {
 *       "Action": [
 *         "s3:ReplicateObject",
 *         "s3:ReplicateDelete",
 *         "s3:ReplicateTags"
 *       ],
 *       "Effect": "Allow",
 *       "Resource": "${destination.arn}/*"
 *     }
 *   ]
 * }
 * `});
 * const replicationRolePolicyAttachment = new aws.iam.RolePolicyAttachment("replicationRolePolicyAttachment", {
 *     role: replicationRole.name,
 *     policyArn: replicationPolicy.arn,
 * });
 * const replicationBucketReplicationConfig = new aws.s3.BucketReplicationConfig("replicationBucketReplicationConfig", {
 *     role: replicationRole.arn,
 *     bucket: source.id,
 *     rules: [{
 *         id: "foobar",
 *         prefix: "foo",
 *         status: "Enabled",
 *         destination: {
 *             bucket: destination.arn,
 *             storageClass: "STANDARD",
 *         },
 *     }],
 * });
 * ```
 * ## Usage Notes
 *
 * > **NOTE:** To avoid conflicts always add the following lifecycle object to the `aws.s3.Bucket` resource of the source bucket.
 *
 * This resource implements the same features that are provided by the `replicationConfiguration` object of the `aws.s3.Bucket` resource. To avoid conflicts or unexpected apply results, a lifecycle configuration is needed on the `aws.s3.Bucket` to ignore changes to the internal `replicationConfiguration` object.  Failure to add the `lifecycle` configuration to the `aws.s3.Bucket` will result in conflicting state results.
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * ```
 *
 * The `aws.s3.BucketReplicationConfig` resource provides the following features that are not available in the `aws.s3.Bucket` resource:
 *
 * * `replicaModifications` - Added to the `sourceSelectionCriteria` configuration object documented below
 * * `metrics` - Added to the `destination` configuration object documented below
 * * `replicationTime` - Added to the `destination` configuration object documented below
 * * `existingObjectReplication` - Added to the replication rule object documented below
 *
 * Replication for existing objects requires activation by AWS Support.  See [userguide/replication-what-is-isnot-replicated](https://docs.aws.amazon.com/AmazonS3/latest/userguide/replication-what-is-isnot-replicated.html#existing-object-replication).
 *
 * ## Import
 *
 * S3 bucket replication configuration can be imported using the `bucket`, e.g.
 *
 * ```sh
 *  $ pulumi import aws:s3/bucketReplicationConfig:BucketReplicationConfig replication bucket-name
 * ```
 */
export class BucketReplicationConfig extends pulumi.CustomResource {
    /**
     * Get an existing BucketReplicationConfig resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: BucketReplicationConfigState, opts?: pulumi.CustomResourceOptions): BucketReplicationConfig {
        return new BucketReplicationConfig(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:s3/bucketReplicationConfig:BucketReplicationConfig';

    /**
     * Returns true if the given object is an instance of BucketReplicationConfig.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is BucketReplicationConfig {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === BucketReplicationConfig.__pulumiType;
    }

    /**
     * The name of the source S3 bucket you want Amazon S3 to monitor.
     */
    public readonly bucket!: pulumi.Output<string>;
    /**
     * The ARN of the IAM role for Amazon S3 to assume when replicating the objects.
     */
    public readonly role!: pulumi.Output<string>;
    /**
     * Set of configuration blocks describing the rules managing the replication documented below.
     */
    public readonly rules!: pulumi.Output<outputs.s3.BucketReplicationConfigRule[]>;

    /**
     * Create a BucketReplicationConfig resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: BucketReplicationConfigArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: BucketReplicationConfigArgs | BucketReplicationConfigState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as BucketReplicationConfigState | undefined;
            resourceInputs["bucket"] = state ? state.bucket : undefined;
            resourceInputs["role"] = state ? state.role : undefined;
            resourceInputs["rules"] = state ? state.rules : undefined;
        } else {
            const args = argsOrState as BucketReplicationConfigArgs | undefined;
            if ((!args || args.bucket === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bucket'");
            }
            if ((!args || args.role === undefined) && !opts.urn) {
                throw new Error("Missing required property 'role'");
            }
            if ((!args || args.rules === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rules'");
            }
            resourceInputs["bucket"] = args ? args.bucket : undefined;
            resourceInputs["role"] = args ? args.role : undefined;
            resourceInputs["rules"] = args ? args.rules : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(BucketReplicationConfig.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering BucketReplicationConfig resources.
 */
export interface BucketReplicationConfigState {
    /**
     * The name of the source S3 bucket you want Amazon S3 to monitor.
     */
    bucket?: pulumi.Input<string>;
    /**
     * The ARN of the IAM role for Amazon S3 to assume when replicating the objects.
     */
    role?: pulumi.Input<string>;
    /**
     * Set of configuration blocks describing the rules managing the replication documented below.
     */
    rules?: pulumi.Input<pulumi.Input<inputs.s3.BucketReplicationConfigRule>[]>;
}

/**
 * The set of arguments for constructing a BucketReplicationConfig resource.
 */
export interface BucketReplicationConfigArgs {
    /**
     * The name of the source S3 bucket you want Amazon S3 to monitor.
     */
    bucket: pulumi.Input<string>;
    /**
     * The ARN of the IAM role for Amazon S3 to assume when replicating the objects.
     */
    role: pulumi.Input<string>;
    /**
     * Set of configuration blocks describing the rules managing the replication documented below.
     */
    rules: pulumi.Input<pulumi.Input<inputs.s3.BucketReplicationConfigRule>[]>;
}
