import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './counterSlice';

export default function CounterView() {
    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch()
    return (
        <div className='p-2'>
            <p>Count : {count}</p>
            <div className='flex items-center gap-2'>
            <button className='p-1 border rounded' onClick={() => { dispatch(increment()) }}>Increment</button>
            <button className='p-1 border rounded' onClick={() => { dispatch(decrement()) }}>Decrement</button>
            <button className='p-1 border rounded' onClick={() => { dispatch(reset()) }}>Reset</button>
            </div>
        </div>
    )
}
