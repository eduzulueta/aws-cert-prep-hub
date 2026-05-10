export interface SlideNode {
  id: number;
  title: string;
  content: string[];
}

export const courseSlides: SlideNode[] = [
  {
    id: 1,
    title: "Storage",
    content: ["Storing, accessing, and backing up data in AWS"]
  },
  {
    id: 2,
    title: "Amazon S3 Section",
    content: []
  },
  {
    id: 3,
    title: "Section introduction",
    content: [
      "• Amazon S3 is one of the main building blocks of AWS",
      "• It’s advertised as ”infinitely scaling” storage",
      "• Many websites use Amazon S3 as a backbone",
      "• Many AWS services use Amazon S3 as an integration as well",
      "• We’ll have a step-by-step approach to S3"
    ]
  },
  {
    id: 4,
    title: "Amazon S3 Use cases",
    content: [
      "• Backup and storage",
      "• Disaster Recovery",
      "• Archive",
      "• Hybrid Cloud storage",
      "• Application hosting",
      "• Media hosting",
      "• Data lakes & big data analytics",
      "• Software delivery",
      "• Static website",
      "",
      "Nasdaq stores 7 years of data into S3 Glacier",
      "Sysco runs analytics on its data and gain business insights"
    ]
  },
  {
    id: 5,
    title: "Amazon S3 - Buckets",
    content: [
      "• Amazon S3 allows people to store objects (files) in “buckets” (directories)",
      "• Buckets must have a globally unique name (across all regions all accounts)",
      "• Buckets are defined at the region level",
      "• S3 looks like a global service but buckets are created in a region",
      "• Naming convention",
      "   • No uppercase, No underscore",
      "   • 3-63 characters long",
      "   • Not an IP",
      "   • Must start with lowercase letter or number",
      "   • Must NOT start with the prefix xn--",
      "   • Must NOT end with the suffix -s3alias"
    ]
  },
  {
    id: 6,
    title: "Amazon S3 - Objects",
    content: [
      "• Objects (files) have a Key",
      "• The key is the FULL path:",
      "   • s3://my-bucket/my_file.txt",
      "   • s3://my-bucket/my_folder1/another_folder/my_file.txt",
      "• The key is composed of prefix + object name",
      "   • s3://my-bucket/my_folder1/another_folder/my_file.txt",
      "• There’s no concept of “directories” within buckets (although the UI will trick you to think otherwise)",
      "• Just keys with very long names that contain slashes (“/”)"
    ]
  },
  {
    id: 7,
    title: "Amazon S3 – Objects (cont.)",
    content: [
      "• Object values are the content of the body:",
      "   • Max. Object Size is 5TB (5000GB)",
      "   • If uploading more than 5GB, must use “multi-part upload”",
      "• Metadata (list of text key / value pairs – system or user metadata)",
      "• Tags (Unicode key / value pair – up to 10) – useful for security / lifecycle",
      "• Version ID (if versioning is enabled)"
    ]
  },
  {
    id: 8,
    title: "Amazon S3 – Security",
    content: [
      "• User-Based",
      "   • IAM Policies – which API calls should be allowed for a specific user from IAM",
      "• Resource-Based",
      "   • Bucket Policies – bucket wide rules from the S3 console - allows cross account",
      "   • Object Access Control List (ACL) – finer grain (can be disabled)",
      "   • Bucket Access Control List (ACL) – less common (can be disabled)",
      "• Note: an IAM principal can access an S3 object if",
      "   • The user IAM permissions ALLOW it OR the resource policy ALLOWS it",
      "   • AND there’s no explicit DENY",
      "• Encryption: encrypt objects in Amazon S3 using encryption keys"
    ]
  },
  {
    id: 9,
    title: "S3 Bucket Policies",
    content: [
      "• JSON based policies",
      "   • Resources: buckets and objects",
      "   • Effect: Allow / Deny",
      "   • Actions: Set of API to Allow or Deny",
      "   • Principal: The account or user to apply the policy to",
      "• Use S3 bucket for policy to:",
      "   • Grant public access to the bucket",
      "   • Force objects to be encrypted at upload",
      "   • Grant access to another account (Cross Account)"
    ]
  },
  {
    id: 10,
    title: "Example: Public Access - Use Bucket Policy",
    content: [
      "Anonymous www website visitor -> S3 Bucket",
      "S3 Bucket Policy Allows Public Access"
    ]
  },
  {
    id: 15,
    title: "Amazon S3 - Versioning",
    content: [
      "• You can version your files in Amazon S3",
      "• It is enabled at the bucket level",
      "• Same key overwrite will change the “version”: 1, 2, 3….",
      "• It is best practice to version your buckets",
      "   • Protect against unintended deletes (ability to restore a version)",
      "   • Easy roll back to previous version",
      "• Notes:",
      "   • Any file that is not versioned prior to enabling versioning will have version “null”",
      "   • Suspending versioning does not delete the previous versions"
    ]
  },
  {
    id: 18,
    title: "S3 Storage Classes",
    content: [
      "• Amazon S3 Standard - General Purpose",
      "• Amazon S3 Standard-Infrequent Access (IA)",
      "• Amazon S3 One Zone-Infrequent Access",
      "• Amazon S3 Glacier Instant Retrieval",
      "• Amazon S3 Glacier Flexible Retrieval",
      "• Amazon S3 Glacier Deep Archive",
      "• Amazon S3 Intelligent Tiering",
      "",
      "• Can move between classes manually or using S3 Lifecycle configurations"
    ]
  },
  {
    id: 22,
    title: "Amazon S3 Glacier Storage Classes",
    content: [
      "• Low-cost object storage meant for archiving / backup",
      "• Pricing: price for storage + object retrieval cost",
      "• Amazon S3 Glacier Instant Retrieval",
      "   • Millisecond retrieval, great for data accessed once a quarter",
      "   • Minimum storage duration of 90 days",
      "• Amazon S3 Glacier Flexible Retrieval (formerly Amazon S3 Glacier):",
      "   • Expedited (1 to 5 minutes), Standard (3 to 5 hours), Bulk (5 to 12 hours) – free",
      "   • Minimum storage duration of 90 days",
      "• Amazon S3 Glacier Deep Archive – for long term storage:",
      "   • Standard (12 hours), Bulk (48 hours)",
      "   • Minimum storage duration of 180 days"
    ]
  },
  {
    id: 27,
    title: "Amazon S3 – Lifecycle Rules",
    content: [
      "• Transition Actions – configure objects to transition to another storage class",
      "   • Move objects to Standard IA class 60 days after creation",
      "   • Move to Glacier for archiving after 6 months",
      "• Expiration actions – configure objects to expire (delete) after some time",
      "   • Access log files can be set to delete after a 365 days",
      "   • Can be used to delete old versions of files (if versioning is enabled)",
      "   • Can be used to delete incomplete Multi-Part uploads",
      "• Rules can be created for a certain prefix (example: s3://mybucket/mp3/*)",
      "• Rules can be created for certain objects Tags (example: Department: Finance)"
    ]
  },
  {
    id: 31,
    title: "S3 Event Notifications",
    content: [
      "• S3:ObjectCreated, S3:ObjectRemoved, S3:ObjectRestore, S3:Replication…",
      "• Object name filtering possible (*.jpg)",
      "• Use case: generate thumbnails of images uploaded to S3",
      "• Can create as many “S3 events” as desired",
      "• S3 event notifications typically deliver events in seconds but can sometimes take a minute or longer",
      "",
      "Events -> SNS | SQS | Lambda Function"
    ]
  },
  {
    id: 37,
    title: "Amazon S3 – Object Encryption",
    content: [
      "• You can encrypt objects in S3 buckets using one of 4 methods",
      "• Server-Side Encryption (SSE)",
      "   • Server-Side Encryption with Amazon S3-Managed Keys (SSE-S3) – Enabled by Default",
      "      • Encrypts S3 objects using keys handled, managed, and owned by AWS",
      "   • Server-Side Encryption with KMS Keys stored in AWS KMS (SSE-KMS)",
      "      • Leverage AWS Key Management Service (AWS KMS) to manage encryption keys",
      "   • Server-Side Encryption with Customer-Provided Keys (SSE-C)",
      "      • When you want to manage your own encryption keys",
      "• Client-Side Encryption",
      "• It’s important to understand which ones are for which situation for the exam"
    ]
  },
  {
    id: 46,
    title: "S3 – Access Points",
    content: [
      "• Access Points simplify security management for S3 Buckets",
      "• Each Access Point has:",
      "   • its own DNS name (Internet Origin or VPC Origin)",
      "   • an access point policy (similar to bucket policy) – manage security at scale"
    ]
  },
  {
    id: 56,
    title: "What’s an EBS Volume?",
    content: [
      "• An EBS (Elastic Block Store) Volume is a network drive you can attach to your instances while they run",
      "• It allows your instances to persist data, even after their termination",
      "• They can only be mounted to one instance at a time (at the CCP level)",
      "• They are bound to a specific availability zone",
      "• Analogy: Think of them as a “network USB stick”",
      "• Free tier: 30 GB of free EBS storage of type General Purpose (SSD) or Magnetic per month"
    ]
  },
  {
    id: 61,
    title: "Amazon EFS – Elastic File System",
    content: [
      "• Managed NFS (network file system) that can be mounted on many EC2",
      "• EFS works with EC2 instances in multi-AZ",
      "• Highly available, scalable, expensive (3x gp2), pay per use"
    ]
  },
  {
    id: 67,
    title: "AWS Backup",
    content: [
      "• Fully managed service",
      "• Centrally manage and automate backups across AWS services",
      "• No need to create custom scripts and manual processes",
      "• Supported services:",
      "   • Amazon EC2 / Amazon EBS",
      "   • Amazon S3",
      "   • Amazon RDS / Aurora / DynamoDB / DocumentDB / Neptune",
      "   • Amazon EFS / Amazon FSx",
      "   • AWS Storage Gateway",
      "• Supports cross-region backups",
      "• Supports cross-account backups"
    ]
  }
];
