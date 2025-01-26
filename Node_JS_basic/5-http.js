const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 1245;

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  const filePath = path.join(__dirname, 'database.csv');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading the database file');
      return;
    }
    const lines = data.split('\n');
    const students = lines.slice(1).map(line => line.split(',')[0]);
    res.status(200).send(`Number of students: ${students.length}\nList of students: ${students.join(', ')}`);
  });
});

app.listen(port, () => {
  console.log(`Server is listening in port ${port}`);
});

module.exports = app;
