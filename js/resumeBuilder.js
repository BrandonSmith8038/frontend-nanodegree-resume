var bio = {
	"name": "Brandon Smith",
	"role": "Front End Developer",
	"welcomeMessage": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, sit.",
	"biopic": "images/profilePicture.jpg",
	"contacts": {
		"mobile": "(602)-694-0239",
		"email": "brandon@reddirtwebdesign.com",
		"github": "https://github.com/BrandonSmith8038",
		"location": "Goodyear, AZ"
	},
	"skills": [
		"HTML", "CSS", "Javascript", "Powershell"
	]
};

var projects = {
	"projects": [{
		"title": "Sample Project 1",
		"dates": "2013-2014",
		"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus laboriosam debitis culpa expedita est accusamus, quas dolores sit fuga, reprehenderit.",
		"images": [
			"http://lorempixel.com/250/250/",
			"http://lorempixel.com/250/250/"
		]
	}, {
		"title": "Sample Project 2",
		"dates": "2015-2017",
		"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus natus aperiam dolores quidem perspiciatis aspernatur quia sed nam, neque est!",
		"images": [
			"http://lorempixel.com/250/250/",
			"http://lorempixel.com/250/250/"
		]
	}],
};

var work = {
	"jobs": [{
		"employer": "Scottrade Inc",
		"title": "Infastructure Operations Technician",
		"location": "Scottsdale",
		"dates": "April 2016-Present",
		"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit blanditiis ipsam similique reprehenderit eveniet iste quaerat aperiam est praesentium vel."
	}, {
		"employer": "Cloud Blue Technologies",
		"title": "Computer Technician",
		"location": "Scottsdale",
		"dates": "May 2014-March 2016",
		"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ad, laborum reiciendis eum delectus, voluptatem quaerat sit nemo illum pariatur."
	}]
};

var education = {
	"schools": [{
		"name": "Estrella Mountain Community College",
		"location": "Avondale, AZ",
		"degree": "Assocaite in Computer Science X2",
		"dates": "2011-2014",
		"url": "#",
		"majors": [
			"Lorem ipsum dolor", "Lorem ipsum dolor"
		]
	}, {
		"name": "Barry Goldwater High School",
		"location": "Phoenix, AZ",
		"degree": "High School Diploma",
		"dates": "August 2005 - January 2016",
		"url": "#",
		"majors": [
			"Lorem ipsum dolor", "Lorem ipsum dolor"
		]
	}],
	"onlineCourses": [{
		"title": "Front End Nano Degree",
		"school": "Udacity",
		"dates": "July 2017-Present",
		"url": "http://udacity.com"
	}, {
		"title": "Front End Devlopment Certificate",
		"school": "Free Code Camp",
		"dates": "April 2017-Present",
		"url": "http://freecodecamp.com"
	}]
};

bio.display = function() {
	var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
	var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedBioPic = HTMLbioPic.replace("%data%", "images/profilePicture.jpg");
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	$("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub);
	$("#header").prepend(formattedHeaderName,formattedHeaderRole,formattedBioPic);
	$("#topContacts").append(formattedLocation);
	$("#header").append(formattedWelcomeMessage);

	
	$("#header").append(HTMLskillsStart);
	for (var i = 0; i < bio.skills.length; i++) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
	
};

work.display = function() {
	for (var i = 0; i < work.jobs.length; i++) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		var formattedWorkDate = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
		var employerTitle = formattedEmployer + " " + formattedWorkTitle;

		$(".work-entry:last").append(employerTitle, formattedWorkDate, formattedWorkLocation, formattedWorkDescription);
		
	}
};

projects.display = function() {
	
	 	for (var i = 0; i < projects.projects.length; i++) {
		$("#projects").append(HTMLprojectStart);


		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
	var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
 		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);


		$(".project-entry:last").append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription);

		for (var j = 0; j < projects.projects[i].images.length; j++){
			var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
			$(".project-entry:last").append(formattedProjectImage);

		}
	}
};

education.display = function() {
	for (var i = 0; i < education.schools.length; i++) {
		$("#education").append(HTMLschoolStart);
		
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
		

		
		$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree,formattedSchoolDates, formattedSchoolLocation, formattedMajor);
		
		}
	
	$("#education").append(HTMLonlineClasses);
	for (var j = 0; j < education.schools.length; j++) {
		$("#education").append(HTMLschoolStart);
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);

		$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool, formattedOnlineDates, formattedOnlineURL);
	}
};
function inName(name) {
	var nameArray = name.trim().split(" ");
	var firstName = nameArray[0];
	var lastName = nameArray[1];
	var firstLetter = firstName.charAt(0).toUpperCase();
	var remainingLetters = firstName.slice(1, firstName.length);
	remainingLetters = remainingLetters.toLowerCase();
	firstName = firstLetter + remainingLetters;
	lastName = lastName.toUpperCase();

	return firstName + " " + lastName;
}


bio.display();
education.display();
work.display();
projects.display();

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);