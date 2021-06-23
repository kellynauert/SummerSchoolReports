import React, { useState } from 'react';
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
import { display } from '@material-ui/system';
const JSONPaste = (props) => {
  const [pasteData, setPasteData] = useState('');
  const [jsonData, setJsonData] = useState('');
  const [open, setOpen] = React.useState(false);

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

  return (
    <Box display='block' displayPrint='none'>
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
          <TextField
            rows={8}
            rowsMax={8}
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
  );
};
export default JSONPaste;
