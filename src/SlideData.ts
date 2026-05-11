import { Database, Network, Brain, Wrench, Package, BarChart, Layers, Shield, MonitorPlay, Infinity, HardDrive, Cpu, CloudRain, BookOpen } from 'lucide-react';

export const slideDecks = [
  { id: 'fundamentals', title: 'Data Engineering Fundamentals', file: '01-Data_Engineering_Fundamentals.pdf', icon: Layers },
  { id: 'storage', title: 'Storage Section', file: 'storage.pdf', icon: HardDrive },
  { id: 'database', title: 'Database', file: '03-Database.pdf', icon: Database },
  { id: 'migration', title: 'Migration and Transfer', file: '04-Migration_and_Transfer.pdf', icon: CloudRain },
  { id: 'analytics', title: 'Analytics', file: 'Analytics.pdf', icon: BarChart },
  { id: 'networking', title: 'Networking & Content Delivery', file: 'Networking_and_Content_Delivery.pdf', icon: Network },
  { id: 'compute', title: 'Compute', file: 'Compute.pdf', icon: Cpu },
  { id: 'containers', title: 'Containers', file: 'Containers.pdf', icon: Package },
  { id: 'developer-tools', title: 'Developer Tools', file: 'Developer_Tools.pdf', icon: Wrench },
  { id: 'application-integration', title: 'Application Integration', file: 'Application_Integration.pdf', icon: Package },
  { id: 'machine-learning', title: 'Machine Learning', file: 'Machine_Learning.pdf', icon: Brain },
  { id: 'management', title: 'Management & Governance', file: 'Management_and_Governance.pdf', icon: Shield },
  { id: 'security', title: 'Security, Identity, & Compliance', file: 'Security,_Identity,_and_Compliance.pdf', icon: Shield },
  { id: 'everything-else', title: 'Everything Else', file: 'Everything_Else.pdf', icon: Infinity },
  { id: 'exam-tips', title: 'Exam Tips', file: 'Exam_Tips.pdf', icon: BookOpen },
];
