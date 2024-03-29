import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  typography: {
    fontFamily: `"Source Sans Pro", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    pageHeader: {
      fontSize: '42px',
      color: '#00aeef',
      fontWeight: '900',
      marginTop: '16px',
      display: 'block',
      fontFamily: `"Source Sans Pro", "Helvetica", "Arial", sans-serif`,
      whiteSpace: 'nowrap',
    },
    sectionHeader: {
      fontSize: '18px',
      color: '#ec008c',
      fontWeight: '300',
      display: 'block',
      fontFamily: `"Source Sans Pro", "Helvetica", "Arial", sans-serif`,
    },
    data: {
      fontSize: '36px',
      fontWeight: '600',
      display: 'block',
      fontFamily: `"Source Sans Pro", "Helvetica", "Arial", sans-serif`,
    },
    dataDescription: {
      fontSize: '12px',
      color: '#808285',
      display: 'block',
      fontWeight: '300',
      fontFamily: `"Source Sans Pro", "Helvetica", "Arial", sans-serif`,
    },
    body: {
      fontSize: '12px',
      fontWeight: '300',
      textAlign: 'left',
      display: 'block',
      fontFamily: `"Source Sans Pro", "Helvetica", "Arial", sans-serif`,
    },
    info: {
      fontSize: '12px',
      fontWeight: '300',
      textAlign: 'right',
      fontStyle: 'italic',
      display: 'block',
      fontFamily: `"Source Sans Pro", "Helvetica", "Arial", sans-serif`,
    },
    infoBold: {
      fontSize: '12px',
      fontWeight: '400',
      textAlign: 'right',

      display: 'block',
      fontFamily: `"Source Sans Pro", "Helvetica", "Arial", sans-serif`,
    },
    sub1: {
      fontSize: '18px',
      margin: '0px 0 4px 0',
      textAlign: 'left',
      fontWeight: '300',
      display: 'block',
      fontFamily: `"Source Sans Pro", "Helvetica", "Arial", sans-serif`,
    },
    sub2: {
      fontSize: '12px',
      textAlign: 'left',
      margin: '16px 0 4px 0',
      fontWeight: '400',
      display: 'block',
      fontFamily: `"Source Sans Pro", "Helvetica", "Arial", sans-serif`,
    },
    timeFormat: {
      fontSize: '20px',
      fontWeight: '800',
      fontFamily: `"Source Sans Pro", "Helvetica", "Arial", sans-serif`,
    },
    symbolFormat: {
      fontSize: '24px',
      fontWeight: '800',
      fontFamily: `"Source Sans Pro", "Helvetica", "Arial", sans-serif`,
    },
    caption: {
      fontSize: '9px',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      color: '#ec008c',
      display: 'block',
      fontFamily: `"Source Sans Pro", "Helvetica", "Arial", sans-serif`,
    },
  },
});
export default theme;
