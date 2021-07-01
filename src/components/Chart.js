import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import { Scatter } from 'react-chartjs-2';

const Chart = ({ selectedOption }) => {
  const [chartJson, setChartJson] = useState({});

  const [dataContent, setDataContent] = useState();

  const display = {
    datasets: [
      {
        backgroundColor: '#00aeef',
        data: dataContent,
      },
    ],
  };

  useEffect(() => {
    setChartJson(JSON.parse(localStorage.getItem('chartData')));
  }, []);

  useEffect(() => {
    console.log(chartJson);
    if (chartJson.length > 0) {
      let dataArray = [];
      chartJson.forEach((item) => {
        let tempObject = {};
        if (
          item.grade === selectedOption &&
          item.nexusAndMathspaceTime &&
          item.mathspaceMastery
        ) {
          tempObject.x = item.nexusAndMathspaceTime;
          tempObject.y = item.mathspaceMastery;
        }
        dataArray.push(tempObject);
      });
      setDataContent(dataArray);
    }
  }, [chartJson]);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Scatter
          data={display}
          options={{
            scales: {
              x: {
                type: 'linear',
                position: 'bottom',
              },
            },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default Chart;
