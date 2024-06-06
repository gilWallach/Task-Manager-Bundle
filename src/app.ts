import { TaskInput } from "./components/task-input"
import { TaskList } from "./components/task-list"
import "./main.css"

console.log('app.ts Working')
// INSTANTIATION
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Loaded')
    new TaskInput();
    new TaskList('active');
    new TaskList('done');
});