// I don't really understand the whole idea of using a JSON object to store a function.  I certainly get how it is done, since I have
// done it in the various JSON objects below.  But the reading I have done indicates that this is a bad practice.  Also, json.org 
// does not indicate that it can take a function as a value (although it does say it can take an object as a value, and a function is
// an object).  Would love to hear the reviewers thoughts on this.  Maybe I answered my own question?

var data = '%data%'; //Since this would be used in all objects and whatnot, I thought I would make this a global scope.
var $header = '#header'; //Thought these would be good to be global variables, since they could be used anywhere.
var $intro = $('#intro');
var $title = $('#title');
var $topContacts = $('#topContacts');
var $education = $('#education');
var educationEntry = '.education-entry';
var $workExperience = $('#workExperience');
var workEntry = '.work-entry';
var $projects = $('#projects');
var column4 = '.col-md-4:last';
var projectEntry = '.project-entry:last';
var $footerContacts = $('#footerContacts');

var bio = {
	'name' : 'Eric Martz',
	'role' : 'Aspiring Web Developer',
	'welcomeMessage' : 'Hi, I am Eric Martz.  This is my resume project from Udacity.  You\'ll see below that I have quite an array of experience.  A few years ago, I started to mess around with web design because I thought it was interesting. Specifically, I was amazed at how some websites truly felt like works of art: they were beautiful and moving.  After learning some HTML and CSS, and actually getting to produce a professional website, I dabbled with Ruby on Rails and Python, but always came back to web design and development.  So I continued learning web development and have now enrolled in Udacity.  My goal is to transition full time into web development.',
	'pictureURL' : 'images/eric_m.jpg',
	'contacts' : {
		'mobile' : '678.859.0929',
		'email' : 'ericmartz@gmail.com',
		'github' : 'ericmartz',
		'twitter' : '@ericmartz', //Didn't use Twitter since I don't actually tweet.  I just follow a few people and sometimes look at things they tweet.
		'location' : 'Fayetteville, GA'
	},
	'skills' : ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design', 'Picturefill'],
	'displayBio' : function() {
		var myName = HTMLheaderName.replace(data, bio.name);
		var myRole = HTMLheaderRole.replace(data, bio.role);
		var myMessage = HTMLWelcomeMsg.replace(data, bio.welcomeMessage);
		var myPic = HTMLbioPic.replace(data, bio.pictureURL);

		$title.prepend(myName, myRole);
		$intro.append(myPic, myMessage);
	},
	'displayContact' : function() {
		var myMobile = HTMLmobile.replace(data, bio.contacts.mobile);
		var myEmail = HTMLemail.replace(data, bio.contacts.email);
		var myGitHub = HTMLgithub.replace(data, bio.contacts.github);
		var myLocation = HTMLlocation.replace(data, bio.contacts.location);

		$topContacts.append(myMobile, myEmail, myGitHub, myLocation);
		$footerContacts.append(myMobile, myEmail, myGitHub, myLocation);
	}
}

// For the dates in education and work I broke them into another object with a start date and end date.  For this project alone I didn't really
// have a great reason, but I thought it made sense to have them two separate key/value pairs.  In larger projects you might need to access
// them separately.
var education = {
	'schools' : [{
		'name' : 'DeVry University',
		'location' : 'Atlanta, GA',
		'degree' : 'Bachelor\'s of Science',
		'major' : 'Computer Information Systems',
		'dates' : {
			'date_started' : 'January 2007',
			'date_completed' : 'June 2010'
		},
		'url' : 'http://devry.edu'
	}],
	'display' : function() {
		for (var i=0; i < education.schools.length; i++) {
			var mySchoolName = HTMLschoolName.replace(data, education.schools[i].name);
			mySchoolName = mySchoolName.replace('#', education.schools[i].url)
			var mySchoolDegree = HTMLschoolDegree.replace(data, education.schools[i].degree);
			var mySchoolDates = HTMLschoolDates.replace(data, education.schools[i].dates.date_started + ' - ' + education.schools[i].dates.date_completed);
			var mySchoolLocation = HTMLschoolLocation.replace(data, education.schools[i].location);
			var mySchoolMajor = HTMLschoolMajor.replace(data, education.schools[i].major);

			$education.append(HTMLschoolStart);
			$(educationEntry).last().append(mySchoolName + mySchoolDegree, mySchoolDates, mySchoolLocation, mySchoolMajor);
		}
	}
}

var work = {
	'jobs' : [
		{
			'employer' : 'The Bank of Georgia',
			'title' : 'Assistant Vice President of IT / IT Assistant',
			'location' : 'Peachtree City, GA',
			'url' : 'https://www.bankofgeorgia.com/',
			'dates' : {
				'start_date' : 'March 2007',
				'end_date' : 'Present'
			},
			'description' : 'In March 2007 I started as the IT Assistant and in August 2010 was promoted to Assistant Vice President of IT. In this poition I have gained a wide array of experience. Essentially, I manage the Bank\'s IT network.  This includes duties such as manging the computers and servers on the network, managing the back up process and software, directing the Bank\'s Disaster Recovery program, managing the depreciation schedule to ensure hardware is replaced in a timely manner, write scripts to help automate processes, provide help desk support for bank personnel, and represent IT in special projects.'
		},
		{
			'employer' : 'The Bank of Georgia',
			'title' : 'Assistant Branch Manager',
			'location' : 'Peachtree City, GA',
			'url' : 'https://www.bankofgeorgia.com/',
			'dates' : {
				'start_date' : 'March 2006',
				'end_date' : 'March 2007'
			},
			'description' : 'As the Assistant Branch Manager my primary responsibility was to evaluate the needs of customers and offer appropriate financial products.  I also assisted in training bank personnel, managed the branch\'s day-to-day operations, and worked on any assigned special projects.'},
		{
			'employer' : 'Gracepointe Church',
			'title' : 'Children\'s/Youth Pastor',
			'location' : 'Peachtree City, GA',
			'url' : 'http://gracepointechurch.com/index.php/ministries',
			'dates' : {
				'start_date' : 'April 2003',
				'end_date' : 'March 2006'
			},
			'description' : 'As the Children\'s Minister/Youth Minister I directed the church\'s entire ministry from nursery through teens. I developed training for children\'s teachers to better equip and assimilate new volunteers. I created the oragnizational structure of the children\'s and youth ministries, directed outreach events, and directed fundraising initiatives, such as raising over $9,000 in one car wash.  I also performed specialized duties such as providing technical support for the church and managed the church\'s website.'
		},
		{
			'employer' : 'Bank of America',
			'title' : 'Help Desk Analyst',
			'location' : 'Atlanta, GA',
			'url' : 'https://www.bankofamerica.com/',
			'dates' : {
				'start_date' : 'September 2000',
				'end_date' : 'April 2003'
			},
			'description' : 'I started as a Help Desk Analyst providing support for teller policies and procedures to bank personnel. However, a pilot program became available and I was one of a few chosen to cross train and provide technical support as well as teller support. When the cross training program was abandoned, I continued as a technical support analyst, but would provide teller policy and procedure support when needed as well.'
		},
		{
			'employer' : 'Bank of America',
			'title' : 'Teller/Head Teller',
			'location' : 'Broken Arrow, OK/Hapeville, GA',
			'url' : 'https://www.bankofamerica.com/',
			'dates' : {
				'start_date' : 'October 1997',
				'end_date' : 'September 2000'
			},
			'description' : 'While my first job was a paper delivery boy in the 5th grade, this is what I would consider my first real job.  The duties were basic as a teller, and I doubt I need to go over them, but I worked hard and excelled at my position.  I quickly became the go-to guy when other tellers had questions and within a year I was performing the duties of a head teller.'
		}
	],
	'display' : function() {
		for (var i=0; i < work.jobs.length; i++) {
			var myEmployer = HTMLworkEmployer.replace(data, work.jobs[i].employer);
			myEmployer = myEmployer.replace('#', work.jobs[i].url)
			var myTitle = HTMLworkTitle.replace(data, work.jobs[i].title);
			var myWorkDates = HTMLworkDates.replace(data, work.jobs[i].dates.start_date + ' - ' + work.jobs[i].dates.end_date);
			var myWorkLocation = HTMLworkLocation.replace(data, work.jobs[i].location);
			var myWorkDescription = HTMLworkDescription.replace(data, work.jobs[i].description);

			$workExperience.append(HTMLworkStart);
			$(workEntry).last().append(myEmployer + myTitle, myWorkDates, myWorkLocation, myWorkDescription);
		}
	}
}

var projects = {
	'projects' : [
		{
			'title' : 'The Financial Literacy Coach',
			'date' : 'October 2011',
			'description' : 'This is the first professional website I built. I learned a lot, and built the website using HTML for the structure and CSS for the presentation. This website helped my client present himself in a more professional manner and made it easier for him to obtain clients.',
			'images' : ['images/projects/tflc.jpg'],
			'url' : 'http://thefinancialliteracycoach.com/'
		},
		{
			'title' : 'Gordon Management',
			'date' : 'November 2011',
			'description' : 'This is the second professional website I built. During this project I learned how to manage the entire life cycle of web development.  It was a great project to work on.',
			'images' : ['images/projects/gordon-mgmt.jpg'],
			'url' : 'http://gordonmanagement.com/'
		},
		{
			'title' : 'Cranford Homes',
			'date' : 'January 2014',
			'description' : 'This client had used one of those build your own website services and was very unhappy with the outcome. This is the first project I had to use a JS framework to display pictures.  I used jCarousel.',
			'images' : ['images/projects/cranford-homes.jpg'],
			'url' : 'http://cranfordhomesga.net/'
		},
		{
			'title' : 'Warthen RV Park',
			'date' : 'August 2014',
			'description' : 'I did not design this website, but I made some updates to help with the website with SEO.',
			'images' : ['images/projects/warthen-rv-park.jpg'],
			'url' : 'http://www.warthen-rv-park.com/'
		},
		{
			'title' : 'Seldom Scene Theatre',
			'date' : 'April 2015',
			'description' : 'This is the second website I created for a client that produces stage shows locally in Atlanta. I was very happy with the final outcome and compressed the design and devlopment down to just three weeks.',
			'images' : ['images/projects/seldom-scene.jpg'],
			'url' : 'http://seldomscenetheatre.com/'
		},
		{
			'title' : 'Udacity Project 1 - Build a Portfolio',
			'date' : 'July 2015',
			'description' : 'What I learned most in this project is how to code more professionally.  I was not only proud of the website, but more so of the code I wrote for it. Also, in this project I utilized Bootstrap, Bootstrap Modals, Picturefill and Grunt.',
			'images' : ['images/projects/udacity-project-1.jpg'],
			'url' : 'http://ericmartz.github.io/BuildAPortfolio/'
		}
	],
	'display' : function() {
		var divColumn4 = '<div class="col-md-4">';
		var divClosing = '</div>';
		for (var i=0; i < projects.projects.length; i++) {
			var myProjectTitle = HTMLprojectTitle.replace(data, projects.projects[i].title);
			myProjectTitle = myProjectTitle.replace('#', projects.projects[i].url);
			var myProjectDate = HTMLprojectDates.replace(data, projects.projects[i].date);
			var myProjectDescription = HTMLprojectDescription.replace(data, projects.projects[i].description);
			var myProjectImage = HTMLprojectImage.replace(data, projects.projects[i].images[0]);

			$projects.append(divColumn4); // Adding bootstrap columns for the projects
			$(column4).append(HTMLprojectStart);
			$(projectEntry).append(myProjectImage, myProjectTitle, myProjectDate, myProjectDescription);
			$(column4).append(divClosing);
		}
	}
}

bio.displayBio();
bio.displayContact();
education.display();
work.display();
projects.display();

// Code below is for the map part of this project

// The extraLocations object is to add some extra locations to the map in the resume project.  Wanted to add some extra places for where I lived.
// Also, I would never put all this on an actual resume, but I wanted to work with it and figure out how to make things work, even working
// with existing code, like adding some stuff via the locationFinder in helper.js
var extraLocations = [
	{
		'location' : 'Elgin, IL'
	},
	{
		'location' : 'Quantico, VA'
	},
	{
		'location' : 'Ft. Sheridan, IL'
	},
	{
		'location' : 'Hapeville, GA'
	},
	{
		'location' : 'England'
	},
	{
		'location' : 'Ireland'
	}
]

// NOTE TO REVIEWERS: You have got to open up the page and check out the maps and their infoWindows in a browser!!
// I am stoked about what I learned to do.  The infoWindows are HTML formatted with a picture in them, and the picture has an alt
// attribute.  Hover over the map marker and you get the title, but open it and you get separate content.  Took a day or so of work
// to figure it all out, but with Udacity and the API's and one Stack Overflow article, I was able to change the code I received from Udacity
// and I got it all working in a way I am proud of.

// I created the locationInfo object to be used by the getInfoWindowContent function (helper.js line 175).  It stores locations and a short description for the location and a image 
// url for displaying in the infoWindow
// The key type is a variable that holds three options: worked (for places I have worked), lived (for places I have lived), want (for places I want to live)
// Honestly, I feel this would best work in another file, although I know that would be another call to a web server.  Just feels like a lot of bloat.
var locationInfo = [
	{
		'place' : 'Broken Arrow, OK, United States',
		'description' : 'I worked at the Bank of America 31st Street branch. Two of the best managers I ever worked for, my branch manager and the regional manager were here.',
		'image_url' : 'images/places/31st-street-branch.jpg',
		'image_alt' : 'An picture Bank of America\'s 31st Street Branch in Tulsa, OK',
		'image_attribute' : 'Google Street View',
		'type' : 'worked' //Although I did live here while I worked here, I am just pointing out I worked here.
	},
	{
		'place' : 'Atlanta, GA, USA',
		'description' : 'In Atlanta, I worked at the National HelpLine as a HelpDesk Analyst. I always thought it was odd that from the 9th floor I could look out and see Stone Mountain and everything in between was trees, even thought I was in the middle of the city.',
		'image_url' : 'images/places/bank-of-america.jpg',
		'image_alt' : 'An picture of Bank of America\'s Midtown Building in Atlanta, GA',
		'image_attribute' : 'Google Street View',
		'type' : 'worked'
	},
	{
		'place' : 'Peachtree City, GA, USA',
		'description' : 'In Peachtree City I have worked at The Bank of Georgia.  I always thought it was humorous that the two banks I have worked at are Bank of America and The Bank of Georgia.',
		'image_url' : 'images/places/bank-of-georgia.jpg',
		'image_alt' : 'A picture of The Bank of Georgia\'s Main Office.',
		'image_attribute' : 'The Bank of Georgia',
		'type' : 'worked' //Although I have lived here, I am just pointing out I worked here.
	},
	{
		'place' : 'Fayetteville, GA, USA',
		'description' : 'I currently live in Fayetteville.  Within walking distance of the town square.',
		'image_url' : 'images/places/fayetteville-town-square.jpg',
		'image_alt' : 'A streetview of downtown Fayetteville.',
		'image_attribute' : 'Google Street View',
		'type' : 'lived'
	},
	{
		'place' : 'Elgin, IL, USA',
		'description' : 'I lived in Elgin, IL in 4th through 8th grade.  Here\'s a picture of the house I used to live in.',
		'image_url' : 'images/places/house-at-elgin.jpg',
		'image_alt' : 'An image of 530 McClure Ave in Elgin, IL.',
		'image_attribute' : 'Google Street View',
		'type' : 'lived'
	},
	{
		'place' : 'Fort Sheridan, IL, USA',
		'description' : 'I lived here up to 2nd grade. Although the Army base no longer exists (nor does the housing we were in), I have many fond memories of this place.  This is a picture of my youngest daughter at Ft. Sheridan at the beach on Lake Michigan.',
		'image_url' : 'images/places/ft-sheridan.jpg',
		'image_alt' : 'An image of a young women standing on a rusted metal beam extended into a look. She is looking out towards the lake.',
		'image_attribute' : 'Eric Martz',
		'type' : 'lived'
	},
	{
		'place' : 'Quantico, VA 22134, USA',
		'description' : 'I lived in Quantico in just the third grade. Ironically, my wife was living in Washington DC at the same time. We both ended up in Peachtree City together around 1996.',
		'image_url' : 'images/places/quantico-entrance.jpg',
		'image_alt' : 'A picture of the entrance of Quantico Marine Base at Quantico, VA.',
		'image_attribute' : 'Google Street View',
		'type' : 'lived'
	},
	{
		'place' : 'Hapeville, GA, USA',
		'description' : 'Pictured is the first office I worked at in Bank of America as a teller. As an item of interest, Hapeville is the home of Chick-Fil-A.  They have a Dwarf House restaurant there open 24 hours a day, 6 days a week.',
		'image_url' : 'images/places/hapeville.jpg',
		'image_alt' : 'A picture of the South Expressway Office for Bank of America in Hapeville, GA.',
		'image_attribute' : 'Google Street View',
		'type' : 'worked'
	},
	{
		'place' : 'Ireland',
		'description' : 'I would love to visit for an extended period of time or even work there. And I want to visit a real Irish pub. Just want to point out this pub is older than America. Who wouldn\'t want to eat there?',
		'image_url' : 'images/places/the-brazen-head.jpg',
		'image_alt' : 'A picture of the Irish Countryside',
		'image_attribute' : 'Google Street View',
		'type' : 'want'
	},
	{
		'place' : 'England, UK',
		'description' : 'Whether the English Country or London, I would love to visit and possibly work in England. I think it is both a beautiful place and I love the culture.',
		'image_url' : 'images/places/westminster-abbey.jpg',
		'image_alt' : 'A picture of Westminster Abbey.',
		'image_attribute' : 'Google Street View',
		'type' : 'want'
	}
]

// This function is called by createMapMarker() over in helper.js.  Its purpose is to take the location of a marker on the map and create
// a content string so when user clicks on the map marker they get some information.
function getInfoWindowContent(location){
	var content = '';
	var placeType = '';
	for (var i=0; i < locationInfo.length; i++) {
		if (locationInfo[i].place === location) {
			placeType = getPlaceType(locationInfo[i].type);

			content += '<div class="info-window clearfix">'
			content += '<h4 class="map-title">' + locationInfo[i].place + '</h4>';
			content += '<h5 class="map-title">' + placeType + '</h5>';
			content += '<p>' + locationInfo[i].description + '</p>';
			content += '<div class="info-window-pic-container">'
			content += '<img class="info-window-pic" src="' + locationInfo[i].image_url + '" alt="' + locationInfo[i].image_alt + '">'
			content += '<p class="map-image-caption"> Image courtesy of ' + locationInfo[i].image_attribute + '</>'
			content += '</div>'
			content += '</div>'
		}
	}
	return content;
}

function getPlaceType(type) {
	var results = '';
	if (type === 'worked') {
		results = 'A place I have worked';
	} else if (type === 'lived') {
		results = 'A place I have lived';
	} else if (type === 'want') {
		results = 'A place I would like to live';
	}
	return results;
}


// Appends map to the webpage
$('#mapDiv').append(googleMap);