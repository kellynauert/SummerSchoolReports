import React, { useState } from 'react';
import { Grid, Typography, TextField, Paper } from '@material-ui/core';
import DataSection from './DataSection';
import CRELogo from '../images/creLogo.png';

const DataPage = ({
  keys,
  jsonData,
  options,
  type,
  savedDataFunction,
  pageNumber,
}) => {
  const [pageName, setPageName] = React.useState(['']);
  const [isShown, setIsShown] = useState(false);

  return (
    <div style={{ display: 'block' }} className='page-break'>
      {isShown ? (
        <Paper
          style={{
            position: 'absolute',
            backgroundColor: 'white',
            padding: '8px',
            marginTop: '-250px',
          }}
        >
          <TextField
            size='small'
            variant='outlined'
            label='Page Name'
            id='page-name'
            value={pageName}
            onChange={(e) => setPageName(e.target.value)}
            style={{ margin: '4px' }}
          />
        </Paper>
      ) : null}

      <Grid
        container
        item
        sm={12}
        direction='row'
        style={{
          border: '10px solid #00aeef',
          borderRadius: '12px',
          padding: '16px 16px 36px 16px',
          marginTop: '16px',
        }}
        justify='center'
        alignItems='flex-end'
      >
        <Grid
          container
          item
          alignItems='center'
          justify='space-between'
          style={{ marginBottom: '18px' }}
        >
          <Grid container item sm={6} justify='flex-start'>
            <img src={CRELogo} alt='Logo' style={{ height: '30px' }} />
          </Grid>
          <Grid item sm={6}>
            <Typography variant='info'>Cathedral High School 2021</Typography>
          </Grid>
        </Grid>
        <Grid
          item
          md={12}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          {pageName ? (
            <Typography variant='pageHeader'>{pageName}</Typography>
          ) : null}
        </Grid>
        <DataSection
          jsonData={jsonData}
          options={options}
          keys={keys}
          type={type}
          sectionKey={`${pageNumber}-section-0`}
          savedDataFunction={savedDataFunction}
        />
      </Grid>
    </div>
  );
};
export default DataPage;
