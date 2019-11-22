/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

const ul = document.getElementsByClassName("student-list");
const li = document.getElementsByClassName("student-item");
const wholePage = document.querySelector(".page");
const studentsPerPage = 10;
let currentPage = 1;
let numberOfPages = 1;
let studentArray = [];
let pageArray = [];


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

//Right now, the function sets all the students into an [array]
//Still needs conditionals

function makeStudentArray(list) {
  for (let i = 0; i < li.length; i++) {
  studentArray = studentArray.push(li[i]);
} return studentArray;
}
/*
//Main function
function showPage() {
//This function creates a loop that assigns all the li elements into an array

        
//This function contains the logic behind setting ten li elements per page. Math.ceil assures that there will be six pages for 54 items.
  function getNumberOfPages(array) {
    return Math.ceil(studentArray.length / studentsPerPage);
    }
    
 /* function pageOne() {
    currentPage += 1;
    loadList();
}
    
  function pageTwo() {
    currentPage += 2;
    loadList();
}

  function pageThree() {
    currentPage += 3;
    loadList();
}

  function pageFour() {
    currentPage += 4;
    loadList();
}

  function pageFive() {
    currentPage += 5;
    loadList();
}

  function pageSix() {
    currentPage += 6;
    loadList(); 
}*/
//This function sets how many li elements appear per page. Example- page 1: begin = (1-1) * 10 = 0. End = 0 + 10. pageArray lists li[0-10].
 /*
  function loadList() {
    let begin = ((currentPage - 1) * studentsPerPage);
    let end = begin + studentsPerPage;
    pageArray = studentArray.slice(begin, end);
    return pageArray;
}

//This is the logic to display the li items onto the page
  function createList() {
    ul.innerHTML = "";
    for (let j = 0; j < pageArray.length; j++) {
    ul.innerHTML += pageArray[j] + "<br>";
}
}
        
}
        
/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
/*
function appendPageLinks() {
  const pg1 = document.create("button");
  pg1.id = "first";
  pg1.value = pageOne();
  pg1.innerHTML = "1";
  ul.appendChild(pg1);
  
  const pg2 = document.create("button");
  pg1.id = "second";
  pg1.value = pageTwo();
  pg1.innerHTML = "2";
  ul.appendChild(pg2);
  
  const pg3 = document.create("button");
  pg1.id = "third";
  pg1.value = pageThree();
  pg1.innerHTML = "3";
  ul.appendChild(pg3);
  
  const pg4 = document.create("button");
  pg1.id = "fourth";
  pg1.value = pageFour();
  pg1.innerHTML = "4";
  ul.appendChild(pg4);
  
  const pg5 = document.create("button");
  pg1.id = "fifth";
  pg1.value = pageFive();
  pg1.innerHTML = "5";
  ul.appendChild(pg5);
  
  const pg6 = document.create("button");
  pg1.id = "sixth";
  pg1.value = pageSix();
  pg1.innerHTML = "6";
  ul.appendChild(pg6);
}


*/

//console.log(showPage());
//^Throws undefined error
