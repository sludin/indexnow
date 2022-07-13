import fs from 'fs'
import { argv } from 'node:process'
import fetch from 'node-fetch'

const hostname = argv[2]
const key      = argv[3]
const urlfile  = argv[4]

if ( argv.length != 5 )
{
  console.log( 'usage: node src/index.js HOSTNAME KEY URL_FILE' )
  process.exit(1);
}

const urlList  = fs.readFileSync( urlfile )
                   .toString()
                   .split("\n")
                   .filter( s => s.startsWith('http'))

const entity = {
  host: hostname,
  key: key,
  keyLocation: `https://${hostname}/${key}.txt`,
  urlList: urlList
}

const url = 'https://www.bing.com/IndexNow'
const options = {
  method: "POST",
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  },
  body: JSON.stringify(entity)
};

const resp = await fetch( url, options );

if ( resp.status !== 200 && resp.status !== 202 )
{
  const data = await resp.text();
  console.log( data )
}
else
{
  const data = await resp.text();
  console.log( resp.status )
  console.log( data )
}




