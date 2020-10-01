// HISTORY:
// 9/29/2020: Adding a comment to check "git push" functionality.

"use strict";

function pFind(input) {
    //	  var input, filter, ul, li, a, i, txtValue;
    var filter, ul, li, a, i, txtValue;
    var results = "";
    var isInt = 0;
    var divSR; // Div that will contain the search results
    
    if (input.value == "") {
	window.location.reload();
	return;
    }
    // Check to see if input numbers are in range of 1-20
    if (isFinite(input.value)) {
	var num = Number(input.value);
	if (num < 0 || num > 20) {
	    alert("ERROR: Invalid search value " + num + ": expecting 1-20.");
	    return;
	}
    }
    divSR = document.getElementById("divSearchResults");
    divSR.style.display = "block";
    var ulSR = document.getElementById("ulSR");
    if (ulSR != null) {
	ulSR.remove();
    }

    ulSR = document.createElement('ul');
    ulSR.setAttribute("id", "ulSR");
    divSR.appendChild(ulSR);
    
    //console.log("input=" + input.value);
    filter = input.value.toUpperCase();
    ul = document.getElementById("pUl");
    //	  //console.log("ul.length=" + ul.length);
    li = ul.getElementsByTagName("li");
    //console.log("li.length=" + li.length);
    for (i = 0; i < li.length; i++) {
        var h3 = li[i].getElementsByTagName("h3")[0];
	////console.log("h3.length=" + h3.length);	      
        txtValue = h3.textContent || h3.innerText;
	//	      results = results + "\n" + txtValue;
	//	      alert(results);
	//console.log("txtValue=" + txtValue + ", display=" + li[i].style.display);
	if (txtValue.toUpperCase().indexOf(filter) > -1) {
	    // Create a copy of it
	    var liClone = li[i].cloneNode(true);	    
	    ulSR.appendChild(liClone);
	    liClone.style.display = "block";
	    liClone.style.background = "white";
//	    liClone.style.margin-left = "0";
//	    liClone.style.padding = "0";
	    
	    //console.log("Found match at i=" + i);
//	    li[i].style.display = "block";
	    //li[i].style.border = "5px solid red;";
//	    h3.style.display = "";
//	    results = results + "\n" + txtValue;
        } else {
//	    h3.style.display = "none";
//	    li[i].style.display = "none";
        }
//	//console.log("txtValue=" + txtValue + ", display=" + li[i].style.display);
    }
    //console.log(divSR);
    
//    //alert(results);
//    searchResultsStr = new String(results);
//    //alert(searchResultsStr);
//    //console.log(searchResultsStr);
//    
//    var psr = document.getElementById("pSearchResults");
//    psr.innerHTML = results;
//    //console.log(psr.innerHTML);
//
//    var modal = document.getElementById("myModal");
//    //console.log(modal);
//    modal.style.display = "block";
//        
//    // Get the button that opens the modal
//    var btn = document.getElementById("myBtn");
//    //console.log(btn);
//    
//    // Get the <span> element that closes the modal
//    var span = document.getElementsByClassName("close")[0];
//
//    // When the user clicks the button, open the modal 
//    btn.onclick = function() {
//	modal.style.display = "block";
//	//console.log("in btn.onclick");
//    }
//
//    // When the user clicks on <span> (x), close the modal
//    span.onclick = function() {
//	modal.style.display = "none";
//	//console.log("in span.onclick");
//    }
//
    // When the user clicks anywhere outside of the modal, close it
//    window.onclick = function(event) {
//	if (event.target == modal) {
//	    modal.style.display = "none";
//	    //console.log("in window.onclick");
//	}
//    }
}
