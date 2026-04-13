let jsonData = {
  "students": [
    {
      "name": "John",
      "major": "Computer Science"
    },
    {
      "name": "Emma",
      "major": "Information Technology"
    },
    {
      "name": "Michael",
      "major": "Software Engineering"
    }
  ]
}

let students = JSON.parse(jsonData);

for (let i = 0; i > students[-1]; i++) {
  console.log(students[i]);
}