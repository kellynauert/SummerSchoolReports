import React, { useState, useEffect } from 'react';
import { Typography } from '@material-ui/core';

const DataCard = ({ jsonData, item, listItems, index }) => {
  useEffect(() => {
    console.log(item, index, listItems, jsonData);
  }, [index]);
  console.log(item, 'index?', index);

  const convertKey = (item) => {
    let removedKeyWord = item
      .replace(
        /((^general|^mathspace|^waypoints|^nexus|^clearsight|Percentage))/g,
        ''
      )
      .trim();

    let addSpaces = removedKeyWord.replace(/([A-Z])/g, ' $1').trim();
    let hyphenAfterSeason = addSpaces
      .replace(
        /(winter|spring|fall)/g,
        String.prototype.toUpperCase.apply('-$1')
      )
      .trim();
    let capitalAfterHypen = hyphenAfterSeason.replace(/\-[a-z]/g, (match) =>
      match.toUpperCase()
    );
    let spaced = capitalAfterHypen.replace(/(Nonxr)/g, '(Non-XR)').trim();

    return spaced.charAt(0).toUpperCase() + spaced.slice(1);
  };
  // const itemSource = (item) => {
  //   let source = item.match(
  //     /(^general|^mathspace|^waypoints|^nexus|^clearsight)/g
  //   );
  //   return source
  //     ? source.toString().charAt(0).toUpperCase() + source.toString().slice(1)
  //     : null;
  // };
  const timeFormat = (value) => {
    let removedHrs = value.replace(/(hrs|mins)/g, '').trim();
    return removedHrs;
  };
  return (
    <>
      {jsonData && index !== undefined && item ? (
        <>
          {jsonData[index][item]?.includes('hrs') ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'baseline',
              }}
            >
              <Typography variant='h3'>
                {timeFormat(jsonData[index][item])}
              </Typography>{' '}
              <Typography variant='h5'>hrs</Typography>
            </div>
          ) : jsonData[index][item]?.includes('mins') ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'baseline',
              }}
            >
              <Typography variant='h3'>
                {timeFormat(jsonData[index][item])}
              </Typography>{' '}
              <Typography variant='h5'>mins</Typography>
            </div>
          ) : (
            <Typography variant='h3' style={{ whiteSpace: 'nowrap' }}>
              {jsonData[index][item]}
            </Typography>
          )}
          {listItems.includes(item.concat('Nonxr')) ? (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Typography
                variant='subtitle1'
                style={{ color: '#808285', marginRight: '4px' }}
              >
                Non-XR:
              </Typography>
              <Typography variant='subtitle1'>
                {jsonData[index][item.concat('Nonxr')]}
              </Typography>
            </div>
          ) : null}
          <Typography variant='h4' style={{ whiteSpace: 'nowrap' }}>
            {convertKey(item)}
          </Typography>

          {/* <Typography variant='caption'>{itemSource(item)}</Typography> */}
        </>
      ) : null}
    </>
  );
};
export default DataCard;
