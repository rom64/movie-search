import me from "../Roman.png";

const Footer = () =>{
    return(
        <footer className="page-footer green" >
            <div className="footer-copyright" style={{textAlign:"center"}}>
                <div className="container" style={{position: 'relative'}}>
                    © { new Date().getFullYear() } Roman Litvinov
                    <a href="https://github.com/rom64" className="hide-on-med-and-down"><img src= {`${me}`} alt="" style={{height: 50, opacity: 0.6, position: "absolute", bottom: -10, right: 0}}/></a>
                </div>
            </div>
        </footer>
    )
}
export default Footer;