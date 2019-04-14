var randomizeAll=function(){
	var tabHTML =document.getElementById("table_personalite");
	if(tabHTML!=null && tabHTML!=undefined && tabHTML!=""){
		var comboList=document.querySelectorAll(".aspect");
		for(var i=0; i<comboList.length;i++){

			var combo = comboList[i];

			var probaMax = 0;

			var options=combo.querySelectorAll("option");
			for(var j=0; j<options.length;j++){
				probaMax+=parseInt(options[j].value);
			}

			var probaToSelect=1+Math.floor(Math.random() * Math.floor(probaMax));
			console.log('max '+probaMax +' select '+probaToSelect);
			
			var total =0;
			for(var y=0; y<options.length;y++){
				options[y].removeAttribute("selected");
			}
			var idx=0;
			for(var y=0; y<options.length;y++){
				total+=parseInt(options[y].value);

				console.log(total);
				if(total>probaToSelect){
					if(y==2){
						console.log("min");
					}
					if(y==options.length){
						console.log("max");	
					}
					idx=y-1;
					console.log("selected");
					break;
				}else if (total==probaToSelect){
					idx=y;
					if(y==1){
						console.log("min");
					}
					if(y==options.length-1){
						console.log("max");	
					}
					break;
				}
			}
			options[idx].setAttribute("selected","selected");			

		}
	}else{
		alert("Veuillez charger un fichier d'abord.");
	}
}