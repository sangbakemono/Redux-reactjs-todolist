import { combineReducers } from 'redux';// trong project có nhiều reducer nên combine để sử dụng tất cả
import tasks from './tasks';
import isDisplayForm from './isDisplayForm';
import itemEditing from './itemEditing';
import filterTable from './filterTable';
import search from './search';
import sort from './sort';

const myReducer = combineReducers({
    tasks,           // tasks: tasks
    isDisplayForm,
    itemEditing,
    filterTable,
    search,
    sort
});

export default myReducer;


