export interface Slide {
  id: number;
  title: string;
  content: string[];
}

export const courseSlides: Slide[] = [
  {
    id: 1,
    title: "AWS Certified Data Engineer Associate Course (DEA-C01)",
    content: [
      "Welcome! We're going to prepare for the AWS Certified Data Engineer - Associate exam.",
      "It's a challenging certification.",
      "Recommended to have previous AWS knowledge (EC2, networking...).",
      "Preferred to have some data engineering background."
    ]
  },
  {
    id: 2,
    title: "Table of Contents",
    content: [
      "Data Engineering Fundamentals",
      "Storage",
      "Database",
      "Migration and Transfer",
      "Compute",
      "Containers",
      "Analytics",
      "Application Integration",
      "Security, Identity, and Compliance",
      "Networking and Content Delivery",
      "Management and Governance",
      "Machine Learning",
      "Developer Tools"
    ]
  },
  {
    id: 12,
    title: "Data Engineering Fundamentals",
    content: [
      "Beyond AWS - a review"
    ]
  },
  {
    id: 13,
    title: "Types of Data",
    content: [
      "Structured",
      "Unstructured",
      "Semi-Structured"
    ]
  },
  {
    id: 14,
    title: "Structured Data",
    content: [
      "Definition: Data that is organized in a defined manner or schema, typically found in relational databases.",
      "Characteristics: Easily queryable, organized in rows and columns, has a consistent structure.",
      "Examples: Database tables, CSV files with consistent columns, Excel spreadsheets."
    ]
  },
  {
    id: 15,
    title: "Unstructured Data",
    content: [
      "Definition: Data that doesn't have a predefined structure or schema.",
      "Characteristics: Not easily queryable without preprocessing. May come in various formats.",
      "Examples: Text files without a fixed format, videos and audio files, images, emails."
    ]
  },
  {
    id: 16,
    title: "Semi-Structured Data",
    content: [
      "Definition: Data that is not as organized as structured data but has some level of structure in the form of tags, hierarchies, or other patterns.",
      "Characteristics: Elements might be tagged or categorized. More flexible than structured data.",
      "Examples: XML and JSON files, log files with varied formats."
    ]
  },
  {
    id: 17,
    title: "Properties of Data",
    content: [
      "Volume: Refers to the amount or size of data.",
      "Velocity: Refers to the speed at which new data is generated, collected, and processed.",
      "Variety: Refers to the different types, structures, and sources of data."
    ]
  },
  {
    id: 21,
    title: "Data Warehouses vs. Data Lakes",
    content: [
      "Data Warehouse: A centralized repository optimized for analysis where data from different sources is stored in a structured format. Examples: Amazon Redshift.",
      "Data Lake: A storage repository that holds vast amounts of raw data in its native format. Examples: Amazon S3, AWS Glue, Athena."
    ]
  },
  {
    id: 25,
    title: "Comparing Data Warehouses and Data Lakes",
    content: [
      "Schema: Warehouse uses Schema-on-write (ETL). Lake uses Schema-on-read (ELT).",
      "Data Types: Warehouse is primarily structured. Lake is both structured and unstructured.",
      "Agility: Lake is more agile as it accepts raw data.",
      "Cost: Warehouse is typically more expensive due to optimizations."
    ]
  },
  {
    id: 27,
    title: "Data Lakehouse",
    content: [
      "Definition: A hybrid data architecture that combines the best features of data lakes and data warehouses.",
      "Examples: AWS Lake Formation (with S3 and Redshift Spectrum), Delta Lake, Databricks Lakehouse Platform."
    ]
  },
  {
    id: 29,
    title: "ETL Pipelines",
    content: [
      "Extract, Transform, Load.",
      "A process used to move data from source systems into a data warehouse.",
      "Extract: Retrieve raw data from source systems (databases, APIs).",
      "Transform: Convert, cleanse, enrich, aggregate data.",
      "Load: Move transformed data into the target data repository."
    ]
  }
];
