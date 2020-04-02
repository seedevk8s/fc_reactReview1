import React from 'react';

function User({ user, onRemove }) {
     return (
        <div>
            <b>{user.username}</b> <span>{user.email}</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
            {/* User 컴포넌트의 삭제 버튼이 클릭 될 때는 
            user.id 값을 앞으로 props 로 받아올 onRemove 함수의 파라미터로 넣어서 
            호출해주어야 합니다. */}
        </div>
    ) 
}

/* 이 onRemove 함수는 UserList 에서도 전달 받을것이며, 
이를 그대로 User 컴포넌트에게 전달해줄것입니다. */
function UserList({ users, onRemove }) {

    return (
        <div>
            {
                users.map(user => (
                    <User user={user} key={user.id} onRemove={onRemove}/>
                ))
            }
        </div>
    );

}

export default UserList;
