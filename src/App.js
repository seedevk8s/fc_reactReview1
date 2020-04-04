import React, { useRef, useState, useMemo, useCallback, useReducer } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중....');
  return users.filter(user => user.active).length;
}

const initialState = {
  inputs: {
    username: '',
    email: ''      
  },
  
  users: [
    {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com', 
        active: true           
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@example.com',
        active: false               
    },
    {
        id: 3,
        username: 'liz',
        email: 'liz@example.com',
        active: false               
    }      
  ]

};

/* CHANGE_INPUT 이라는 액션 객체를 사용하여 inputs 상태를 업데이트. 
reducer 함수에서 새로운 상태를 만들 때에는 불변성을 지켜주어야 하기 때문에 spread 연산자를 사용해주었습니다. */
function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      };
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id ? {...user, active: !user.active} : user)
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id != action.id)
      }; 

     default:
       return state; 
  }


  return state;
}


function App() {

 /*  
  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });
 */


  /* const { username, email } = inputs; */

  /* useCallback 은 특정 함수를 새로 만들지 않고 재사용하고 싶을때 사용합니다. */
  /* 함수 안에서 사용하는 상태 혹은 props 가 있다면 꼭, deps 배열안에 포함시켜야 된다.  */
  /* props 로 받아온 함수가 있다면, 이 또한 deps 에 넣어주어야 해요. */
  /* 
  const onChange = useCallback( e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  }, []);
 */

  /* 
  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com', 
        active: true           
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@example.com',
        active: false               
    },
    {
        id: 3,
        username: 'liz',
        email: 'liz@example.com',
        active: false               
    }
]);  
 */

  /* 
  const nextId = useRef(4);
 */

  /* 
  const onCreate = useCallback( () => {
    // 배열 항목 추가
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers(users => users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }, [username, email]);
 */

/* 배열에 있는 항목을 제거할 때에는, 
추가할떄와 마찬가지로 불변성을 지켜가면서 업데이트를 해주어야 합니다.
불변성을 지키면서 특정 원소를 배열에서 제거하기 위해서는 
filter 배열 내장 함수를 사용하는것이 가장 편합니다. 
이 함수는 배열에서 특정 조건이 만족하는 원소들만 추출하여 새로운 배열을 만들어줍니다.
 */
  /* 
  const onRemove = useCallback( id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
        setUsers(users => users.filter(user => user.id !== id));
  }, []);
 */

  /* 
  const onToggle = useCallback( id => {
    setUsers(
      users => users.map(user => user.id === id ? {...user, active: !user.active} : user )
    )
  }, []);
 */
  /* useMemo 의 첫번째 파라미터에는 어떻게 연산할지 정의하는 함수를 넣어주면 되고 
  두번째 파라미터에는 deps 배열을 넣어주면 되는데, 
  이 배열 안에 넣은 내용이 바뀌면, 우리가 등록한 함수를 호출해서 값을 연산해주고, 
  만약에 내용이 바뀌지 않았다면 이전에 연산한 값을 재사용하게 됩니다. */
  /* useMemo 는 특정 결과값을 재사용 할 때 사용 */
  /* 
  const count = useMemo(() => countActiveUsers(users), [users] ) ;
 */

  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);

  /* state 에서 필요한 값들을 비구조화 할당 문법을 사용하여 추출하여 각 컴포넌트에게 전달해주세요. */
  const { users } = state;
  const { username, email } = state.inputs;

  const onChange = useCallback( e => {
    const { name, value } = e.target;
    dispatch({
      type: 'CHANGE_INPUT',
      name,
      value
    })
  }, []);  

  const onCreate = useCallback( () => {
    // 배열 항목 추가
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current,
        username,
        email        
      }
    });

    nextId.current += 1;
  }, [username, email]);

  const onToggle = useCallback( id => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    })
  }, []);  

  const onRemove = useCallback( id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    dispatch({
      type: 'REMOVE_USER',
      id
    })
  }, []);  

  return (
    <>
      <CreateUser 
        
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}

      />
      <UserList 
          
          users={users} 
          onRemove={onRemove} 
          onToggle={onToggle}
          /*           
          users={[]}
           */
      />      
      <div>활성사용자 수 : 0</div>
    </>
  );
}

export default App;

/* 함수형 업데이트를 하게 되면, 
setUsers 에 등록하는 콜백함수의 파라미터에서 최신 users 를 참조 할 수 있기 때문에 deps 에 users 를 넣지 않아도 된답니다. */
