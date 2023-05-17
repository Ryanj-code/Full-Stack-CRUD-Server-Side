/*==================================================
/database/utils/seedDB.js

It seeds the database with several initial students and campuses.
==================================================*/
const { Campus, Student } = require('../models');  // Import database models

// Seed database
const seedDB = async () => {
	// Create a new campus
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		address: "695 Park Ave, New York, NY 10065",
		description: "This is a school in New York, New York.",
		imageUrl: "https://s29068.pcdn.co/wp-content/uploads/hunter-new-york-city-street-view.jpg",
	});
	// Create a new campus
	const dummy_campus2 = await Campus.create({
		name: "Queens College",
		address: "65-30 Kissena Blvd, Queens, NY 11367",
		description: "This is a school in Queens, New York.",
		imageUrl: "https://nypost.com/wp-content/uploads/sites/2/2020/03/shutterstock_210220948.jpg?quality=75&strip=all",
	});
	// Create a new campus
	const dummy_campus3 = await Campus.create({
		name: "Brooklyn College",
		address: "2900 Bedford Ave, Brooklyn, NY 11210",
		description: "This is a school in Brooklyn, New York.",
		imageUrl: "https://www.brooklyn.cuny.edu/web/new_2019news/190813_campusshot_960x640.jpg",
	});
	
	// Create a new student for a campus
	const dummy_student = await Student.create({
		firstname: "Joe",
      	lastname: "Smith",
		email: "joesmith@gmail.com",
		imageUrl: "https://t4.ftcdn.net/jpg/00/68/92/17/360_F_68921781_CNvWxI6HCmYKs6DxmKv0KC2jnaI5ll4o.jpg",
		gpa: 3.5,
	});
	// Create a new student for a campus
	const dummy_student2 = await Student.create({
		firstname: "Mary",
      	lastname: "Johnson",
		email: "maryjohnson@gmail.com",
		imageUrl: "https://www.postgrad.com/filer/canonical/1568839692/6810/",
		gpa: 2.3,
	});

	// Add students to campuses
	await dummy_student.setCampus(dummy_campus);
	await dummy_student2.setCampus(dummy_campus2);
}

// Export the database seeding function
module.exports = seedDB;