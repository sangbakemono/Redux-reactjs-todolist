import { combineReducers } from 'redux';// trong project có nhiều reducer nên combine để sử dụng tất cả
import tasks from './tasks';

const myReducer = combineReducers({
    tasks           // tasks: tasks
});

export default myReducer;
