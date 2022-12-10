import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { reducer } from './users/usersReducer';

export const store = createStore(reducer, devToolsEnhancer());
