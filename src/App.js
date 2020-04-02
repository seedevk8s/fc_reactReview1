import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {

  const [inputs, setInputs] = useState({
    username: '',
    email: ''
  });

  const { username, email } = inputs;

  const onChange = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com'            
    },
    {
        id: 2,
        username: 'tester',
        email: 'tester@example.com'            
    },
    {
        id: 3,
        username: 'liz',
        email: 'liz@example.com'            
    }
]);  

  const nextId = useRef(4);

  const onCreate = () => {
    // 배열 항목 추가
    const user = {
      id: nextId.current,
      username,
      email
    };
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  };

/* 배열에 있는 항목을 제거할 때에는, 
추가할떄와 마찬가지로 불변성을 지켜가면서 업데이트를 해주어야 합니다.
불변성을 지키면서 특정 원소를 배열에서 제거하기 위해서는 
filter 배열 내장 함수를 사용하는것이 가장 편합니다. 
이 함수는 배열에서 특정 조건이 만족하는 원소들만 추출하여 새로운 배열을 만들어줍니다.
 */
  const onRemove = id => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
        setUsers(users.filter(user => user.id !== id));
  };

  return (
    <>
      <CreateUser 
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove}/>      
    </>
  );
}

export default App;