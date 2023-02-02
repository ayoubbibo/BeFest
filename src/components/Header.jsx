import '../styles/Header.css';

/**
 * this component is the header of the website
 * it contains the logo and the menu
 */
function Header(){
return(
    <main className="site-wrapper">
            <div className="logo">
                <img src={require('./../assets/logoBeFest1.png')} alt="logo"/>
            </div>
            <div className="container">                        
                <div className="hexagon-menu clear">
                    <div className="hexagon-item">
                        <div className="hex-item">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="hex-item">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        
                        <div className="hex-content">
                            <span className="hex-content-inner">
                                <span className="icon">
                                    <i className="fa fa-universal-access"></i>                                                            
                                </span>
                                <span className="title">Bénévoles</span>
                            </span>
                            <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
                        </div>
                    </div>
                    <div className="hexagon-item">
                        <div className="hex-item">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="hex-item">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div  className="hex-content">
                            <span className="hex-content-inner">
                                <span className="icon">
                                    <i className="fa fa-trophy"></i>
                                </span>
                                <span className="title">jeux</span>
                            </span>
                            <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
                        </div>
                    </div>
                    <div className="hexagon-item">
                        <div className="hex-item">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="hex-item">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div  className="hex-content">
                            <span className="hex-content-inner">
                                <span className="icon">
                                    <i className="fa fa-braille"></i>
                                </span>
                                <span className="title">zones</span>
                            </span>
                            <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
                        </div>    
                    </div>
                </div>
            </div>
        </main>
)
}

export default Header;
  