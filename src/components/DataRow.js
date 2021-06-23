import React, { useState, useEffect } from 'react';
import AddItem from './AddItem';

const DataRow = ({ keys, jsonData, index, rows }) => {
  const [nRows, setNRows] = useState(2);

  useEffect(() => {
    setNRows(rows);
    console.log(rows);
  }, [rows]);
  const renderRows = () => {
    return [...Array(parseInt(nRows))].map((v, i) => (
      <>
        <AddItem keys={keys} jsonData={jsonData} index={index} key={`1-${i}`} />
        <AddItem keys={keys} jsonData={jsonData} index={index} key={`2-${i}`} />
        <AddItem keys={keys} jsonData={jsonData} index={index} key={`3-${i}`} />
      </>
    ));
  };
  return <>{renderRows()}</>;
};
export default DataRow;
