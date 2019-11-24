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
//Eventually, fit your code into this format
function showPage(list, page){

//Right now, the function sets all the students into an [array]

  function makeStudentArray(list) {
      let studentArray = [];
      for (let i = 0; i < list.length; i++) {
        studentArray.push(list[i]);
      } return studentArray;
    }
    
    let mainArray = makeStudentArray(li);

    //This function sets how many li elements appear per page. Example- page 1: begin = (1-1) * 10 = 0. End = 0 + 10. pageArray lists li[0-10].
    //--WORKING

    function itemsPer(page) {
      let begin = ((page - 1) * studentsPerPage);
      let end = begin + studentsPerPage;
      return mainArray.slice(begin, end);
    }

    let pages = {
        pg1 : { value : itemsPer(1), display : "hidden" },
        pg2 : { value : itemsPer(2), display : "hidden" },
        pg3 : { value : itemsPer(3), display : "hidden" },
        pg4 : { value : itemsPer(4), display : "hidden" },
        pg5 : { value : itemsPer(5), display : "hidden" },
        pg6 : { value : itemsPer(6), display : "hidden" }
    };

    //--NEEDS WORK
    //This is the logic to display the li items onto the page
    function createList(page) {
      if (page === pages.pg1) {
        pages.pg1.display = "block";

      } else if (page === pages.pg2) {
        pages.pg2.display = "block";

      } else if (page === pages.pg3) {
        pages.pg3.display = "block";

      } else if (page === pages.pg4) {
        pages.pg4.display = "block";

      } else if (page === pages.pg5) {
        pages.pg5.display = "block";

      } else if (page === pages.pg6) {
        pages.pg6.display = "block";
      }
    }
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
