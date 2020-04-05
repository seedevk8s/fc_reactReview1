import React, { Component } from 'react';

/* useReducer 를 사용하는건데요, 이 Hook 함수를 사용하면 컴포넌트의 상태 업데이트 로직을 컴포넌트에서 분리시킬 수 있습니다. 
상태 업데이트 로직을 컴포넌트 바깥에 작성 할 수도 있고, 심지어 다른 파일에 작성 후 불러와서 사용 할 수도 있지요. */
/* useReducer 에 넣는 첫번째 파라미터는 reducer 함수이고, 두번째 파라미터는 초기 상태입니다. */
/* reducer 는 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수입니다. */
/* reducer 에서 반환하는 상태는 곧 컴포넌트가 지닐 새로운 상태가 됩니다. */
/* 
function reducer(state, action) {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
 */


// function Counter() {

//     /* const [number, setNumber] = useState(0); */
//     /* 여기서 state 는 우리가 앞으로 컴포넌트에서 사용 할 수 있는 상태를 가르키게 되고, 
//     dispatch 는 액션을 발생시키는 함수라고 이해하시면 됩니다.  */
//     const [number, dispatch]  = useReducer(reducer,0);

//     const onIncrease = () => {
//         /* 
//         console.log('+1');
//         setNumber(number+1);
//         setNumber(prevNumber => prevNumber + 1);
//        */
//         dispatch({ type: 'INCREMENT' });
//       }
    
//       const onDecrease = () => {
//         /* 
//         console.log('-1');
//         setNumber(number-1);
//         setNumber(prevNumber => prevNumber - 1);
//         */
//         dispatch({ type: 'DECREMENT' });
//       }
        
    
//     return (
//         <div>
//         <h1>{number}</h1>
//         <button onClick={onIncrease}>+1</button>
//         <button onClick={onDecrease}>-1</button>
//         </div>        
//     );
// }

/* 
클래스형 컴포넌트에서는 조금 다릅니다. 
render 함수 내부에서 선언은 할 수 있기는 있지만, 
일반적으로 그렇게 하지는 않고 클래스 안에 커스텀 메서드를 선언합니다.
 */
class Counter extends Component {
  handleInCrease() {
    console.log('increase');
  }

  handleDecrease() {
    console.log('decrease');
  }

  render() {
    return (
    <div>
      <h1>0</h1>
      <button onClick={this.handleInCrease}>+1</button>
      <button onClick={this.handleDecrease}>-1</button>
    </div>
    );
  }
}


export default Counter;
