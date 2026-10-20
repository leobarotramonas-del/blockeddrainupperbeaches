import { spawnSync } from 'node:child_process';
if (!process.env.npm_execpath) throw new Error('Run with npm run build:production');
const result=spawnSync(process.execPath,[process.env.npm_execpath,'run','build'],{stdio:'inherit',env:{...process.env,PUBLIC_ALLOW_INDEXING:'true'}});
if(result.error)throw result.error;process.exit(result.status??1);
