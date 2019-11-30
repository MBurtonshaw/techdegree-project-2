/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

const li = document.getElementsByClassName("student-item");
const studentsPerPage = 10;

//Add searchbar--- NOT FUNCTIONING YET--- source: https://www.w3schools.com/howto/howto_js_filter_lists.asp
function searchBar(list) {
      
      const bar = document.createElement("INPUT");
      const header = document.getElementsByClassName("page-header")[0];
      const submit = document.createElement("BUTTON");
      let filterList = [];
      
      bar.type = "text";
      bar.id = "field";
      header.appendChild(bar);
      submit.textContent = "submit";
      header.appendChild(submit);
    
    submit.addEventListener("click", (e) => {
        
        filterList.push(bar.value.toUpperCase());
        console.log(filterList);
        for (let k = 0; k < filterList; k++) {
        let result = filterList[k];
            let textValue = result.textContent || result.innerText;
            if (textValue.toUpperCase() = indexOf(bar.value.toUpperCase())) {
                showPage(list, textValue);
            } else {
                value.style.display = "none";
            }
        }
    });
      
    /*
    //submit.addEventListener ("click", (e) => {
        
    //Trying to target the class name, then narrow it by h3 value. Source: https://www.w3schools.com/howto/howto_js_filter_lists.asp
      for (var k = 0; k < list; k++) {
          let result = list[k].getElementsByTagName("h3")[0];
          console.log(result);
          //let textValue = result.textContent || result.innerText;
          //if (textValue.toUpperCase().indexOf(filter) > -1) {
              //result.style.display = "";
            //} else {
                //result.style.display = "none";
            //}
      //}
    //}); 
}*/
}

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


function appendPageLinks(list) {

    showPage(li, 1);
    searchBar(li);
    
      const newDiv = document.createElement("DIV");
      newDiv.className = "pagination";
    
    //otherDiv must be set to [0] because it is a collection of HTML elements, not one node in itself
      let otherDiv = document.getElementsByClassName("page")[0];
      let ul = document.createElement("UL");
      newDiv.appendChild(ul);
      otherDiv.appendChild(newDiv);
    
    //Loop is to set the number of pages based on totalPages, then create a page button corresponding to each
      let totalPages = Math.ceil(list.length / studentsPerPage);
      for (i = 0; i < totalPages; i++) {
            
      let button = document.createElement("LI");
      let a = document.createElement("A");
      ul.appendChild(button);
      button.appendChild(a);
      a.className = "paginationButtons";
      a.textContent = i + 1;
      a.href = "#";
        
        //Adding function to the buttons
        button.addEventListener ( "click", (e) => {
            let buttons = document.getElementsByTagName("a");
            for (let i = 0; i < totalPages; i++) {
                buttons[i].className = "";
            const pageButton = e.target;
            pageButton.className = "active";
            showPage(list, pageButton.textContent);
            }
        });
    }
}



appendPageLinks(li);
