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
} from '@material-ui/core';
import JSONDisplay from './JSONDisplay';
const JSONPaste = ({ savedDataFunction }) => {
  const [pasteData, setPasteData] = useState('');
  const [jsonData, setJsonData] = useState('');
  const [open, setOpen] = React.useState(false);
  const [pages, setPages] = useState([]);
  useEffect(() => {
    if (localStorage.getItem('pages')) {
      setPages(JSON.parse(localStorage.getItem('pages')));
    }
  }, []);
  const handleClickOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    localStorage.setItem('pages', JSON.stringify(pages));
  }, [pages]);

  const handleClose = () => {
    setOpen(false);
  };
  const jsonSave = (json) => {
    localStorage.setItem('json', pasteData);
    setJsonData(json);
    handleClose();
  };
  const handleAddPage = () => {
    let random = `${Math.floor(Math.random() * 100)}-${Math.floor(
      Math.random() * 100
    )}-${Math.floor(Math.random() * 100)}`;
    setPages((array) => [...array, `${random}`]);
    console.log(pages);
  };
  return (
    <>
      <Box
        displayPrint='none'
        style={{
          padding: '16px',
          margin: '0 -5% ',
          borderBottom: '1px solid gray',
          textAlign: 'center',
        }}
      >
        <Button variant='outlined' color='primary' onClick={handleClickOpen}>
          Update JSON
        </Button>
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
      <Button onClick={handleAddPage}>Add Page</Button>
      <JSONDisplay
        jsonData={jsonData}
        savedDataFunction={savedDataFunction}
        pages={pages}
      />
    </>
  );
};
export default JSONPaste;
