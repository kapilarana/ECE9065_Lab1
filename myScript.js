// HISTORY:
// 9/29/2020: Adding a comment to check "git push" functionality.

function pFindByName2() {
    window.alert("In pFindByName");
    //	  var x = document.getElementById("Ivysaur");
    //	  var x = document.getElementById("pUl");	  
    //	  window.alert(x.value);
    //	  if (x.style.display === "none") {
    //	      x.style.display = "block";
    //	  } else {
    //	      x.style.display = "none";
    //	  }
}

var searchResultsStr = "";

function pFind2(input, isInt) {
    var results = "New Text!";
    searchResultsStr = results;
    alert(searchResultsStr);
    console.log(searchResultsStr);
    
    var psr = document.getElementById("pSearchResults");
    psr.innerHTML = results;
    console.log(psr.innerHTML);

    var modal = document.getElementById("myModal");
    console.log(modal);
    modal.style.display = "block";
}

function pFind(input, isInt) {
    //	  var input, filter, ul, li, a, i, txtValue;
    var filter, ul, li, a, i, txtValue;
    var results = "", resultCnt = 0;
    
    //input = document.getElementById("pName");
    console.log("input=" + input.value);
    filter = input.value.toUpperCase();
    ul = document.getElementById("pUl");
    //	  console.log("ul.length=" + ul.length);
    li = ul.getElementsByTagName("li");
    console.log("li.length=" + li.length);
    for (i = 0; i < li.length; i++) {
        h3 = li[i].getElementsByTagName("h3")[0];
	//console.log("h3.length=" + h3.length);	      
        txtValue = h3.textContent || h3.innerText;
	//	      results = results + "\n" + txtValue;
	//	      alert(results);
	console.log("txtValue=" + txtValue + ", display=" + li[i].style.display);
	if (txtValue.toUpperCase().indexOf(filter) > -1) {
	    console.log("Found match at i=" + i);
	    li[i].style.display = "block";
	    //li[i].style.border = "5px solid red;";
	    h3.style.display = "";
	    if (resultCnt < 5) {
		results = results + "\n" + txtValue;
	    } else if (resultCnt == 5) {
		results = results + "\n" + "...";
	    }
	    resultCnt++;
        } else {
	    h3.style.display = "none";
	    li[i].style.display = "none";
        }
	console.log("txtValue=" + txtValue + ", display=" + li[i].style.display);
    }
    //alert(results);
    searchResultsStr = results;
    alert(searchResultsStr);
    console.log(searchResultsStr);
    
    var psr = document.getElementById("pSearchResults");
    psr.innerHTML = results;
    console.log(psr.innerHTML);

    var modal = document.getElementById("myModal");
    console.log(modal);
    modal.style.display = "block";
        
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    console.log(btn);
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
	modal.style.display = "block";
	console.log("in btn.onclick");
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
	modal.style.display = "none";
	console.log("in span.onclick");
    }

    // When the user clicks anywhere outside of the modal, close it
//    window.onclick = function(event) {
//	if (event.target == modal) {
//	    modal.style.display = "none";
//	    console.log("in window.onclick");
//	}
//    }
}

console.log(searchResultsStr);

function openModal()
{
    // Display the results in "myModal"
    // Get the modal
    var modal = document.getElementById("myModal");
    console.log(modal);

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    console.log(btn);

    var psr = document.getElementById("pSearchResults");
    console.log(psr);
    psr.innerHTML = "New Text!"; //searchResultsStr;
    console.log(searchResultsStr);

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
	modal.style.display = "block";
	console.log("in btn.onclick");
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
	modal.style.display = "none";
	console.log("in span.onclick");
    }

    // When the user clicks anywhere outside of the modal, close it
//    window.onclick = function(event) {
//	if (event.target == modal) {
//	    modal.style.display = "none";
//	    console.log("in window.onclick");
//	}
//    }
}
