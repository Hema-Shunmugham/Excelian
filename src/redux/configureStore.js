import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import users from './modules/users';
import responsiveDrawer from './modules/responsiveDrawer';

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware( logger)(createStore);

const reducer = combineReducers({
    users,
    responsiveDrawer,
});

const configureStore = (initState) => createStoreWithMiddleware(reducer, initState);
export default configureStore;
