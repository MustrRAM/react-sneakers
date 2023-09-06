function Card() {
    return (
    <div className="card">
        <div className="card__favorite">
            <img src="/img/hearth-unliked.svg" alt="heart" />
        </div>
        <img className="mb-10" width={133} height={112} src="/img/sneakers/1.jpg" alt="" />
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className="d-flex justify-between  align-center mt-20">
            <div className="card__price d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
            </div>
            <button className="button">
                <img src="/img/plus.svg" alt="" />
            </button>
        </div>
    </div>
    );
}

export default Card;
