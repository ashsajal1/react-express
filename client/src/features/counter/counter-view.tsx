import { useDispatch, useSelector } from 'react-redux'
import { increment } from './counterSlice';

export default function CounterView() {
    const count = useSelector(state => state.counter.count);
    const dispathch = useDispatch()
  return (
    <div>
        <p>Count : {count}</p>
        <button className='p-1 border rounded' onClick={() => {dispathch(increment())}}>Increment</button>
    </div>
  )
}
