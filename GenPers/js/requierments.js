	var checkNavigator=function(){
	// Check for the various File API support.
	if (window.File && window.FileReader && window.FileList && window.Blob) {
	  	console.log('Great success! All the File APIs are supported.');
		document.getElementById("mainTable").style.display='block';
		document.getElementById("mainImage").style.display='none';
	} else {
		document.getElementById("mainTable").style.display='none';
		document.getElementById("mainImage").style.display='block';
	  alert('The File APIs are not fully supported in this browser.');
	}
}
