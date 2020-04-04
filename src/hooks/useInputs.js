/* input 을 관리하는 코드는 관리 할 때마다 꽤나 비슷한 코드가 반복되죠. */
/* 그러한 상황에 커스텀 Hooks 를 만들어서 반복되는 로직을 쉽게 재사용하는 방법을 알아보겠습니다. */
/* 우리가 만든 useInputs Hook  */
/* 새로운 항목을 추가 할 때 input 값을 초기화해야 하므로 데이터 등록 후 reset() 을 호출해주세요. */

import { useState, useCallback } from 'react';

function useInputs(initialForm) {
    const [form, setForm] = useState(initialForm);

    // change 이벤트 처리
    const onChange = useCallback(e => {
        const { name, value } = e.target;
        setForm(form => ({...form, [name]: value}));
    }, []);

    // reset 이벤트 처리
    const reset = useCallback(() => setForm(initialForm), [initialForm]);

    return [form, onChange, reset];
}

export default useInputs;
