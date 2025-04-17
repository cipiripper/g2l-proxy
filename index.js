import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

const TARGET = process.env.TARGET;
const LOCAL_PORT = process.env.LOCAL_PORT || 9000;
const LOCAL_URL = `http://localhost:${LOCAL_PORT}`;

function printHelp() {
  console.log('Usage:');
  console.log('\tTARGET=https://example.com npm start');
  console.log('\tTARGET=https://example.com LOCAL_PORT=8080 npm start');
  console.log('\nEnvironment Variables:');
  console.log('\tTARGET: The target URL to proxy to.');
  console.log('\tLOCAL_PORT: The local port to run the proxy on. Default is 9000.');
}

if (!TARGET) {
  printHelp();
  process.exit(1);
}

console.log(`Starting global to local proxy: ${TARGET} ==> ${LOCAL_URL}`);

app.use('/', createProxyMiddleware({
  target: TARGET,
  changeOrigin: true,
  secure: false,
  pathRewrite: { '^/': '/' },
}));

app.listen(LOCAL_PORT, (error) => {
  if(error) {
    console.error('Error starting the proxy:', error);
    process.exit(1);
  }

  console.log(`Local proxy started on: ${LOCAL_URL}`);
  console.log();
  console.log('Hit Ctrl+C to stop the proxy.');
});