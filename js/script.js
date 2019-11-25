/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

const li = document.getElementsByClassName("student-item");
const studentsPerPage = 10;

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

//Right now, the function is targeting everything in the list, not just 1-10
//Goal is, if page = #, [i].display = block, else [i].display = hidden
//Six if statements, ending with an else
function showPage(list, page) {
    let begin = (page-1) * studentsPerPage;    //Sets number of list items per page; example: page (1-1) * 10 = 0... 0 + 10 = 10... 0-10 items
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

function appendPageLinks() {
    
    function createButton(page) {
        let ul = document.getElementsByClassName('student-list')[0]; //Must specify placement within ul to append; hence, [0]
        let button = document.createElement("BUTTON");
        button.textContent = page;
        ul.appendChild(button);
        button.addEventListener ( "click", (e) => {
            if (e.target.tagName === "BUTTON") {
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
    
    createButton("1");
    createButton("2");
    createButton("3");
    createButton("4");
    createButton("5");
    createButton("6");
}

appendPageLinks();

