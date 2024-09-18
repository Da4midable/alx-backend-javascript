const fs = require('fs');
const csv = require('csv-parser');

function countStudents(filepath) {
  let studentCount = 0;

  const countField = {
    CS: 0,
    SWE: 0,
  };

  const nameOfCs = [];
  const nameOfSwe = [];

  if (!fs.existsSync(filepath)) {
    throw new Error('Cannot load the database');
  }

  fs.createReadStream(filepath)
    .pipe(csv())
    .on('data', (row) => {
      const field = row.field ? row.field.toUpperCase() : '';
      const firstName = row.firstname;

      if (field === 'CS') {
        countField.CS += 1;
        nameOfCs.push(firstName);
      }

      if (field === 'SWE') {
        countField.SWE += 1;
        nameOfSwe.push(firstName);
      }

      studentCount += 1;
    })
    .on('end', () => {
      console.log(`Number of students: ${studentCount}`);
      console.log(`Number of students in CS: ${countField.CS}. List: ${nameOfCs.join(', ')}`);
      console.log(`Number of students in SWE: ${countField.SWE}. List: ${nameOfSwe.join(', ')}`);
    })
    .on('error', (err) => {
      throw new Error(`Error reading the file: ${err.message}`);
    });
}

module.exports = countStudents;
