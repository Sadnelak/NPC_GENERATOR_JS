var newDomaine=function(){
	return {nom:"",description:"",caracteres:[]};
}

var newCaractere=function(){
	return {nom:"",description:"", probaTotal:"", aspects:[]};
}

var newAspect=function(){
	return {nom:"",description:"",proba:""}
}

var setProbaTotal=function(carac){
	var total=0;
	var aspects = carac.aspects;
	for(var i=0;i<aspects.length;i++){
		total+=aspects[i].proba;
	}
	carac.probaTotal=total;
	return carac;
}


var isSomething=function(item){
	return item!=null && item!=undefined && item!='';
}

var loadAndContructPersonality = function(){
    var lines=fileContent.split('\n');
    personnalite=[];
    var domaine = newDomaine();
    var carac =newCaractere();
    var items = [];
    var previousLineStart="DEBUT";
    for (var i = 0; i<lines.length;i++) {
    	var line = lines[i];
    	var tab = line.split(SEPARATEUR);
    	var currentLineStart="";
    	if(tab.length>0){
       		currentLineStart=line.substring(0,1);
       		if(currentLineStart!=DOMAINE && currentLineStart!=CARACTERE &&isSomething(currentLineStart)){
       			currentLineStart=ASPECT;
       			var aspect = newAspect();
       			try{
       				aspect.proba=parseInt(tab[0]);
       				aspect.nom=tab[1];
       				aspect.description=tab[2];
       			}catch(e){
       				console.log("pas de description pour l'aspect "+aspect.nom);
       			}
       			if(isSomething(aspect.nom)){
       				carac.aspects.push(aspect);       				
       			}

       		}


       		if(currentLineStart==CARACTERE){
       			if(isSomething(carac.nom) && isSomething(domaine.nom)){
       				carac = setProbaTotal(carac);
       				domaine.caracteres.push(carac);
       			}
       			carac = newCaractere();
       			try{
       				carac.nom=tab[1];
       				carac.description=tab[2];
       			}catch(e){
       				console.log("pas de description pour le caractère "+aspect.nom);
       			}
       		}

       		if(currentLineStart==DOMAINE){
       			if(isSomething(carac.nom) && isSomething(domaine.nom)){
       				carac = setProbaTotal(carac);
       				domaine.caracteres.push(carac);
       			}
       			if(isSomething(domaine.nom)){
       				personnalite.push(domaine);
       			}
       			domaine = newDomaine();
       			try{
       				domaine.nom=tab[1];
       				domaine.description=tab[2];
       			}catch(e){
       				console.log("pas de description pour le domaine "+domaine.nom);
       			}
       		}

    	}

    previousLineStart=currentLineStart;
	}
	if(isSomething(domaine.nom)){
    	personnalite.push(domaine);
    }
	console.log(personnalite);
}
