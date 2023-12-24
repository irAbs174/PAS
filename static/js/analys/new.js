function addRow() {
    const table = document.getElementById('materials-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);
    const columns = ['name', 'symbol', 'description', 'quantity', 'price', 'unit', 'action'];

    columns.forEach((col, index) => {
      const cell = newRow.insertCell(index);
      if (col === 'unit') {
        const select = document.createElement('select');
        select.classList.add('unit');
        const units = ['متر', 'عدد']; // Replace with your list of units from Django
        units.forEach(unit => {
          const option = document.createElement('option');
          option.value = unit;
          option.text = unit;
          select.appendChild(option);
        });
        cell.appendChild(select);
      } else if (col === 'action') {
        const button = document.createElement('button');
        button.textContent = 'حذف ماده';
        button.onclick = function() {
          deleteRow(this);
        };
        cell.appendChild(button);
      } else {
        const input = document.createElement('input');
        input.type = col === 'quantity' || col === 'price' ? 'number' : 'text';
        input.classList.add(col);
        input.value = col === 'quantity' || col === 'price' ? 0 : '';
        cell.appendChild(input);
      }
    });
  }

  function deleteRow(btn) {
    const row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }

  function saveData() {
    const table = document.getElementById('materials-table');
    const rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    const data = [];

    for (let i = 0; i < rows.length; i++) {
      const cells = rows[i].getElementsByTagName('td');
      const rowData = {};
      for (let j = 0; j < cells.length - 1; j++) {
        const cell = cells[j].querySelector('input, select');
        rowData[cell.classList[0]] = cell.value;
      }
      data.push(rowData);
    }

    console.log(data);
    // Add logic to handle the data (e.g., sending it to a server, etc.)
  }