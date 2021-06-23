import './App.css';
import JSONPaste from './components/JSONPaste';
import JSONDisplay from './components/JSONDisplay';
import SummerSchoolDisplay from './components/SummerSchoolDisplay';
import SummerSchoolPaste from './components/SummerSchoolPaste';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/themes/theme';
function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        {/* <JSONPaste />
        <JSONDisplay /> */}
        <SummerSchoolPaste />
      </ThemeProvider>
    </div>
  );
}

export default App;
