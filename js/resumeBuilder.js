//$("#main").append("Geng Tan");
//var awesomeThoughts = "My name is Geng and I am AWESOME!";
//console.log(awesomeThoughts);
//var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
//$("#main").append(funThoughts);

/*var name = "Geng Tan";
var Role = "Web Developer";
var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",Role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name":"Geng",
	"role":"Developer",
	"contacts":"geng@personafi.io",
	"bioPic":"images/me.psd",
	"welcomeMessage":"Welcome to my resume!",
	"skills":"these are my skills"
}

var work = {}
work.position = "MBA student"
work.employer = "Cornell"
work.yearsWorked = 1
work.city="New York"
var education = {
    "schools": [
        {
            "name": "MIT",
            "city": "Boston"
        },
        {
            "name": "Cornell Tech",
            "city": "New York"
        }
    ]
};

$("#main").prepend(work["position"]);
$("#main").prepend(education.school);*/

var work = {
    "jobs": [
        {
            "employer": "Cornell",
            "title": "MBA Student",
            "location": "New York",
            "dates": "2014-2015",
            "description": "First MBA Class at Cornell Tech"
        },
        {
            "employer": "Appinions",
            "title": "Analyst",
            "location": "New York",
            "dates": "2012-2014",
            "description": "Product Management"
        }
    ]
};
var project = {
    "project": [
        {
            "title": "project1",
            "dates": "2015",
            "description": "this is project 1",
            "images": [
                "images/me.png",
                "images/fry.jpg"
            ]
        },
        {
            "title": "project2",
            "dates": "2014",
            "description": "this is project 2",
            "images": [
                "197x148.gif",
                "images/fry.jpg"
            ]
        }
    ]
};
var bio = {
    "name": "Geng",
    "role": "MBA Candidate, Cornell Tech",
    "welcomeMessage": "Welcome to my interactive resume.",
    "contacts": {
        "mobile": "3103849430",
        "email": "geng@personafi.io",
        "github": "geng0610",
        "twitter": "geng0610",
        "location": "new york"
    },
    "skills": [
        "javascript",
        "software"
    ],
    "image": "images/me.png"
};
var education = {
    "schools": [
        {
            "name": "Cornell",
            "location": "new york",
            "degree": "MBA",
            "major": [
                "MBA"
            ],
            "dates": "2014-2015",
            "url": "www.cornell.edu"
        },
        {
            "name": "MIT",
            "location": "Cambridge",
            "degree": "BA",
            "major": [
                "MechE",
                "Management"
            ],
            "dates": "2006-2010",
            "url": "web.mit.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Nano-Degree",
            "school": "Udacity",
            "dates": "2015",
            "url": "www.udacity.com"
        }
    ]
};

function displayWork(){

if (bio){
	$("#header").prepend(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));
	$("#header").prepend(HTMLbioPic.replace("%data%",bio.image));
	$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));
};

//$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));

if (bio.contacts){
	//$("#topContacts").append(HTMLcontactGeneric);
	if(bio.contacts.contactGeneric)
		$("#topContacts").append(HTMLcontactGeneric.replace("%data%",bio.contacts.mobile));
	if(bio.contacts.mobile)
		$("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
	if(bio.contacts.email)
		$("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
	if(bio.contacts.twitter)
		$("#topContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
	if(bio.contacts.github)
		$("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
	if(bio.contacts.blog)
		$("#topContacts").append(HTMLblog.replace("%data%",bio.contacts.blog));
	if(bio.contacts.location)
		$("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));
};

if (bio.skills.length>0){
	$("#header").append(HTMLskillsStart);
	$("#skills").append(HTMLskills.replace("%data%",bio.skills));
};

for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	var formattedEmployerTitle = formattedEmployer +formattedTitle+formattedDates+formattedLocation+formattedDescription;
	$(".work-entry:last").append(formattedEmployerTitle);
}
};

displayWork();

$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});