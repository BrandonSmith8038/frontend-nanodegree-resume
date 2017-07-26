var bio = {
	"name": "Brandon Smith",
	"role": "Front End Developer",
	"welcomeMessage": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, sit.",
	"bioPic": "images/profilePicture.jpg",
	"contacts": {
		"mobile": "(602)-694-0239",
		"email": "brandon@reddirtwebdesign.com",
		"github": "https://github.com/BrandonSmith8038",
		"location": "Goodyear, AZ" 
	},
	"skills": [
	"HTML","CSS","Javascript","Powershell"
	]
}

var projects = {
	"projects": [
		{
			"title": "Sample Project 1",
			"dates": "2013-2014",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus laboriosam debitis culpa expedita est accusamus, quas dolores sit fuga, reprehenderit."
		},
		{
			"title": "Sample Project 2",
			"dates": "2015-2017",
			"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus natus aperiam dolores quidem perspiciatis aspernatur quia sed nam, neque est!"
		}
	],
}

var work = {
	"jobs": [
		{
		"employer": "Scottrade Inc",
		"title": "Infastructure Operations Technician",
		"location": "Scottsdale",
		"dates": "April 2016-Present",
		"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit blanditiis ipsam similique reprehenderit eveniet iste quaerat aperiam est praesentium vel."
		},
		{
		"employer": "Cloud Blue Technologies",
		"title": "Computer Technician",
		"location": "Scottsdale",
		"dates": "May 2014-March 2016",
		"description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut ad, laborum reiciendis eum delectus, voluptatem quaerat sit nemo illum pariatur."
		}
	]
}

var education = {
	"schools": [
		{
		"name": "Estrella Mountain Community College",
		"location": "Avondale, AZ",
		"degree": "Assocaite in Computer Science",
		"dates": "2011-2014",
		"url": "#"
	},
		{
		"name": "Glendale Community College",
		"location": "Glendale, AZ",
		"degree": " ",
		"dates": "2005",
		"url": "#"	
		}
	]
}

 bio.display = function(){
	var formattedHeaderName = HTMLheaderName.replace("%data%",bio.name);
	var formattedHeaderRole = HTMLheaderRole.replace("%data%",bio.role); 
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	var formattedBioPic = HTMLbioPic.replace("%data%","images/profilePicture.jpg");
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);

	$("#header").append(formattedWelcomeMessage);
	$("#header").prepend(formattedBioPic);
	$("#header").prepend(formattedHeaderRole);
	$("#header").prepend(formattedHeaderName);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
};

bio.skills.display = function() {
	$("#header").append(HTMLskillsStart);
	for (var i = 0;i < bio.skills.length;i++ ){
		var formattedSkill = HTMLskills.replace("%data%",bio.skills[i]);
		$("#skills").append(formattedSkill);
	};
}

work.display = function(){
	for (var i = 0; i < work.jobs.length; i++ ) {
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
		var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
		var formattedWorkDate = HTMLworkDates.replace("%data%",work.jobs[i].dates)
		var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[i].location)
		var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[i].description)
		var employerTitle = formattedEmployer + " " + formattedWorkTitle;

		$(".work-entry:last").append(employerTitle);
		$(".work-entry:last").append(formattedWorkDate);
		$(".work-entry:last").append(formattedWorkLocation);
		$(".work-entry:last").append(formattedWorkDescription);
	}
};	

projects.display = function() {
	$("#projects").append(HTMLprojectStart);
	for (var i = 0;i < projects.projects.length;i++ ){
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);
	}
};

function inName(name){
	var nameArray = name.trim().split(" ");
	var firstName = nameArray[0];
	var lastName = nameArray[1];
	var firstLetter = firstName.charAt(0).toUpperCase();
	var remainingLetters = firstName.slice(1,firstName.length); 
	remainingLetters = remainingLetters.toLowerCase();
	firstName = firstLetter + remainingLetters;
	lastName = lastName.toUpperCase();

	return firstName + " " + lastName;
};


bio.display();
bio.skills.display();
work.display();
projects.display();

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);