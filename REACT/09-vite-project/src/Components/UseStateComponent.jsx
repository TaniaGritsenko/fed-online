import React, {useState} from "react";

function UseStateComponent() {
    const[showInput, setShowInput] = useState(false);
    const[searchText, setSearchText] = useState('');
function changeInput(event) {
    setSearchText(event.target.value);
}
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-5">Компонент useState</h2>
         <div className="p-5 border rounded text-center"style={{background: 'linear-gradient(135deg, #4facfe, #00f2fe)', minHeight: '1000px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)'}}>
            <h3>Показ інпуту на сторінці</h3>
         <button className="btn btn-primary mb-3" onClick={()=> setShowInput(!showInput)}
        >{showInput ? 'Сховати інпут' : 'Показати інпут'}</button>
        {showInput && (
            <div>
                <input type="text"
                className="form-control mb-3"
                placeholder="Введіть текс для пошуку"
                value={searchText}
                onChange={changeInput}
                style={{padding: '20px', border: searchText.length >= 5 ? '3px solid green'
                    : '3px solid black'}}></input>
               <h3>Результат пошуку</h3>
               <div className="border p-5 rounded"
               style={{backgroundColor: 'white', maxWidth: '1500px', minHeight: '100px'}}>
               {searchText === '' ? (
                <p style={{color: 'orange'}}>
                    Введіть текст для пошуку
                </p>
               ) : searchText.length < 5 ? (
                <p style={{color: 'red'}}>
                    Введіть мінімум 5 символів
                </p>
               ) : (
                <p style={{color: 'green', fontWeight: 'bold'}}>
                    Ви шукаєте: {searchText}
                </p>
               )}      
            </div>
            </div> 
             )}
        </div>
        </div>
    );
};

export default UseStateComponent;