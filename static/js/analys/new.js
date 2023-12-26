function toggleButtons(displayCreate, displayAddRow, displaySaveData) {
  document.getElementById('create-table-btn').style.display = displayCreate ? "none" : "inline-block";
  document.getElementById('add-row-btn').style.display = displayAddRow ? "inline-block" : "none";
  document.getElementById('save-data-btn').style.display = displaySaveData ? "inline-block" : "none";
}

function enableButtons(enableAddRow, enableSaveData) {
  document.getElementById('add-row-btn').disabled = !enableAddRow;
  document.getElementById('save-data-btn').disabled = !enableSaveData;
}

function createTable() {
  const tableContainer = document.getElementById('table-container');
  tableContainer.innerHTML = `
    <table id="materials-table">
      <thead>
        <tr>
          <th>نام</th>
          <th>نماد</th>
          <th>توضیحات</th>
          <th>موجودی</th>
          <th>قیمت</th>
          <th>واحد</th>
          <th>عملیات</th>
        </tr>
      </thead>
      <tbody>
        ${createTableRow()}
      </tbody>
    </table>
    <button onclick="addRow()">افزودن ماده اولیه جدید</button>
    <button onclick="saveData()">ذخیره</button>
  `;
  toggleButtons(true, true, true);
  enableButtons(true, true);
}

function createTableRow() {
  // Assuming this is the template for new rows which can be created dynamically.
  return `
    <tr>
      <td><input type="text" class="نام ماده"></td>
      <td><input type="text" class="رنگ"></td>
      <td><input type="text" class="واحد"></td>
      <td><input type="number" class="نرخ" value="0"></td>
      <td><input type="number" class="تاریخ نرخ گذاری" value="0"></td>
      <td>
        <select class="unit">
          <option value="Unit1">متر</option>
          <option value="Unit2">عدد</option>
        </select>
      </td>
      <td><button onclick="deleteRow(this)">حذف ماده</button></td>
    </tr>
  `;
}

function addRow() {
  const tableBody = document.getElementById('materials-table').querySelector('tbody');
  tableBody.insertAdjacentHTML('beforeend', createTableRow());
}

function deleteRow(button) {
  const row = button.closest('tr');
  row.remove();
}

function saveData() {
  const data = Array.from(document.querySelectorAll('#materials-table tbody tr')).map(row => {
    const entries = row.querySelectorAll('input, select');
    return Array.from(entries).reduce((obj, entry) => {
      obj[entry.className] = entry.value;
      return obj;
    }, {});
  });

  console.log(data);
  // Add further logic to post this data to the server.
}

// Fetch Materials and SweetAlert Logic remains mostly unchanged as no immediate optimization is clear without knowing backend logic.

  function selectMaterial() {
    // Make a request to the server to get the materials
    fetch('materials_list')   // Make sure 'api/materials/' is the correct endpoint exposed by your Django server to get materials
      .then(response => {
        if (response.ok) {
          return response.json(); // Convert the response to JSON
        }
        throw new Error('Network response was not ok.');
      })
      .then(materials => {
        // Create the select box options based on the materials received
        let options = materials.map(material =>
          `<option value="${material.material_key}">${material.material_name}</option>`
        ).join('');
    
        // Show the SweetAlert with dynamically created select box options
        Swal.fire({
          title: 'ماده اولیه را انتخاب کنید',
          html: '<select id="swal-input" class="swal2-input">' + options + '</select>',
          focusConfirm: false,
          confirmButtonText: 'تائید',
          preConfirm: () => {
            const selectedKey = document.getElementById('swal-input').value;
            return materials.find(material => material.material_key === selectedKey).material_name;
          }
        }).then((result) => {
          if (result.isConfirmed) {
            // Handle the result of the selection here
            Swal.fire('شما انتخاب کردید: ' + result.value);
          }
        });
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        Swal.fire('خطا', 'درخواست به سرور با مشکل مواجه شد', 'error');
      });
  }