import { combineReducers } from 'redux';// trong project có nhiều reducer nên combine để sử dụng tất cả
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';

const myReducer = combineReducers({
    tasks,           // tasks: tasks
    isDisplayForm
});

export default myReducer;
