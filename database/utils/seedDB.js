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
		imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHunter_College&psig=AOvVaw2DCRHSRze2gkdFJPLpvVBN&ust=1684431797841000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjThsrz_P4CFQAAAAAdAAAAABAO",
	});
	// Create a new campus
	const dummy_campus2 = await Campus.create({
		name: "Queens College",
		address: "65-30 Kissena Blvd, Queens, NY 11367",
		description: "This is a school in Queens, New York.",
		imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fphotos-images%2Fnew-york-queens-college.html&psig=AOvVaw12hF3Y_bPqNXN_KISukX1o&ust=1684431838145000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNDA29zz_P4CFQAAAAAdAAAAABAE",
	});
	// Create a new campus
	const dummy_campus3 = await Campus.create({
		name: "Brooklyn College",
		address: "2900 Bedford Ave, Brooklyn, NY 11210",
		description: "This is a school in Brooklyn, New York.",
		imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.brooklyn.cuny.edu%2Fweb%2Fabout%2Fcampus%2Fzoom-backgrounds.php&psig=AOvVaw0pqltCrqg7raxYA8JD5SIu&ust=1684431859025000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMjyyebz_P4CFQAAAAAdAAAAABAJ",
	});
	
	// Create a new student for a campus
	const dummy_student = await Student.create({
		firstname: "Joe",
      	lastname: "Smith",
		email: "joesmith@gmail.com",
		imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcprstoronto.com%2F2015%2F01%2F28%2Fstudent-steering-committee-profile-matthew-palmer%2F&psig=AOvVaw1LDR4VFJq9PUP5W4t3P8Ol&ust=1684431915086000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjk_4H0_P4CFQAAAAAdAAAAABAE",
		gpa: 3.5,
	});
	// Create a new student for a campus
	const dummy_student2 = await Student.create({
		firstname: "Mary",
      	lastname: "Johnson",
		email: "maryjohnson@gmail.com",
		imageUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftucson.com%2Fnews%2Fpolice-university-of-north-carolina-student-leaders-killing-was-random%2Farticle_4b7e8eb3-4d8e-54cb-9b8b-55d0d124bfdb.html&psig=AOvVaw1zIflIhkxb8zNBVAvQ1lxm&ust=1684431934096000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOifgIv0_P4CFQAAAAAdAAAAABAE",
		gpa: 2.6,
	});

	// Add students to campuses
	await dummy_student.setCampus(dummy_campus);
	await dummy_student2.setCampus(dummy_campus2);
}

// Export the database seeding function
module.exports = seedDB;