/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

const li = document.getElementsByClassName("student-item");
const studentsPerPage = 10;


function showPage(list, page) {
//Sets number of list items per page; example: page (1-1) * 10 = 0... 0 + 10 = 10... 0-10 items
    
    let begin = (page-1) * studentsPerPage;    
    let end = begin + studentsPerPage;
    for (let i = 0; i < list.length; i++) {     
        if (i >= begin && i < end) {            
            list[i].style.display = "block";
        } else {
            list[i].style.display = "none";
        }
    }
}


/***
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/



function appendPageLinks(list) {

        
      let totalPages = Math.ceil(list.length / studentsPerPage);
      const newDiv = document.createElement("DIV");
      newDiv.className = "pagination";
        
    //otherDiv must be set to [0] because it is a collection of HTML elements, not one node in itself
      let otherDiv = document.getElementsByClassName("page")[0];
      let ul = document.createElement("UL");
      newDiv.appendChild(ul);
      otherDiv.appendChild(newDiv);
        
    //Loop is to set the number of pages based on totalPages, then create a page button corresponding to each
      for ( let i = 0; i < totalPages; i++) {
 
      let button = document.createElement("LI");
      let a = document.createElement("A");
      ul.appendChild(button);
      button.appendChild(a);
      a.textContent = i + 1;
      a.href = "#";
        
        //Adding function to the buttons
        button.addEventListener ( "click", (e) => {
          if (e.target.className === "pagination") {
            const pageButton = e.target;
            if (pageButton.textContent === "1") {
                showPage(li, 1);
            } else if (pageButton.textContent === "2") {
                showPage(li, 2);
            } else if (pageButton.textContent === "3") {
                showPage(li, 3);
            } else if (pageButton.textContent === "4") {
                showPage(li, 4);
            } else if (pageButton.textContent === "5") {
                showPage(li, 5);
            } else if (pageButton.textContent === "6") {
                showPage(li, 6);
            }
        }
      });

    }   
}

appendPageLinks(li);
