import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.linkedin.com/in/luisalejandrovasquezcordero/'  target="_blank">
                <img src="img/linkedin.png" alt='linkedin' />
            </a>
            <a href='https://github.com/Alejandrovc6467'  target="_blank">
                <img src="img/github.png" alt='github' />
            </a>
            <a href='https://www.instagram.com/alejandrovc177/' target="_blank">
                <img src="img/instagram.png" alt='instagram' />
                
            </a>
        </div>
        <img className="logoCompany" src='img/Logo.png' alt='org' />
        <p>Designed by <br/> <strong>  Alejandro Vasquez </strong> </p>
    </footer>
}

export default Footer