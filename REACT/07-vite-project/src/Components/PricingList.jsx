import {useState} from 'react';

const PricingList = () => {
    const [price, setPrice] = useState ('');
    const [users, setUsers] = useState ('');
    const [memory, setMemory] = useState ('');
    const [helpCenter, setHelpCenter] = useState (false);
    const [cards, setCards] = useState ([]);
    function addCard(e){
        e.preventDefault();
        const newCard = {
            price: price,
            users: users,
            memory: memory,
            helpCenter: helpCenter,
        };
        setCards([...cards, newCard]);
        setPrice('');
        setUsers('');
        setMemory('');
        setHelpCenter(false);
    }
    function deleteCard(indexDelete) {
        const filteredCards = cards.filter((card, index)=> index !== indexDelete);
        setCards(filteredCards)
    }
    return (
     <div className='container py-5'>
        <h1 className='text-center mb-4'>Тарифи</h1>
        <p className='text-center text-muted mb-5'>
            Заповніть форму нижче, щоб створити картку тарифу
        </p>
        <form onSubmit={addCard} className='row justify-content-center mb-5'>
            <div className='col-md-6'>
                <input type='number'
                className='form-control mb-3'
                placeholder='Ціна'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                />

                <input type='number'
                className='form-control mb-3'
                placeholder='Кількість користувачів'
                value={users}
                onChange={(e) => setUsers(e.target.value)}
                />

                <input type='number'
                className='form-control mb-3'
                placeholder='Обсяг памяті'
                value={memory}
                onChange={(e) => setMemory(e.target.value)}
                />
                <input type='checkbox'
                className='form-check-input'
                id='helpCenter'
                checked={helpCenter}
                onChange={(e) => setHelpCenter(e.target.checked)}
                />
                <label className='form-check-label'
                htmlFor='helpCenter'>
                    Наявність техпідтримки
                </label>
            </div>
            <button type='submit' className='btn btn-primary w-100'>
                Створити картку
            </button>
        </form>
        <div className='row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center'>
            {cards.map((card, index) =>(
                <div className='col' key={index}>
                <div className='card mb-4 rounded-3 shadow-sm'>
                <div className='card-header py-3'>
                  <h4 className='my-0 fw-normal'>
                    Тариф {index + 1}
                 </h4>  
                </div>
                <div className='card-body'>
                <h1 className='card-title priceng-card-title'>
                    {card.price} грн
                   <small className='text-body-secondary fw-light'>
                    {''}
                    / місяць
                   </small> 
                </h1>
                <ul className='list-unstyled mt-3 mb-4'>
                    <li>{card.users} користувачів включено</li>
                    <li>{card.memory} ГБ памяті</li>
                    {card.helpCenter ? (
                        <li>З доступ до техпідтримки</li>
                    ) : (
                    <li>Без доступу до техпідтримки</li>
                    )}
                </ul>
                <button type='button' className='w-100 btn btn-lg btn-primary mb-2'>
                    Замовити
                </button>
                <button type='button' className='w-100 btn btn-lg btn-danger'
                onClick={() => deleteCard(index)}>
                    Видалити
                </button>
                </div>  
                </div>
                </div>  
            ))}
        </div>
     </div>
    );
};

export default PricingList;