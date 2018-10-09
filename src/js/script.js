/**
 * @author phgorman
 */

function openPanel(element){
	//assign content of panel here
	
	//determine where to place the panel
	if(window.innerWidth >= 992){
		//alert(element.getBoundingClientRect().bottom);
	}
	else if(window.innerWidth >= 768){
		//alert(element.getBoundingClientRect().bottom);
	}
	else{
		//alert(element.getBoundingClientRect().bottom);
	}
	
	document.getElementById("panel").style.top = (element.getBoundingClientRect().bottom + 10 + window.pageYOffset) + "px";
	document.getElementById("panel").style.display = "block";
}

function closePanel(){
	document.getElementById("panel").style.display = "none";
}
