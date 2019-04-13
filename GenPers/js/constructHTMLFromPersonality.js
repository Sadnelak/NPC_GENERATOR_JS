var constructHTML=function(){
	var zone_pers = document.getElementById('zone_pers');
	var inner_html="<table id='table_personalite'><tbody>"
	var tabDom =personnalite;
	for(var i=0;i<tabDom.length;i++){
		inner_html+="<tr><td class='domaine' title='"+tabDom[i].description+"' alt='"+tabDom[i].description+"' name='"+tabDom[i].nom+"'>"+tabDom[i].nom+"</td>";
		var tabCarac=tabDom[i].caracteres;
		inner_html+="<td><table>";
		for(var j=0;j<tabCarac.length;j++){
			inner_html+="<tr><td class='carac' title='"+tabCarac[j].description+"' alt='"+tabCarac[j].description+"' name='"+tabCarac[j].nom+"'>"+tabCarac[j].nom+"<input type='number' style='display:none;' value='"+tabCarac[j].probaTotal+"' />";
			inner_html+="<select class='aspect'><option value='0'></option>";
			var tabAsp = tabCarac[j].aspects;
			for(var y=0; y<tabAsp.length;y++){
				inner_html+="<option value="+tabAsp[y].proba+">"+tabAsp[y].nom+"</option>";
			}
			inner_html+="</select></td></tr>";
		}
		inner_html+="</table></td>";
		inner_html+="</td></tr>"
	}

	inner_html+="</tbody></table>"
	zone_pers.innerHTML=inner_html;
}

var buildTabDomaine = function(domaine){
	return "<tr><td class='domaine' title='"
	+domaine.description
	+"' alt='"
	+domaine.description
	+"' name='"+domaine.nom
	+"'>"
	+domaine.nom
	+"</td>";
}