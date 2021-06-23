import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import DataPage from './DataPage';

const JSONDisplay = (props) => {
  const [jsonData, setJsonData] = useState();
  const [keys, setKeys] = React.useState(['']);

  useEffect(() => {
    if (localStorage.getItem('json')) {
      setJsonData(JSON.parse(localStorage.getItem('json')));
    }
  }, []);

  useEffect(() => {
    if (jsonData) {
      getKeys();
    }
  }, [jsonData]);

  const getKeys = () => {
    setKeys(Object.keys(jsonData[0]));
  };

  return (
    <Grid container>
      <DataPage jsonData={jsonData} keys={keys} />
    </Grid>
  );
};
export default JSONDisplay;
