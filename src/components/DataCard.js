import React, { useState, useEffect } from 'react';
import { Typography, TextField, MenuItem, Box, Grid } from '@material-ui/core';

const DataCard = ({
  data,
  optionItems,
  groupIndex,
  cardIndex,
  savedDataFunction,
}) => {
  const [selectedOption, setSelectedOption] = useState(
    localStorage.getItem('savedData')
      ? JSON.parse(localStorage.getItem('savedData'))[cardIndex]
      : null
  );

  useEffect(() => {
    savedDataFunction(cardIndex, selectedOption);
  }, [selectedOption]);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const convertcardIndex = (selectedOption) => {
    let removedcardIndexWord = selectedOption
      .replace(
        /((^general|^mathspace|^waypoints|^nexus|^clearsight|Percentage))/g,
        ''
      )
      .trim();

    let addSpaces = removedcardIndexWord.replace(/([A-Z])/g, ' $1').trim();
    let hyphenAfterSeason = addSpaces
      .replace(
        /(winter|spring|fall)/g,
        String.prototype.toUpperCase.apply('-$1')
      )
      .trim();
    let capitalAfterHypen = hyphenAfterSeason.replace(/-[a-z]/g, (match) =>
      match.toUpperCase()
    );
    let spaced = capitalAfterHypen.replace(/(Nonxr)/g, '(Non-XR)').trim();

    return spaced.charAt(0).toUpperCase() + spaced.slice(1);
  };

  const timeFormat = (value) => {
    let removedHrs = value.replace(/(hrs|mins|%|\+)/g, '').trim();
    return removedHrs;
  };
  return (
    <Grid item sm={4}>
      {data && groupIndex !== undefined && selectedOption ? (
        <>
          {data[groupIndex][selectedOption]?.includes('hrs') ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'baseline',
              }}
            >
              <Typography variant='data'>
                {timeFormat(data[groupIndex][selectedOption])}
              </Typography>
              <Typography variant='timeFormat'>hrs</Typography>
            </div>
          ) : data[groupIndex][selectedOption]?.includes('mins') ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'baseline',
              }}
            >
              <Typography variant='data'>
                {timeFormat(data[groupIndex][selectedOption])}
              </Typography>
              <Typography variant='timeFormat'>mins</Typography>
            </div>
          ) : data[groupIndex][selectedOption]?.includes('%') ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography variant='data'>
                {timeFormat(timeFormat(data[groupIndex][selectedOption]))}
              </Typography>
              <Typography variant='symbolFormat'>%</Typography>
            </div>
          ) : data[groupIndex][selectedOption]?.includes('+') ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography variant='symbolFormat'>+</Typography>
              <Typography variant='data'>
                {timeFormat(timeFormat(data[groupIndex][selectedOption]))}
              </Typography>
            </div>
          ) : optionItems.includes(selectedOption.concat('Nonxr')) ? (
            <>
              <Typography variant='data' style={{ whiteSpace: 'nowrap ' }}>
                {data[groupIndex][selectedOption]}
              </Typography>

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant='nonxr'>Non-XR:</Typography>
                <Typography variant='nonxrData'>
                  {data[groupIndex][selectedOption.concat('Nonxr')]}
                </Typography>
              </div>
            </>
          ) : (
            <Typography variant='data' style={{ whiteSpace: 'nowrap ' }}>
              {data[groupIndex][selectedOption]}
            </Typography>
          )}
          <Typography variant='dataDescription'>
            {convertcardIndex(selectedOption)}
          </Typography>
        </>
      ) : (
        <>
          <Typography variant='data' style={{ whiteSpace: 'nowrap ' }}>
            ??
          </Typography>

          <Typography variant='dataDescription'>Select An Option</Typography>
        </>
      )}
      <Box displayPrint='none' className='printItem'>
        <TextField
          select
          fullWidth
          label='Data Selection'
          variant='outlined'
          value={selectedOption}
          onChange={handleChange}
        >
          {optionItems.map((value) => {
            return (
              <MenuItem value={value} key={value}>
                {value}
              </MenuItem>
            );
          })}
        </TextField>
      </Box>
    </Grid>
  );
};
export default DataCard;
