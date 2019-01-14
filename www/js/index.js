

jQuery.fn.center = function() {
	console.log("center");
	//this.css("position", "absolute");
	console.log($(window).height() + "=" + this.height() + " scroll=" + $(window).scrollTop());
	this.css("top", ($(window).height() - this.height()) / 2 + $(window).scrollTop() + "px");
	this.css("left", ($(window).width() - this.width()) / 2 + $(window).scrollLeft() + "px");
	return this;
};
	
$(document).ready(function(){

	console.log("start");


	//$("#app").center();


});

$( document ).delegate("#home", "pageinit", function() {
	document.addEventListener("orientationchange", updateOrientation);
	//alert('A page with an id of "aboutPage" was just created by jQuery Mobile!');
});

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
	//alert($.mobile.activePage);
    if ($.event.special.orientationchange.orientation() == "portrait") {
        //alert('portrait');
    } else {
        //alert('landscape');
    }
	//$('#home').page('destroy').page();
	//$.mobile.trigger( "pagecreate" );
	//$.mobile.changePage();
	
	window.location.reload(); 
	//$("#home").page(); - to initialize page widget
	//$("#home").page('refresh'); - to refresh it
	//trigger("create");
	//trigger("updatelayout");
	
	// Page refresh
	//$("#home").trigger('pagecreate');
	//$("#home").listview('refresh');
}



function loadPDF(URL) { 
	console.log(URL);
	loadChildBrowser(false, URL); //false = android , true = iOS
}
function loadChildBrowser(isInternal, URL) { 
            if(isInternal){ 
                    //var strPath = window.location.href; 
                    //var path = strPath.substr(0,strPath.lastIndexOf('/')) + '/' + URL; 
					//console.log(encodeURI(path));
					cordova.InAppBrowser.open(URL,'_blank','closebuttoncaption=< Terug,toolbar=yes');
                    //Cordova.exec("ChildBrowserCommand.showWebPage", encodeURI(path) ); 
            } 
            else{ 
					var uri = 'www/' + URL

					// window.FilePath.resolveNativePath(uri, function(fileEntry) {
					// 	console.log(JSON.stringify(fileEntry));
					// }, function(evt) {
					// 	console.log(JSON.stringify(evt));
					// });

console.log("File url="+cordova.file.applicationDirectory +  uri); 

                    window.resolveLocalFileSystemURL(cordova.file.applicationDirectory +  uri, 
						function(fileEntry) {
console.log(fileEntry.toInternalURL());
console.log(fileEntry.toURL());
					    //window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function(dirEntry) {
console.log("URL2");
// 					        fileEntry.copyTo(dirEntry, uri.split('/').pop(), function(newFileEntry) {
// console.log(newFileEntry.nativeURL);
// 					            //window.open(newFileEntry.nativeURL, '_system');
								cordova.plugins.fileOpener2.open(fileEntry.toInternalURL(),'application/pdf');
//					        });
					    //});
					}, function(evt) {
						alert("Problem opening catalogus \n" +JSON.stringify(evt));
						console.log(JSON.stringify(evt));
					});
					
					
            } 
    }
