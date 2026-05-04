import fs from 'fs';
import path from 'path';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function augmentFile(filePath: string) {
  console.log(`Processing ${filePath}...`);
  const content = fs.readFileSync(filePath, 'utf-8');
  
  const prompt = `You are an AWS certification expert preparing questions for the AWS Certified Data Engineer Associate (DEA-C01) exam.
I will give you a TypeScript file containing an array of questions.

For each question, I need you to augment it with the following fields:
- whyCorrect: string (Why the correct choice is the best choice)
- whyIncorrect: string (Why the other options are incorrect)
- decisionHack: string (A quick "hack" to memorize or decide quickly on this topic)
- docLink: string (A plausible URL to the specific AWS documentation for this topic)

If the array is missing question "q36", please add a complete AWS Data Engineer Associate question for q36 (domain 2 or 3) and provide all its fields including options, correctAnswerIndex, explanation, and the 4 new fields.

Output the full valid TypeScript code for the file, matching the original format. DO NOT output Markdown fences (like \`\`\`typescript), ONLY the raw code so I can redirect it straight to a file. Keep the exports intact.
The updated file must contain all questions present in the input file plus any missing ones. Replace the original, do not truncate!

File Content:
${content}
`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-pro',
      contents: prompt,
      config: {
        temperature: 0.2,
      }
    });

    let newContent = response.text || '';
    if (newContent.startsWith('\`\`\`')) {
      newContent = newContent.replace(/^\`\`\`(typescript|ts)?/, '').replace(/\`\`\`$/, '');
    }
    
    fs.writeFileSync(filePath, newContent.trim() + '\n', 'utf-8');
    console.log(`Successfully augmented ${filePath}`);
  } catch (err) {
    console.error(`Error augmenting ${filePath}:`, err);
  }
}

async function main() {
  const files = [
    './src/data/q11-30.ts',
    './src/data/q31-50.ts',
    './src/data/q51-65.ts'
  ];
  for (const file of files) {
    await augmentFile(file);
  }
  console.log("Done augmenting data directory.");
}

main();
