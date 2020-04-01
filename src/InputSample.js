import React, { useState, useRef } from 'react';

function InputSample() {

    //const [text, setText] = useState('');
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const nameInput = useRef();         // useRef() 를 사용하여 Ref 객체를 만듦.

    const { name, nickname } = inputs;  // 비구조화 할당을 통해 값 추출

    const onChange = (e) => {
        const { value, name } = e.target;   // 우선 e.target 에서 name 과 value 를 추출
        setInputs({
            ...inputs,          // 기존의 input 객체를 복사한 뒤
            [name]: value       // name 키를 가진 값을 value 로 설정
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
        nameInput.current.focus();      // 이 객체를 우리가 선택하고 싶은 DOM 에 ref 값으로 설정해주어야 합니다.
                                        // Ref 객체의 .current 값은 우리가 원하는 DOM 을 가르키게 됩니다.
                                        // input 에 포커스를 하는 focus() DOM API 를 호출
    };

    return (
        <div>
            <input 
                name="name" 
                placeholder="이름" 
                onChange={onChange} 
                value={name} 
                ref={nameInput}
            />
            <input 
                name="nickname" 
                placeholder="닉네임" 
                onChange={onChange} 
                value={nickname}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값:  </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;
