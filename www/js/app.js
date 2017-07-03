/*
 * Please see the included README.md file for license terms and conditions.
 */


// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */

// This file contains your event handlers, the center of your application.
// NOTE: see app.initEvents() in init-app.js for event handler initialization code.

function getInfo() {
    $(document).ready(function() {
        console.log("ready");
        var url = "http://192.168.1.1/osc/info";
        $.get(url, function(data, status){
            alert(JSON.stringify(data));
        });
    });    
}

function startSession() {
jQuery.ajax({
    url: 'http://192.168.1.1:80/osc/commands/execute',
    dataType: 'binary',
    type: 'POST',
    data: JSON.stringify({
      "name": "camera.startSession",
      "parameters": {}
    }),
    complete: function (data) {
      alert('complete' + JSON.stringify(data));
    },
    success: function(data){
      alert('success' + JSON.stringify(data));
    }
  });
}

function setApi2() {
jQuery.ajax({
    url: 'http://192.168.1.1:80/osc/commands/execute',
    dataType: 'binary',
    type: 'POST',
    data: JSON.stringify({
      "name": "camera.setOptions",
      "parameters": {"sessionId": "SID_0001",
                    "options": {
                        "clientVersion": 2
                    }}
    }),
    complete: function (data) {
      alert('complete' + JSON.stringify(data));
    },
    success: function(data){
      alert('success' + JSON.stringify(data));
    }
  });
}

function takePicture() {
jQuery.ajax({
    url: 'http://192.168.1.1:80/osc/commands/execute',
    dataType: 'binary',
    type: 'POST',
    data: JSON.stringify({
      "name": "camera.takePicture",
      "parameters": {}
    }),
    complete: function (data) {
      alert('complete' + JSON.stringify(data));
    },
    success: function(data){
      alert('success' + JSON.stringify(data));
    }
  });
}


function myEventHandler() {
    "use strict" ;

    var ua = navigator.userAgent ;
    var str ;

    if( window.Cordova && dev.isDeviceReady.c_cordova_ready__ ) {
            startSession();
    }
    else if( window.intel && intel.xdk && dev.isDeviceReady.d_xdk_ready______ ) {
            str = "It worked! Intel XDK device ready detected at " + dev.isDeviceReady.d_xdk_ready______ + " milliseconds!" ;
    }
    else {
        str = "Bad device ready, or none available because we're running in a browser." ;
    }

    }

function myEventHandler2() {
    "use strict" ;

    var ua = navigator.userAgent ;
    var str ;

    if( window.Cordova && dev.isDeviceReady.c_cordova_ready__ ) {
            getInfo();
    }
    else if( window.intel && intel.xdk && dev.isDeviceReady.d_xdk_ready______ ) {
            str = "It worked! Intel XDK device ready detected at " + dev.isDeviceReady.d_xdk_ready______ + " milliseconds!" ;
    }
    else {
        str = "Bad device ready, or none available because we're running in a browser." ;
    }

}

function myEventHandler3() {
    "use strict" ;

    var ua = navigator.userAgent ;
    var str ;

    if( window.Cordova && dev.isDeviceReady.c_cordova_ready__ ) {
            takePicture();
    }
    else if( window.intel && intel.xdk && dev.isDeviceReady.d_xdk_ready______ ) {
            str = "It worked! Intel XDK device ready detected at " + dev.isDeviceReady.d_xdk_ready______ + " milliseconds!" ;
    }
    else {
        str = "Bad device ready, or none available because we're running in a browser." ;
    }

}

function myEventHandler4() {
    "use strict" ;

    var ua = navigator.userAgent ;
    var str ;

    if( window.Cordova && dev.isDeviceReady.c_cordova_ready__ ) {
            setApi2();
    }
    else if( window.intel && intel.xdk && dev.isDeviceReady.d_xdk_ready______ ) {
            str = "It worked! Intel XDK device ready detected at " + dev.isDeviceReady.d_xdk_ready______ + " milliseconds!" ;
    }
    else {
        str = "Bad device ready, or none available because we're running in a browser." ;
    }

}

// ...additional event handlers here...
