import { useSelector, useDispatch } from 'react-redux';
import styles from '../counter/Counter.module.css';

const todoAppState = {
    todos: [
      { id: 0, text: 'Learn React', completed: true },
      { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
      { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
    ],
    filters: {
      status: 'Active',
      colors: ['red', 'blue']
    }
  }
  
export function ToDo() {
const dispatch = useDispatch();
    return (
        <div>
            <div className={styles.row}> Enter Your To Do Item </div>
        </div>
    )
}