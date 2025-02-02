// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../utilities";

/**
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const exampleCluster = new aws.msk.Cluster("exampleCluster", {clientAuthentication: {
 *     sasl: {
 *         scram: true,
 *     },
 * }});
 * const exampleKey = new aws.kms.Key("exampleKey", {description: "Example Key for MSK Cluster Scram Secret Association"});
 * const exampleSecret = new aws.secretsmanager.Secret("exampleSecret", {kmsKeyId: exampleKey.keyId});
 * const exampleSecretVersion = new aws.secretsmanager.SecretVersion("exampleSecretVersion", {
 *     secretId: exampleSecret.id,
 *     secretString: JSON.stringify({
 *         username: "user",
 *         password: "pass",
 *     }),
 * });
 * const exampleScramSecretAssociation = new aws.msk.ScramSecretAssociation("exampleScramSecretAssociation", {
 *     clusterArn: exampleCluster.arn,
 *     secretArnLists: [exampleSecret.arn],
 * }, {
 *     dependsOn: [exampleSecretVersion],
 * });
 * const exampleSecretPolicy = new aws.secretsmanager.SecretPolicy("exampleSecretPolicy", {
 *     secretArn: exampleSecret.arn,
 *     policy: pulumi.interpolate`{
 *   "Version" : "2012-10-17",
 *   "Statement" : [ {
 *     "Sid": "AWSKafkaResourcePolicy",
 *     "Effect" : "Allow",
 *     "Principal" : {
 *       "Service" : "kafka.amazonaws.com"
 *     },
 *     "Action" : "secretsmanager:getSecretValue",
 *     "Resource" : "${exampleSecret.arn}"
 *   } ]
 * }
 * `,
 * });
 * ```
 *
 * ## Import
 *
 * MSK SCRAM Secret Associations can be imported using the `id` e.g.,
 *
 * ```sh
 *  $ pulumi import aws:msk/scramSecretAssociation:ScramSecretAssociation example arn:aws:kafka:us-west-2:123456789012:cluster/example/279c0212-d057-4dba-9aa9-1c4e5a25bfc7-3
 * ```
 */
export class ScramSecretAssociation extends pulumi.CustomResource {
    /**
     * Get an existing ScramSecretAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ScramSecretAssociationState, opts?: pulumi.CustomResourceOptions): ScramSecretAssociation {
        return new ScramSecretAssociation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:msk/scramSecretAssociation:ScramSecretAssociation';

    /**
     * Returns true if the given object is an instance of ScramSecretAssociation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ScramSecretAssociation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ScramSecretAssociation.__pulumiType;
    }

    /**
     * Amazon Resource Name (ARN) of the MSK cluster.
     */
    public readonly clusterArn!: pulumi.Output<string>;
    /**
     * List of AWS Secrets Manager secret ARNs.
     */
    public readonly secretArnLists!: pulumi.Output<string[]>;

    /**
     * Create a ScramSecretAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ScramSecretAssociationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ScramSecretAssociationArgs | ScramSecretAssociationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ScramSecretAssociationState | undefined;
            resourceInputs["clusterArn"] = state ? state.clusterArn : undefined;
            resourceInputs["secretArnLists"] = state ? state.secretArnLists : undefined;
        } else {
            const args = argsOrState as ScramSecretAssociationArgs | undefined;
            if ((!args || args.clusterArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterArn'");
            }
            if ((!args || args.secretArnLists === undefined) && !opts.urn) {
                throw new Error("Missing required property 'secretArnLists'");
            }
            resourceInputs["clusterArn"] = args ? args.clusterArn : undefined;
            resourceInputs["secretArnLists"] = args ? args.secretArnLists : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ScramSecretAssociation.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering ScramSecretAssociation resources.
 */
export interface ScramSecretAssociationState {
    /**
     * Amazon Resource Name (ARN) of the MSK cluster.
     */
    clusterArn?: pulumi.Input<string>;
    /**
     * List of AWS Secrets Manager secret ARNs.
     */
    secretArnLists?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a ScramSecretAssociation resource.
 */
export interface ScramSecretAssociationArgs {
    /**
     * Amazon Resource Name (ARN) of the MSK cluster.
     */
    clusterArn: pulumi.Input<string>;
    /**
     * List of AWS Secrets Manager secret ARNs.
     */
    secretArnLists: pulumi.Input<pulumi.Input<string>[]>;
}
