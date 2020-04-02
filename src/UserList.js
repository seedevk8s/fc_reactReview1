import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {

    /*  useEffect 를 사용 할 때에는 첫번째 파라미터에는 함수, 
    두번째 파라미터에는 의존값이 들어있는 배열 (deps)을 넣습니다. */
    /*  만약에 deps 배열을 비우게 된다면, 
    컴포넌트가 처음 나타날때에만 useEffect 에 등록한 함수가 호출됩니다. */
    /*  useEffect 에서는 함수를 반환 할 수 있는데 이를 cleanup 함수라고 부릅니다. 
    cleanup 함수는 useEffect 에 대한 뒷정리를 해준다고 이해하시면 되는데요, 
    deps 가 비어있는 경우에는 컴포넌트가 사라질 때 cleanup 함수가 호출됩니다. */
    useEffect(() => {
        console.log('컴포넌트가 화면에 나타남');
        /*   주로, 마운트 시에 하는 작업들은 다음과 같은 사항들이 있습니다.

        props 로 받은 값을 컴포넌트의 로컬 상태로 설정
        외부 API 요청 (REST API 등)
        라이브러리 사용 (D3, Video.js 등...)
        setInterval 을 통한 반복작업 혹은 setTimeout 을 통한 작업 예약 */

        return () => {
            console.log('컴포넌트가 화면에서 사라짐');
            /*  언마운트 시에 하는 작업들은 다음과 같은 사항이 있습니다.

            setInterval, setTimeout 을 사용하여 등록한 작업들 clear 하기 (clearInterval, clearTimeout)
            라이브러리 인스턴스 제거 */
        };
    }, []);





     return (
        <div>
            <b style={{
                cursor: 'pointer',
                color: user.active ? 'green' : 'red'
            }} onClick={() => onToggle(user.id)}>{user.username}</b>
            &nbsp;
            <span>{user.email}</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
            {/* User 컴포넌트의 삭제 버튼이 클릭 될 때는 
            user.id 값을 앞으로 props 로 받아올 onRemove 함수의 파라미터로 넣어서 
            호출해주어야 합니다. */}
        </div>
    ) 
}

/* 이 onRemove 함수는 UserList 에서도 전달 받을것이며, 
이를 그대로 User 컴포넌트에게 전달해줄것입니다. */
function UserList({ users, onRemove, onToggle }) {

    return (
        <div>
            {
                users.map(user => (
                    <User 
                        user={user} 
                        key={user.id} 
                        onRemove={onRemove}
                        onToggle={onToggle}
                    />
                ))
            }
        </div>
    );

}

export default UserList;
