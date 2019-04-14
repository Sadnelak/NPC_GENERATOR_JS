
var buildTableHTML=function(){
	var idTable="table_personalite";
	var zone_pers = document.getElementById('zone_pers');
	// creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  tbl.id=idTable;
  var tblBody = document.createElement("tbody");
  var tabDom =personnalite;
  // creating all cells
  for (var i = 0; i < tabDom.length; i++) {
    // creates a table row
    var idRow="row"+i;
    var row = document.createElement("tr");
    row.id=idRow;
 	var tdDomaine = createCell(tabDom[i],"domaine");


 	
    row.appendChild(tdDomaine);
    
    var cellCaracs = document.createElement("td");
    cellCaracs.appendChild(buildTableauCarac(tabDom[i].caracteres,idRow));
 	row.appendChild(cellCaracs);
    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
  completeWithButtonAdd(tblBody);
 
  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  var previousTbl =document.getElementById(idTable);
  if(previousTbl==null || previousTbl==undefined){
  	zone_pers.appendChild(tbl);	
  }else{
  	zone_pers.replaceChild(tbl,previousTbl);
  }
  
  // sets the border attribute of tbl to 2;
  //tbl.setAttribute("border", "2");

}

var createCell=function(objet,classe){
	var td=document.createElement("td");
	if(isEditMode==true){
		td.draggable=true;
		var nom =document.createElement("input");
		var desc=document.createElement("textarea");
		nom.value=objet.nom;
		nom.title="Nom de l'élément";
		desc.title="Description de l'élément";
		desc.value=objet.description ==undefined ?"" :objet.description;
		td.appendChild(nom);
		td.appendChild(desc);
	}else{
		td.setAttribute("title",objet.description ==undefined ?"" :objet.description);
		td.setAttribute("alt",objet.description ==undefined ?"" :objet.description);
		td.setAttribute("name",objet.nom);
		td.classList.add(classe);

	 	var cell = document.createTextNode(objet.nom);
	 	td.appendChild(cell);
 	}
    return td;
}


var buildTableauCarac=function(caracteres,idRow){
	var tblCaracs = document.createElement("table");
    var tblCaracsBody = document.createElement("tbody");
    
    for (var j = 0; j < caracteres.length; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var idCarac=idRow+"Carac"+j;
      var row = document.createElement("tr");
      row.id=idCarac;
      var tdCarac =createCell(caracteres[j],"carac");
      
      var tdAspects =document.createElement("td");
      var cellAspects = isEditMode==true ?  buildInputList(caracteres[j].aspects,idCarac) : buildSelector(caracteres[j].aspects,idCarac);
      tdAspects.appendChild(cellAspects);
      
      row.appendChild(tdCarac);
      row.appendChild(tdAspects);
      tblCaracsBody.appendChild(row);
    }
    completeWithButtonAdd(tblCaracs);
    tblCaracs.appendChild(tblCaracsBody);
    return tblCaracs;
}

var buildSelector=function(aspects,idCarac){
	var idAsp=idCarac+"Asp";
	var selector = document.createElement("select");
	selector.id=idAsp;
	selector.classList.add("aspect");

	var option0=document.createElement("option");
	option0.value=0;
	selector.appendChild(option0);
	for(var i =0; i<aspects.length;i++){
		var option=document.createElement("option");
		option.value=aspects[i].proba;
		option.innerHTML=aspects[i].nom;
		selector.appendChild(option);
	}

	return selector;
}

var buildInputList=function(aspects,idCarac){
	var list = document.createElement("ul");
	
	for(var i =0; i<aspects.length;i++){
		addAspect(i,list,aspects,idCarac);
	}
	var newItem=document.createElement("li");
	var buttonAdd=document.createElement("button");
	buttonAdd.innerText="+";
	buttonAdd.onclick=function(){addAspect(null,list,this);};
	newItem.appendChild(buttonAdd);
	list.appendChild(newItem);
	return list;	
}

var completeWithButtonAdd=function(element){

}


var removeItem=function(elementId){
	var element=document.getElementById(elementId);
	var ligne = element.parentNode;
	var parent = ligne.parentNode;
	parent.removeChild(ligne);

}

var addAspect=function(i,list,aspects,idCarac){
		var liPlus=null;
		if(i==null){
			liPlus=aspects.parentNode;
			i=list.childNodes.length;
			aspects=[];
			aspects[i]={nom:"",proba:1};
			idCarac=list.id;

		}
		var idLi=idCarac+"Asp"+i;

		var item=document.createElement("li");
		item.id=idLi;
		
		if(liPlus==null){
			list.appendChild(item);
		}else{
			list.replaceChild(item,liPlus);
			list.appendChild(liPlus);
		}
		var buttonRemove=document.createElement("button");
		buttonRemove.innerText="-";

		var buttonId=idLi+"remove";
		buttonRemove.id=buttonId;
		buttonRemove.onclick=function(){removeItem(this.id);};
		var input = document.createElement("input");
		input.title="nom de l'aspect";
		input.type="text";
		input.value=aspects[i].nom;

		var proba = document.createElement("input");
		proba.title="probabilité";
		proba.type="number";
		proba.min=1;
		proba.style.width="50px";
		proba.value=aspects[i].proba;

		item.appendChild(buttonRemove);
		item.appendChild(input);
		item.appendChild(proba);
}
