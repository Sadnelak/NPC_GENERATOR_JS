
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
    var row = document.createElement("tr");
 	var tdDomaine = createCell(tabDom[i],"domaine");


 	
    row.appendChild(tdDomaine);
    
    var cellCaracs = document.createElement("td");
    cellCaracs.appendChild(buildTableauCarac(tabDom[i].caracteres));
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


var buildTableauCarac=function(caracteres){
	var tblCaracs = document.createElement("table");
    var tblCaracsBody = document.createElement("tbody");
    
    for (var j = 0; j < caracteres.length; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var row = document.createElement("tr");
      var tdCarac =createCell(caracteres[j],"carac");
      
      var tdAspects =document.createElement("td");
      var cellAspects = isEditMode==true ?  buildInputList(caracteres[j].aspects) : buildSelector(caracteres[j].aspects);
      tdAspects.appendChild(cellAspects);
      
      row.appendChild(tdCarac);
      row.appendChild(tdAspects);
      tblCaracsBody.appendChild(row);
    }
    completeWithButtonAdd(tblCaracs);
    tblCaracs.appendChild(tblCaracsBody);
    return tblCaracs;
}

var buildSelector=function(aspects){
	var selector = document.createElement("select");
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

var buildInputList=function(aspects){
	var list = document.createElement("ul");
	
	for(var i =0; i<aspects.length;i++){
		var item=document.createElement("li");
		list.appendChild(item);
		var buttonRemove=document.createElement("button");
		buttonRemove.value="-";
		buttonRemove.onclick="removeItem("+item+");";
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
	var newItem=document.createElement("li");
	var buttonAdd=document.createElement("button");
	buttonAdd.value="+";
	buttonAdd.onclick=addAspect(list);
	newItem.appendChild(buttonAdd);
	list.appendChild(newItem);
	return list;	
}

var completeWithButtonAdd=function(element){

}


var removeItem=function(element){
	var parent = element.parentNode;
	parent.removeChild(element);

}

var addAspect=function(element){

}
