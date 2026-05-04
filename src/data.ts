import { questions11to30 } from './data/q11-30';
import { questions31to50 } from './data/q31-50';
import { questions51to65 } from './data/q51-65';

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number; // For multiple choice, we can keep it simple or change to array for multiple selections
  correctAnswerIndices?: number[]; // For multiple selection
  explanation: string;
  domain: string;
  whyCorrect?: string;
  whyIncorrect?: string;
  decisionHack?: string;
  docLink?: string;
}

export interface Exam {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export interface Certification {
  id: string;
  title: string;
  code: string;
  description: string;
  guideOverview: string;
  guideUrl?: string;
  domains: { title: string; weight: string }[];
  exams: Exam[];
}

export const certifications: Certification[] = [
  {
    id: "aws-dea-c01",
    title: "AWS Certified Data Engineer - Associate",
    code: "DEA-C01",
    description: "Validates expertise in data-related AWS services, data pipelines, data stores, and data security.",
    guideOverview: "The AWS Certified Data Engineer - Associate (DEA-C01) exam validates a candidate's ability to implement data pipelines, monitor and troubleshoot issues, and secure data in accordance with best practices. Candidates should have 2-3 years of experience in data engineering and at least 1-2 years of hands-on experience with AWS services.",
    guideUrl: "https://docs.aws.amazon.com/pdfs/aws-certification/latest/data-engineer-associate-01/data-engineer-associate-01.pdf",
    domains: [
      { title: "Domain 1: Data Ingestion and Transformation", weight: "34%" },
      { title: "Domain 2: Data Store Management", weight: "26%" },
      { title: "Domain 3: Data Operations and Support", weight: "22%" },
      { title: "Domain 4: Data Security and Governance", weight: "18%" }
    ],
    exams: [
      {
        id: "exam-1",
        title: "Practice Exam 1: Comprehensive",
        description: "A comprehensive practice exam carefully curated to mimic the real DEA-C01 exam questions.",
        questions: [
          {
            id: "q1",
            domain: "Domain 2: Data Store Management",
            text: "An online gaming application has a large chunk of its traffic coming from users who download static assets such as historic leaderboard reports and the game tactics for various games. The current infrastructure and design are unable to handle the traffic and application freezes on most of the pages.\n\nWhich of the following is a cost-optimal solution that requires the LEAST operational overhead?",
            options: [
              "Use AWS Lambda with Amazon ElastiCache and Amazon RDS for serving static assets at high speed and low latency",
              "Use Amazon CloudFront with Amazon DynamoDB for greater speed and low latency access to static assets",
              "Configure AWS Lambda with an Amazon RDS database to provide a serverless architecture",
              "Use Amazon CloudFront with Amazon S3 as the storage solution for the static assets"
            ],
            correctAnswerIndex: 3,
            explanation: "Amazon CloudFront with S3 is the most cost-effective and operationally efficient way to deliver static assets globally with low latency.",
            whyCorrect: "Option D is correct. Amazon CloudFront is a Content Delivery Network (CDN) that seamlessly integrates with Amazon S3. S3 is designed specifically for durable, scalable object storage like static assets. CloudFront caches these assets at edge locations globally, drastically reducing latency and offloading traffic from the origin servers with very little operational overhead.",
            whyIncorrect: "Option A is incorrect because using ElastiCache and RDS for static files is an anti-pattern; RDS and ElastiCache are meant for dynamic/relational or key-value data, not broad static asset delivery. Option B is incorrect because DynamoDB is a NoSQL database, not an object store for large static assets. Option C is incorrect because computing power (Lambda) + relational DB (RDS) introduces high operational overhead and cost for serving static files.",
            decisionHack: "Static Assets Delivery = S3 + CloudFront.",
            docLink: "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html#concept_S3Origin"
          },
          {
            id: "q2",
            domain: "Domain 1: Data Ingestion and Transformation",
            text: "A financial services company runs its flagship web application on AWS. The application serves thousands of users during peak hours. The company needs a scalable near-real-time solution to share hundreds of thousands of financial transactions with multiple internal applications. The solution should also remove sensitive details from the transactions before storing the cleansed transactions in a document database for low-latency retrieval.\n\nWhich of the following would you recommend?",
            options: [
              "Batch process the raw transactions data into Amazon S3 flat files. Use S3 events to trigger an AWS Lambda function to remove sensitive data from the raw transactions in the flat file and then store the cleansed transactions in Amazon DynamoDB. Leverage DynamoDB Streams to share the transaction data with the internal applications",
              "Persist the raw transactions into Amazon DynamoDB. Configure a rule in Amazon DynamoDB to update the transaction by removing sensitive data whenever any new raw transaction is written. Leverage Amazon DynamoDB Streams to share the transaction data with the internal applications",
              "Feed the streaming transactions into Amazon Kinesis Data Firehose. Leverage AWS Lambda integration to remove sensitive data from every transaction and then store the cleansed transactions in Amazon DynamoDB. The internal applications can consume the raw transactions off the Amazon Kinesis Data Firehose",
              "Feed the streaming transactions into Amazon Kinesis Data Streams. Leverage AWS Lambda integration to remove sensitive data from every transaction and then store the cleansed transactions in Amazon DynamoDB. The internal applications can consume the raw transactions off the Amazon Kinesis Data Stream"
            ],
            correctAnswerIndex: 3,
            explanation: "Amazon Kinesis Data Streams allows multiple consumers (internal applications) to read the same stream of data in near-real time while letting AWS Lambda process and scrub sensitive data to load into DynamoDB.",
            whyCorrect: "Option D is correct. Amazon Kinesis Data Streams is designed for real-time, highly scalable streaming of thousands of transactions. An AWS Lambda function can consume the Kinesis stream, strip sensitive data (transformation), and write the cleansed records to DynamoDB. Other apps can consume the same Kinesis stream using consumer fan-out.",
            whyIncorrect: "Option A uses flat files in S3 and batch processing, which is NOT near-real-time. Option B uses DynamoDB rules which don't exist in that sense (DynamoDB Streams triggers Lambda after the write, not before). Option C uses Kinesis Firehose, which natively writes to destinations like S3/Redshift/Elasticsearch, but it doesn't support fan-out for multiple internal application consumers exactly like Data Streams docs.",
            decisionHack: "Near-Real-Time + Multiple Consumers + Transformation = Kinesis Data Streams + Lambda.",
            docLink: "https://docs.aws.amazon.com/streams/latest/dev/building-consumers.html"
          },
          {
            id: "q3",
            domain: "Domain 2: Data Store Management",
            text: "A company uses Amazon Redshift as their data warehouse service in the cloud. The performance of the Redshift cluster needs improvement and the company decided to scale read and write capacity to meet the user demand. The cluster runs on RA3 nodes.\n\nAs a data engineer, which solution will you use to turn on the concurrency scaling of the cluster?",
            options: [
              "Enable Short query acceleration (SQA) to concurrently run queries and thereby improve the concurrency scaling of the cluster",
              "Leverage custom parameter groups for the Amazon Redshift cluster to turn on the concurrency scaling of the cluster",
              "Enable workload manager (WLM) queue as a concurrency scaling queue. Set the Concurrency Scaling mode value to auto",
              "Re-configure the cluster to DC2 nodes and enable workload manager (WLM) queue as a concurrency scaling queue"
            ],
            correctAnswerIndex: 2,
            explanation: "Redshift Concurrency Scaling is enabled by routing queries to a workload manager (WLM) queue that has concurrency scaling mode set to auto.",
            whyCorrect: "Option C is correct. Concurrency Scaling allows Amazon Redshift to automatically add cluster capacity to support thousands of concurrent users and queries. To enable it, you simply set the 'Concurrency Scaling mode' to 'auto' for a Workload Management (WLM) queue.",
            whyIncorrect: "Option A is incorrect because SQA (Short Query Acceleration) simply prioritizes short queries over long ones within the existing cluster resources; it doesn't add capacity (concurrency scaling). Option B is incorrect because concurrency is managed via WLM, not isolated parameter groups. Option D is incorrect because you do not need to switch to DC2 nodes; RA3 nodes support concurrency scaling perfectly.",
            decisionHack: "Redshift Concurrency Scaling = WLM Queue set to auto.",
            docLink: "https://docs.aws.amazon.com/redshift/latest/dg/concurrency-scaling.html"
          },
          {
            id: "q4",
            domain: "Domain 3: Data Operations and Support",
            text: "A data analytics job requires data from multiple sources like Amazon DynamoDB, Amazon RDS, and Amazon Redshift. The job is run on Amazon Athena.\n\nWhich of the following is the MOST cost-effective way to join data from these sources?",
            options: [
              "Use Amazon Athena Federated Query to join the data from all data sources",
              "Develop an AWS Glue job using Apache Spark to join the data from all the sources",
              "Copy the data from all the sources into a single S3 bucket. Use Athena queries on the saved S3 data",
              "Provision an EMR cluster to join the data from all the sources. Configure Spark for Athena to run the data analysis job"
            ],
            correctAnswerIndex: 0,
            explanation: "Amazon Athena Federated Query enables analysts and data engineers to run SQL queries across data stored in relational, non-relational, object, and custom data sources directly without moving data."
          },
          {
            id: "q5",
            domain: "Domain 3: Data Operations and Support",
            text: "A CRM company has a software as a service (SaaS) application that feeds updates to other in-house and third-party applications. The SaaS application and the in-house applications are being migrated to use AWS services for this inter-application communication.\n\nWhich of the following would you suggest to asynchronously decouple the architecture?",
            options: [
              "Use Amazon Simple Notification Service (Amazon SNS) to communicate between systems and decouple the architecture",
              "Use Elastic Load Balancing (ELB) for effective decoupling of system architecture",
              "Use Amazon EventBridge to decouple the system architecture",
              "Use Amazon Simple Queue Service (Amazon SQS) to decouple the architecture"
            ],
            correctAnswerIndex: 2,
            explanation: "Amazon EventBridge is a serverless event bus perfectly suited for SaaS application integration and decoupling architectures asynchronously via event-driven routing."
          },
          {
            id: "q6",
            domain: "Domain 2: Data Store Management",
            text: "A company has noticed that its Amazon EBS Elastic Volume (io1) accounts for 90% of the cost and the remaining 10% cost can be attributed to the Amazon EC2 instance. The Amazon CloudWatch metrics report that both the Amazon EC2 instance and the Amazon EBS volume are under-utilized. The Amazon CloudWatch metrics also show that the Amazon EBS volume has occasional I/O bursts. The entire infrastructure is managed by AWS CloudFormation.\n\nWhat do you propose to reduce the costs?",
            options: [
              "Change the Amazon EC2 instance type to something much smaller",
              "Convert the Amazon EC2 instance EBS volume to gp2",
              "Don't use an AWS CloudFormation template to create the database as the AWS CloudFormation service incurs greater service charges",
              "Keep the Amazon EBS volume to io1 and reduce the IOPS"
            ],
            correctAnswerIndex: 1,
            explanation: "gp2/gp3 volumes are General Purpose SSDs that balance price and performance and offer burstable performance for occasional I/O bursts, which makes them far more cost-effective than io1 for under-utilized requirements."
          },
          {
            id: "q7",
            domain: "Domain 4: Data Security and Governance",
            text: "A pharmaceutical company is considering moving to AWS Cloud to accelerate the research and development process. Most of the daily workflows would be centered around running batch jobs on Amazon EC2 instances with storage on Amazon Elastic Block Store (Amazon EBS) volumes. The CTO is concerned about meeting HIPAA compliance norms for sensitive data stored on Amazon EBS.\n\nWhich of the following options represent the correct capabilities of an encrypted Amazon EBS volume? (Select three)",
            options: [
              "Data at rest inside the volume is NOT encrypted",
              "Data moving between the volume and the instance is encrypted",
              "Any snapshot created from the volume is NOT encrypted",
              "Data moving between the volume and the instance is NOT encrypted",
              "Data at rest inside the volume is encrypted",
              "Any snapshot created from the volume is encrypted"
            ],
            correctAnswerIndex: -1,
            correctAnswerIndices: [1, 4, 5],
            explanation: "When you encrypt an Amazon EBS volume, data at rest inside the volume, data moving between the volume and the instance, and any snapshot created from the volume are encrypted."
          },
          {
            id: "q8",
            domain: "Domain 4: Data Security and Governance",
            text: "A financial services company is moving its IT infrastructure to AWS Cloud and wants to enforce adequate data protection mechanisms on Amazon Simple Storage Service (Amazon S3) to meet compliance guidelines. The data engineering team has hired you to build a solution for this requirement.\n\nCan you help the team identify the INCORRECT option from the choices below?",
            options: [
              "Amazon S3 can protect data at rest using Client-Side Encryption",
              "Amazon S3 can encrypt data in transit using HTTPS (TLS)",
              "Amazon S3 can encrypt object metadata by using Server-Side Encryption",
              "Amazon S3 can protect data at rest using Server-Side Encryption"
            ],
            correctAnswerIndex: 2,
            explanation: "Amazon S3 does not encrypt object metadata. Server-Side Encryption only encrypts the object data itself."
          },
          {
            id: "q9",
            domain: "Domain 3: Data Operations and Support",
            text: "A data engineer needs to set up a daily execution of Amazon Athena queries, each of which may take longer than 15 minutes to run. What are the two most cost-effective steps to achieve this requirement? (Select two)",
            options: [
              "Set up a workflow in AWS Step Functions that incorporates two states. Configure the initial state prior to triggering the AWS Glue Python shell job. Establish the subsequent state as a Wait state, designed to periodically verify the completion status of the Athena query via the Athena Boto3 get_query_execution API call.",
              "Set up an AWS Glue Python shell job that uses the Athena Boto3 client start_query_execution API call to execute the Athena queries programmatically",
              "Set up a workflow in AWS Step Functions that incorporates two states. Configure the initial state prior to triggering the Lambda function. Establish the subsequent state as a Wait state, designed to periodically verify the completion status of the Athena query via the Athena Boto3 get_query_execution API call.",
              "Develop a Python shell script in AWS Glue to implement a sleep timer that checks every 5 minutes if the current Athena query has successfully completed. Set up the script so that it triggers the subsequent query once the current one is confirmed to have finished",
              "Set up an AWS Lambda function that uses the Athena Boto3 client start_query_execution API call to execute the Athena queries programmatically"
            ],
            correctAnswerIndex: -1,
            correctAnswerIndices: [2, 4],
            explanation: "Using an AWS Lambda function with start_query_execution is cost-effective, but because it may run over 15 minutes, you can orchestrate it via AWS Step Functions with a Wait state loop checking the query status using get_query_execution."
          },
          {
            id: "q10",
            domain: "Domain 1: Data Ingestion and Transformation",
            text: "The data engineering team at an e-commerce company processes transactions into Amazon Kinesis Data Streams using the Kinesis Producer Library (KPL). The Data Streams are managed via Auto Scaling configuration. On the other hand, the Kinesis Client Library (KCL) ingests the incoming data into the company's warehousing system to be used for downstream analytics. Lately, the data engineering team has come across issues arising out of duplicate records.\n\nWhich of the following would you identify as the most likely reason for this behavior?",
            options: [
              "The producer is experiencing network-related timeouts, forcing duplicate entries into the Kinesis Data Streams",
              "The Kinesis Producer Library (KPL) is aggregating smaller records into larger records of up to 1 MB, sometimes resulting in duplicate records",
              "If the GetRecord call fails without an acknowledgment from Amazon Kinesis Data Streams, the Kinesis Producer Library (KPL) will write the same data again",
              "If PutRecords.Bytes metric exceeds the provisioned write capacity, throttling for the stream kicks in, which results in record failures leading to re-writing of data by Kinesis Producer Library (KPL)"
            ],
            correctAnswerIndex: 0,
            explanation: "Producer network timeouts can cause records to be retried and result in identical duplicate entries in Kinesis Data Streams."
          },
          ...questions11to30,
          ...questions31to50,
          ...questions51to65
        ]
      }
    ]
  }
];
