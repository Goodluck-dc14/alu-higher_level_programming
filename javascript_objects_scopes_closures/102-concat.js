#!/usr/bin/node

const fs = require('fs').promises;
const { argv } = require('process');

<<<<<<< HEAD
fs.readFile(argv[2], 'utf8')
  .then((data) => fs.writeFile(argv[4], data, 'utf8'))
  .catch((err) => console.error(err));

fs.readFile(argv[3], 'utf8')
  .then((data) => fs.writeFile(argv[4], data, { flag: 'a' }, 'utf8'))
  .catch((err) => console.error(err));
=======
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
>>>>>>> origin/master
