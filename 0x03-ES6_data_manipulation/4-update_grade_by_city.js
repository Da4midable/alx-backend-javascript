export default function updateStudentGradeByCity(studentsList, city, grades) {
  return studentsList
    .filter((student) => student.location === city)
    .map((student) => {
      const studentGrade = grades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: studentGrade ? studentGrade.grade : 'N/A',
      };
    });
}
