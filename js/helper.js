/*
*
*	So on the index.html I converted spaces to tabs because that is how I generally have things set up.  It tooks a long time to get everything
*	set up right, so I am leaving this files with 2 spaces for a tab.  I cannot even begin to imagine how long it would take to fix.
*	I did try View -> Indentation -> Convert Indentation to Tabs, but that didn't really work out right.
*
*/
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<p class="role">%data%</p>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile </span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email </span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter </span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github </span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog </span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location </span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLWelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skillsH3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a class="work-title" href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="work-date">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<h3 class="project-title"><a href="#">%data%</a></h3>'; // Added and H2 here for effect
var HTMLprojectDates = '<div class="project-date">%data%</div>';
var HTMLprojectDescription = '<p class="project-description">%data%</p>';
var HTMLprojectImage = '<img class="project-image img-responsive" src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';


/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var iName = inName(name) || function(){};
    $('#name').html(iName);  
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  // clickLocations.push(
  //   {
  //     x: x,
  //     y: y
  //   }
  // );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable



/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
  // <div id="map">, which is appended as part of an exercise late in the course.
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    // I added the if statement because my work info was producing a lot of doubles in the array.  Just figured it was
    // best to reduce this.  Also, it seemed to be causing a problem with adding map markers to the map, although I
    // haven't pin pointed why that is yet.
    // Worked on it for a bit, started using console.log() to produce output of what was happening when I noticed how many times
    // Peachtree City and Atlanta was in the array.  Tried to figure out why some places still were not being added.  When I added
    // the if statement the problem of some places not being added was fixed immediately.
    // I did console.log() google.maps.places.PlacesServiceStatus.OK in the callback function and after a few calls I got null results.
    // I felt google started blocking me after I made several method calls to their script.  Not sure this was the issue, but wanted to continue
    // with the project after an afternoon spent working on this one problem, and this seemed to get me in the right direction.
    for (var job in work.jobs) {
      // I noticed MDN had .includes() as a array method, but it was marked as experimental so I thought I would stay away from it for now.
      // However, at least I know it exists and will work well in the future, and checking for the index of an item isn't too complicated.
      if (locations.indexOf(work.jobs[job].location) === -1) {
        locations.push(work.jobs[job].location);
      }
    }

    // iterates through extra locations (an object I added in ResumeBuilder.js) and appends each location to
    // the locations array
    for (var place in extraLocations) {
      locations.push(extraLocations[place].location);
    }

    return locations;
  }

// infoWindows are the little helper windows that open when you click
// or hover over a pin on a map. They usually contain more information
// about a location.
// Moved this from line 185 to change the scope to a global scope.  See comments on line 185 for explanation.
var infoWindow = new google.maps.InfoWindow();


  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // I created the content variable to hold some info on the places I have lived or worked. 
    // getInfoWindowContent() is in resumeBuilder.js on line 328. 
    var content = getInfoWindowContent(name);

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // This is where the infoWindow declaration was when I opened the file (it is now on line 157).  However, what I found is that when I clicked on
    // different map markers a new infoWindow would open, and the old infoWindow would stay open as well.  Google's API
    // states that only one infoWindow should be open at a time, and if you create one infoWindow object, then only one would be
    // open at one time. By moving the infoWindow creation outside of this function's definition, I created the infoWindow with
    // global scope, instead of a scope within this function.  This article helped me get there too:
    // http://stackoverflow.com/questions/1875596/have-just-one-infowindow-open-in-google-maps-api-v3
    // But this cool, I feel like between Google's API and the Stack Overflow article I actually understood what I was doing and the possible
    // ramifications of it all.  I have Udacity to thank for that.

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.setContent(content);
      infoWindow.open(map, marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {
      // the search request object
      var request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);
}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);
// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
//   Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});