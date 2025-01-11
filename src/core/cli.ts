import fs from 'fs';
import path from 'path';

const __dirName = process.env.INIT_CWD || '';

const configContentTs = `import { MessConfig } from "@mercury-js/mess";
const messConfig: MessConfig = {
  theme: {},
};
export default messConfig;
`;

const configContentJs = `
const messConfig = {
  theme: {},
};
export default messConfig;
`;

const isTsFile = path.resolve(__dirName, 'tsconfig.json');

let configPath: string;

if (fs.existsSync(isTsFile)) {
    configPath = path.resolve(__dirName, 'mess.config.ts');
} else {
    configPath = path.resolve(__dirName, 'mess.config.js');
}

// Check if the config file already exists
if (fs.existsSync(configPath)) {
    console.log(`${path.basename(configPath)} already exists in the root directory.`);
} else {
    if(fs.existsSync(isTsFile)){
        fs.writeFileSync(configPath, configContentTs, 'utf8');
    }
    else {
        fs.writeFileSync(configPath, configContentJs, 'utf8');
    }
    console.log(`${path.basename(configPath)} has been created successfully.`);
}