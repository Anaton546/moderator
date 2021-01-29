import Home from './Home/Home'
import Navbar from './Global/Navbar/Navbar'
import Commands from './Commands/Commands'
import FAQ from './FAQ/FAQ'
import Footer from './Global/Footer/Footer'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {Switch, 
       BrowserRouter as Router,
       Route} from 'react-router-dom'
function Layout(props) {
    const theme = createMuiTheme({
        palette: {
           primary: {
              light: '#f59842',
              main: '#1abd25',
              dark:  "#367545"
           },
           secondary: {
             main: '#367545',
           },
        },
        background: {
          default: '#f59842',
          paper: '#fff'
        }
     });
    return (
        <ThemeProvider theme = {theme}>
        <Router>
        <Navbar />
        <Switch>
        
        <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/commands">
           <Commands />
          </Route>

          <Route exact path="/faq">
            <FAQ />
          </Route>
        </Switch>
        </Router>
        <Footer />
       </ ThemeProvider>  
    )
}

export default Layout