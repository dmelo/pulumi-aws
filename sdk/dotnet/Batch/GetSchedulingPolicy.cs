// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Aws.Batch
{
    public static class GetSchedulingPolicy
    {
        /// <summary>
        /// The Batch Scheduling Policy data source allows access to details of a specific Scheduling Policy within AWS Batch.
        /// 
        /// {{% examples %}}
        /// ## Example Usage
        /// {{% example %}}
        /// 
        /// ```csharp
        /// using Pulumi;
        /// using Aws = Pulumi.Aws;
        /// 
        /// class MyStack : Stack
        /// {
        ///     public MyStack()
        ///     {
        ///         var test = Output.Create(Aws.Batch.GetSchedulingPolicy.InvokeAsync(new Aws.Batch.GetSchedulingPolicyArgs
        ///         {
        ///             Arn = "arn:aws:batch:us-east-1:012345678910:scheduling-policy/example",
        ///         }));
        ///     }
        /// 
        /// }
        /// ```
        /// {{% /example %}}
        /// {{% /examples %}}
        /// </summary>
        public static Task<GetSchedulingPolicyResult> InvokeAsync(GetSchedulingPolicyArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.InvokeAsync<GetSchedulingPolicyResult>("aws:batch/getSchedulingPolicy:getSchedulingPolicy", args ?? new GetSchedulingPolicyArgs(), options.WithDefaults());

        /// <summary>
        /// The Batch Scheduling Policy data source allows access to details of a specific Scheduling Policy within AWS Batch.
        /// 
        /// {{% examples %}}
        /// ## Example Usage
        /// {{% example %}}
        /// 
        /// ```csharp
        /// using Pulumi;
        /// using Aws = Pulumi.Aws;
        /// 
        /// class MyStack : Stack
        /// {
        ///     public MyStack()
        ///     {
        ///         var test = Output.Create(Aws.Batch.GetSchedulingPolicy.InvokeAsync(new Aws.Batch.GetSchedulingPolicyArgs
        ///         {
        ///             Arn = "arn:aws:batch:us-east-1:012345678910:scheduling-policy/example",
        ///         }));
        ///     }
        /// 
        /// }
        /// ```
        /// {{% /example %}}
        /// {{% /examples %}}
        /// </summary>
        public static Output<GetSchedulingPolicyResult> Invoke(GetSchedulingPolicyInvokeArgs args, InvokeOptions? options = null)
            => Pulumi.Deployment.Instance.Invoke<GetSchedulingPolicyResult>("aws:batch/getSchedulingPolicy:getSchedulingPolicy", args ?? new GetSchedulingPolicyInvokeArgs(), options.WithDefaults());
    }


    public sealed class GetSchedulingPolicyArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The Amazon Resource Name (ARN) of the scheduling policy.
        /// </summary>
        [Input("arn", required: true)]
        public string Arn { get; set; } = null!;

        [Input("tags")]
        private Dictionary<string, string>? _tags;

        /// <summary>
        /// Key-value map of resource tags
        /// </summary>
        public Dictionary<string, string> Tags
        {
            get => _tags ?? (_tags = new Dictionary<string, string>());
            set => _tags = value;
        }

        public GetSchedulingPolicyArgs()
        {
        }
    }

    public sealed class GetSchedulingPolicyInvokeArgs : Pulumi.InvokeArgs
    {
        /// <summary>
        /// The Amazon Resource Name (ARN) of the scheduling policy.
        /// </summary>
        [Input("arn", required: true)]
        public Input<string> Arn { get; set; } = null!;

        [Input("tags")]
        private InputMap<string>? _tags;

        /// <summary>
        /// Key-value map of resource tags
        /// </summary>
        public InputMap<string> Tags
        {
            get => _tags ?? (_tags = new InputMap<string>());
            set => _tags = value;
        }

        public GetSchedulingPolicyInvokeArgs()
        {
        }
    }


    [OutputType]
    public sealed class GetSchedulingPolicyResult
    {
        public readonly string Arn;
        public readonly ImmutableArray<Outputs.GetSchedulingPolicyFairSharePolicyResult> FairSharePolicies;
        /// <summary>
        /// The provider-assigned unique ID for this managed resource.
        /// </summary>
        public readonly string Id;
        /// <summary>
        /// Specifies the name of the scheduling policy.
        /// </summary>
        public readonly string Name;
        /// <summary>
        /// Key-value map of resource tags
        /// </summary>
        public readonly ImmutableDictionary<string, string> Tags;

        [OutputConstructor]
        private GetSchedulingPolicyResult(
            string arn,

            ImmutableArray<Outputs.GetSchedulingPolicyFairSharePolicyResult> fairSharePolicies,

            string id,

            string name,

            ImmutableDictionary<string, string> tags)
        {
            Arn = arn;
            FairSharePolicies = fairSharePolicies;
            Id = id;
            Name = name;
            Tags = tags;
        }
    }
}
