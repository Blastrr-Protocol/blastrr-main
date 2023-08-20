
const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="#sec">
                        <img src={require('../assets/images/logo.png')} className="img-fluid" alt='Logo' />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#section">FAQ's</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#section">Whitepaper</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='https://t.me/blastrrbank' target="_blank" rel="noreferrer">Telegram</a>
                            </li>
                            <li className="nav-item">
                                <a className="btn btn-primary" href='https://bank.blastrr.com' target="_blank" rel="noreferrer">Open Bank</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header

