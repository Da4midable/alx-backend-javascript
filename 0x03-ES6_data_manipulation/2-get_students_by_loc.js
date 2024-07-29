export default function getStudentsByLocation(students, city) {
  const locOfStud = students.filter((student) => student.location === city);
  return locOfStud;
}
