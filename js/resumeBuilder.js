var formattedName = HTMLheaderName.replace("%data%", "Efren Espinosa"); 
$("#header").prepend(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%", "Front-end Web Developer");
$("#header").append(formattedRole);
var bio = {
	"name": "Efren Espinosa",
	"role": "Junior Web Developer",
	"contacts": {
	"mobile": "XXX-345-XXXX",
	"email": "Efren@gmail.com",
	"github": "Efren",
	"twitter": "@Efren",
	"location": "Los Angeles"
},
"welcomeMessage": "Welcome to my test page",
"skills": [
"JavaScript","Python", "HTML", "CSS", "Teaching"
],
"photo": "images/fry.jpeg"
}; 

function prependToHeader(what, how) {
	$("#header").prepend( how.replace("%data%", what) );
}

function appendToResume(what, how, where) {
	$(where).append( how.replace("%data%", what) );
}

prependToHeader(bio.role, HTMLheaderRole);
prependToHeader(bio.name, HTMLheaderName);
appendToResume(bio.contacts.mobile, HTMLmobile, "#topContacts");
appendToResume(bio.contacts.email, HTMLemail, "#topContacts");
appendToResume(bio.contacts.github, HTMLgithub, "#topContacts");
appendToResume(bio.contacts.twitter, HTMLtwitter, "#topContacts");
appendToResume(bio.contacts.location, HTMLlocation, "#topContacts");
appendToResume(bio.photo, HTMLbioPic, "#header");
appendToResume(bio.welcomeMessage, HTMLWelcomeMsg, "#header");
$("#header").append(HTMLskillsStart);
appendToResume(bio.skills, HTMLskills, "#skills");
