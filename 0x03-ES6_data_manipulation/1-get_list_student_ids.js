import getListStudents from './0-get_list_students';

/*const arr = getListStudents();
 const arr = [
{
id: 1,
firstName: 'Guillaume',
location: 'San Francisco',
},
{
id: 2,
firstName: 'James',
location: 'Columbia',
},
{
id: 5,
firstName: 'Serena',
location: 'San Francisco',
},
]; */

export default function getListStudentIds(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  return arr.map((item) => item.id);
}
