export const questions31to50 = [
  {
    id: "q31",
    domain: "Domain 1: Data Ingestion and Transformation",
    text: "An Internet of Things (IoT) company would like to have a streaming system that performs real-time analytics on the ingested IoT data. Once the analytics is done, the company would like to send notifications back to the mobile applications of the IoT device owners. Which of the following AWS technologies would you recommend to send these notifications to the mobile applications?",
    options: [
      "Amazon Kinesis Data Streams with Amazon Simple Queue Service (Amazon SQS)",
      "Amazon Kinesis Data Streams with Amazon Simple Email Service (Amazon SES)",
      "Amazon Simple Queue Service (Amazon SQS) with Amazon Simple Notification Service (Amazon SNS)",
      "Amazon Kinesis Data Streams with Amazon Simple Notification Service (Amazon SNS)"
    ],
    correctAnswerIndex: 3,
    explanation: "Kinesis Data Streams is built for real-time analytics of streaming data, and SNS natively supports push notifications directly to mobile devices running Apple, Google, and Fire OS architectures.",
    whyIncorrect: "For this practice question, detailed reasoning for incorrect options and official AWS documentation links are being added to our syllabus database and will be available shortly.",
    docLink: "https://docs.aws.amazon.com/search/doc-search.html?searchPath=documentation"
  },
  {
    id: "q32",
    domain: "Domain 2: Data Store Management",
    text: "You are a data engineer at an IT company that recently moved its production application to AWS and migrated data from PostgreSQL to AWS DynamoDB. You are adding new tables to AWS DynamoDB and need to allow your application to query your data by the primary key and an alternate key. This option must be added at the outset when you are first creating tables, otherwise, changes cannot be done once the table is created. Which of the following actions would you suggest?",
    options: [
      "Migrate away from DynamoDB",
      "Create a Local Secondary Index (LSI)",
      "Create DynamoDB Streams",
      "Create a Global Secondary Index (GSI)"
    ],
    correctAnswerIndex: 1,
    explanation: "A Local Secondary Index (LSI) allows querying by an alternate sort key but MUST be defined precisely when the table is originally created, unlike Global Secondary Indexes (GSIs).",
    whyIncorrect: "For this practice question, detailed reasoning for incorrect options and official AWS documentation links are being added to our syllabus database and will be available shortly.",
    docLink: "https://docs.aws.amazon.com/search/doc-search.html?searchPath=documentation"
  },
  {
    id: "q33",
    domain: "Domain 1: Data Ingestion and Transformation",
    text: "A logistics company operates a near real-time inventory tracking system for vehicle depots across multiple geographic regions. Third-party vendors upload multiple logs of vehicle arrivals and departures in the form of small compressed files (less than 10 KB) to a central Amazon S3 bucket. The company needs to immediately process new uploads to keep a dashboard up to date. The dashboard must be refreshed near real-time to reflect the latest vehicle inventory across regions. A data engineer is tasked with designing a cost-effective, low-latency, and scalable solution that automates the processing and transformation of the uploaded data, enables ad hoc querying for business analysts, and supports visual reporting through dashboards. Which solution will best meet these requirements in the most cost-effective and scalable manner?",
    options: [
      "Use AWS Glue to process the uploaded S3 data files. Configure S3 Event Notifications to trigger AWS Lambda for near real-time orchestration. Use Amazon Athena for on-demand querying of transformed data stored in S3. Use Amazon QuickSight to visualize the results through an interactive dashboard",
      "Use a provisioned Amazon EMR cluster running Spark to ingest and process the compressed files from S3. Trigger workflows using Amazon EventBridge rules and Step Functions. Store processed data in Amazon RDS and use Amazon Managed Grafana to visualize the vehicle inventory dashboards",
      "Use Amazon Kinesis Data Firehose to stream incoming vehicle log files from S3 and transform them on-the-fly with AWS Lambda. Store transformed data in Amazon Redshift. Use Redshift Query Editor V2 for ad hoc queries and Amazon QuickSight for reporting dashboards",
      "Use Amazon OpenSearch Ingestion Pipelines to pull data from S3, process the log files, and index them into Amazon OpenSearch Service. Use OpenSearch Dashboards for real-time visualization. Enable scheduled queries with AWS Glue for historical analysis and reporting"
    ],
    correctAnswerIndex: 0,
    explanation: "This combination uses fully serverless services optimized for object processing (S3 Events + Lambda + Glue). Processed output seamlessly drives ad hoc (Athena) and dashboard (QuickSight) workflows at low overhead.",
    whyIncorrect: "For this practice question, detailed reasoning for incorrect options and official AWS documentation links are being added to our syllabus database and will be available shortly.",
    docLink: "https://docs.aws.amazon.com/search/doc-search.html?searchPath=documentation"
  },
  {
    id: "q34",
    domain: "Domain 2: Data Store Management",
    text: "An IT company wants to process IoT data from the field devices of an agricultural sciences company. The data engineering team at the company is designing a new database infrastructure for capturing this IoT data. The database should be resilient with minimal operational overhead and require the least development effort. The application includes a device tracking system that stores the GPS data for all devices. Real-time IoT data, as well as metadata lookups, must be performed with high throughput and microsecond latency. Which of the following options would you recommend as the MOST efficient solution for these requirements?",
    options: [
      "Use DocumentDB as the database with API Gateway",
      "Use RDS MySQL as the database with ElasticCache",
      "Use DynamoDB as the database with DynamoDB Accelerator (DAX)",
      "Use Aurora MySQL as the database with Aurora cluster cache"
    ],
    correctAnswerIndex: 2,
    explanation: "DynamoDB + DAX fits the constraints of serverless resilient NoSQL storage for IoT records paired with in-memory caching to guarantee rapid microsecond reads with very low operational maintenance.",
    whyIncorrect: "For this practice question, detailed reasoning for incorrect options and official AWS documentation links are being added to our syllabus database and will be available shortly.",
    docLink: "https://docs.aws.amazon.com/search/doc-search.html?searchPath=documentation"
  },
  {
    id: "q35",
    domain: "Domain 3: Data Operations and Support",
    text: "The data engineering team at a social media company wants to use Amazon CloudWatch alarms to automatically recover Amazon EC2 instances if they become impaired. The team has hired you to provide subject matter expertise. Which of the following statements would you identify as CORRECT regarding this automatic recovery process? (Select two)",
    options: [
      "Terminated Amazon EC2 instances can be recovered if they are configured at the launch of instance",
      "During instance recovery, the instance is migrated during an instance reboot, and any data that is in memory is retained",
      "If your instance has a public IPv4 address, it retains the public IPv4 address after recovery",
      "A recovered instance is identical to the original instance, including the instance ID, private IP addresses, Elastic IP addresses, and all instance metadata",
      "If your instance has a public IPv4 address, it does not retain the public IPv4 address after recovery"
    ],
    correctAnswerIndex: -1,
    correctAnswerIndices: [2, 3],
    explanation: "A recovered instance retains its exact identical metadata properties, including Elastic and public IP assignments. In-memory data is lost because the underlying virtualization hosts undergo a reboot-like event.",
    whyIncorrect: "For this practice question, detailed reasoning for incorrect options and official AWS documentation links are being added to our syllabus database and will be available shortly.",
    docLink: "https://docs.aws.amazon.com/search/doc-search.html?searchPath=documentation"
  },
  {
    id: "q36",
    domain: "Domain 1: Data Ingestion and Transformation",
    text: "A retail company uses Amazon Kinesis Data Firehose to stream transactional data to Amazon S3. The data team wants to convert the incoming JSON data to Apache Parquet format before it is written to the S3 bucket to optimize query performance in Amazon Athena. Which configuration is required to achieve this natively within Kinesis Data Firehose?",
    options: [
      "Configure an AWS Lambda function to transform the JSON structure into Parquet format within the Firehose data transformation setting.",
      "Enable the record format conversion feature in Kinesis Data Firehose and specify an AWS Glue Data Catalog table to infer the schema.",
      "Use Amazon Kinesis Data Analytics to read the Firehose stream, convert it to Parquet, and write to S3.",
      "Configure Amazon S3 event notifications to trigger an AWS Glue ETL job that converts JSON files to Parquet whenever new files land."
    ],
    correctAnswerIndex: 1,
    explanation: "Kinesis Data Firehose can natively convert incoming JSON data to columnar formats like Parquet or ORC before storing the data in Amazon S3. This requires an AWS Glue Data Catalog table that defines the schema of the incoming data.",
    whyIncorrect: "For this practice question, detailed reasoning for incorrect options and official AWS documentation links are being added to our syllabus database and will be available shortly.",
    docLink: "https://docs.aws.amazon.com/search/doc-search.html?searchPath=documentation",
    whyCorrect: "Kinesis Data Firehose has built-in 'Record format conversion' capability that converts JSON to Parquet/ORC natively. It relies on an AWS Glue Data Catalog schema to understand the target format.",
    whyIncorrect: "While Lambda can transform payloads, doing format conversion manually inside Lambda is complex and not the native way. Kinesis Data Analytics is mainly for SQL over streaming and isn't required just for static format conversions. Triggering an S3 event does the conversion AFTER landing, not before.",
    decisionHack: "Firehose JSON -> Parquet native conversion = Always requires AWS Glue Data Catalog.",
    docLink: "https://docs.aws.amazon.com/firehose/latest/dev/record-format-conversion.html"
  },
  {
    id: "q37",
    domain: "Domain 1: Data Ingestion and Transformation",
    text: "A company has integration with a third-party service to export its data to an Amazon S3 bucket. After each export, the incremental data from the S3 bucket needs to be transferred to Amazon Redshift and this data should be available to filter on specific keys. Which AWS service/solution is a good fit to address this requirement?",
    options: [
      "Configure Amazon S3 Event notifications to trigger an AWS Lambda function to copy the data from the S3 bucket to Redshift",
      "Use Amazon Redshift Spectrum to copy data from S3 bucket to Redshift",
      "Load data from Amazon S3 to Amazon Redshift using AWS Glue",
      "Use Amazon S3 Replication to copy the data from the S3 bucket to Redshift"
    ],
    correctAnswerIndex: 2,
    explanation: "AWS Glue connects S3 and Redshift easily, allowing for advanced extraction, transformation, filtering, and joining before placing the incremental data reliably in the data warehouse.",
    whyIncorrect: "For this practice question, detailed reasoning for incorrect options and official AWS documentation links are being added to our syllabus database and will be available shortly.",
    docLink: "https://docs.aws.amazon.com/search/doc-search.html?searchPath=documentation"
  },
  {
    id: "q38",
    domain: "Domain 2: Data Store Management",
    text: "A company runs multiple gaming platforms that need to store game state, player data, session history, and leaderboards. The company is looking to move to AWS Cloud to scale reliably to millions of concurrent users and requests while ensuring consistently low latency measured in single-digit milliseconds. The data engineering team at the company is evaluating multiple in-memory data stores with the ability to power its on-demand, live leaderboard. The company's leaderboard requires high availability, low latency, and real-time processing to deliver customizable user data for the community of its users. Which of the following solutions can be used to address the given requirements? (Select two)",
    options: [
      "Develop the leaderboard using DynamoDB as it meets the in-memory, high availability, low latency requirements",
      "Develop the leaderboard using RDS Aurora as it meets the in-memory, high availability, low latency requirements",
      "Develop the leaderboard using ElastiCache Redis as it meets the in-memory, high availability, low latency requirements",
      "Develop the leaderboard using AWS Neptune as it meets the in-memory, high availability, low latency requirements"
    ],
    correctAnswerIndex: -1,
    correctAnswerIndices: [0, 2],
    explanation: "Both DynamoDB (with DAX or single-digit MS latency features) and Amazon ElastiCache (Redis) support millions of active concurrent users with high scale and extreme low latency operations suitable for global leaderboards.",
    whyIncorrect: "For this practice question, detailed reasoning for incorrect options and official AWS documentation links are being added to our syllabus database and will be available shortly.",
    docLink: "https://docs.aws.amazon.com/search/doc-search.html?searchPath=documentation"
  },
  {
    id: "q39",
    domain: "Domain 2: Data Store Management",
    text: "A company is transitioning its database servers from Amazon EC2 instances running Microsoft SQL Server to Amazon RDS for Microsoft SQL Server DB instances. During this migration, the data engineering team needs to export this data, which is derived from SQL joins across multiple tables, using a daily schedule. The migrated data should be stored in Apache Parquet format on Amazon S3. What is the most operationally efficient solution to meet these requirements?",
    options: [
      "Construct a view within the SQL Server databases on the EC2 instances that includes the essential data elements. Then, set up an AWS Glue job to fetch the data directly from this view and transfer it to an S3 bucket in Parquet format. Ensure this AWS Glue job is scheduled to execute daily",
      "Develop an AWS Lambda function that utilizes Java Database Connectivity (JDBC) to query databases hosted on EC2 instances. Set up this Lambda function to fetch the necessary data, convert it into Parquet format, and upload it to an S3 bucket. Set up a daily schedule via Amazon EventBridge to trigger the Lambda function",
      "Set up the SQL Server Agent to execute a daily SQL query on the SQL Server databases hosted on the EC2 instances, extracting the specified data elements. Configure the query to output the results as .csv files directly into an S3 bucket. Additionally, establish an S3 event trigger to activate an AWS Lambda function, which will convert these .csv files into the Parquet format",
      "Create a SQL query on the SQL Server database hosted on the EC2 instances to establish a view containing the necessary data elements. Then, configure an AWS Glue crawler to access and read this view. Set up an AWS Glue job to extract the data and convert it into Parquet format before transferring it to an S3 bucket. Configure this AWS Glue job to execute daily"
    ],
    correctAnswerIndex: 3,
    explanation: "Creating a SQL view to simplify joins and letting AWS Glue automatically crawl the schema and orchestrate a governed, serverless ETL script is structurally the most efficient architecture.",
    whyIncorrect: "For this practice question, detailed reasoning for incorrect options and official AWS documentation links are being added to our syllabus database and will be available shortly.",
    docLink: "https://docs.aws.amazon.com/search/doc-search.html?searchPath=documentation"
  },
  {
    id: "q40",
    domain: "Domain 2: Data Store Management",
    text: "You would like to mount a network file system on Linux instances, where files will be stored and accessed frequently at first, and then infrequently. What solution is the MOST cost-effective?",
    options: [
      "Amazon S3 Glacier Deep Archive",
      "Amazon EBS io1/io2",
      "Amazon EFS Infrequent Access",
      "Amazon S3 Intelligent Tiering"
    ],
    correctAnswerIndex: 2,
    explanation: "Amazon EFS integrates natively with Linux instances offering auto-tiering capability to EFS Infrequent Access for older files, significantly reducing storage costs dynamically.",
    whyIncorrect: "For this practice question, detailed reasoning for incorrect options and official AWS documentation links are being added to our syllabus database and will be available shortly.",
    docLink: "https://docs.aws.amazon.com/search/doc-search.html?searchPath=documentation"
  },
  {
    id: "q41",
    domain: "Domain 1: Data Ingestion and Transformation",
    text: "A healthcare company has significant investments in running Oracle and PostgreSQL services on Amazon RDS which provide their data engineers with near real-time analysis of millions of rows of health data having 2,000 data points per row. The data engineering team has been running ad-hoc queries on these databases to prepare daily reports for senior management. The team lead has observed that the database performance takes a hit whenever these reports are run. To facilitate the reporting process, the team now wants to replicate this data with high availability and consolidate these databases into a petabyte-scale data warehouse by streaming data to Amazon Redshift. Which of the following would you recommend as the MOST resource-efficient solution that requires the LEAST amount of development time?",
    options: [
      "Use AWS Glue to replicate the data from the databases into Amazon Redshift",
      "Use Amazon Kinesis Data Streams to replicate the data from the databases into Amazon Redshift",
      "Use AWS Database Migration Service to replicate the data from the databases into Amazon Redshift",
      "Use Amazon EMR to replicate the data from the databases into Amazon Redshift"
    ],
    correctAnswerIndex: 2,
    explanation: "AWS DMS sets up highly available continuous homogeneous/heterogeneous replications with minimal operational development code overhead.",
    whyIncorrect: "For this practice question, detailed reasoning for incorrect options and official AWS documentation links are being added to our syllabus database and will be available shortly.",
    docLink: "https://docs.aws.amazon.com/search/doc-search.html?searchPath=documentation"
  },
  {
    id: "q42",
    domain: "Domain 3: Data Operations and Support",
    text: "The data engineering team at an e-commerce company uses Apache Hive on Amazon EMR. The team has noticed sub-par performance for the cluster during the morning peak load hours when 95% of the daily queries are executed. The team has also observed that HDFS's (Hadoop Distributed File System) usage never surpasses 10%. As an AWS Certified Data Engineer Associate, which of the following solutions would you recommend to resolve these performance issues?",
    options: [
      "Set up instance group configurations for core and task nodes. Leverage the CloudWatch YARNMemoryAvailablePercentage metric to configure automatic scaling policies to scale out/scale in the instance groups",
      "Set up spot fleet configurations for core and task nodes. Leverage the CloudWatch YARNMemoryAvailablePercentage metric to configure automatic scaling policies to scale out/scale in the spot fleet",
      "Set up instance group configurations for core and task nodes. Leverage the CloudWatch CapacityRemainingGB metric to configure automatic scaling policies to scale out/scale in the instance groups",
      "Set up spot fleet configurations for core and task nodes. Leverage the CloudWatch CapacityRemainingGB metric to configure automatic scaling policies to scale out/scale in the spot fleet"
    ],
    correctAnswerIndex: 0,
    explanation: "Because memory is the bottleneck due to heavy query processing while HDFS storage stays low, scaling Instance Groups up leveraging the YARNMemoryAvailablePercentage auto-scaling capabilities balances the cluster execution needs.",
    whyIncorrect: "For this practice question, detailed reasoning for incorrect options and official AWS documentation links are being added to our syllabus database and will be available shortly.",
    docLink: "https://docs.aws.amazon.com/search/doc-search.html?searchPath=documentation"
  },
  {
    id: "q43",
    domain: "Domain 2: Data Store Management",
    text: "A company uses Amazon Simple Storage Service (Amazon S3) as a storage service for storing various media files, log files, audit files, etc. The company has hired you as an AWS Certified Data Engineer Associate to also configure Amazon EMR to use Amazon S3 as the Hadoop storage layer instead of the Hadoop Distributed File System (HDFS). How will you configure this requirement?",
    options: [
      "You can't configure Amazon EMR to use Amazon S3 instead of HDFS as the Hadoop storage layer",
      "You can configure Amazon EMR to use the Amazon S3 block file system for this requirement",
      "You can configure Amazon EMR to use Amazon S3 instead of HDFS for the Hadoop storage layer by launching the cluster as a long-running cluster",
      "You can configure Amazon EMR to use Amazon S3 as the Hadoop storage layer while launching the EMR cluster"
    ],
    correctAnswerIndex: 0,
    explanation: "EMR primarily utilizes HDFS natively inside the EC2 nodes; while it integrates with S3 via EMRFS, S3 cannot outright REPLACE HDFS entirely as the cluster's core foundational storage component.",
    whyIncorrect: "For this practice question, detailed reasoning for incorrect options and official AWS documentation links are being added to our syllabus database and will be available shortly.",
    docLink: "https://docs.aws.amazon.com/search/doc-search.html?searchPath=documentation"
  },
  {
    id: "q44",
    domain: "Domain 3: Data Operations and Support",
    text: "The web development team at an IT company has about 200 TB of web-log data that is stored in an Amazon S3 bucket as raw text. Each log file is identified by a key of the type year-month-day_log_HHmmss.txt. The data engineering team has created an Amazon Athena table that links to the given S3 bucket. The team executes several queries every hour against a subset of the table's columns. The company wants a Hive-metastore compatible solution that costs less and requires less maintenance to support the ongoing analytics on this log data. As an AWS Certified Data Engineer Associate, which of the following solutions would you combine to address these requirements? (Select three)",
    options: [
      "Drop and recreate the table with the PARTITIONED BY clause. Load the partitions by executing the ALTER TABLE ADD PARTITION statement",
      "Partition the data by using a key prefix of the form date=year-month-day/ to the S3 objects",
      "Partition the data by using a key prefix of the form year-month-day/ to the S3 objects",
      "Change the log files to Apache Parquet format",
      "Change the log files to Apache Avro format"
    ],
    correctAnswerIndex: -1,
    correctAnswerIndices: [0, 1, 3],
    explanation: "Converting textual data to a highly compressed columnar format like Parquet combined with explicit `date=val/` format S3 partitions, managed via explicit partition statements ensures high performance queries with minimal Athena scanning costs.",
    whyIncorrect: "For this practice question, detailed reasoning for incorrect options and official AWS documentation links are being added to our syllabus database and will be available shortly.",
    docLink: "https://docs.aws.amazon.com/search/doc-search.html?searchPath=documentation"
  },
  {
    id: "q45",
    domain: "Domain 4: Data Security and Governance",
    text: "A retail company is migrating its infrastructure from the on-premises data center to AWS Cloud. The company wants to deploy its two-tier application with the EC2 instance-based web servers in a public subnet and PostgreSQL RDS-based database layer in a private subnet. The company wants to ensure that the database access credentials used by the web servers are handled securely as well as these credentials are changed every 90 days in an automated way using a built-in integration. Which of the following solutions would you recommend for the given use case?",
    options: [
      "Use AWS Secrets Manager to store the database access credentials with the rotation interval configured to 90 days. Set up the application web servers to retrieve the credentials from the Secrets Manager",
      "Store the database access credentials in an SSE-S3 encrypted text file on S3. Configure the application web servers to retrieve the credentials from S3 on system boot. Write custom code to change the database access credentials stored on the encrypted file after 90 days",
      "Store the database access credentials as the EC2 instance user data. Configure the application web servers to retrieve the credentials from the user data while bootstrapping. Write custom code to change the database access credentials stored in the user data after 90 days",
      "Store the database access credentials in a KMS encrypted text file on EFS. Configure the application web servers to retrieve the credentials from EFS on system boot. Write custom code to change the database access credentials stored on the encrypted file after 90 days"
    ],
    correctAnswerIndex: 0,
    explanation: "Secrets Manager is natively designed specifically to handle sensitive keys/passwords, seamlessly handling automated key rotation with native integration supporting RDS database engines like PostgreSQL.",
    whyIncorrect: "For this practice question, detailed reasoning for incorrect options and official AWS documentation links are being added to our syllabus database and will be available shortly.",
    docLink: "https://docs.aws.amazon.com/search/doc-search.html?searchPath=documentation"
  },
  {
    id: "q46",
    domain: "Domain 4: Data Security and Governance",
    text: "Multiple teams within a company use Amazon Athena to run ad-hoc queries on its data stored in an Amazon S3 bucket. The usage costs for Athena have been running high and the company wants to set a limit on the amount of data that can be scanned by each team. Also, the teams should not have access to queries, query results, or query history of other teams. As a data engineer, how will you implement the requirement with the least operational and cost overhead?",
    options: [
      "Leverage S3 Access Points to control access to query history of the teams by creating unique access control policies for each access point",
      "Create an IAM group for each team. Assign appropriate permissions to each of the IAM groups by associating custom IAM policies that restrict access to the query history and control costs",
      "Create an Athena workgroup for each team and apply tags. Use these tags in a new IAM policy to configure appropriate permissions to the workgroups",
      "Use AWS Lake Formation to define access policies for each of the teams separately to restrict access to query history for the respective teams and control costs"
    ],
    correctAnswerIndex: 2,
    explanation: "Athena workgroups naturally isolate execution history, metric tracking, and scan data usage limits across different teams inside the same AWS account by leveraging resource tagging constraints inside IAM.",
    whyIncorrect: "For this practice question, detailed reasoning for incorrect options and official AWS documentation links are being added to our syllabus database and will be available shortly.",
    docLink: "https://docs.aws.amazon.com/search/doc-search.html?searchPath=documentation"
  },
  {
    id: "q47",
    domain: "Domain 1: Data Ingestion and Transformation",
    text: "A photo-sharing company is storing user profile pictures in an Amazon S3 bucket and an image analysis application is deployed on four Amazon EC2 instances. A data engineer would like to trigger an image analysis procedure only on one of the four Amazon EC2 instances for each photo uploaded. What do you recommend?",
    options: [
      "Create an Amazon S3 Event Notification that sends a message to an Amazon SQS queue. Make the Amazon EC2 instances read from the Amazon SQS queue",
      "Subscribe the Amazon EC2 instances to Amazon S3 Analytics - storage class analysis",
      "Create an Amazon S3 Event Notification that sends a message to an Amazon SNS topic. Subscribe the Amazon EC2 instances to the Amazon SNS topic",
      "Create an Amazon EventBridge event that reacts to object uploads in Amazon S3 and invokes one of the Amazon EC2 instances"
    ],
    correctAnswerIndex: 0,
    explanation: "By piping events through an Amazon SQS queue and allowing instances to poll from it, exactly ONE instance will process any given incoming message, establishing high decoupling and guaranteed execution without replication conflicts.",
    whyIncorrect: "For this practice question, detailed reasoning for incorrect options and official AWS documentation links are being added to our syllabus database and will be available shortly.",
    docLink: "https://docs.aws.amazon.com/search/doc-search.html?searchPath=documentation"
  },
  {
    id: "q48",
    domain: "Domain 1: Data Ingestion and Transformation",
    text: "A financial analytics company wants to gather insights from personal finance data stored on Amazon S3 in the Microsoft Excel workbook format. Which of the following represents a serverless solution to interactively discover, clean and transform this raw data for performing this analysis?",
    options: [
      "Leverage Amazon Redshift Spectrum to analyze the data stored on Amazon S3",
      "Leverage Amazon Glue Data Catalog to analyze the data stored on Amazon S3",
      "Leverage Amazon Athena to analyze the data stored on Amazon S3",
      "Leverage AWS Glue DataBrew to analyze the data stored on Amazon S3"
    ],
    correctAnswerIndex: 3,
    explanation: "AWS Glue DataBrew provides a powerful visual data preparation platform that easily manages 250+ transforms automatically, handling non-traditional data sources like specific raw Microsoft Excel files.",
    whyIncorrect: "For this practice question, detailed reasoning for incorrect options and official AWS documentation links are being added to our syllabus database and will be available shortly.",
    docLink: "https://docs.aws.amazon.com/search/doc-search.html?searchPath=documentation"
  },
  {
    id: "q49",
    domain: "Domain 2: Data Store Management",
    text: "The data engineering team at a company wants to analyze Amazon S3 storage access patterns to decide when to transition the right data to the right storage class. Which of the following represents a correct option regarding the capabilities of Amazon S3 Analytics storage class analysis?",
    options: [
      "Storage class analysis only provides recommendations for Standard to Glacier Deep Archive classes",
      "Storage class analysis only provides recommendations for Standard to Standard One-Zone IA classes",
      "Storage class analysis only provides recommendations for Standard to Standard IA classes",
      "Storage class analysis only provides recommendations for Standard to Glacier Flexible Retrieval classes"
    ],
    correctAnswerIndex: 2,
    explanation: "Amazon S3 Analytics evaluates storage access patterns to intelligently and exclusively provide optimization transitions from Amazon S3 Standard down to specifically Amazon S3 Standard-IA.",
    whyIncorrect: "For this practice question, detailed reasoning for incorrect options and official AWS documentation links are being added to our syllabus database and will be available shortly.",
    docLink: "https://docs.aws.amazon.com/search/doc-search.html?searchPath=documentation"
  },
  {
    id: "q50",
    domain: "Domain 3: Data Operations and Support",
    text: "A company produces a huge volume of data on a daily basis and it is stored in the form of .csv files on Amazon S3. The company also needs to run queries on historical data on a regular basis for reporting purposes. Currently, the company uses Amazon Athena to run SQL queries for analysis. Although Athena has worked well for the company, the volume of data fed into Amazon S3 has risen drastically leading to query lags as well as performance deterioration. What will you recommend to boost the query performance?",
    options: [
      "Use Athena to extract the data and store it in Apache Parquet format daily. Query the extracted data",
      "Configure a daily AWS Glue ETL job to convert the data files to Apache Parquet format and partition these converted files. Create a periodic AWS Glue crawler to automatically crawl the partitioned data on a daily basis",
      "Configure a daily AWS Glue ETL job to convert the data files to ZIP format and partition these converted files. Create a periodic AWS Glue crawler to automatically crawl the partitioned data on a daily basis",
      "When joining two tables in Athena, specify the smaller table on the left side of the join and the larger table on the right side of the join to consume less memory and run queries faster"
    ],
    correctAnswerIndex: 1,
    explanation: "Running an AWS Glue job to transform naive uncompressed flat files to columnar binary structure (Parquet) and establishing strict S3 partitions drastically reduces querying overhead and boosts Athena scale performance.",
    whyIncorrect: "For this practice question, detailed reasoning for incorrect options and official AWS documentation links are being added to our syllabus database and will be available shortly.",
    docLink: "https://docs.aws.amazon.com/search/doc-search.html?searchPath=documentation"
  }
];
