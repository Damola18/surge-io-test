import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
      'sans serif',
    ].join(','),
  },
});
  
  
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <SignIn/>
      </div>
    </ThemeProvider>
  );
}

export default App;
