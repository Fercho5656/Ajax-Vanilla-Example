const ajaxTableButton = document.querySelector("#ajaxTableButton");
const ajaxTable = document.querySelector("#ajaxTable");

const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if (!response.ok) {
    const message = `Error! ${response.status}`;
    throw new Error(message);
  }
  const todos = await response.json();
  return todos;
};

const genTableBody = (table, data) => {
  const tbody = table.createTBody();
  data.map((element) => {
    const row = tbody.insertRow();
    /* Creates a cell for every data
    and places it in a row */
    for (key in element) {
      const cell = row.insertCell();
      const text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  });
};

const genTableHead = (table, headers) => {
  const thead = table.createTHead();
  const row = thead.insertRow();
  //Populates thead tag
  headers.map((data) => {
    const th = document.createElement("th");
    const text = document.createTextNode(data);
    th.appendChild(text);
    row.appendChild(th);
  });
};

ajaxTableButton.addEventListener("click", () => {
  ajaxTableButton.disabled = true;
  getData()
    .then((todos) => {
      const data = todos.slice(0, 10);
      const headers = Object.keys(data[0]);
      genTableHead(ajaxTable, headers);
      genTableBody(ajaxTable, data);
      alert("Tabla Cargada");
    })
    .catch((e) => {
      alert(e);
      ajaxTableButton.disabled = false;
      alert("Error al cargar tabla");
    });
});
