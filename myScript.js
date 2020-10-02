// HISTORY:
// 9/29/2020: Adding a comment to check "git push" functionality.

"use strict";

function closeSearchResults()
{
    divSR = document.getElementById("divSearchResults");
    if (divSR != null) {
	divSR.remove();
    }

    window.reload();
}

function pFind(input) {
    var filter, ul, li, a, i, txtValue;
    var results = "";
    var divSR; // Div that will contain the search results

    var input = document.getElementById('pSearchStr');
    
    //console.log("input=" + input.value);
    if (input.value == "") {
	window.location.reload();
	return;
    }
    // Check to see if input numbers are in range of 1-20
    if (isFinite(input.value)) {
	var num = Number(input.value);
	if (num < 0 || num > 20) {
	    alert("ERROR: Invalid search value " + num + ": expecting 1-20.");
	    var str=input.value;
	    input.value = str.substring(0,str.length-1);
	    return;
	}
    }
    // Upper case all input characters
    filter = input.value.toUpperCase();

    // Find the unordered list
    ul = document.getElementById("pUl");

    divSR = document.getElementById("divSearchResults");
    if (divSR == null) {
//	divSR = document.createElement('div');
//	divSR.setAttribute("id", "divSearchResults");
	ul.insertAdjacentHTML('beforebegin', '<div id="divSearchResults"></div>');
	divSR = document.getElementById("divSearchResults");
    }
    
    divSR.style.display = "block";
    var ulSR = document.getElementById("ulSR");
    if (ulSR != null) {
	ulSR.remove();
    }

    ulSR = document.createElement('ul');
    ulSR.setAttribute("id", "ulSR");
    divSR.appendChild(ulSR);
    
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
}
