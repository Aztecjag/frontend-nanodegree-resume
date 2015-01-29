var formattedName = HTMLheaderName.replace("%data%", "Efren Espinosa"); 
var formattedRole = HTMLheaderRole.replace("%data%", "Front-end Developer");
$("#header").append(formattedRole);
var bio = {
	"name": "Efren Espinosa",
	"role": "Front-end Developer",
	"contacts": {
	"mobile": "XXX-345-XXXX",
	"email": "Efren@gmail.com",
	"github": "Efren",
	"twitter": "@Efren",
	"location": "Los Angeles, CA"
},
"welcomeMessage": "Welcome to my test page",
"skills": [
"JavaScript","Python", "HTML", "CSS", "Video Editing"
],
"bioPic": "images/fry.jpg"
}; 

bio.display = function () {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email); 
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedwelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedbioPic);
	$("#header").append(formattedwelcomeMessage);
	$("#header").append(HTMLskillsStart);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedLocation);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedGithub);
	for (SK in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[SK]);
		$("#header").append(formattedSkills);
	}
}
bio.display();
var work = {
	"jobs": [
	{
	"employer": "EUE/Screen Gems Studios",
	"location": "Los Angeles, CA",
	"title": "Film Dirctor",
	"dates": "2008-2014",
	"description": "Directed the making of films",
	"url": "http://studios.euescreengems.com/nc/"
},
    {
    "employer": "Kaufman Astoria Studios",
    "location": "Long Island City, NY",
    "title": "Screen Writer",
    "dates": "2006-2008",
    "description": "Wrote screen plays",
    "url": "http://www.kaufmanastoria.com/"
}    
]
}

work.display = function () {
	for(job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var EmployerName = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedEmployer = EmployerName.replace("#",work.jobs[job].url);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);
	var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	var formattedDisc = HTMLworkDescription.replace("%data%",work.jobs[job].description);
	$(".work-entry:last").append(formattedDisc);
}
}
work.display();

var projects = {
	"projects": [
	{
	"title": "Freestyle Chess",
	"dates": "2014",
	"description": "Freestyle chess tournaments"
}
]
}

projects.display = function() {
	for (project in projects.projects) {
	$("#projects").append(HTMLprojectStart);
	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	$(".project-entry:last").append(formattedTitle);
	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	$(".project-entry:last").append(formattedDates);
	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	$(".project-entry:last").append(formattedDescription);	
	}
}
projects.display();

var education = {
	"schools": [
	{
	"name": "USC",
	"location": "Los Angeles, CA",
	"degree": "Bachelor of Arts",
	"majors": "Interactive Entertainment",
	"dates": "2004-2008",
	"url": "http://cinema.usc.edu/"
}
],
"onLineCourses": [
{
"title": "Intro to Computer Science",
"school": "Udacity",
"dates": "2014",
"url": "http://udacity.com"
},
{
"title": "Intro to HTML & CSS",
"school": "Udacity",
"dates": "2014",
"url": "http://www.udacity.com"
},
{
"title": "JavaScript Basics",
"school": "Udacity",
"dates": "2015",
"url": "http://www.udacity.com"	
}
]
}
education.display = function() {
	for (school in education.schools) {
	$("#education").append(HTMLschoolStart);
	var SchName = HTMLschoolName.replace("%data%", education.schools[school].name)
	var formattedSchName = SchName.replace("#", education.schools[school].url);
    $(".education-entry:last").append(formattedSchName);
    var formattedSchLoc = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedSchLoc);
    var formattedSchDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedSchDates);
    var formattedSchDeg = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedSchDeg);
    var formattedSchMaj = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
    $(".education-entry:last").append(formattedSchMaj);
}
$(".education-entry:last").append(HTMLonlineClasses);
for (OnLine in education.onLineCourses) {
var OLTitle = HTMLonlineTitle.replace("%data%", education.onLineCourses[OnLine].title);
var formattedOLTitle = OLTitle.replace("#", education.onLineCourses[OnLine].url);
$(".education-entry:last").append(formattedOLTitle);
var formattedOLSchool = HTMLonlineSchool.replace("%data%", education.onLineCourses[OnLine].school);
$(".education-entry:last").append(formattedOLSchool);
var formattedOLDates = HTMLonlineDates.replace("%data%", education.onLineCourses[OnLine].dates);
$(".education-entry:last").append(formattedOLDates);
}
}
education.display();

$(document).click(function(loc) {
var x = loc.pageX;
var y = loc.pagey;
logClicks(x,y);
}); 

$("#mapDiv").append(googleMap);


