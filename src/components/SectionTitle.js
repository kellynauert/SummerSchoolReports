import React, { useState, useEffect } from 'react';
import { Grid, Typography, TextField } from '@material-ui/core';

const SectionTitle = ({ text, handleSectionTextChange, sectionText }) => {
  const [hidden, setHidden] = useState(true);
  const handleHidden = () => setHidden(!hidden);

  return (
    <Grid
      container
      item
      sm={12}
      style={{ margin: '42px 0 12px 0' }}
      alignItems='center'
      textAlign='center'
    >
      <Grid container item sm style={{ overflow: 'hidden' }}>
        <Typography variant='caption'>
          ───────────────────────────────────────────────────────────────────────────────────────────────────────────────
        </Typography>
      </Grid>
      <Grid item sm={2} style={{ backgroundColor: 'white', margin: '0 12px' }}>
        {hidden ? (
          <Typography
            variant='sectionHeader'
            onClick={handleHidden}
            style={{ cursor: 'pointer' }}
          >
            {text}
          </Typography>
        ) : (
          <TextField
            fullWidth
            variant='outlined'
            label='Section Name'
            onBlur={handleHidden}
            value={sectionText}
            onChange={(e) => handleSectionTextChange(e)}
            style={{ margin: '4px' }}
          />
        )}
      </Grid>
      <Grid item sm style={{ overflow: 'hidden' }}>
        <Typography variant='caption'>
          ───────────────────────────────────────────────────────────────────────────────────────────────────────────────
        </Typography>
      </Grid>
    </Grid>
  );
};
export default SectionTitle;
