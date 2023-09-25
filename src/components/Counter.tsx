import { FC } from 'react';
import { observer } from 'mobx-react-lite';
import counter from '../store/counter.ts';

const Counter: FC = observer(() => {
    const { count, total, increment, decrement } = counter;
    return (
        <div>
            <h1>Total{total}</h1>
            <button onClick={() => increment(1)}>+</button>
            <button onClick={() => decrement(1)}>-</button>
            <div>{count}</div>
        </div>
    );
});

export default Counter;
