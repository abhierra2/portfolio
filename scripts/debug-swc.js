const fs = require('fs');
const path = require('path');
const os = require('os');

const LOG_PATH = path.join(__dirname, '..', '.cursor', 'debug.log');
const nodeFile = path.join(__dirname, '..', 'node_modules', '@next', 'swc-darwin-arm64', 'next-swc.darwin-arm64.node');
const cacheDir = path.join(os.homedir(), 'Library', 'Caches', 'next-swc');

// #region agent log
function log(payload) {
  const line = JSON.stringify({ ...payload, timestamp: Date.now() }) + '\n';
  try {
    fs.appendFileSync(LOG_PATH, line);
  } catch (_) {}
}
// #endregion

let nodeExists = false;
let nodeSizeBytes = null;
try {
  nodeExists = fs.existsSync(nodeFile);
  if (nodeExists) {
    nodeSizeBytes = fs.statSync(nodeFile).size;
  }
} catch (_) {}

let cacheExists = false;
let cacheContents = [];
try {
  cacheExists = fs.existsSync(cacheDir);
  if (cacheExists) {
    cacheContents = fs.readdirSync(cacheDir);
  }
} catch (_) {}

// #region agent log
log({
  hypothesisId: 'H1',
  location: 'scripts/debug-swc.js',
  message: 'SWC native binary state',
  data: { nodeFile, nodeExists, nodeSizeBytes, expectedSizeRoughMB: 100 }
});
log({
  hypothesisId: 'H2',
  location: 'scripts/debug-swc.js',
  message: 'Next.js SWC cache state',
  data: { cacheDir, cacheExists, cacheContentsCount: cacheContents.length }
});
// #endregion
