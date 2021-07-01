import React, { useState, useEffect } from 'react';
import { MenuItem, Grid, Box, TextField, Button } from '@material-ui/core';
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
  handleRemoveSection,
}) => {
  const [selectedOption, setSelectedOption] = useState('8');
  const [index, setIndex] = useState('');
  const [sectionText, setSectionText] = useState('Section Name');
  const [rows, setRows] = useState(2);

  const handleSectionTextChange = (e) => {
    setSectionText(e.target.value);
    savedDataFunction(`${sectionKey}-sectionText`, e.target.value);
  };

  useEffect(() => console.log(index), [index]);
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

    if (JSON.parse(localStorage.getItem('savedData'))[`${sectionKey}-rows`]) {
      setRows(
        JSON.parse(localStorage.getItem('savedData'))[`${sectionKey}-rows`]
      );
    }
  }, [jsonData, options, type, sectionKey, keys, pageNumber]);

  const handleRowChange = (e) => {
    setRows(parseInt(e.target.value));
    savedDataFunction(`${sectionKey}-rows`, parseInt(e.target.value));
  };

  useEffect(() => {
    if (jsonData && options) {
      if (
        JSON.parse(localStorage.getItem('savedData'))[
          `${sectionKey}-selectedOption`
        ]
      ) {
        setSelectedOption(
          JSON.parse(localStorage.getItem('savedData'))[
            `${sectionKey}-selectedOption`
          ]
        );
      } else {
        console.log('selectedoption set');
        setSelectedOption(options[0]);
      }
    } else setSelectedOption(options[0]);
  }, [options, jsonData, sectionKey]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    savedDataFunction(`${sectionKey}-selectedOption`, event.target.value);
  };

  useEffect(() => {
    let foundIndex = jsonData.findIndex(function (indexSearch) {
      return indexSearch.grades === selectedOption;
    });
    setIndex(foundIndex);
  }, [selectedOption, jsonData]);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      {index ? (
        <>
          <SectionTitle
            text={sectionText}
            handleSectionTextChange={handleSectionTextChange}
            sectionText={sectionText}
          />

          <Box
            displayPrint='none'
            className='printToolbar'
            style={{ width: '100%' }}
          >
            <Grid
              container
              spacing={1}
              justifyContent='center'
              alignItems='center'
            >
              <Grid item sm={1}>
                <TextField
                  select
                  value={selectedOption}
                  fullWidth
                  size='small'
                  label={capitalizeFirstLetter(type)}
                  onChange={handleChange}
                  inputProps={{ 'aria-label': 'Without label' }}
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
              <Grid item sm={1}>
                <TextField
                  fullWidth
                  size='small'
                  variant='outlined'
                  label='Rows'
                  value={parseInt(rows)}
                  onChange={(e) => handleRowChange(e)}
                />
              </Grid>
              <Grid item md={2}>
                <Button
                  variant='outlined'
                  fullWidth
                  size='large'
                  onClick={() => handleRemoveSection(sectionKey)}
                >
                  Remove Section
                </Button>
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
            selectedOption={selectedOption}
          />
        </>
      ) : null}
    </>
  );
};
export default DataSection;
