/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { build } = require('esbuild');
require('dotenv').config();
const define = {};

const envNames = [
    "ENVIRONMENT",
    //"SECRET",
    "blinkApiKey"
   
]

if(process.env.ENVIRONMENT == 'development'){
  //envNames.push('ngrokURL');
  //console.log(`Test Ngrok url is ${process.env.ngrokURL}`)
}

for (const k in process.env) {
  
  if (envNames.includes(k)){
    define[`process.env.${k}`] = JSON.stringify(process.env[k]);
  }
  
  
}
if(process.env.ENVIRONMENT == 'development')console.log(define);

let sourceMap = false;
let bundle = true;
let minify = true;
if (process.env.ENVIRONMENT == "development"){
  sourceMap = true;
  minify = false;
}

const options = {
  //stdio: 'inherit',
  entryPoints: ['./src/app.ts'],
  outfile: './dist/js/out.js',
 // plugins: [envFilePlugin],
  sourcemap:sourceMap,
  bundle: bundle,
  minify: minify,
  define,
}

build(options).catch(() => process.exit(1))