var id = document.getElementById("id");
var fname = document.getElementById("name");
var surname = document.getElementById("surname");
var gender = document.getElementById("gender");
var maths = document.getElementById("maths");
var science = document.getElementById("science");
var sociology = document.getElementById("sociology");
var english = document.getElementById("english");
var hindi = document.getElementById("hindi");
var search = document.getElementById("search");
var maintable = document.getElementById("maintable");
var table = document.getElementById("table");
var addNw = document.getElementById("addNw");
var savebtn = document.getElementById("savebtn");
var dltbtn = document.getElementById("dltbtn");


var student_ary = []; //2d array


//**********add New vala part *******************/
function addNew() {

    if (fname.value == "" || surname.value == "" || gender.value == "" || maths.value == "" || science.value == "" || sociology.value == "" || english.value == "" || hindi.value == "") {
        alert("All values are important..pls fill it first!");
    } else {

        let add_ = []; //single dimension arry
        add_.push(id.value);
        add_.push(fname.value);
        add_.push(surname.value);
        add_.push(gender.value);
        add_.push(maths.value);
        add_.push(science.value);
        add_.push(sociology.value);
        add_.push(english.value);
        add_.push(hindi.value);

        // add_.forEach(e => alert(e));

        student_ary.push(add_); //multi dimensional array
        // student_ary.forEach(e => alert(e));
        // alert(student_ary[0]);

        alert("Value Inserted Successfully!!")

        maintable.style.display = "block";

        //for adding tr tag at second position
        // var newTr = table.insertRow(1);
        var newTr = table.insertRow(student_ary.length);

        newTr.setAttribute("id", id.value);
        newTr.setAttribute("class", "trr");
        //for adding cell (td) at given postion
        var newTd1 = newTr.insertCell(0);
        var newTd2 = newTr.insertCell(1);
        var newTd3 = newTr.insertCell(2);
        var newTd4 = newTr.insertCell(3);
        var newTd5 = newTr.insertCell(4);
        var newTd6 = newTr.insertCell(5);
        var newTd7 = newTr.insertCell(6);
        var newTd8 = newTr.insertCell(7);
        var newTd9 = newTr.insertCell(8);

        newTd1.innerHTML = id.value;
        newTd2.innerHTML = fname.value;
        newTd3.innerHTML = surname.value;
        newTd4.innerHTML = gender.value;
        newTd5.innerHTML = maths.value;
        newTd6.innerHTML = science.value;
        newTd7.innerHTML = sociology.value;
        newTd8.innerHTML = english.value;
        newTd9.innerHTML = hindi.value;

        id.value = student_ary.length + 1; /** this will take size of array */
    }

}


function tempval() {
    return id.value;
}

//**********next vala part *******************/
function next(entered) {
    if (student_ary.length < 1) {
        alert("Next will not work till 1 rows");
    } else {

        addNw.disabled = true; //Add New button will be disabled
        savebtn.disabled = false; //Save button will be enabled
        dltbtn.disabled = false; //delete button will be enabled
        var start = entered;
        if (start - 1 == student_ary.length) {
            start = 0;

            id.value = student_ary[start][0];
            fname.value = student_ary[start][1];
            surname.value = student_ary[start][2];
            gender.value = student_ary[start][3];
            maths.value = student_ary[start][4];
            science.value = student_ary[start][5];
            sociology.value = student_ary[start][6];
            english.value = student_ary[start][7];
            hindi.value = student_ary[start][8];


            //table auto coloring......
            let trTag = document.querySelectorAll(".trr"); //all tr will return in array

            for (let d = 0; d < trTag.length; d++) {
                trTag[d].style.backgroundColor = "white";
            }
            let starting = parseInt(start) + 1;
            let new1 = document.getElementById(starting);
            new1.style.backgroundColor = "yellow";

        } else if (start == student_ary.length) { //fir se editable form me la rahe hai
            start++;

            id.value = start;
            fname.value = "";
            surname.value = "";
            gender.value = "";
            maths.value = "";
            science.value = "";
            sociology.value = "";
            english.value = "";
            hindi.value = "";

            addNw.disabled = false; //ab hoga edit
            savebtn.disabled = true; //Save button will be disabled
            dltbtn.disabled = true; //delete button will be disabled

            //table auto coloring......
            let trTag = document.querySelectorAll(".trr"); //all tr will return in array

            for (let d = 0; d < trTag.length; d++) {
                trTag[d].style.backgroundColor = "white";
            }

        } else {
            id.value = student_ary[start][0];
            fname.value = student_ary[start][1];
            surname.value = student_ary[start][2];
            gender.value = student_ary[start][3];
            maths.value = student_ary[start][4];
            science.value = student_ary[start][5];
            sociology.value = student_ary[start][6];
            english.value = student_ary[start][7];
            hindi.value = student_ary[start][8];

            //table auto coloring......
            let trTag = document.querySelectorAll(".trr"); //all tr will return in array

            for (let d = 0; d < trTag.length; d++) {
                trTag[d].style.backgroundColor = "white";
            }
            let starting = parseInt(start) + 1;
            let new1 = document.getElementById(starting);
            new1.style.backgroundColor = "yellow";

        }
    }
}

//**********previous vala part *******************/
function rev(v) {
    if (student_ary.length < 1) {
        alert("Previous will not work till 1 rows");
    } else {

        addNw.disabled = true;
        savebtn.disabled = false; //Save button will be enabled
        dltbtn.disabled = false; //delete button will be enabled
        var st = v;
        if (st - 1 == student_ary.length) {
            st = st - 1;
            id.value = student_ary[st - 1][0];
            fname.value = student_ary[st - 1][1];
            surname.value = student_ary[st - 1][2];
            gender.value = student_ary[st - 1][3];
            maths.value = student_ary[st - 1][4];
            science.value = student_ary[st - 1][5];
            sociology.value = student_ary[st - 1][6];
            english.value = student_ary[st - 1][7];
            hindi.value = student_ary[st - 1][8];

            //table auto coloring......
            let trTag = document.querySelectorAll(".trr"); //all tr will return in array

            for (let d = 0; d < trTag.length; d++) {
                trTag[d].style.backgroundColor = "white";
            }
            // let starting = parseInt(start) + 1;
            let new1 = document.getElementById(st);
            new1.style.backgroundColor = "yellow";


        } else if (st == 1) { //fir se editable form me la rahe hai

            id.value = student_ary.length + 1;
            fname.value = "";
            surname.value = "";
            gender.value = "";
            maths.value = "";
            science.value = "";
            sociology.value = "";
            english.value = "";
            hindi.value = "";

            addNw.disabled = false; //ab hoga edit
            savebtn.disabled = true; //Save button will be disabled
            dltbtn.disabled = true; //delete button will be disabled

            //table auto coloring......
            let trTag = document.querySelectorAll(".trr"); //all tr will return in array

            for (let d = 0; d < trTag.length; d++) {
                trTag[d].style.backgroundColor = "white";
            }

        } else {
            id.value = student_ary[st - 2][0];
            fname.value = student_ary[st - 2][1];
            surname.value = student_ary[st - 2][2];
            gender.value = student_ary[st - 2][3];
            maths.value = student_ary[st - 2][4];
            science.value = student_ary[st - 2][5];
            sociology.value = student_ary[st - 2][6];
            english.value = student_ary[st - 2][7];
            hindi.value = student_ary[st - 2][8];

            let trTag = document.querySelectorAll(".trr"); //all tr will return in array

            //auto coloring...
            for (let d = 0; d < trTag.length; d++) {
                trTag[d].style.backgroundColor = "white";
            }
            let starting = parseInt(st) - 1;
            let new1 = document.getElementById(starting);
            new1.style.backgroundColor = "yellow";

        }
    }
}


//**********search vala part *******************/
function searching() {
    if (search.value == "") {
        alert("Not Entered Anything!!");
    } else {

        for (let s = 0; s < student_ary.length; s++) {
            if (search.value == student_ary[s][1]) {

                savebtn.disabled = false; //Save button will be enabled
                dltbtn.disabled = false; //delete button will be enabled

                alert("matching found!");
                var get_id = student_ary[s][0];
                // alert(get_id);

                //auto coloring...
                let trTag = document.querySelectorAll(".trr");
                for (let d = 0; d < trTag.length; d++) {
                    trTag[d].style.backgroundColor = "white";
                }

                let new1 = document.getElementById(get_id);
                new1.style.backgroundColor = "yellow";

                id.value = get_id;
                fname.value = student_ary[get_id - 1][1];
                surname.value = student_ary[get_id - 1][2];
                gender.value = student_ary[get_id - 1][3];
                maths.value = student_ary[get_id - 1][4];
                science.value = student_ary[get_id - 1][5];
                sociology.value = student_ary[get_id - 1][6];
                english.value = student_ary[get_id - 1][7];
                hindi.value = student_ary[get_id - 1][8];

            }
        }
        if (get_id == null) { //get_id null hogi to no matching
            alert("No any Matching Found!!");
        }
    }
}


//**********save vala part *******************/
function saving() { //saving kuch nai...uspe click karte hi value update honi chahiye on both(table and form)
    var again_getId = id.value;
    // alert(again_getId);
    if (fname.value == "" || surname.value == "" || gender.value == "" || maths.value == "" || science.value == "" || sociology.value == "" || english.value == "" || hindi.value == "") {
        alert("All values are important..pls fill it first!");
    } else {
        //sabse pahle form me value change karte hai..
        student_ary[again_getId - 1][1] = fname.value;
        student_ary[again_getId - 1][2] = surname.value;
        student_ary[again_getId - 1][3] = gender.value;
        student_ary[again_getId - 1][4] = maths.value;
        student_ary[again_getId - 1][5] = science.value;
        student_ary[again_getId - 1][6] = sociology.value;
        student_ary[again_getId - 1][7] = english.value;
        student_ary[again_getId - 1][8] = hindi.value;

        // alert(student_ary[again_getId - 1][1]);

        //ab table me tr ke td me value change karte hai..
        let new2 = document.getElementById(again_getId); //get tr
        new2.children[1].innerHTML = fname.value;
        new2.children[2].innerHTML = surname.value;
        new2.children[3].innerHTML = gender.value;
        new2.children[4].innerHTML = maths.value;
        new2.children[5].innerHTML = science.value;
        new2.children[6].innerHTML = sociology.value;
        new2.children[7].innerHTML = english.value;
        new2.children[8].innerHTML = hindi.value;

        alert("Values Updated Successfully!!");

    }
}


//**********delete vala part *******************/
function deleting() {
    if (student_ary.length == 1) { //isme kya hota tha ki jab delete karte the tb last me kuch vlue na ho even hm value nai add kar paa rahe the
        addNw.disabled = false; //ab hoga edit
    }

    var gettingId = id.value;

    // next(gettingId);

    //value array me nikalne ke liye..
    let tempo = student_ary.splice(gettingId - 1, 1);
    // alert(tempo);

    // deleting selected tr 
    let del = document.getElementById(gettingId);
    del.remove();

    let tr_rm = document.querySelectorAll(".trr");
    for (let i = 0; i < tr_rm.length; i++) {
        tr_rm[i].removeAttribute("id");
        tr_rm[i].setAttribute("id", parseInt(i) + 1);

        let td_rm = document.getElementById(parseInt(i) + 1);
        td_rm.children[0].innerHTML = parseInt(i) + 1;

    }

    for (let a = 0; a < student_ary.length; a++) {
        student_ary[a][0] = parseInt(a) + 1;
    }

    next(student_ary.length);

}