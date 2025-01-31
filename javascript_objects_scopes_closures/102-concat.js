#!/usr/bin/node

const fs = require('fs').promises;
const { argv } = require('process');

async function concatFiles () {
  try {
    const data1 = await fs.readFile(argv[2], 'utf8');
    const data2 = await fs.readFile(argv[3], 'utf8');

    await fs.writeFile(argv[4], data1 + data2, 'utf8'); // Concatenate and write in one step
  } catch (err) {
    console.error(err);
  }
}

concatFiles();
