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
  for (let i = 0; i < list.length; i++) {
    studentArray.push(list[i]);
  }  return studentArray;
}

const mainArray = makeStudentArray(li);

//console.log(mainArray);

//Main function
//function showPage() {

//This function contains the logic behind setting ten li elements per page. Math.ceil assures that there will be six pages for 54 items.

function getNumberOfPages(array) {
  return Math.ceil(array.length / studentsPerPage);
}

const numPages = getNumberOfPages(mainArray);

console.log(numPages);

//This function sets how many li elements appear per page. Example- page 1: begin = (1-1) * 10 = 0. End = 0 + 10. pageArray lists li[0-10].
//--WORKING

console.log(currentPage);

function loadList(page) {
  let begin = ((page - 1) * studentsPerPage);
  let end = begin + studentsPerPage;
  return mainArray.slice(begin, end);
}

const pageOne = loadList(1);
const pageTwo = loadList(2);
const pageThree = loadList(3);
const pageFour = loadList(4);
const pageFive = loadList(5);
const pageSix = loadList(6);


//--WORKING
//This is the logic to display the li items onto the page
function createList(pageNum) {
  if (pageNum === 1) {
    pageOne.style.display = "block";
    pageTwo.style.display = "none";
    pageThree.style.display = "none";
    pageFour.style.display = "none";
    pageFive.style.display = "none";
    pageSix.style.display = "none";
  } else if (pageNum === 2) {
      pageOne.style.display = "none";
      pageTwo.style.display = "block";
      pageThree.style.display = "none";
      pageFour.style.display = "none";
      pageFive.style.display = "none";
      pageSix.style.display = "none"; 
  } else if (pageNum === 3) {
      pageOne.style.display = "none";
      pageTwo.style.display = "none";
      pageThree.style.display = "block";
      pageFour.style.display = "none";
      pageFive.style.display = "none";
      pageSix.style.display = "none";
  } else if (pageNum === 4) {
      pageOne.style.display = "none";
      pageTwo.style.display = "none";
      pageThree.style.display = "none";
      pageFour.style.display = "block";
      pageFive.style.display = "none";
      pageSix.style.display = "none";
  } else if (pageNum === 5) {
      pageOne.style.display = "none";
      pageTwo.style.display = "none";
      pageThree.style.display = "none";
      pageFour.style.display = "none";
      pageFive.style.display = "block";
      pageSix.style.display = "none";
  } else if (pageNum === 6) {
      pageOne.style.display = "none";
      pageTwo.style.display = "none";
      pageThree.style.display = "none";
      pageFour.style.display = "none";
      pageFive.style.display = "none";
      pageSix.style.display = "block";
  }  
}

console.log(createList(pageSix));

 /*
}

/***
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

/*
function appendPageLinks() {
  const pg1 = document.createElement("BUTTON");
  pg1.id = "first";
  pg1.value = pageOne();
  pg1.innerHTML = "1";
  ul.appendChild(pg1);
  
  const pg2 = document.createElement("BUTTON");
  pg2.id = "second";
  pg2.value = pageTwo();
  pg2.innerHTML = "2";
  ul.appendChild(pg2);
  
  const pg3 = document.createElement("BUTTON");
  pg3.id = "third";
  pg3.value = pageThree();
  pg3.innerHTML = "3";
  ul.appendChild(pg3);
  
  const pg4 = document.createElement("BUTTON");
  pg4.id = "fourth";
  pg4.value = pageFour();
  pg4.innerHTML = "4";
  ul.appendChild(pg4);
  
  const pg5 = document.createElement("BUTTON");
  pg5.id = "fifth";
  pg5.value = pageFive();
  pg5.innerHTML = "5";
  ul.appendChild(pg5);
  
  const pg6 = document.createElement("BUTTON");
  pg6.id = "sixth";
  pg6.value = pageSix();
  pg6.innerHTML = "6";
  ul.appendChild(pg6);
}

appendPageLinks();

*/
//console.log(showPage());
//^Throws undefined error
