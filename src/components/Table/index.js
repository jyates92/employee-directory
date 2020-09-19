import React, { useState } from "react";

const Table = (props) => {
  const [employees, setEmployees] = useState(props.employees);
  const [currentSort, setCurrentSort] = useState("");

  const sortString = (tableProp) => {
    if (tableProp === currentSort) {
      const descSortedEmployees = props.employees.sort((a, b) =>
        b[tableProp].localeCompare(a[tableProp])
      );
      setCurrentSort("");
      setEmployees(descSortedEmployees);
    } else {
      const sortedEmployees = props.employees.sort((a, b) =>
        a[tableProp].localeCompare(b[tableProp])
      );
      setCurrentSort(tableProp);
      setEmployees(sortedEmployees);
    }
  };

  const sortNumber = (tableProp) => {
    if (tableProp === currentSort) {
      const descSortedEmployees = props.employees.sort(
        (a, b) => b[tableProp] - a[tableProp]
      );
      setCurrentSort("");
      setEmployees(descSortedEmployees);
    } else {
      const sortedEmployees = props.employees.sort(
        (a, b) => a[tableProp] - b[tableProp]
      );
      setCurrentSort(tableProp);
      setEmployees(sortedEmployees);
    }
  };

  const filterTable = (event) => {
    const filter = event.target.value;
    const filteredEmployees = props.employees.filter(
      ({ name }) => name.search(new RegExp(filter, "i")) !== -1
    );
    setEmployees(filteredEmployees);
  };

  const generateTableRow = ({ name, age, salary, title }) => (
    <tr key={name}>
      <td>{name}</td>
      <td>{age}</td>
      <td>{salary}</td>
      <td>{title}</td>
    </tr>
  );
  return (
    <>
      <label>
        Filter by Name
        <input type="text" onChange={filterTable} />
      </label>
      <table>
        <tr>
          <thead>
            <th
              onClick={() => {
                sortString("name");
              }}
            >
              Name
            </th>
            <th
              onClick={() => {
                sortNumber("age");
              }}
            >
              Age
            </th>
            <th
              onClick={() => {
                sortNumber("salary");
              }}
            >
              Salary (USD)
            </th>
            <th
              onClick={() => {
                sortString("title");
              }}
            >
              Title
            </th>
          </thead>
        </tr>
        <tr>
          <tbody>{employees.map(generateTableRow)}</tbody>
        </tr>
      </table>
    </>
  );
};

export default Table;
