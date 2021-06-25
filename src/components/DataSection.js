import React, { useState, useEffect } from 'react';
import { MenuItem, Grid, Box, TextField } from '@material-ui/core';
import SectionTitle from './SectionTitle';
import DataRow from './DataRow';
const DataSection = ({
  jsonData,
  options,
  type,
  sectionKey,
  keys,
  savedDataFunction,
  pageNumber,
}) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [index, setIndex] = useState('');
  const [sectionText, setSectionText] = useState('Section Name');
  const [rows, setRows] = useState(2);

  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem('savedData'))[`${sectionKey}-sectionText`]
    ) {
      setSectionText(
        JSON.parse(localStorage.getItem('savedData'))[
          `${sectionKey}-sectionText`
        ]
      );
    }
    console.log(
      JSON.parse(localStorage.getItem('savedData'))[`${sectionKey}-rows`]
    );
    if (JSON.parse(localStorage.getItem('savedData'))[`${sectionKey}-rows`]) {
      setRows(
        JSON.parse(localStorage.getItem('savedData'))[`${sectionKey}-rows`]
      );
    }
  }, [sectionKey]);

  const handleSectionTextChange = (e) => {
    setSectionText(e.target.value);
    savedDataFunction(`${sectionKey}-sectionText`, e.target.value);
  };

  const handleRowChange = (e) => {
    setRows(parseInt(e.target.value));
    savedDataFunction(`${sectionKey}-rows`, parseInt(e.target.value));
  };

  useEffect(() => {
    if (jsonData && options) {
      if (JSON.parse(localStorage.getItem('savedData'))['selectedOption']) {
        setSelectedOption(
          JSON.parse(localStorage.getItem('savedData'))['selectedOption']
        );
      } else {
        setSelectedOption(options[0]);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options, jsonData]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    savedDataFunction('selectedOption', event.target.value);
  };

  useEffect(() => {
    let foundIndex = jsonData?.findIndex(function (indexSearch) {
      return indexSearch.grades === selectedOption;
    });
    setIndex(foundIndex);
  }, [selectedOption]);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <SectionTitle text={sectionText} />
      <Box
        displayPrint='none'
        className='printToolbar'
        style={{ width: '100%' }}
      >
        <Grid container spacing={1} justifyContent='center'>
          <Grid item sm={1}>
            <TextField
              select
              value={selectedOption}
              fullWidth
              label={capitalizeFirstLetter(type)}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'Without label' }}
              style={{ margin: '4px' }}
            >
              {options.map((value) => {
                return (
                  <MenuItem value={value} key={value}>
                    {value}
                  </MenuItem>
                );
              })}
            </TextField>
          </Grid>
          <Grid item sm={2}>
            <TextField
              fullWidth
              variant='outlined'
              label='Section Name'
              value={sectionText}
              onChange={(e) => handleSectionTextChange(e)}
              style={{ margin: '4px' }}
            />
          </Grid>

          <Grid item sm={1}>
            <TextField
              fullWidth
              variant='outlined'
              label='Rows'
              value={parseInt(rows)}
              onChange={(e) => handleRowChange(e)}
              style={{ margin: '4px' }}
            />
          </Grid>
        </Grid>
      </Box>

      <DataRow
        keys={keys}
        jsonData={jsonData}
        index={index}
        rows={rows}
        savedDataFunction={savedDataFunction}
        pageNumber={pageNumber}
        sectionKey={sectionKey}
        key={`${pageNumber}-${sectionKey}`}
      />
    </>
  );
};
export default DataSection;
