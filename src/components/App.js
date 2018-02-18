/**
 * Created by Hema on 2/18/2018.
 */
import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import theme from '../stylesheet/MaterialTheme';
import { Provider } from 'react-redux';
import configureStore from '../redux/configureStore';
import ResponsiveContainer from '../containers/responsiveContainer';

const store = configureStore();

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider theme={theme}>
                    <ResponsiveContainer />
                </MuiThemeProvider>
            </Provider>
        );
    }
}

export default App;