import React, { useState, useMemo, useEffect } from 'react';

const generateRandomData = (count) => {
  const data = [];

  for (let i = 1; i <= count; i++) {
    const rowData = {
      id: i,
      name: `User ${i}`,
      email: `user${i}@example.com`,
      phone: `555-555-${Math.floor(Math.random() * 9000) + 1000}`,
      address: `123 Main Street, City${i}`,
      city: `City${i}`,
      country: `Country${i}`,
      company: `Company ${i}`,
      jobTitle: `Job Title ${i}`,
      dateOfBirth: `${Math.floor(Math.random() * 30) + 1970}-${Math.floor(Math.random() * 12) + 1}-${Math.floor(Math.random() * 28) + 1}`,
      randomValue1: `Random Value ${Math.floor(Math.random() * 100)}`,
      randomValue2: `Random Value ${Math.floor(Math.random() * 100)}`,
      randomValue3: `Random Value ${Math.floor(Math.random() * 100)}`,
      randomValue4: `Random Value ${Math.floor(Math.random() * 100)}`,
      randomValue5: `Random Value ${Math.floor(Math.random() * 100)}`,
      randomValue6: `Random Value ${Math.floor(Math.random() * 100)}`,
      randomValue7: `Random Value ${Math.floor(Math.random() * 100)}`,
      randomValue8: `Random Value ${Math.floor(Math.random() * 100)}`,
      randomValue9: `Random Value ${Math.floor(Math.random() * 100)}`,
      randomValue10: `Random Value ${Math.floor(Math.random() * 100)}`
    };

    data.push(rowData);
  }

  return data;
};

const TableRow = React.memo(({ row, onRowClick }) => {
  return (
    <tr className="row" onClick={() => onRowClick(row)}>
      {Object.values(row).map((value, index) => <td key={index}>{value}</td>)}
    </tr>
  );
});

const EgovTable = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [isPopupActive, setPopupActive] = useState(false);

  const data = useMemo(() => generateRandomData(20), []);

  useEffect(() => {
    if (isPopupActive) {
      document.body.classList.add('popup-active');
    } else {
      document.body.classList.remove('popup-active');
    }
  }, [isPopupActive]);

  const togglePopup = () => {
    setPopupActive(!isPopupActive);
  };

  const handleRowClick = (row) => {
    setSelectedRow(row);
    togglePopup();
  };

  const handleClose = () => {
    setSelectedRow(null);
    togglePopup();
  }
  
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>City</th>
            <th>Country</th>
            <th>Company</th>
            <th>Job Title</th>
            <th>Date of Birth</th>
            <th>Random Value 1</th>
            <th>Random Value 2</th>
            <th>Random Value 3</th>
            <th>Random Value 4</th>
            <th>Random Value 5</th>
            <th>Random Value 6</th>
            <th>Random Value 7</th>
            <th>Random Value 8</th>
            <th>Random Value 9</th>
            <th>Random Value 10</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <TableRow key={row.id} row={row} onRowClick={handleRowClick} />
          ))}
        </tbody>
      </table>

      {selectedRow && (
        <>
          <div className="blurred-background" />
          <div className={`popup ${isPopupActive ? 'active' : ''}`}>
            <div className="popup-content">
              <h2>Details</h2>
              {Object.entries(selectedRow).map(([key, value]) => (
                <p key={key}>{key}: {value}</p>
              ))}
              <button onClick={() => {handleClose()}}>Close</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default EgovTable;