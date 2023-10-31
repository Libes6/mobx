import './App.css';
import './style/all.scss';
import { TaskList } from './components';
function App() {
    const arr = [1, 2, 34, 5];
    const arr2 = arr.flat();
    arr.push(22);
    console.log(arr);
    console.log(arr2);
    return (
        <>
            <header className='header'>
                <div className='header__client-status'></div>
            </header>
            {/*<TaskList />*/}
        </>
    );
}

export default App;
