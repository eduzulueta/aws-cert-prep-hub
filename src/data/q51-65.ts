export const questions51to65 = [
  {
    id: "q51",
    domain: "Domain 3: Data Operations and Support",
    text: "A data engineer has been tasked to optimize Amazon Athena queries that are underperforming. Upon analysis, the data engineer realized that the files queried by Athena were not compressed and just stored as .csv files. The data engineer also noticed that users perform most queries by selecting a specific column. What do you recommend to improve the query performance?",
    options: [
      "Change the data format from comma-separated text files to Apache Parquet. Compress the files using Snappy compression",
      "Change the data format from comma-separated text files to JSON format. Apply Snappy compression",
      "Change the data format from comma-separated text files to ZIP format",
      "Change the data format from comma-separated text files to Apache ORC"
    ],
    correctAnswerIndex: 0,
    explanation: "Apache Parquet naturally partitions data column-wise, drastically reducing execution time when querying specifically focused individual columns. Combining this format with optimal block-based compression algorithms like Snappy maximizes optimization."
  },
  {
    id: "q52",
    domain: "Domain 1: Data Ingestion and Transformation",
    text: "A company stores its data in Amazon DynamoDB. The company needs to access this data in Amazon DynamoDB from an Amazon Sagemaker notebook for running machine learning models. Which of the following represents a solution to address this requirement with the LEAST operational effort?",
    options: [
      "Directly export your DynamoDB table into a .csv file and upload this file to Amazon S3. Access the S3 data from Sagemaker",
      "Use AWS Data Pipeline console to export the DynamoDB table to Amazon S3. Exported JSON files are converted to comma-separated value (CSV) format to use as a data source for Amazon SageMaker",
      "Access the data from SageMaker Notebook by reading it using the boto3 client. Initialize a DynamoDB Client and do a Scan which will return all the data you need",
      "Use AWS Glue to transfer your table from DynamoDB to Amazon S3. Access the S3 data from Sagemaker"
    ],
    correctAnswerIndex: 2,
    explanation: "SageMaker notebooks allow direct code execution leveraging standard Python libraries directly. Passing IAM credentials natively to retrieve data directly from DynamoDB handles simple extraction natively and effortlessly without pipeline dependencies."
  },
  {
    id: "q53",
    domain: "Domain 2: Data Store Management",
    text: "A gaming company is developing a mobile game that streams score updates to a backend processor and then publishes results on a leaderboard. The company has hired you as an AWS Certified Data Engineer Associate to design a solution that can handle major traffic spikes, process the mobile game updates in the order of receipt, and store the processed updates in a highly available database. The company wants to minimize the management overhead required to maintain the solution. Which of the following solutions will you suggest to address these requirements?",
    options: [
      "Push score updates to an SQS queue which uses a fleet of EC2 instances (with Auto Scaling) to process these updates in the SQS queue and then store these processed updates in an RDS MySQL database",
      "Push score updates to Kinesis Data Streams which uses a Lambda function to process these updates and then store these processed updates in DynamoDB",
      "Push score updates to Kinesis Data Streams which uses a fleet of EC2 instances (with Auto Scaling) to process the updates in Kinesis Data Streams and then store these processed updates in DynamoDB",
      "Push score updates to an SNS topic, subscribe a Lambda function to this SNS topic to process the updates, and then store these processed updates in a SQL database running on Amazon EC2"
    ],
    correctAnswerIndex: 1,
    explanation: "Kinesis Data Streams effectively manages massive traffic spikes while guaranteeing shard ordering. Linking execution serverlessly behind AWS Lambda into the scale constraints of DynamoDB maintains low administrative overheads natively."
  },
  {
    id: "q54",
    domain: "Domain 3: Data Operations and Support",
    text: "A streaming service company uses AWS Cloud for analytics, recommendation engines, and video transcoding. To monitor and optimize this network, the data engineering team at the company has developed a solution for ingesting, augmenting, and analyzing the multiple terabytes of data its network generates daily in the form of virtual private cloud (VPC) flow logs. This would enable the company to identify performance-improvement opportunities such as identifying apps that are communicating across regions and collocating them. The VPC flow logs data is funneled into Kinesis Data Streams which further acts as the source of a delivery stream for Kinesis Firehose. The data engineering team has now configured a Kinesis Agent to send the VPC flow logs data from another set of network devices to the same Firehose delivery stream. They noticed that this log data is not reaching Firehose. Which of the following options would you identify as the MOST plausible root cause behind this issue?",
    options: [
      "Kinesis Firehose delivery stream has reached its limit and needs to be scaled manually",
      "Kinesis Agent cannot write to a Kinesis Firehose for which the delivery stream source is already set as Kinesis Data Streams",
      "Kinesis Agent can only write to Kinesis Data Streams, not to Kinesis Firehose",
      "The data sent by Kinesis Agent is lost because of a configuration error"
    ],
    correctAnswerIndex: 1,
    explanation: "If you configure an Amazon Kinesis Data Stream as the explicit data source pointing INTO a Firehose stream, Firehose will implicitly disable the ability to natively accept any arbitrary external Direct PUT instructions (including agents)."
  },
  {
    id: "q55",
    domain: "Domain 4: Data Security and Governance",
    text: "While consolidating logs for the weekly reporting, a development team at an e-commerce company noticed that an unusually large number of illegal AWS application programming interface (API) queries were made sometime during the week. Due to the off-season, there was no visible impact on the systems. However, this event led the management team to seek an automated solution that can trigger near-real-time warnings in case such an event recurs. Which of the following represents the best solution for the given scenario?",
    options: [
      "Create an Amazon CloudWatch metric filter that processes AWS CloudTrail logs having API call details and looks at any errors by factoring in all the error codes that need to be tracked. Create an alarm based on this metric's rate to send an Amazon SNS notification to the required team",
      "Run Amazon Athena SQL queries against AWS CloudTrail log files stored in Amazon S3 buckets. Use Amazon QuickSight to generate reports for managerial dashboards",
      "AWS Trusted Advisor publishes metrics about check results to Amazon CloudWatch. Create an alarm to track status changes for checks in the Service Limits category for the APIs. The alarm will then notify when the service quota is reached or exceeded",
      "Configure AWS CloudTrail to stream event data to Amazon Kinesis. Use Amazon Kinesis stream-level metrics in the Amazon CloudWatch to trigger an AWS Lambda function that will trigger an error workflow"
    ],
    correctAnswerIndex: 0,
    explanation: "Parsing CloudTrail logs explicitly through native CloudWatch Metric Filters allows highly efficient, immediate anomaly metric calculations which tie perfectly back to direct real-time SNS notifications."
  },
  {
    id: "q56",
    domain: "Domain 2: Data Store Management",
    text: "A company has an S3 bucket that contains files in two different folders - s3://my-bucket/images and s3://my-bucket/thumbnails. When an image is first uploaded and new, it is viewed several times. Post a detailed analysis, the data analytics team has noticed that after 45 days those image files are rarely requested, but the thumbnails still are. After 180 days, the company would like to archive the image files and the thumbnails. Overall, the company would like the solution to remain highly available to prevent disasters from happening against the entire AZ. Which of the following represents the best-fit solutions for an efficient cost strategy for the given S3 bucket? (Select two)",
    options: [
      "Create a Lifecycle Policy to transition objects to S3 One Zone IA using a prefix after 45 days",
      "Create a Lifecycle Policy to transition objects to Glacier Deep Archive using a prefix after 180 days",
      "Create a Lifecycle Policy to transition objects to S3 Standard IA using a prefix after 45 days",
      "Create a Lifecycle Policy to transition all objects to S3 Standard IA after 45 days",
      "Create a Lifecycle Policy to transition all objects to Glacier Deep Archive after 180 days"
    ],
    correctAnswerIndex: -1,
    correctAnswerIndices: [2, 4],
    explanation: "You must prefix filter just the `/images` folder to transition to Standard IA after 45 days (protecting against AZ failure, avoiding One Zone IA). Then eventually dropping the full bucket contents exclusively to Glacier Deep Archive manages ultimate archival."
  },
  {
    id: "q57",
    domain: "Domain 1: Data Ingestion and Transformation",
    text: "A nightly cron job generates a customer data file of 1 GB size in .xls format and stores it in an Amazon S3 bucket. A data engineer is tasked with concatenating the column in the file that contains customer first names with the column that contains customer last names and then calculating the number of distinct customers in the file. Which of the following will you suggest to address this requirement with the least operational overhead?",
    options: [
      "Leverage AWS Glue DataBrew to create a recipe that uses the COUNT_DISTINCT aggregate function to determine the number of distinct customers",
      "Develop an Apache Spark job in an AWS Glue notebook to read the file in Amazon S3 and determine the number of distinct customers",
      "Leverage AWS Glue DataBrew to create a recipe that uses the FLAG_DUPLICATE_ROWS function to determine the number of distinct customers",
      "Query the customer data file in .xls format stored in Amazon S3 using SQL commands via Amazon Athena"
    ],
    correctAnswerIndex: 0,
    explanation: "AWS Glue DataBrew provides native zero-code aggregations seamlessly handling un-optimized proprietary flat file formats like complex Microsoft `.xls` spreadsheets effortlessly."
  },
  {
    id: "q58",
    domain: "Domain 2: Data Store Management",
    text: "A data engineer is working on modeling data for a DynamoDB production database. To address certain access patterns for the application, the data engineer is in the process of creating secondary indexes. Which of the following options should the data engineer consider for these requirements? (Select three)",
    options: [
      "A Local Secondary Index maintains an alternate primary key for a given partition key value",
      "A Global Secondary Index contains a selection of attributes from the base table which are organized by a primary key that is different from that of the table",
      "If the writes are throttled on the Global Secondary Indexes, then the main table will be throttled, even though the Write Capacity Units on the main tables are fine",
      "For greater query or scan flexibility, you can create up to twenty Local Secondary Indexes per table",
      "Applications that need to perform many kinds of queries, using a variety of different attributes for their query criteria should use Global Secondary Indexes"
    ],
    correctAnswerIndex: -1,
    correctAnswerIndices: [1, 2, 4],
    explanation: "GSIs manage massive read flexibility but link physically separated provisioning limits; overloading index writes blocks primary table modifications explicitly natively. Five LSIs are the maximum limit (not twenty)."
  },
  {
    id: "q59",
    domain: "Domain 4: Data Security and Governance",
    text: "A data engineer has configured inbound traffic for the relevant ports in both the Security Group of the Amazon EC2 instance as well as the network access control list (network ACL) of the subnet for the Amazon EC2 instance. However, the data engineer is unable to connect to the service running on the Amazon EC2 instance. How will you fix this issue?",
    options: [
      "IAM Role defined in the Security Group is different from the IAM Role that is given access in the network access control list (network ACL)",
      "Network access control list (network ACL) is stateful, so allowing inbound traffic to the necessary ports enables the connection. Security Groups are stateless, so you must allow both inbound and outbound traffic",
      "Rules associated with network access control list (network ACL) should never be modified from the command line. An attempt to modify rules from the command line blocks the rule and results in an erratic behavior",
      "Security Groups are stateful, so allowing inbound traffic to the necessary ports enables the connection. Network access control list (network ACL) is stateless, so you must allow both inbound and outbound traffic"
    ],
    correctAnswerIndex: 3,
    explanation: "Because Network ACLs evaluate both directions as stateless architectures you explicit require paired reciprocal egress return firewall assignments to cleanly establish standard HTTP/TCP handshakes."
  },
  {
    id: "q60",
    domain: "Domain 3: Data Operations and Support",
    text: "A company wants to publish an event into an Amazon Simple Queue Service (Amazon SQS) queue whenever a new object is uploaded on Amazon S3. Which of the following statements are true regarding this functionality?",
    options: [
      "Both Standard Amazon SQS queue and FIFO SQS queue are allowed as an Amazon S3 event notification destination",
      "Neither Standard Amazon SQS queue nor FIFO SQS queue is allowed as an Amazon S3 event notification destination",
      "Only Standard Amazon SQS queue is allowed as an Amazon S3 event notification destination, whereas FIFO SQS queue is not allowed",
      "Only FIFO Amazon SQS queue is allowed as an Amazon S3 event notification destination, whereas Standard SQS queue is not allowed"
    ],
    correctAnswerIndex: 2,
    explanation: "Amazon S3 does not natively support strict delivery to SQS FIFO target integrations. Standard loosely coupled default Standard SQS queues act as the dedicated supported connection layer target."
  },
  {
    id: "q61",
    domain: "Domain 2: Data Store Management",
    text: "A gaming company maintains a staging environment for its flagship application which uses a DynamoDB table to keep track of the gaming history of the players. This data needs to be kept for only a week and then it can be deleted. The IT manager has noticed that the table has several months of data in the table. The company wants to implement a cost-effective solution to keep only the latest week's data in the table. Which of the following solutions requires the MINIMUM development effort and ongoing maintenance?",
    options: [
      "Add a created_at attribute in the table and then use a cron job on EC2 instance to invoke a Python script daily. The script deletes items older than a week on the basis of this attribute",
      "Add a new attribute in the table to track the expiration time and enable time to live (TTL) on the table",
      "Add a new attribute in the table to track the expiration time and set up a Glue job to delete items that are more than a week old",
      "Add a created_at attribute in the table and then use a CloudWatch Events rule to invoke a Lambda function daily. The Lambda function deletes items older than a week on the basis of this attribute"
    ],
    correctAnswerIndex: 1,
    explanation: "DynamoDB natively embeds zero-administration Time to Live (TTL) record expiration tracking eliminating custom job maintenance and drastically capping table capacity storage costs effortlessly automatically."
  },
  {
    id: "q62",
    domain: "Domain 1: Data Ingestion and Transformation",
    text: "Consider the following scenario on Amazon S3: A folder INPUT-FOLDER1 has 10 files, 8 files with schema SCH_A and 2 files with schema SCH_B, and another folder INPUT-FOLDER2 has 10 files, 7 files with schema SCH_B and 3 files with schema SCH_A. The schemas are defined as follows: SCH_A: `{\"id\": 1, \"first_name\": \"John\", \"last_name\": \"Doe\"}`, SCH_B: `{\"city\":\"Dublin\", \"country\":\"Ireland\"}`. What is the outcome, when the crawler crawls the Amazon Simple Storage Service (Amazon S3) path separately?",
    options: [
      "For the S3 path s3://INPUT-FOLDER1, the crawler creates one table with columns of both the schemas. For the S3 path s3://INPUT-FOLDER2, the crawler creates two tables, each table having columns of one schema respectively",
      "For both the S3 paths s3://INPUT-FOLDER1 and s3://INPUT-FOLDER2, the crawler creates one table with columns of both the schemas",
      "For both the S3 paths s3://INPUT-FOLDER1 and s3://INPUT-FOLDER2, the crawler creates two tables each, each table having columns of one schema respectively",
      "For both the S3 paths s3://INPUT-FOLDER1 and s3://INPUT-FOLDER2, the crawler creates one table with columns of both the schemas"
    ],
    correctAnswerIndex: 0,
    explanation: "When file formats exceed approximately an 80% similarity heuristic baseline AWS Glue unifies them. The 8/10 files merge while 7/3 split into multiple tables mapping schema relationships accordingly."
  },
  {
    id: "q63",
    domain: "Domain 3: Data Operations and Support",
    text: "You are a data engineer at an IT company. The company has multiple enterprise customers that manage their own mobile applications that capture and send data to Amazon Kinesis Data Streams. They have been getting a `ProvisionedThroughputExceededException` exception. Upon analysis, you notice that messages are being sent one by one at a high rate. Which of the following options will help with the exception while keeping costs at a minimum?",
    options: [
      "Decrease the Stream retention duration",
      "Use batch messages",
      "Increase the number of shards",
      "Use Exponential Backoff"
    ],
    correctAnswerIndex: 1,
    explanation: "Aggregating simple payloads logically consolidates operations decreasing physical Kinesis direct Put request calls drastically. This bypasses hard throughput caps cleanly saving money over raw auto scaling solutions."
  },
  {
    id: "q64",
    domain: "Domain 3: Data Operations and Support",
    text: "A data engineer has configured an AWS Glue job to read data from an Amazon S3 bucket by setting up the AWS Glue connection details and the associated IAM role. However, when the AWS Glue job is run, it fails with an error pointing to the Amazon S3 VPC gateway endpoint that has been configured for accessing the data in Amazon S3. How should the data engineer troubleshoot this issue?",
    options: [
      "Attach a bucket policy to the S3 bucket that will explicitly grant access permissions to the IAM role associated with the AWS Glue job",
      "Configure private DNS options for the VPC gateway endpoint",
      "Verify that the route table of the VPC has inbound and outbound routes for the Amazon S3 VPC gateway endpoint",
      "Configure an Internet Gateway in the VPC for the AWS Glue job to access the Amazon S3 bucket via the public endpoint"
    ],
    correctAnswerIndex: 2,
    explanation: "VPC Gateway Endpoints function by establishing private subnet physical IP routing assignments; ensuring standard subnets reflect those endpoint boundaries specifically validates target traffic delivery routes natively."
  },
  {
    id: "q65",
    domain: "Domain 3: Data Operations and Support",
    text: "A company uses Amazon Redshift as its data warehouse solution. The company runs certain complex queries repeatedly over a large amount of data and hence uses Amazon Redshift materialized views. The company wants these materialized views to refresh automatically per a defined schedule. Which of the following represents an optimal solution that can automate the process with the LEAST effort?",
    options: [
      "You can set auto-refresh for materialized views using CREATE MATERIALIZED VIEW",
      "Materialized views cannot be refreshed automatically and need a manual refresh",
      "Create a schedule to refresh the materialized views with Amazon Redshift query editor v2",
      "Configure an Amazon EventBridge to trigger an AWS Lambda function based on the defined schedule. The Lambda function will call the Amazon Redshift Data API to refresh the materialized views"
    ],
    correctAnswerIndex: 2,
    explanation: "Amazon Redshift Query Editor V2 supports native in-built scheduling functions allowing scheduled SQL execution (like explicit materialized view refreshes) without configuring complicated secondary Lambda triggering logic."
  }
];
