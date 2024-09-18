// 7-http_express.js

const express = require('express');
const fs = require('fs');
const app = express();
const port = 1245;


function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const fields = {};
      let count = 0;

      lines.slice(1).forEach((line) => {
        if (line) {
          count++;
          const student = line.split(',');
          const field = student[3];
          if (fields[field]) {
            fields[field].push(student[0]);
          } else {
            fields[field] = [student[0]];
          }
        }
      });

      let output = `Number of students: ${count}\n`;
      for (const [field, students] of Object.entries(fields)) {
        output += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      }

      resolve(output.trim());
    });
  });
}


app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});


app.get('/students', async (req, res) => {
  const dbPath = process.argv[2];
  res.write('This is the list of our students\n');

  try {
    const studentInfo = await countStudents(dbPath);
    res.end(studentInfo);
  } catch (err) {
    res.end(err.message);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;
