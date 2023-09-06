function Header(){
    return (
        <header className="header d-flex justify-between align-center p-40">
            <div className="headerLeft d-flex  align-center">
                <img className="mr-20" width={40} height={40} src="/img/logo.png" />
                <div>
                    <h3 className="text-uppercase">REACT SNEAKERS</h3>
                    <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="headerRight d-flex">
                <li className="mr-30">
                    <img className="mr-10" width={18} height={18} src="/img/cart.svg" />
                    <span>1205р</span>
                </li>
                <li>
                    <img width={18} height={18} src="/img/user.svg" />
                </li>
            </ul>
    </header>
    );
}

export default Header;