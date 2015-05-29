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
var projects = {
    "projects": [
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
                "images/197x148.gif",
                "images/fry.jpg"
            ]
        }
    ]
};
var bio = {
    "name": "Geng Tan",
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
            "majors": [
                "MBA"
            ],
            "dates": "2014-2015",
            "url": "www.cornell.edu"
        },
        {
            "name": "MIT",
            "location": "Cambridge, MA",
            "degree": "BA",
            "majors": [
                "MechE",
                "Management"
            ],
            "dates": "2006-2010",
            "url": "web.mit.edu"
        }
    ],
    "onlineClasses": [
        {
            "title": "Nano-Degree",
            "school": "Udacity",
            "dates": "2015",
            "url": "www.udacity.com"
        }
    ]
};

education.display = function(){
    for(school in education.schools){
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedSchoolName+formattedSchoolDegree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);
        if (education.schools[school].majors.length > 0) {
            for(major in education.schools[school].majors){
                var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
                $(".education-entry:last").append(formattedMajor);
            }
        };
    }
    if (education.onlineClasses) {
        $(".education-entry:last").append(HTMLonlineClasses);
        for (onlineClass in education.onlineClasses){
            //$("#education").append(HTMLonlineStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[onlineClass].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[onlineClass].school);
            $(".education-entry:last").append(formattedOnlineTitle+formattedOnlineSchool);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineClasses[onlineClass].dates);
            $(".education-entry:last").append(formattedOnlineDates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineClasses[onlineClass].url);
            $(".education-entry:last").append(formattedOnlineURL);
        }
    }
}


education.display(); 

bio.display = function(){
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
};

bio.display();


work.display = function(){
for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	var formattedEmployerTitle = formattedEmployer +formattedTitle+formattedDates+formattedLocation+formattedDescription;
	$(".work-entry:last").append(formattedEmployerTitle);
};
};

work.display();

$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

function inName(name){
    var name=name.trim().split(" ");
    console.log(name);
    name[1]=name[1].toUpperCase();
    name[0]=name[0].slice(0,1).toUpperCase()+name[0].slice(1).toLowerCase();
    return name[0]+" "+name[1];
}

$("#main").append(internationalizeButton);


projects.display = function(){
    for(project in projects.projects){
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for(image in projects.projects[project].images){
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        };
    }
}


projects.display(); 

$("#mapDiv").append(googleMap);


