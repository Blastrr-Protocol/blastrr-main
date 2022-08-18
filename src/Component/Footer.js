const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-sm=12 col-md-6 col-lg-6">
                        <img src={require('../assets/images/logo.png')} className="foo-logo" alt="logo" />
                        <h2>LOCK, EARN, Cash Out</h2>
                        <p>Crytocurrency is a high risk investment and may result in total loss. DYOR</p>
                    </div>
                    <div className="col-sm=12 col-md-3 col-lg-3">
                        <h3>Connect with us:</h3>
                        <ul>
                            <li>
                                <a href='https://t.me/blastrr' target="_blank" rel="noreferrer"><i className="fab fa-telegram"></i></a>
                            </li>
                            <li>
                                <a href='https://twitter.com/Blastrrprotocol' target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm=12 col-md-3 col-lg-3">
                        <h3>Contact:</h3>
                        <a href="mailto:info@gmail.com"> <i className="fas fa-envelope me-2"></i>info@gmail.com</a>
                    </div>
                </div>
                <div className='row mt-5 mb-3'>
                    <div className='col-sm-12 col-lg-12 text-center'>
                        <p><span className="footer_copy">Copyright © 2022 - Blastrr Protocol</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer