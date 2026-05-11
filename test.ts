import * as fs from 'fs';
const files = [
  '03-Database.pdf',
  '04-Migration_and_Transfer.pdf',
  'Analytics.pdf',
  'Networking_and_Content_Delivery.pdf',
  'Compute.pdf',
  'Containers.pdf',
  'Developer_Tools.pdf',
  'Application_Integration.pdf',
  'Machine_Learning.pdf',
  'Management_and_Governance.pdf',
  'Security,_Identity,_and_Compliance.pdf',
  'Everything_Else.pdf',
  'Exam_Tips.pdf'
];

for (const file of files) {
  try {
    fs.copyFileSync('./public/01-Data_Engineering_Fundamentals.pdf', './public/' + file);
    console.log('Copied to ' + file);
  } catch (e) {
    console.error('Failed to copy to ' + file, e);
  }
}
