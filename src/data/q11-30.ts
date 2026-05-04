export const questions11to30 = [
  {
    id: "q11",
    domain: "Domain 1: Data Ingestion and Transformation",
    text: "A media agency stores its re-creatable assets on Amazon Simple Storage Service (Amazon S3) buckets. The assets are accessed by a large number of users for the first few days and the frequency of access falls down drastically after a week. Although the assets would be accessed occasionally after the first week, they must continue to be immediately accessible when required. Can you suggest a way to lower the storage costs while fulfilling the business requirements?",
    options: [
      "Configure a lifecycle policy to transition the objects to Amazon S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days",
      "Configure a lifecycle policy to transition the objects to Amazon S3 Standard-Infrequent Access (S3 Standard-IA) after 7 days",
      "Configure a lifecycle policy to transition the objects to Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA) after 7 days",
      "Configure a lifecycle policy to transition the objects to Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA) after 30 days"
    ],
    correctAnswerIndex: 3,
    explanation: "Re-creatable assets can use One Zone-IA to reduce costs. Since immediate access is still required, IA is appropriate. S3 requires objects to be stored at least 30 days in Standard before transitioning to One Zone-IA."
  },
  {
    id: "q12",
    domain: "Domain 1: Data Ingestion and Transformation",
    text: "A company's real-time streaming application is running on AWS. As the data is ingested, a job runs on the data and takes 30 minutes to complete. The workload frequently experiences high latency due to the large volume of incoming data. A data engineer needs to design a scalable and serverless solution to enhance performance. Which combination of steps do you recommend? (Select two)",
    options: [
      "Set up AWS Fargate with Amazon ECS to process the data",
      "Provision Amazon EC2 instances in an Auto Scaling group to process the data",
      "Set up Amazon Kinesis Data Streams to ingest the data",
      "Set up AWS Lambda with AWS Step Functions to process the data",
      "Set up AWS Database Migration Service (AWS DMS) to ingest the data"
    ],
    correctAnswerIndex: -1,
    correctAnswerIndices: [0, 2],
    explanation: "Kinesis Data Streams scales well to ingest large volume streaming data. Fargate is serverless and can run tasks up to 30 mins easily, avoiding Lambda's 15 min limit."
  },
  {
    id: "q13",
    domain: "Domain 3: Data Operations and Support",
    text: "An e-commerce company is looking to enhance its product recommendation system which relies on user behavior and preferences. The company wants to achieve this by integrating insights from third-party datasets into its existing analytics platform. The company aims to minimize the effort and time involved in this integration. What solution would achieve this with the least operational overhead?",
    options: [
      "Access and integrate third-party datasets available through AWS Marketplace",
      "Access and integrate third-party datasets from AWS CodeCommit repositories",
      "Access and integrate third-party datasets available through AWS DataSync",
      "Access and integrate third-party datasets available through AWS Data Exchange"
    ],
    correctAnswerIndex: 3,
    explanation: "AWS Data Exchange is a service that makes it easy to find, subscribe to, and use third-party data in the cloud."
  },
  {
    id: "q14",
    domain: "Domain 2: Data Store Management",
    text: "A big data analytics company is working on a real-time vehicle tracking solution. The data processing workflow involves both I/O-intensive and throughput-intensive database workloads. The data engineering team needs to store this real-time data in a NoSQL database hosted on an Amazon EC2 instance and needs to support up to 25,000 IOPS per volume. Which of the following Amazon Elastic Block Store (Amazon EBS) volume types would you recommend for this use-case?",
    options: [
      "Provisioned IOPS SSD (io1)",
      "General Purpose SSD (gp2)",
      "Cold HDD (sc1)",
      "Throughput Optimized HDD (st1)"
    ],
    correctAnswerIndex: 0,
    explanation: "Provisioned IOPS SSD (io1) is designed to meet the needs of I/O-intensive workloads, particularly database workloads, that are sensitive to storage performance and consistency."
  },
  {
    id: "q15",
    domain: "Domain 3: Data Operations and Support",
    text: "An application uses Kinesis Data Streams to process real-time data for business analytics. Monitoring this incoming and outgoing data stream from the Kinesis Data Streams is important for the performance of the system as well as the downstream applications. For a read-intensive requirement, the age for the last record in the data stream for all the GetRecords requests need to be tracked. Which stream-level metric will help address this requirement?",
    options: [
      "ReadProvisionedThroughputExceeded",
      "PutRecords.Latency",
      "GetRecords.Latency",
      "GetRecords.IteratorAgeMilliseconds"
    ],
    correctAnswerIndex: 3,
    explanation: "GetRecords.IteratorAgeMilliseconds metric tracks the age of the last record read from the stream, helping you measure how far behind the consumers are."
  },
  {
    id: "q16",
    domain: "Domain 2: Data Store Management",
    text: "The IT department at a company is conducting a training workshop for new data engineers. As part of an evaluation exercise on Amazon S3, the new data engineers were asked to identify the invalid storage class lifecycle transitions for objects stored on Amazon S3. Can you identify the INVALID lifecycle transitions from the options below? (Select two)",
    options: [
      "Amazon S3 Intelligent-Tiering => Amazon S3 Standard",
      "Amazon S3 Standard-IA => Amazon S3 One Zone-IA",
      "Amazon S3 One Zone-IA => Amazon S3 Standard-IA",
      "Amazon S3 Standard-IA => Amazon S3 Intelligent-Tiering",
      "Amazon S3 Standard => Amazon S3 Intelligent-Tiering"
    ],
    correctAnswerIndex: -1,
    correctAnswerIndices: [0, 2],
    explanation: "You cannot transition from any storage class back to S3 Standard. You also cannot transition from S3 One Zone-IA to S3 Standard-IA."
  },
  {
    id: "q17",
    domain: "Domain 1: Data Ingestion and Transformation",
    text: "A financial services company is looking for a solution that detects anomalies in order to identify fraudulent transactions. The company utilizes Amazon Kinesis to transfer JSON-formatted transaction records from its on-premises database to Amazon S3. The existing dataset comprises 100-column-wide records for each transaction. To identify fraudulent transactions, the solution needs to analyze just ten of these columns. As an AWS Certified Data Engineer Associate, which of the following would you suggest as the lowest-cost solution that needs the least development work and offers out-of-the-box anomaly detection functionality?",
    options: [
      "Leverage Kinesis Data Firehose to detect anomalies on a data stream from Kinesis Streams via a Lambda function which computes an anomaly score for all transactions and stores all fraudulent transactions in Amazon RDS. Use Amazon QuickSight to visualize the results from RDS",
      "Transform the data from JSON format to Apache Parquet format using an AWS Glue job. Configure AWS Glue crawlers to discover the schema and build the AWS Glue Data Catalog. Leverage Amazon SageMaker to build an anomaly detection model that can detect fraudulent transactions by ingesting data directly from Amazon S3",
      "Transform the data from JSON format to Apache Parquet format using an AWS Glue job. Configure AWS Glue crawlers to discover the schema and build the AWS Glue Data Catalog. Leverage Amazon Athena to create a table with a subset of columns. Set up Amazon QuickSight for visual analysis of the data and identify fraudulent transactions using QuickSight's built-in machine learning-powered anomaly detection",
      "Leverage Kinesis Data Analytics to detect anomalies on a data stream from Kinesis Streams by running SQL queries which compute an anomaly score for all transactions and then store all fraudulent transactions in Amazon S3. Use Amazon QuickSight to visualize the results from Amazon S3"
    ],
    correctAnswerIndex: 2,
    explanation: "Using QuickSight's built-in ML-powered anomaly detection over data prepared by Glue and queried with Athena provides the required functionality with lowest cost and least development."
  },
  {
    id: "q18",
    domain: "Domain 4: Data Security and Governance",
    text: "A financial services company stores confidential data on an Amazon Simple Storage Service (S3) bucket. The compliance guidelines require that files be stored with server-side encryption. The encryption used must be Advanced Encryption Standard (AES-256) and the company does not want to manage the encryption keys. What do you recommend?",
    options: [
      "Client Side Encryption",
      "Server-side encryption with AWS KMS keys (SSE-KMS)",
      "Server-side encryption with Amazon S3 managed keys (SSE-S3)",
      "Server-side encryption with customer-provided keys (SSE-C)"
    ],
    correctAnswerIndex: 2,
    explanation: "SSE-S3 uses AES-256 and Amazon fully manages the encryption keys, satisfying both requirements."
  },
  {
    id: "q19",
    domain: "Domain 1: Data Ingestion and Transformation",
    text: "A company regularly extracts about 2 TB of data daily from various data sources - including MySQL, MSSQL Server, Oracle, Vertica, and Teradata Vantage. Some of these sources feature undefined or frequently changing data schemas. A data engineer is tasked with implementing a solution that can automatically detect the schema of these data sources and perform data extraction, transformation, and loading to an Amazon S3 bucket. What solution would meet these needs while minimizing operational overhead?",
    options: [
      "Utilize PySpark to detect the schema including any ongoing changes. Extract, transform, and load the data into the S3 bucket by creating the ETL pipeline in AWS Lambda",
      "Utilize Amazon EMR to detect the schema including any ongoing changes. Extract, transform, and load the data into the S3 bucket by creating the ETL pipeline in Apache Spark",
      "Utilize Redshift spectrum to detect the schema including any ongoing changes. Extract, transform, and load the data into the S3 bucket by creating a stored procedure in Amazon Redshift",
      "Utilize AWS Glue to detect the schema including any ongoing changes. Extract, transform, and load the data into the S3 bucket by creating the ETL pipeline in Apache Spark"
    ],
    correctAnswerIndex: 3,
    explanation: "AWS Glue provides automated schema discovery via Glue Crawlers and managed Spark ETL, minimizing operational overhead."
  },
  {
    id: "q20",
    domain: "Domain 3: Data Operations and Support",
    text: "A data engineering team has deployed a microservice to the Amazon Elastic Container Service (Amazon ECS). The application layer is in a Docker container that provides both static and dynamic content through an Application Load Balancer. With increasing load, the Amazon ECS cluster is experiencing higher network usage. The team has looked into the network usage and found that 90% of it is due to distributing static content of the application. What do you recommend to improve the application's network usage and decrease costs?",
    options: [
      "Distribute the static content through Amazon S3",
      "Distribute the dynamic content through Amazon EFS",
      "Distribute the static content through Amazon EFS",
      "Distribute the dynamic content through Amazon S3"
    ],
    correctAnswerIndex: 0,
    explanation: "Offloading static content to Amazon S3 is highly cost-effective and drastically reduces network traffic through the ECS cluster and ALB."
  },
  {
    id: "q21",
    domain: "Domain 3: Data Operations and Support",
    text: "An e-commerce company runs its workloads on Amazon EMR clusters. The data engineering team at the company manually installs third-party libraries on the newly launched clusters by logging onto the master nodes. The team wants to develop an automated solution that will replace this human intervention. Which of the following options would you recommend for the given requirement? (Select two)",
    options: [
      "Upload the required installation scripts in DynamoDB and use a Lambda function to execute these scripts for installing the third-party libraries on the EMR cluster",
      "Upload the required installation scripts in Amazon S3 and execute them using custom bootstrap actions",
      "Upload the required installation scripts in Amazon S3 and execute them using AWS EMR CLI",
      "Provision an Amazon EC2 instance with Amazon Linux and install the required third-party libraries on the instance and then use this EC2 instance to launch the EMR cluster",
      "Provision an Amazon EC2 instance with Amazon Linux and install the required third-party libraries on the instance. Create an AMI using this EC2 instance and then use this AMI to launch the EMR cluster"
    ],
    correctAnswerIndex: -1,
    correctAnswerIndices: [1, 4],
    explanation: "Custom bootstrap actions and custom AMIs are the two standard ways to automate the installation of additional software on Amazon EMR clusters."
  },
  {
    id: "q22",
    domain: "Domain 3: Data Operations and Support",
    text: "Your company runs a web portal to match developers to clients who need their help. As a data engineer, you've designed the architecture of the website to be fully serverless with Amazon API Gateway and AWS Lambda. The backend uses an Amazon DynamoDB table. You would like to automatically congratulate your developers on important milestones, such as - their first paid contract. All the contracts are stored in Amazon DynamoDB. Which of the following options can you use to implement this functionality such that there is LEAST delay in sending automatic notifications?",
    options: [
      "Amazon EventBridge events + AWS Lambda",
      "Amazon DynamoDB DAX + Amazon API Gateway",
      "Amazon DynamoDB Streams + AWS Lambda",
      "Amazon Simple Queue Service (Amazon SQS) + AWS Lambda"
    ],
    correctAnswerIndex: 2,
    explanation: "DynamoDB Streams capture table modifications in near real-time and can trigger an AWS Lambda function automatically with minimal delay."
  },
  {
    id: "q23",
    domain: "Domain 3: Data Operations and Support",
    text: "An application writes real-time streaming data of chats into Amazon Kinesis Data Streams partitioned by user id. Before writing this data into an Amazon Elasticsearch Service cluster (now Amazon OpenSearch Service), an AWS Lambda function checks the content for validation. The validation procedure must receive the data of a specific user in the sequence in which the Kinesis data stream received it without changing the order. However, during peak hours, the lag between data received in Kinesis Data Streams to the data reaching OpenSearch Service is very high, thereby resulting in data anomalies. Which of the following is the best way to fix this issue with the least amount of operational overhead?",
    options: [
      "Replace Amazon Data Streams functionality with Apache Kafka to deal with the high volume of data",
      "Multiple consumer applications must be reading from the Data Stream exceeding the per-shard limits. Define different Data Streams for different consumer applications",
      "Increase the number of shards in the Kinesis data stream to accommodate the increased data during peak hours",
      "The validation process should be moved from AWS Lambda to Amazon Firehose to accommodate the high volumes of data"
    ],
    correctAnswerIndex: 2,
    explanation: "Increasing the number of shards allows you to process more data concurrently, reducing lag, while the user ID partition key guarantees ordered processing per user."
  },
  {
    id: "q24",
    domain: "Domain 4: Data Security and Governance",
    text: "A media streaming company operates a set of APIs and content delivery endpoints hosted on Amazon EC2 instances. The architecture requires that all network communications be encrypted using SSL/TLS to meet compliance requirements for data-in-transit protection. To reduce administrative burden, the platform engineering team is looking for a solution that will automatically handle the creation, renewal, and deployment of digital certificates used in secure HTTPS communications. The solution should minimize manual steps and ongoing maintenance while integrating natively with the AWS ecosystem. Which solution best meets these requirements with the least operational overhead?",
    options: [
      "Use Amazon Route 53 DNS routing policies to redirect traffic to endpoints with valid certificates. Integrate with a Lambda@Edge function to evaluate expiration metadata and trigger alerts when certificates are near expiration",
      "Deploy certificates manually to EC2 instances and create custom cron jobs to handle periodic renewal using shell scripts and third-party certificate authorities. Monitor expiration manually or with custom CloudWatch alarms",
      "Use AWS Systems Manager Parameter Store to securely store and manually rotate SSL/TLS certificates. Build custom automation with Lambda functions to fetch and deploy certificates to EC2 instances on a scheduled basis",
      "Use AWS Certificate Manager (ACM) to provision and manage public or private SSL/TLS certificates. Attach the certificates to integrated AWS resources such as Elastic Load Balancers or CloudFront distributions"
    ],
    correctAnswerIndex: 3,
    explanation: "AWS Certificate Manager (ACM) natively handles the complexity of creating, storing, and automatically renewing public SSL/TLS certificates, requiring zero operational overhead when integrated with ELB/CloudFront."
  },
  {
    id: "q25",
    domain: "Domain 3: Data Operations and Support",
    text: "A company makes use of multiple AWS Lambda functions for implementing various business requirements. These Lambda functions use code from common custom Python scripts that are also maintained by a data engineer along with the Lambda functions. The data engineer is looking for a solution to reduce the operational/maintenance work of updating the code in the Lambda functions when a change has to be made in the scripts. What is the most efficient way of implementing this change?",
    options: [
      "Package the Lambda functions as container images and add Lambda layers to the function configuration",
      "Package the custom Python scripts into Lambda ephemeral storage. Share these scripts via the ephemeral storage across all Lambda functions",
      "Use Lambda Extensions to add the common custom Python scripts to all the Lambda functions",
      "Package the custom Python scripts into Lambda layers. Apply the Lambda layers to all the AWS Lambda functions using the scripts"
    ],
    correctAnswerIndex: 3,
    explanation: "Lambda layers are designed specifically to package libraries and shared code separately from the deployment package, allowing you to easily update that common code across multiple functions."
  },
  {
    id: "q26",
    domain: "Domain 2: Data Store Management",
    text: "A data engineer is provisioning a DynamoDB table for an e-commerce application. The engineer is planning to allocate 500 Write Capacity Units, 5000 Read Capacity Units, and 50GB of space for this table. How many partitions will be created in the table for this requirement?",
    options: [
      "8 partitions",
      "5 partitions",
      "6 partitions",
      "3 partitions"
    ],
    correctAnswerIndex: 1,
    explanation: "DynamoDB calculates partitions based on throughput and size. Throughput math: (5000 / 3000) + (500 / 1000) = 1.66 + 0.5 = 2.16. Size math: 50GB / 10GB = 5. The total partitions created is the maximum of the throughput req (3) vs size req (5) = 5 partitions."
  },
  {
    id: "q27",
    domain: "Domain 2: Data Store Management",
    text: "A media company wants to get out of the business of owning and maintaining its own IT infrastructure. As part of this digital transformation, the media company wants to archive about 5 petabytes of data in its on-premises data center for durable long-term storage. What is your recommendation to migrate this data in the MOST cost-optimal way?",
    options: [
      "Transfer the on-premises data into multiple AWS Snowball Edge Storage Optimized devices. Copy the AWS Snowball Edge data into Amazon S3 and create a lifecycle policy to transition the data into Amazon S3 Glacier",
      "Set up AWS Site-to-Site VPN connection between the on-premises data center and AWS Cloud. Use this connection to transfer the data into Amazon S3 Glacier",
      "Set up AWS direct connect between the on-premises data center and AWS Cloud. Use this connection to transfer the data into Amazon S3 Glacier",
      "Transfer the on-premises data into multiple AWS Snowball Edge Storage Optimized devices. Copy the AWS Snowball Edge data into Amazon S3 Glacier"
    ],
    correctAnswerIndex: 0,
    explanation: "A Snowball Edge is optimal for multi-PB offline transfers. The data is initially loaded into S3, and standard lifecycle policies ensure cost-effective movement to Glacier."
  },
  {
    id: "q28",
    domain: "Domain 2: Data Store Management",
    text: "A company has a license-based, expensive, legacy commercial database solution deployed at its on-premises data center. The company wants to migrate this database to a more efficient, open-source, and cost-effective option on AWS Cloud. The CTO at the company wants a solution that can handle complex database configurations such as secondary indexes, foreign keys, and stored procedures. Which of the following AWS services should be combined to handle this use case? (Select two)",
    options: [
      "AWS Glue",
      "AWS Snowball Edge",
      "AWS Database Migration Service (AWS DMS)",
      "AWS Schema Conversion Tool (AWS SCT)",
      "Basic Schema Copy"
    ],
    correctAnswerIndex: -1,
    correctAnswerIndices: [2, 3],
    explanation: "AWS SCT converts complex database schemas and configurations (indexes, keys, procedures) to target engines, while AWS DMS handles the continuous or batch data migration."
  },
  {
    id: "q29",
    domain: "Domain 1: Data Ingestion and Transformation",
    text: "A university has tie-ups with local hospitals to share anonymized health statistics of people. The data is stored in Amazon S3 as .csv files. Amazon Athena is used to run extensive analytics on the data for finding correlations between different parameters in the data. The university is facing high costs and performance-related issues as the volume of data is growing rapidly. The data in the S3 bucket is already partitioned by date and the university does not want to change this partition scheme. As a data engineer, how can you further improve query performance? (Select two)",
    options: [
      "The S3 bucket should be configured in the same AWS Region where the Athena queries are being run",
      "Transform .csv files to JSON format by fetching the required key-value pairs only",
      "The S3 bucket should be configured in the same Availability Zone where the Athena queries are being run",
      "Transform .csv files to Parquet format by fetching only the data fields required for predicates",
      "Remove partitions and perform data bucketing on the S3 bucket"
    ],
    correctAnswerIndex: -1,
    correctAnswerIndices: [0, 3],
    explanation: "Parquet provides native columnar compression optimizing Athena reads, checking only required fields for query predicates. Moving S3 bucket processing to the same region as queries reduces cross-region transfer latencies."
  },
  {
    id: "q30",
    domain: "Domain 2: Data Store Management",
    text: "A company is experimenting with DynamoDB in its new test environment. The data engineering team has discovered that some of the write operations have been overwriting existing items having that specific primary key. This has corrupted the data leading to data discrepancies. Which DynamoDB write option would you select to prevent this kind of overwriting?",
    options: [
      "Scan operation",
      "Conditional writes",
      "Batch writes",
      "Atomic Counters"
    ],
    correctAnswerIndex: 1,
    explanation: "Conditional writes ensure an explicit condition validates the current item's state (e.g. attribute_not_exists) before allowing an update or put operation to proceed, effectively preventing unwarranted overwrites."
  }
];
