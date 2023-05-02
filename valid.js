function addRow(formdata) {
    // Get the table element in which you want to add row
    let table = document.getElementById("table");
    console.log(formdata.firstname, 'line129')
    // Create a row using the insertRow() method and
    // specify the index where you want to add the row
    let row = table.insertRow(-1); // We are adding at the end

    // Create table cells
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);
    let c5 = row.insertCell(4);
    let c6 = row.insertCell(5);
    let c7 = row.insertCell(6);
    let c8 = row.insertCell(7);
    let c9 = row.insertCell(8);

    // Add data to c1 and c2
    c1.innerText = formdata.firstname;
    c2.innerText = formdata.lastname;
    c3.innerText = formdata.email;
    c4.innerText = formdata.age;
    c5.innerText = formdata.date;
    c6.innerText = formdata.phone;
    c7.innerText = formdata.subject;
    c8.innerHTML = ' <button onclick="onEdit(this)"value="button"id="button"class="btn">onEdit</button>'
    c9.innerHTML = '<button onclick="onDelete(this)"value="button" id="button">onDelete</button>'
}

let myArray = []
let erors = false

const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const date = document.getElementById('date');
const age = document.getElementById('age');
const subject = document.getElementById('subject');
// const Edit = document.getElementById('Edit');
// const Delete = document.getElementById('Delete');

console.log(myArray)
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // validate()
    let isvalidate = validate()
    console.log(isvalidate)
    onEdit(formdata)
    updateRecord(formdata)
    onDelete(formdata)
    // data get in console----------------------------------------------------------------------------------------

    const formdata = { firstname: "", lastname: "", email: "", phone: "", date: "", age: "", subject: "" };
    console.log(formdata);


    formdata.firstname = document.getElementById("firstname").value;
    console.log(formdata.firstname);

    formdata.lastname = document.getElementById("lastname").value;
    console.log(formdata.lastname);


    formdata.email = document.getElementById("email").value;
    console.log(formdata.email);

    formdata.phone = document.getElementById("phone").value;
    console.log(formdata.phone);


    formdata.date = document.getElementById("date").value;
    console.log(formdata.date);

    formdata.age = document.getElementById("age").value;
    console.log(formdata.age);


    formdata.subject = document.getElementById("subject").value;
    console.log(formdata.subject);


    const myObject = {
        formdata
    };
    if (!erors) {
        myArray.push(formdata)
    }

    console.log(myArray);

    if (isvalidate == false) {
        addRow(formdata)

    }

});

//Final data validate 
const successMsg = (Val) => {
    let formCon = document.getElementsByClassName('form-control');
    let count = formCon.length - 1;
    for (let i = 0; i < formCon.length; i++) {
        if (formCon[i].className === "form-control success") {
            let sRate = 0 + i;

        } else {
            return false;
        }
    }
}
//More email validate
const isEmail = (emailVal) => {
    let atSymbol = emailVal.indexOf("@");
    if (atSymbol < 1) return false;
    let dot = emailVal.lastIndexOf('.');
    if (dot <= atSymbol + 3) return false;
    if (dot === emailVal.length - 1) return false;
    return true;
}
//define validate function

const validate = () => {
    const firstenameVal = firstname.value.trim();
    console.log(firstenameVal)
    console.log("firstname")
    const lastenameVal = lastname.value.trim();
    console.log(lastenameVal)
    console.log("lastname")
    const emailVal = email.value.trim();
    console.log(emailVal)
    console.log("email")
    const phoneVal = phone.value.trim();
    console.log(phoneVal)
    console.log("phone")
    const dateval = date.value.trim();
    console.log(dateval)
    console.log("date")
    const ageval = age.value.trim();
    console.log(ageval)
    console.log("age")
    const subjectval = subject.value.trim();
    console.log(subjectval)
    console.log("subject")


    //validate first name 
    if (firstenameVal === "") {
        setErrorMsg(firstname, 'firstname can not be blank.');
        erors = true
    } else if (firstenameVal.length <= 2) {
        setErrorMsg(firstname, 'firstname min 3 characters.');
        erors = true
    } else {
        setSuccessMsg(firstname);
        erors = false
    }
    //validate last name 
    if (lastenameVal === "") {
        setErrorMsg(lastname, 'lastname can not be blank.');
        erors = true
    } else if (lastenameVal.length <= 2) {
        setErrorMsg(lastname, 'lastname min 3 characters.');
        erors = true
    } else {
        setSuccessMsg(lastname);
        erors = false
    }


    //validate email address
    if (emailVal === "") {
        setErrorMsg(email, 'email can not be blank.');
        erors = true
    } else if (!isEmail(emailVal)) {
        setErrorMsg(email, 'Not a valid Email.');
        erors = true
    } else {
        setSuccessMsg(email);
        erors = false
    }

    //validate phone
    if (phoneVal === "") {
        setErrorMsg(phone, 'phone can not be blank.');
        erors = true
    } else if (phoneVal.length != 10) {
        setErrorMsg(phone, 'Not a valid phone number.');
        erors = true
    } else {
        setSuccessMsg(phone);
        erors = false
    }

    //validate dateval
    if (dateval === "") {
        setErrorMsg(date, 'birthdate write here.');
        erors = true
    }
    else {
        setSuccessMsg(date);
        erors = false
    }

    //validate ageval 
    if (ageval === "") {
        setErrorMsg(age, 'age must to write here.');
        erors = true
    }
    // else if (ageval.length !=-0) {
    //     setErrorMsg(phone, 'Not a valid age  number.');
    //     erors = true
    // }

    else {
        setSuccessMsg(age);
        erors = false
    }
    //validate subject 
    if (subjectval === "") {
        setErrorMsg(subject, 'chose your subject.');
        erors = true
    }
    // else if (subjectval.length) {
    //     setErrorMsg(subject, 'chose your subject.');
    // } 
    else {
        setSuccessMsg(subject);
        erors = false
    }


    successMsg(validate);

    return erors

}

function setErrorMsg(input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}





function onEdit(td) {
    console.log(td)
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("phone").value = selectedRow.cells[3].innerHTML;
    document.getElementById("date").value = selectedRow.cells[4].innerHTML;
    document.getElementById("age").value = selectedRow.cells[5].innerHTML;
    document.getElementById("subject").value = selectedRow.cells[6].innerHTML;
}

function updateRecord(formdata) {
    selectedRow.cells[0].innerHTML = formdata.firstname;
    selectedRow.cells[1].innerHTML = formdata.lastname;
    selectedRow.cells[2].innerHTML = formdata.email;
    selectedRow.cells[3].innerHTML = formdata.phone;
    selectedRow.cells[4].innerHTML = formdata.date;
    selectedRow.cells[5].innerHTML = formdata.age;
    selectedRow.cells[6].innerHTML = formdata.subject;
    selectedRow = null;
    console.log(formdata);
}
function onDelete(td) {
    if (confirm("Are you sure to delete this record?")) {
        console.log(td.parentElement)
        let row = td.parentElement.parentElement;
        document.getElementById("employeeinfo").deleteRow(row.rowIndex);
    }
}