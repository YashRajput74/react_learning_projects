import { useState } from "react";

/*
    useArray: Manages an array state with functions for adding, removing, filtering, and updating elements.
*/
export default function useArray(initialArray = []) {
    //addItem: push(item)
    //remove Item with index: removeByIndex(item)
    //remove Item with value: removeByValue(item)
    //update at index: update(i,new)
    //replace array: set(array)
    //filter items: filter(function)
    //clear all items: clear()
    const [array, setArray] = useState(initialArray);

    function set(newArray) {
        setArray(newArray);
    }

    function push(item) {
        setArray(prev => [...prev, item]);
    }

    function removeByValue(value) {
        setArray(prev => prev.filter(item => item !== value));
    }

    function removeByIndex(index) {
        setArray(prev => prev.filter((value, ind) => ind != index));
    }

    function update(index, newItem) {
        setArray(prev => prev.map((item, i) => (i == index ? newItem : item)));
    }

    function filter(callback){
        setArray(prev=>prev.filter(callback));
    }

    function clear(){
        setArray([]);
    }

    return {
        array,
        set,
        push,
        removeByValue,
        removeByIndex,
        update,
        filter,
        clear
    }
}