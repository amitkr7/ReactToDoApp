import React, { useState } from 'react';
import InputArea from './InputArea';
import ToDoItem from './ToDoItem';

function App() {
    const [todos, setTodos] = useState([]);

    function addItem(inputText) {
        setTodos(prevItems => [...prevItems, inputText]);
    }

    function deleteItem(id) {
        setTodos(prevItems => {
            return prevItems.filter((item, index) => {
                return index !== id;
            });

        });
    }
    
    return (
        <div className='container'>
            <div className='heading'>
                <h1>To-Do List</h1>
            </div>
            <InputArea
                addItem={addItem}
            />
            <div >
                <ul>
                    {todos.map((todoItem, index) =>
                        <ToDoItem
                            key={index}
                            id={index}
                            text={todoItem}
                            onChecked={deleteItem}
                        />
                    )}
                </ul>
            </div>
        </div>
    )
}

export default App;

