import { useEffect, useReducer } from "react";

const useLocalStorage = (key, inicialValue, reducer) => {

    const [data, dispatch] = useReducer(reducer, [], () => {

        const localData = localStorage.getItem(key);
        return localData ? JSON.parse(localData) : inicialValue;
    })

    useEffect(() => {
        const stringifiedData = JSON.stringify(data);
        localStorage.setItem('data', stringifiedData);
    }, [data])

    return [data, dispatch];

}

export default useLocalStorage;