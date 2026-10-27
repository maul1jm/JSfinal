/*Name this external file gallery.js*/

function upDate(previewPic){

console.log("mouse over works");

document.getElementById('image').innerHTML = previewPic.alt; 
document.getElementById('image').style.backgroundImage = "url('" + previewPic.src +"')"; 

	}
 
	function unDo(){
        console.log("mouse out works");

document.getElementById('image').style.backgroundImage = '';
document.getElementById('image').innerHTML = "Hover over an image below to display here.";
		
	}

//keyboard functionality of above 

function tabFocus(previewPic){
    console.log("focus works");

document.getElementById('image').innerHTML = previewPic.alt; 
document.getElementById('image').style.backgroundImage = "url('" + previewPic.src +"')"; 


}

function tabBlur(){
 
    console.log("blur works");


document.getElementById('image').style.backgroundImage = '';
document.getElementById('image').innerHTML = "Hover over an image below to display here.";
		
	}

function tabRestart(){

	currentImages = document.querySelectorAll(".preview")
	for (var i = 0; i < currentImages.length; i++){

	console.log("Image "+ i)

	currentImages[i].setAttribute("tabindex", "0")

	}	

}


	
