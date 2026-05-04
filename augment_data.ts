import fs from 'fs';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function augmentDataTs() {
  const filePath = './src/data.ts';
  console.log(`Processing ${filePath}...`);
  const content = fs.readFileSync(filePath, 'utf-8');
  
  const prompt = `You are an AWS certification expert preparing questions for the AWS Certified Data Engineer Associate (DEA-C01) exam.
I will give you a TypeScript file containing an array of questions, as well as some other definitions.

First, update the Question interface to add these optional fields:
  whyCorrect?: string;
  whyIncorrect?: string;
  decisionHack?: string;
  docLink?: string;

Then, for each question inside the 'questions' array (q1 to q10), augment it with the following fields:
- whyCorrect: string
- whyIncorrect: string
- decisionHack: string
- docLink: string (AWS documentation URL)

Do not modify the questions11to30, questions31to50, and questions51to65 imports or spreads at the end. Keep the rest of the file intact.
Output the full valid TypeScript code for the file. DO NOT output Markdown fences (like \`\`\`typescript), ONLY the raw code so I can save it. Replace the original, do not truncate!

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

augmentDataTs();
