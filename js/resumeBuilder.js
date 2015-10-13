/* This is empty on purpose! Your code to build the resume will go here. */

/* Prepare profile data here */
var bio = {
	'name': 'Wu Lei',
	'role': 'Web Developer',
	'contacts': {
		'mobile': '+65-93977085',
		'email': 'znss1989@gmail.com',
		'github': 'znss1989',
		'location': 'Jurong West, Singapore'
	},
	'welcomeMsg': 'Every cloud has a silver lining.',
	'skills': [
		'Enjoy delicious cuisines, especially that of my hometown Chengdu if that counts', 'Digital integrated circuits & system design', 'Web developing (learning in progress...)', 'Taking a nap and reading history books'
	],
	'pictureURL': 'images/me.jpg'
};
var education = {
	'schools': [
		{
			'name': 'University of Electronic Sci & Tech of China',
			'location': 'Chengdu',
			'degree': 'BA',
			'majors': ['Electronic Engineering'],
			'dates': 2008,
			'url': 'http://www.uestc.edu.cn/'
		},
		{
			'name': 'Nanyang Technological University',
			'location': 'Singapore',
			'degree': 'PhD',
			'majors': ['Circuits & Systems'],
			'dates': 2013,
			'url': 'http://www.ntu.edu.sg/Pages/index.aspx'
		}
	],
	'onlineCourses': [
		{
			'title': 'Front-End Web Developer',
			'school': 'Udacity',
			'dates': 2015,
			'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
		}
	]
};

var projects = {
	'projects': [
		{
			'title': 'My portfolio',
			'dates': 'Sep, 2015',
			'description': 'This portfolio is set up under the guidance of course series of Front-End Web Developer Nanodegree of Udacity. It would include various web projects finished or still under construction.',
			'images': [
				'http://img2.tplm123.com/2009/02/27/36303/low/2051942042172.jpg'
			]
		},
		{
			'title': 'Online resume',
			'dates': 'Oct, 2015',
			'description': 'This is my online resume as a web developer. It is set up under the guidance of Udacity course series for front-end design. I hope more and more experiences along the way of web developing will be added here',
			'images': [
				'https://lh3.googleusercontent.com/-m5doezDXVDI/AAAAAAAAAAI/AAAAAAAAAJo/BB4xv-WOtb4/s120-c/photo.jpg'
			]
		}
	]
};
var work = {
	'jobs': [
		{
			'employer': 'School of ME, UESTC',
			'title': 'Monitor',
			'location': 'Chengdu, China',
			'dates': 'Sep, 2009 - Jun, 2010',
			'description': 'Lead the whole class towards better performance in both academic & various campus activities.'
		},
		{
			'employer': 'School of ME, UESTC',
			'title': 'Tutor Student',
			'location': 'Chengdu, China',
			'dates': 'Sep, 2010 - Jun, 2011',
			'description': 'Guide freshmen students to adapt the campus life and have a clear prospecitve for their next several years.'
		}
	]
};

/* Insert biography informaton */
bio.display = function() {
	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
	var formattedPicture = HTMLbioPic.replace('%data%', bio.pictureURL);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMsg);
	$('#header').prepend(formattedPicture);
	$('#header').prepend(formattedWelcomeMsg);
	$('#header').prepend(formattedRole);
	$('#header').prepend(formattedName);
	/* Insert contact infomation */
	var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
	var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
	var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
	$('#topContacts').prepend(formattedLocation);
	$('#topContacts').prepend(formattedGithub);
	$('#topContacts').prepend(formattedMobile);
	$('#topContacts').prepend(formattedEmail);
	$('#footerContacts').prepend(formattedLocation);
	$('#footerContacts').prepend(formattedGithub);
	$('#footerContacts').prepend(formattedMobile);
	$('#footerContacts').prepend(formattedEmail);	
	/* Insert skill list */
	if (bio.skills.length > 0) {
		// $('#header').append(formattedHeaderName);
		$('#header').append(HTMLskillsStart);
		var bioLength = bio.skills.length;
		for (var i = 0; i < bioLength; ++i) {
			var formattedSkills = HTMLskills.replace('%data%', bio.skills[i]);
			$('#header').append(formattedSkills);			
		}
	}
}
bio.display();

/* Insert education information */
education.display = function() {
	for (var i= 0; i < education.schools.length; ++i) {
		$('#education').append(HTMLschoolStart);
		formattedSchoolName = HTMLschoolName.replace('#', education.schools[i].url).replace('%data%', education.schools[i].name);
		formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
		$('.education-entry:last').append(formattedSchoolName+formattedSchoolDegree);
		formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
		formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
		$('.education-entry:last').append(formattedSchoolDates+formattedSchoolLocation);
		for (var j = 0; j < education.schools[i].majors.lengh; ++j) {
			formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[i].majors[j]);
			$('.education-entry:last').append(formattedSchoolMajor);
		}
	}
	if (education.onlineCourses) {
		$('.education-entry:last').append(HTMLonlineClasses);
	}
	for (var i = 0; i < education.onlineCourses.length; ++i) {
		$('#education').append(HTMLschoolStart);
		formattedOnlineTitle = HTMLonlineTitle.replace('#', education.onlineCourses[i].url).replace('%data%', education.onlineCourses[i].title);
		formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school);
		$('.education-entry:last').append(formattedOnlineTitle+formattedOnlineSchool);
		formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[i].dates);
		$('.education-entry:last').append(formattedOnlineDates);
	}	
}
education.display();

/* Insert projects information */
projects.display = function() {
	for (var i = 0; i < projects.projects.length; ++i) {
		$('#projects').append(HTMLprojectStart);
		var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
		var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);
		$('.project-entry:last').append(formattedProjectTitle + formattedProjectDates + formattedProjectDescription)
		for (var j = 0; j < projects.projects[i].images.length; ++j) {
			var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.projects[i].images[j]);
			$('.project-entry:last').append(formattedProjectImage);
		}
	}
}
projects.display();

/* Insert work experience */
work.display = function() {
	for (var i = 0; i < work.jobs.length; ++i) {
		$('#workExperience').append(HTMLworkStart);
		var formattedWorkEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
		var formattedWorkTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
		var formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
		var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
		var formattedWorkDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);
		var formattedWorkInfo = formattedWorkEmployer+formattedWorkTitle+formattedWorkDates+formattedWorkLocation+formattedWorkDescription;
		$('.work-entry:last').append(formattedWorkInfo);
	}	
}
work.display();

/* Load the map here */
$('#mapDiv').append(googleMap);

/* Monitor click locations*/
$(document).click(function(loc) {
  logClicks(loc.pageX,loc.pageY);
});


