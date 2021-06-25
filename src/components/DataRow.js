import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import DataCard from './DataCard';

const DataRow = ({
  keys,
  jsonData,
  index,
  rows,
  savedDataFunction,
  pageNumber,
  sectionKey,
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
      >
        <DataCard
          groupIndex={index}
          data={jsonData}
          savedDataFunction={savedDataFunction}
          optionItems={keys}
          cardIndex={`${pageNumber}-${index}-${sectionKey}-row-${i}-card-1`}
          key={`${pageNumber}-${index}-${sectionKey}-row-${i}-card-1`}
        />
        <DataCard
          groupIndex={index}
          data={jsonData}
          savedDataFunction={savedDataFunction}
          optionItems={keys}
          cardIndex={`${pageNumber}-${index}-${sectionKey}-row-${i}-card-2`}
          key={`${pageNumber}-${index}-${sectionKey}-row-${i}-card-2`}
        />

        <DataCard
          groupIndex={index}
          savedDataFunction={savedDataFunction}
          data={jsonData}
          optionItems={keys}
          cardIndex={`${pageNumber}-${index}-${sectionKey}-row-${i}-card-3`}
          key={`${pageNumber}-${index}-${sectionKey}-row-${i}-card-3`}
        />
      </Grid>
    ));
  };
  return <>{renderRows()}</>;
};
export default DataRow;
