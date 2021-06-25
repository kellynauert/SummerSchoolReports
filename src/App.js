import React, { useState, useEffect } from 'react';
import './App.css';
import JSONPaste from './components/JSONPaste';
import SummerSchoolPaste from './components/SummerSchoolPaste';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/themes/theme';
import { Box } from '@material-ui/core/';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  const [savedData, setSavedData] = useState({});

  const savedDataFunction = (key, value) => {
    setSavedData({ ...savedData, [key]: value });
  };
  useEffect(() => {
    if (localStorage.getItem('savedData')) {
      setSavedData(JSON.parse(localStorage.getItem('savedData')));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('savedData', JSON.stringify(savedData));
  }, [savedData]);

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Router>
          <Box
            displayPrint='none'
            style={{
              padding: '16px',
              margin: '0 -5% ',
              backgroundColor: '#5F00ED',
              textAlign: 'center',
            }}
          >
            <Link to='/summerschool' style={{ marginRight: '24px' }}>
              Summer School
            </Link>
            <Link to='/xrreport'>Custom XR Report</Link>
          </Box>
          <Switch>
            <Route path='/summerschool'>
              <SummerSchoolPaste />
            </Route>
            <Route path='/xrreport'>
              <JSONPaste savedDataFunction={savedDataFunction} />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}
export default App;
