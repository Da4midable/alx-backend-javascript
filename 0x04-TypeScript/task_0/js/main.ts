interface isPerson {
	name: String;
	age: Number;
	speak(a: string): void;
	spend(a: number): Number;

}


interface Student {
	firstName: string,
	lastName: string,
	age: number,
	location: string
}

const stud1: Student = {

	firstName: 'Saheed',
	lastName: 'Yusuf',
	age: 34,
	location: 'Ilorin'

}

const stud2: Student = {

	firstName: 'Berbatov',
	lastName: 'Dimitar',
	age: 44,
	location: 'Tottenham'

}

const table = document.createElement('table');
document.body.appendChild(table);

const headerRow = table.insertRow();
const cellOne = headerRow.insertCell();
cellOne.textContent = 'First Name';
const cellTwo = headerRow.insertCell();
cellTwo.textContent = 'Location';

const studentList: Student[] = [stud1, stud2];

studentList.forEach(student => {
	const row = table.insertRow();
	const firstCell = row.insertCell();
	firstCell.textContent = student.firstName;
	const secondCell = row.insertCell();
	secondCell.textContent = student.location;
})
