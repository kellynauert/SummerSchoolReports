import React, { useState, useEffect } from 'react';
import { Grid, Typography, TextField, Paper } from '@material-ui/core';
import DataSection from './DataSection';

const DataPage = ({ keys, jsonData }) => {
  const [pageName, setPageName] = React.useState(['']);
  const [isShown, setIsShown] = useState(false);

  return (
    <Grid
      container
      direction='row'
      spacing={2}
      justify='center'
      alignItems='center'
    >
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
        direction='row'
        spacing={2}
        style={{
          width: '612px',
          border: '10px solid #00aeef',
          borderRadius: '12px',
        }}
        justify='center'
        alignItems='flex-end'
      >
        <Grid
          item
          md={12}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <Typography variant='h1'>{pageName}</Typography>
        </Grid>
        <DataSection jsonData={jsonData} keys={keys} />
      </Grid>
    </Grid>
  );
};
export default DataPage;
