import './card.css'
import mainImage from '../../assets/image-equilibrium.jpg'
import ethIcon from '../../assets/icon-ethereum.svg'
import clockIcon from '../../assets/icon-clock.svg'
import avatar from '../../assets/image-avatar.png'

export default function Card() {
    return (
        <article className="card">
            <img className="main-image" src={mainImage} alt="A hand hovering over a glowing blue geometric crystal" />

            <h1>Equilibrium #3429</h1>
            <p className="description">Our Equilibrium collection promotes balance and calm.</p>

            <div className="info">
                <div className="crypto">
                    <img src={ethIcon} alt="" />
                    <span>0.0725</span>
                </div>

                <div className="time">
                    <img src={clockIcon} alt="" />
                    <span>3 days left</span>
                </div>
            </div>

            <hr />

            <div className="profile">
                <img src={avatar} alt="Jules Wyvern" />
                <p>Creation of <span>Jules Wyvern</span></p>
            </div>
        </article>
    )
}