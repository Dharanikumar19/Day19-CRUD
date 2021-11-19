var selectedRow = null;
function onFormSubmit(){
    var formData = readFormData();
    if(selectedRow == null){
    insertNewRecord(formData);
    }else
    updadeFormData(formData);
    resetForm()
}

function readFormData(){
    var formData = {};
       formData['name'] = document.getElementById('name').value,
       formData['address'] = document.getElementById('address').value,
       formData['state'] = document.getElementById('state').value,
       formData['country'] = document.getElementById('country').value,
       formData['pincode'] = document.getElementById('pincode').value,
       formData['gender'] = document.getElementById('gender').value
       return formData;
    }

    function insertNewRecord(element) {
    var table = document.getElementById('users').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length)
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = element.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = element.address;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = element.state;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = element.country;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = element.pincode;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = element.gender;
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<button onClick="onEdit(this)">Edit</button>
                        <button onClick="onDelete(this)">Delete</button>`;
};

function resetForm(){
      document.getElementById('name').value = '';
      document.getElementById('address').value = '';
      document.getElementById('state').value = '';
      document.getElementById('country').value = '';
      document.getElementById('pincode').value = '';
      document.getElementById('gender').value = '';
      selectedRow = null;
}

  
async function onEdit(td){
 
        selectedRow = td.parentElement.parentElement;

        document.getElementById('name').value = selectedRow.cells[0].innerHTML,
        document.getElementById('address').value = selectedRow.cells[1].innerHTML,
        document.getElementById('state').value = selectedRow.cells[2].innerHTML,
        document.getElementById('country').value = selectedRow.cells[3].innerHTML,
        document.getElementById('pincode').value = selectedRow.cells[4].innerHTML,
        document.getElementById('gender').value = selectedRow.cells[5].innerHTML
       
}

function updadeFormData(formData){
        selectedRow.cells[0].innerHTML = formData.name;
        selectedRow.cells[1].innerHTML = formData.address;
        selectedRow.cells[2].innerHTML = formData.state;
        selectedRow.cells[3].innerHTML = formData.country;
        selectedRow.cells[4].innerHTML = formData.pincode;
        selectedRow.cells[5].innerHTML = formData.gender;
}

 function onDelete(td){
if(confirm('Are you sure to delete this record?')){
    row = td.parentElement.parentElement
    document.getElementById('users').deleteRow(row.rowIndex);
    resetForm();
}
}
