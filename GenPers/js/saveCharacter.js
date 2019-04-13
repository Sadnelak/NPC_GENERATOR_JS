var saveCharacter = function(){
	var nomFichier = prompt("nom du fichier : ","newCaractere");


	var txtToExport="";
	var domaine = document.querySelectorAll(".domaine");
	for(var i=0;i<domaine.length;i++){
		var carac = domaine[i].parentElement.querySelectorAll(".carac");
		txtToExport+=  "\n"+domaine[i].getAttribute('name') +"\n";
		for(var y=0;y<carac.length;y++){
			txtToExport+= carac[y].getAttribute('name')+" : ";
			var aspect = carac[y].querySelector("[selected='selected']");
			txtToExport+= aspect.innerHTML +"\n";
		}
	}
	console.log(txtToExport);
	if(nomFichier==null || nomFichier==undefined || nomFichier==''){
		nomFichier="NewPersonalite.txt";
	}else {
		var fileTab =nomFichier.split(".");
		if(fileTab.length == 1){
			nomFichier+=".txt";
		}
	}
	download(nomFichier,txtToExport);
}


function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

// Start file download.
