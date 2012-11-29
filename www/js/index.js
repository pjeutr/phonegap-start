

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
	if(true) { //alleen voor android
		cordova.exec(null, null, "PdfViewer", "showPdf", [URL]);
	} else {
		loadChildBrowser(true, URL);
	}	
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
