import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
const read = p => fs.readFileSync(p, 'utf8');
const manifest = JSON.parse(read('.cursor-plugin/plugin.json'));
assert.equal(manifest.name, 'adspirer-social-ads');
assert.equal(manifest.category, 'data-analytics');
assert.match(manifest.version, /^\d+\.\d+\.\d+$/);
assert.equal(manifest.repository, 'https://github.com/Adspirer/adspirer-social-ads-cursor-plugin');
assert.deepEqual(JSON.parse(read('mcp.json')), {mcpServers:{'adspirer-social-ads':{type:'http',url:'https://mcp.adspirer.com/social-ads'}}});
for(const p of [manifest.logo,'README.md','LICENSE','SECURITY.md','REVIEW.md','SKILL-MAPPING.md',manifest.skills,manifest.agents,manifest.rules]) assert.ok(fs.existsSync(p),p);
const skills=fs.readdirSync('skills').filter(n=>fs.statSync(path.join('skills',n)).isDirectory());
assert.equal(skills.length,12);
for(const name of skills){
  const content=read(path.join('skills',name,'SKILL.md'));
  assert.ok(content.startsWith('---\n'));
  assert.ok(content.includes('name: '+name+'\n'));
  assert.match(content,/\ndescription: .+/);
  assert.ok(!content.includes('https://mcp.adspirer.com/mcp'));
  for(const match of content.matchAll(/references\/[a-z0-9-]+\.md/g)){
    assert.ok(fs.existsSync(path.join('skills',name,match[0])), name+': '+match[0]);
  }
  for(const match of content.matchAll(/\badspirer-social-[a-z0-9-]+\b/g)){
    if(match[0]==='adspirer-social-ads') continue;
    assert.ok(skills.includes(match[0]), 'Missing referenced skill '+match[0]);
  }
}
assert.match(read('rules/use-adspirer-social-ads.mdc'),/alwaysApply: false/);
assert.match(read('agents/social-advertising-agent.md'),/\nname: /);
assert.ok(!fs.existsSync('.github/workflows/sync-from-ads-mcp.yml'));
console.log('PASS: identity, endpoint, 12 skills, references, scoped names, assets and isolation');
