var map;
var markers = new Array()
var countClick = 0;
var markerfs = new Array()
var countClickFood = 0;
var markercs = new Array()
var countClickCafe = 0;
var markerbs = new Array()
var countClickBar = 0;
//https://developers.google.com/maps/documentation/javascript/tutorial?hl=de
function initMap() {
    //loads the map in Berlin
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 52.49359, lng:  13.44538},
        zoom: 16
    });

    //hardcoded marker that represent different locations. F.e. Bars/Restaurants
    var markercode = new google.maps.Marker({
        position: {lat: 52.4940407, lng:   13.446276699999999 },
        map: map,
        title: 'Hello World!',
        label: "CODE",
        icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
    });

    var markerf = new google.maps.Marker({
        position: {lat: 52.499907, lng:   13.4447055},
        map: map,
        title: "Zur Gerichtslaube",
        label: "F"
    });
    markerfs.push(markerf)

    var markerf = new google.maps.Marker({
        position: {lat: 52.5011464, lng:  13.442625799999973 },
        map: map,
        title: "Ausspanne",
        label: "F"
    });
    markerfs.push(markerf)

    var markerf = new google.maps.Marker({
        position: {lat: 52.49314409999999, lng:   13.446674099999996 },
        map: map,
        title: "Schöneberger Weltlaterne",
        label: "F"
    });
    markerfs.push(markerf)

    var markerc = new google.maps.Marker({
        position: {lat: 52.4941122, lng:  13.437756199999967},
        map: map,
        title: "Buchkantine",
        label: "C"
    });
    markercs.push(markerc)

    var markerc = new google.maps.Marker({
        position: {lat: 52.4933624, lng:   13.436901600000056 },
        map: map,
        title: "Britzer Seeterrassen im Britzer Garten",
        label: "C"
    });
    markercs.push(markerc)

    var markerc = new google.maps.Marker({
        position: {lat: 52.4934326, lng:  13.438335000000052 },
        map: map,
        title: "Katzencafe Pee Pees",
        label: "C"
    });
    markercs.push(markerc)

    var markerb = new google.maps.Marker({
        position: {lat: 52.4971441, lng:   13.451196100000061 },
        map: map,
        title: "Jambooree",
        label: "B"
    });
    markerbs.push(markerb)

    var markerb = new google.maps.Marker({
        position: {lat: 52.5014704, lng:   13.441630600000053 },
        map: map,
        title: "Fairytale Bar",
        label: "B"
    });
    markerbs.push(markerb)

    var markerb = new google.maps.Marker({
        position: {lat: 52.5007809, lng:   13.439301200000045 },
        map: map,
        title: "Sharlie Cheen Bar",
        label: "B"
    });
    markerbs.push(markerb)

    var markerb= new google.maps.Marker({
        position: {lat: 52.5014704, lng:   13.441630600000053 },
        map: map,
        title: "Berliner Republik",
        label: "B"
    });
    markerbs.push(markerb)

    var markerb = new google.maps.Marker({
        position: {lat: 52.4995608, lng:   13.43929270000001 },
        map: map,
        title: "Tussy Lounge",
        label: "B"
    });
    markerbs.push(markerb)

    var markerf = new google.maps.Marker({
        position: {lat: 52.49534999999999, lng:    13.431890100000032  },
        map: map,
        title: "Mutter Hoppe",
        label: "F"
    });
    markerfs.push(markerf)

    var markerf = new google.maps.Marker({
        position: {lat: 52.4986775, lng:  13.426234600000043  },
        map: map,
        title: "Zum Schusterjungen",
        label: "F"
    });
    markerfs.push(markerf)

    var markerf = new google.maps.Marker({
        position: {lat: 52.4966706, lng:   13.422560799999928  },
        map: map,
        title: "Zur letzten Instanz",
        label: "F"
    });
    markerfs.push(markerf)

    var markerf = new google.maps.Marker({
        position: {lat: 52.4912651, lng:    13.449740199999951  },
        map: map,
        title: "Wirtshaus Max und Moritz",
        label: "F"
    });
    markerfs.push(markerf)
    var markerf = new google.maps.Marker({
        position: {lat: 52.49036, lng:   13.44909000000007  },
        map: map,
        title: "DICKE WIRTIN",
        label: "F"
    });
    markerfs.push(markerf)

    var marker17 = new google.maps.Marker({
        position: {lat: 52.5071028, lng:   13.454466400000001   },
        map: map,
        title: 'Hello World!',
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'


});
    var markersp = new google.maps.Marker({
        position: {lat: 52.49758, lng:    13.432450099999983  },
        map: map,
        title: 'Calesthenics',
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'

    });
    var markersp = new google.maps.Marker({
        position: {lat: 52.48988430000001, lng:   13.444695300000035   },
        map: map,
        title: 'Fitness',
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
    });


    var marker = new google.maps.Marker({
        position: {lat: 52.49359, lng:  13.44538},
        map: map,
        title: 'Hello World!',

    });

    markers.push(marker)

    var marker = new google.maps.Marker({
        position: {lat: 52.52000, lng: 13.40495},
        map: map,
        title: 'Hello World!'
    });

    markers.push(marker)

    var marker = new google.maps.Marker({
        position: {lat: 52.4986049, lng: 13.39179},
        map: map,
        title: 'Hello World!'
    });

    markers.push(marker)

    var marker = new google.maps.Marker({
        position: {lat: 52.52231, lng: 13.41308389},
        map: map,
        title: 'Hello World!'
    });

    markers.push(marker)

    // This event listener calls addMarker() when the map is double-clicked.
    google.maps.event.addListener(map, 'dblclick', function(event) {
        addMarker(event.latLng, map);
    });

    // Adds a marker to the map.
    function addMarker(location, map) {
        // Add the marker at the clicked location, and add the next-available label
        var marker = new google.maps.Marker({
            position: location,
            map: map
        });


        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
            countClick = countClick + 1;
        });

        markers.push(marker)
    }

    //Count clicks for Restaurants
    markerfs.forEach(function(markerf)
    {
        google.maps.event.addListener(markerf, 'click', function() {

            countClickFood = countClickFood + 1;
        });
    });
    //Count clicks for Cafes
    markercs.forEach(function(markerc)
    {
        google.maps.event.addListener(markerc, 'click', function() {

            countClickCafe = countClickCafe + 1;
        });
    });
    //Count clicks for Bars
    markerbs.forEach(function(markerb)
    {
        google.maps.event.addListener(markerb, 'click', function() {

            countClickBar = countClickBar + 1;
        });
    });


    //When right clicking a invite icon appears.
    var invite = 'https://cdn2.iconfinder.com/data/icons/man-and-door/351/door-013-48.png';
    google.maps.event.addListener(map, "rightclick", function(event){
        addMarker(event.latLng, map);
        function addMarker(location, map) {
            var markerr = new google.maps.Marker({
                position: location,
                map: map,
                icon: invite,
                title: "Join me!"


        });
            google.maps.event.addListener(markerr, 'click', function() {
                infowindowr.open(map,markerr);
            });
        }

    });
    // That is the content of the infowindow of the invitation Symbol.
    var html2 = "<table>" +
        "<tr><td>Description:</td> <td><input type='text' id='description'/> </td> </tr>" +
        "<tr><td>Arrival:</td> <td><input type='time' id='time'/></td> </tr>" +
        "<tr><td>Staying:</td> <td><select id='type'>" +
        "<option value='30min' SELECTED><30min</option>" +
        "<option value='45min'><45min</option>" +
        "<option value='60min'><60min</option>" +
        "<option value='longer then 60min'>i live here</option>" +
        "</select> </td></tr>" +
        "<tr><td></td><td><input type='button' value='Done' onclick='saveData()'/></td></tr>";
  //src : https://developers.google.com/maps/documentation/javascript/infowindows
    var infowindowr = new google.maps.InfoWindow({
        content: html2
    });
    // That is the content of the infowindow of the normal Marker.
    var html = "<table>" +
        "<tr><td>Name:</td> <td><input type='text' id='name'/> </td> </tr>" +
        "<tr><td>Keywords:</td> <td><input type='text' id='keywords'/> </td> </tr>" +
        "<tr><td>Type:</td> <td><select id='type'>" +
        "<option value='bar' SELECTED>bar</option>" +
        "<option value='restaurant'>restaurant</option>" +
        "<option value='cafe'>cafe</option>" +
        "<option value='cool stuff'>cool stuff</option>" +
        "</select> </td></tr>" +
        "<tr><td></td><td><input type='button' value='Done' onclick='saveData()'/></td></tr>";

    //Opens the description of the marker.
    var infowindow = new google.maps.InfoWindow({
        content: html
    });
    // Listens to click event on marker
//SRC: https://developers.google.com/maps/documentation/javascript/markers
    markers.forEach(function(marker)
    {
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });
    });

    //legend
    //SRC: https://developers.google.com/maps/documentation/javascript/adding-a-legend
    var redmarker = src='https://developers.google.com/maps/documentation/javascript/images/default-marker.png?hl=de';
    var sport = src='http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
    var icons = {
        redmarker: {
            name: 'Location',
            icon: redmarker
        },
        sport: {
            name: 'Sport',
            icon: sport
        },
        invite: {
            name: 'Invite',
            icon: invite
        }
    };

    var legend = document.getElementById('legend');
    for (var key in icons) {
        var type = icons[key];
        var name = type.name;
        var icon = type.icon;
        var div = document.createElement('div');
        div.innerHTML = '<img src="' + icon + '"> ' + name;
        legend.appendChild(div);
    }

    map.controls[google.maps.ControlPosition.RIGHT_TOP].push(legend);
    /*
    // listens if a certain key is pressed then reacts
    google.maps.event.addListener(map, 'keypress', function(keyPressed))
    {

        function keyPressed(s) {
            if (s.code === 's')      // only if the key is "s"...
                addMarker(event.latLng, map);

            function addMarker(location, map) {
                var markerr = new google.maps.Marker({
                    position: location,
                    map: map,
                    icon: invite,
                    title: "Join me!"


                });// ...add a new task (using same handler as the button)
                return false;               // no propagation or default
            }
        }
    }
    */
    //////// test database
    //SRC: https://developers.google.com/maps/documentation/javascript/mysql-to-maps?hl=de

    /*
        function saveData() {
            var name = escape(document.getElementById("name").value);
            var keywords= escape(document.getElementById("keywords").value);
            var type = document.getElementById("type").value;
            var latlng = marker.getPosition();

            var url = "phpsqlinfo_addrow.php?name=" + name + keywords +
                 type + "&lat=" + latlng.lat() + "&lng=" + latlng.lng();
            downloadUrl(url, function(data, responseCode) {
                if (responseCode == 200 && data.length >= 1) {
                    infowindow.close();
                    document.getElementById("message").innerHTML = "Location added.";
                }
            });
        }

        function downloadUrl(url, callback) {
            var request = window.ActiveXObject ?
                new ActiveXObject('Microsoft.XMLHTTP') :
                new XMLHttpRequest;

            request.onreadystatechange = function() {
                if (request.readyState == 4) {
                    request.onreadystatechange = doNothing;
                    callback(request.responseText, request.status);
                }
            };

            request.open('GET', url, true);
            request.send(null);
        }

        function doNothing() {}
    */


}