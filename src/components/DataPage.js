import React, { useState, useEffect } from 'react';
import {
  Grid,
  Typography,
  TextField,
  FormControlLabel,
  Switch,
  Button,
} from '@material-ui/core';
import DataSection from './DataSection';
import CRELogo from '../images/creLogo.png';

const DataPage = ({
  keys,
  jsonData,
  options,
  type,
  savedDataFunction,
  pageNumber,
  handleRemovePage,
  updateSavedData,
}) => {
  const [pageName, setPageName] = React.useState('PageName');
  const [checked, setChecked] = useState(null);
  const [hidden, setHidden] = useState(true);
  const [sections, setSections] = useState([]);

  const handleHidden = () => setHidden(!hidden);

  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem('savedData'))[`${pageNumber}-pageName`]
    ) {
      setPageName(
        JSON.parse(localStorage.getItem('savedData'))[`${pageNumber}-pageName`]
      );
    }

    if (JSON.parse(localStorage.getItem('savedData'))[`${pageNumber}-toggle`]) {
      setChecked(
        JSON.parse(localStorage.getItem('savedData'))[`${pageNumber}-toggle`]
      );
    }
  }, [pageNumber, keys, jsonData, options, type]);

  const handleRemoveSection = (sectionKey) => {
    const oldData = JSON.parse(localStorage.getItem('savedData'));
    let newKeys = [];
    const oldPages = JSON.parse(localStorage.getItem('savedData'))[
      `${pageNumber}-sections`
    ];
    let newPages = [];

    Object.keys(oldData).forEach((key) => {
      if (!key.includes(sectionKey)) {
        newKeys.push(key);
      }
    });

    const newData = Object.keys(oldData)
      .filter((key) => newKeys.includes(key))
      .reduce((obj, key) => {
        obj[key] = oldData[key];
        return obj;
      }, {});

    oldPages.forEach((section) => {
      if (`page-${section}` !== sectionKey) {
        newPages.push(section);
      }
    });

    newData['pages'] = newPages;
    updateSavedData(newData);
  };

  const handlePageName = (e) => {
    setPageName(e.target.value);
    savedDataFunction(`${pageNumber}-pageName`, e.target.value);
  };

  const handleToggle = (e) => {
    setChecked(e.target.checked);
    savedDataFunction(`${pageNumber}-toggle`, e.target.checked);
  };
  const handleAddSection = () => {
    let random = `${Math.floor(Math.random() * 100)}-${Math.floor(
      Math.random() * 100
    )}-${Math.floor(Math.random() * 100)}`;
    setSections((array) => [...array, `${random}`]);
    savedDataFunction(`${pageNumber}-sections`, [...sections, `${random}`]);
  };

  useEffect(() => {
    if (localStorage.getItem('savedData')) {
      if (
        JSON.parse(localStorage.getItem('savedData'))[`${pageNumber}-sections`]
      ) {
        setSections(
          JSON.parse(localStorage.getItem('savedData'))[
            `${pageNumber}-sections`
          ]
        );
      }
    }
  }, [pageNumber, keys, jsonData, options, type]);

  const renderSections = () => {
    if (sections) {
      return sections.map((i) => (
        <DataSection
          jsonData={jsonData}
          options={options}
          keys={keys}
          type={type}
          sectionKey={`${pageNumber}-section-${i}`}
          savedDataFunction={savedDataFunction}
          handleRemoveSection={handleRemoveSection}
        />
      ));
    }
  };

  return (
    <div display='block' className='page-break'>
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

        <Grid container item md={12} justifyContent='center'>
          {checked ? (
            <Grid item xs={12} textAlign='center'>
              {hidden ? (
                <Typography
                  variant='pageHeader'
                  onClick={handleHidden}
                  style={{ cursor: 'pointer' }}
                >
                  {pageName}
                </Typography>
              ) : (
                <TextField
                  variant='outlined'
                  id='page-name'
                  value={pageName}
                  onChange={handlePageName}
                  onBlur={handleHidden}
                  style={{ margin: '4px' }}
                />
              )}
            </Grid>
          ) : null}
          <Grid
            container
            item
            xs={12}
            spacing={1}
            justifyContent='space-between'
            displayPrint='none'
            className='printItem'
          >
            <Grid item md={1}>
              <Button
                variant='contained'
                fullWidth
                color='secondary'
                onClick={handleAddSection}
              >
                Add Section
              </Button>
            </Grid>
            <Grid item container md={2} justifyContent='center'>
              <FormControlLabel
                control={<Switch checked={checked} onChange={handleToggle} />}
                label='Page Name'
              />
            </Grid>
            <Grid item md={1}>
              <Button
                variant='outlined'
                fullWidth
                onClick={() => handleRemovePage(pageNumber)}
              >
                Remove Page
              </Button>
            </Grid>
          </Grid>
        </Grid>

        {renderSections()}
      </Grid>
    </div>
  );
};
export default DataPage;
