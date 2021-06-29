import React, { useEffect, useState } from 'react';
import {
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Button,
  Box,
  Grid,
} from '@material-ui/core';
import JSONDisplay from './JSONDisplay';

const JSONPaste = ({ savedDataFunction, updateSavedData, savedData }) => {
  const [pasteData, setPasteData] = useState('');
  const [jsonData, setJsonData] = useState('');
  const [open, setOpen] = React.useState(false);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    let local = JSON.parse(localStorage.getItem('savedData'))['pages'];
    if (local && local.toString() !== pages.toString()) {
      setPages(JSON.parse(localStorage.getItem('savedData'))['pages']);
    }
  }, [pages, savedData]);

  useEffect(() => {
    if (localStorage.getItem('savedData')) {
      if (JSON.parse(localStorage.getItem('savedData'))['pages']) {
        setPages(JSON.parse(localStorage.getItem('savedData'))['pages']);
      }
    }
  }, [jsonData, pasteData, savedData]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const jsonSave = (json) => {
    localStorage.setItem('json', pasteData);
    setJsonData(json);
    handleClose();
  };
  const handleRemovePage = (pageNumber) => {
    const oldData = JSON.parse(localStorage.getItem('savedData'));
    let newKeys = [];
    const oldPages = JSON.parse(localStorage.getItem('savedData'))['pages'];
    let newPages = [];

    Object.keys(oldData).forEach((key) => {
      if (!key.includes(pageNumber)) {
        newKeys.push(key);
      }
    });

    const newData = Object.keys(oldData)
      .filter((key) => newKeys.includes(key))
      .reduce((obj, key) => {
        obj[key] = oldData[key];
        return obj;
      }, {});

    oldPages.forEach((page) => {
      if (`page-${page}` !== pageNumber) {
        newPages.push(page);
      }
    });

    newData['pages'] = newPages;
    updateSavedData(newData);
  };
  const handleAddPage = () => {
    let random = `${Math.floor(Math.random() * 100)}-${Math.floor(
      Math.random() * 100
    )}-${Math.floor(Math.random() * 100)}`;
    setPages((array) => [...array, `${random}`]);
    savedDataFunction('pages', [...pages, `${random}`]);
  };

  return (
    <>
      <Box
        displayPrint='none'
        justifyContent='space-between'
        style={{
          padding: '16px',
          textAlign: 'center',
        }}
      >
        <Grid container spacing={1}>
          <Grid item lg={1}>
            <Button
              variant='contained'
              color='secondary'
              fullWidth
              onClick={handleAddPage}
            >
              Add Page
            </Button>
          </Grid>
          <Grid item lg={1}>
            <Button
              fullWidth
              variant='outlined'
              color='primary'
              onClick={handleClickOpen}
            >
              Update JSON
            </Button>{' '}
          </Grid>
        </Grid>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='form-dialog-title'
        >
          <DialogTitle id='form-dialog-title'>Update JSON</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Follow the directions on generating a JSON on the 'Reports
              Automation' Google Sheet and paste below.
            </DialogContentText>
            <br></br>
            <TextField
              rows={8}
              size='small'
              multiline
              variant='outlined'
              fullWidth
              label='Paste JSON'
              id='json'
              autoFocus
              value={pasteData}
              onChange={(e) => setPasteData(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color='primary'>
              Cancel
            </Button>
            <Button onClick={jsonSave} color='primary'>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Box>

      <JSONDisplay
        jsonData={jsonData}
        savedDataFunction={savedDataFunction}
        pages={pages}
        updateSavedData={updateSavedData}
        key='json-display'
        handleRemovePage={handleRemovePage}
        savedData={savedData}
      />
    </>
  );
};
export default JSONPaste;
