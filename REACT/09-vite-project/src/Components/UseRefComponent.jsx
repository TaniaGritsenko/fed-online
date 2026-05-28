import React, {useRef, useState} from "react";

function UseRefComponent() {
    const rangeRef = useRef (null);
    const[oldValue, setOldValue] = useState(50);
    const[newValue, setNewValue] = useState(50);
    const[oldCard, setOldCard] = useState(null);
    const[newCard, setNewCard] = useState(null);
    const cards = [
        {id: 1, title: 'Карта 1', price: 10},
        {id: 2, title: 'Карта 2', price: 30},
        {id: 3, title: 'Карта 3', price: 50},
    ]
function changeRange() {
    const value = Number(rangeRef.current.value);
    setOldValue(newValue);
    setNewValue(value);
}
function chooseCard(card){
    setOldCard(newCard);
    setNewCard(card);
}
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-5">Компонент useRef</h2>
         <div className="p-5 border rounded text-center"style={{background: 'linear-gradient(135deg, #4facfe, #00f2fe)', minHeight: '1000px', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)'}}>
            <h3>Порівняння</h3>
                <input type="range"
                min='0'
                max='100'
                defaultValue={newValue}
                ref={rangeRef}
                onChange={changeRange}
                className="form-range"/>
                <div className="border rounded p-4 mt-4"
                style={{backgroundColor: 'white',
                maxWidth: '500px',
                margin: '0 auto',    
                }}>
                  <p>
                    Старе значення: {oldValue}
                </p>
                <p>
                    Нове значення: {newValue}
                </p>
                {newValue > oldValue ? (
                    <p style={{color: 'green'}}>
                        Нове значення більше за старе
                    </p>
                ) : newValue < oldValue ? (
                    <p style={{color: 'red'}}>
                        Нове значення менше за старе
                    </p>
                ) : (
                    <p style={{color: 'orange'}}>
                        Результат порівняння 
                    </p>
                )}  
                </div>
                </div>
            <div className="border rounded p-4 mb-5"
            style={{backgroundColor: 'white'}}>
                <h3 className="text-center mb-4">
                    Порівння вибору карток
                </h3>
                <div style={{display: 'flex',
                    gap: '20px',
                    justifyContent: 'center',
                    flexWrap: 'wrap'}}
                    >
                    {cards.map((card) => (
                        <div key={card.id}
                        style={{width: '200px',
                            padding: '25px',
                            border: '2px solid white',
                            borderRadius: '15px',
                            textAlign: 'center',
                            backgroundColor: '#cad4df',
                            }}
                            >
                                    <h4>
                                        {card.title}
                                    </h4>
                                    <p>Ціна: {card.price}</p>
                                    <button className="btn btn-primary"
                                    onClick={() => chooseCard(card)}>
                                        Обрати
                                    </button>
                                    </div>
                    ))}
                </div>
            </div>
            <div className="border rounded p-4 mt-4 text-center"
            style={{backgroundColor: '#f4f8ff',
                maxWidth: '500px',
                margin: '0 auto'
            }}>
                <p>
                    Попередній вибір:{''}
                    {oldCard ? oldCard.title : 'ще нічого не обрано'}
                </p>
                <p>
                    Новий вибір:{''}
                    {newCard ? newCard.title : "ще нічого не обрано"}
                </p>
                {oldCard && newCard && (
                    <>
                    {newCard.price > oldCard.price ? (
                        <p style={{color: 'green'}}>
                            Нова картка дорожча за попередню
                        </p>
                        ) : newCard.price < oldCard.price ? (
                            <p style={{color: 'blue'}}>
                                Нова картка дешевша за попередню
                            </p>
                            ) : (
                                <p style={{color: 'orange'}}>
                                    Ціна однакова
                                </p>
                            )}
                            </>
                )}
            </div>    
            </div>
    );
};

export default UseRefComponent ;