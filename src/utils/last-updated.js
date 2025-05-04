const { execSync } = require('child_process');
const lastUpdated = execSync('git log -1 --format=%cd --date=format:"%B %d, %Y"')
  .toString()
  .trim();
console.log(`export const LAST_UPDATED = '${lastUpdated}';`);