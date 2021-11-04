const sortedstudentmarks = {};


function addEle() {
   let tbody = document.getElementById("table_body");

   let name = document.getElementById("name").value;
   let mark = document.getElementById("mark").value;
   sortMarks(name,mark);
//    let grade = grading(mark);
    tbody.innerHTML = "";
    let count = 1;
    for (const key in sortedstudentmarks) {
        if (Object.hasOwnProperty.call(sortedstudentmarks, key)) 
        {
            tbody.innerHTML +=`<tr><td>`+count+`</td><td>`+sortedstudentmarks[key]+`</td><td>`+key+`</td><td>`+grading(key)+`</td></tr>`;
            count++;
        }
    }
   
}




function sortMarks(name,mark) {
    sortedstudentmarks[mark] = name;


    // var keys = Object.keys(unsortedstudentmarks),
    // i, len = keys.length;

    // keys.sort();

    // for (i = 0; i < len; i++) 
    // {
    //     k = keys[i];
    //     sortedstudentmarks[unsortedstudentmarks[k]] = k;
    // }
    console.log(sortedstudentmarks);



}




function grading(mark) {
    let grade;
    if(mark<0 && mark>100)
    {
        grade = 'Invalid input';
    }
    else
    {
        if (mark>=75 && mark<=100) {
            grade = 'A';
        } 
        else if(mark>=60 && mark<75) {
            grade = 'B';
        }
        else if(mark>=50 && mark<60) {
            grade = 'C';
        }
        else if(mark<50 && mark>=0) {
            grade = 'D';
        }
    }
    return grade;
}