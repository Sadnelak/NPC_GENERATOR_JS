var ouvrirFichier =function(){
	alert('hey');
};

var loadFile =function(){
	
	alert('hey');
};

var createTable = function(){
	var tab=document.getELementById("table_pers");

};

var gestionBouton=function(){
	var id="gestionBouton";
	var boutonGestion = document.getElementById(id);
	var boutonSave = document.getElementById("saveModif");
	this.isEditMode=!this.isEditMode;
	if(this.isEditMode){
		boutonGestion.innerText="Passer en Mode Generation";
		boutonSave.removeAttribute("disabled");
	}else{
		boutonSave.setAttribute("disabled","disabled");
		boutonGestion.innerText="Passer en Mode Edition";
	}
	 buildTableHTML();
}