import LogoImageXs from '../../assets/merkle-white.png';
import LogoImageLg from '../../assets/merkle-logo.png';
import '../header/Header.css';

export default function Header () {
    return (
        <>
            <div className="header">
                <div className="logoXs">
                    <img src={LogoImageXs} alt="Merkle Logo" />
                </div>

                <div className="logoLg">
                    <img src={LogoImageLg} alt="Merkle Logo" />
                </div>
            </div>
        </>
    );
}
