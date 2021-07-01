import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import DataCard from './DataCard';
import Chart from './Chart';
const DataRow = ({
  keys,
  jsonData,
  index,
  rows,
  savedDataFunction,
  sectionKey,
  selectedOption,
}) => {
  const [nRows, setNRows] = useState(2);
  useEffect(() => {
    setNRows(rows);
  }, [rows]);

  const renderRows = () => {
    return [...Array(parseInt(nRows))].map((v, i) => (
      <Grid
        item
        container
        sm={12}
        spacing={1}
        alignItems='flex-end'
        textAlign='center'
        style={{ margin: '24px 0' }}
        key={`${sectionKey}-row-${i}-grid`}
      >
        <DataCard
          groupIndex={index}
          data={jsonData}
          savedDataFunction={savedDataFunction}
          optionItems={keys}
          cardIndex={`${sectionKey}-row-${i}-card-1`}
          key={`${sectionKey}-row-${i}-card-1`}
        />
        <DataCard
          groupIndex={index}
          data={jsonData}
          savedDataFunction={savedDataFunction}
          optionItems={keys}
          cardIndex={`${sectionKey}-row-${i}-card-2`}
          key={`${sectionKey}-row-${i}-card-2`}
        />

        <DataCard
          groupIndex={index}
          savedDataFunction={savedDataFunction}
          data={jsonData}
          optionItems={keys}
          cardIndex={`${sectionKey}-row-${i}-card-3`}
          key={`${sectionKey}-row-${i}-card-3`}
        />
      </Grid>
    ));
  };
  return (
    <>
      {renderRows()}
      <Chart selectedOption={selectedOption} />
    </>
  );
};
export default DataRow;
