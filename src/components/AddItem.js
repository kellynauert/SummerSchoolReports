import React, { useState, useEffect } from 'react';
import { Grid, Select, MenuItem } from '@material-ui/core';
import DataCard from './DataCard';

const AddItem = ({ jsonData, keys, index }) => {
  const [options, setOptions] = React.useState(['']);
  const [selectedOption, setSelectedOption] = React.useState('');
  const [isShown, setIsShown] = useState(false);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    setOptions(keys);
  }, [keys]);

  useEffect(() => {
    setSelectedOption(options[1]);
  }, [options]);

  return (
    <Grid
      item
      md={4}
      style={{
        margin: '32px 0',
      }}
      justifyContent='baseline'
      alignItems='center'
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {jsonData ? (
        <DataCard
          item={selectedOption}
          index={index}
          jsonData={jsonData}
          listItems={keys}
        />
      ) : null}
      {isShown ? (
        <Select
          variant='outlined'
          value={selectedOption}
          onChange={handleChange}
          style={{
            position: 'absolute',
            marginTop: '-25px',
            marginLeft: '-80px',
            backgroundColor: 'white',
          }}
        >
          {options.map((value) => {
            return (
              <MenuItem value={value} key={value}>
                {value}
              </MenuItem>
            );
          })}
        </Select>
      ) : null}
    </Grid>
  );
};
export default AddItem;
