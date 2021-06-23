import React, { useState, useEffect } from 'react';
import {
  Grid,
  Typography,
  Select,
  MenuItem,
  TextField,
  Paper,
} from '@material-ui/core';

import DataRow from './DataRow';
const DataSection = ({ keys, jsonData }) => {
  const [index, setIndex] = useState('0');
  const [options, setOptions] = React.useState(['']);
  const [selectedOption, setSelectedOption] = React.useState('');
  const [type, setType] = useState('grades');
  const [isShown, setIsShown] = useState(false);
  const [sectionText, setSectionText] = useState('Section Name');
  const [rows, setRows] = useState(2);
  useEffect(() => {
    if (jsonData) {
      getGroupOptions();
      findType();
    }
  }, [jsonData]);
  useEffect(() => {
    console.log(rows);
  }, [rows]);
  const findType = () => {
    if (jsonData.includes('grades')) {
      setType('grades');
    } else {
      setType('classes');
    }
  };
  const findIndex = () => {
    let foundIndex = jsonData.findIndex(function (indexSearch) {
      return indexSearch.grades === selectedOption;
    });
    setIndex(foundIndex);
  };

  const getGroupOptions = () => {
    let options = [];
    for (let i = 0; i < jsonData.length; i++) {
      options.push(jsonData[i].grades);
    }
    setOptions(options);
    setSelectedOption(options[0]);
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    findIndex();
  };

  return (
    <Grid
      container
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {isShown ? (
        <Paper
          style={{
            position: 'absolute',
            backgroundColor: 'white',
            padding: '8px',
          }}
        >
          <Select
            value={selectedOption}
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
          </Select>
          <TextField
            size='small'
            variant='outlined'
            label='Section Name'
            id='section-name'
            value={sectionText}
            onChange={(e) => setSectionText(parseInt(e.target.value))}
            style={{ margin: '4px' }}
          />{' '}
          <TextField
            size='small'
            variant='outlined'
            label='Number of Data Rows'
            id='data-rows'
            value={rows}
            onChange={(e) => setRows(e.target.value)}
            style={{ margin: '4px' }}
          />
        </Paper>
      ) : null}
      <Grid item md={4}>
        <hr></hr>
      </Grid>
      <Grid item md={4}>
        <Typography variant='h2'>{sectionText}</Typography>
      </Grid>
      <Grid item md={4}>
        <hr></hr>
      </Grid>

      <DataRow keys={keys} jsonData={jsonData} index={index} rows={rows} />
    </Grid>
  );
};
export default DataSection;
