/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var currentOrientation = null;
var app = {
    initialize: function() {
        this.bind();

		$.jQTouch({
		    icon: 'icon.png',
		    statusBar: 'black-translucent',
		    preloadImages: [
				'img/DB.jpg',
				'img/EM.jpg'
			]
		});

    },

    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
		document.addEventListener("orientationchange", updateOrientation);
    },
    deviceready: function() {
        // This is an event handler function, which means the scope is the event.
        // So, we must explicitly called `app.report()` instead of `this.report()`.
        app.report('deviceready');
    },
    report: function(id) {
        // Report the event in the console
        console.log("Report: " + id);

        // Toggle the state from "pending" to "complete" for the reported ID.
        // Accomplished by adding .hide to the pending element and removing
        // .hide from the complete element.
        document.querySelector('#' + id + ' .pending').className += ' hide';
        var completeElem = document.querySelector('#' + id + ' .complete');
        completeElem.className = completeElem.className.split('hide').join('');
    }
};

$('#EVT').tap(function() {
	loadPDF('pdf/EVT.pdf');
});
// $('#EMT').tap(function() {
// 	loadPDF('pdf/EMT.pdf');
// });
// $('#TCT').tap(function() {
// 	loadPDF('pdf/TCT.pdf');
// });

function updateOrientation(){

    switch(window.orientation) 
    {  
      case -90:
      case 90:
        console.log('landschap');
        break; 
      default:
        console.log('portret');
        break; 
    }
	//$('body,#jqt').add(window).trigger('orientationchange');
	//window.scrollTo(0, 0);
	//setTimeout(relala, 1000) //reset to top
	//setTimeout(scrollTo, 100, 0, 1);
	//document.location.reload();

}


function relala(){
	console.log("RESET");
	//window.scrollTo(0, 0);
	//document.location.reload();
}
// 
// $(function(){
//     $('body').bind('turn', function(event, info){
// 			console.log(info.orientation+"="+currentOrientation); // landscape or profile
// 			if(info.orientation != currentOrientation) {
// 				//document.location.reload(); //refresh
// 				//setTimeout(relala, 1000) //reset to top
// 				//relala();
// 			}
// 			
// 			currentOrientation = info.orientation;
// 			//$('body,#jqt').add(window).trigger('orientationchange');
//     });
//     
// });

function loadPDF(URL) { 
	console.log(URL);
	loadChildBrowser(true, URL);
}
function loadChildBrowser(isInternal, URL) { 
            if(isInternal){ 
                    var strPath = window.location.href; 
                    var path = strPath.substr(0,strPath.lastIndexOf('/')) + '/' + URL; 
					console.log(encodeURI(path));
					window.plugins.childBrowser.showWebPage(encodeURI(path));
                    //Cordova.exec("ChildBrowserCommand.showWebPage", encodeURI(path) ); 
            } 
            else{ 
                    Cordova.exec("ChildBrowserCommand.showWebPage", URL ); 
            } 
    }
