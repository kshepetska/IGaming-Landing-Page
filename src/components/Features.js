import Upgrader from '../images/features/upgrader.png';
import Mines from '../images/features/pvpmines.png';
import Coinflip from '../images/features/coinflip.png';

import '../styles/Features.scss';

const FeaturesOptions = [
    {
        id: 'upgrader',
        image: Upgrader,
        title: 'Enhance Your Winnings',
        description: 'Upgrade your rewards by reinvesting your earnings into higher-tier prizes. With every upgrade, you stand a chance to increase your payouts and unlock exclusive bonuses. Take your game to the next level and maximize your gains.'
    },
    {
        id: 'mines',
        image: Mines,
        title: 'Challenge and Conquer',
        description: 'Engage in intense PvP Mines where you compete against other players to uncover hidden treasures. Strategize your moves, avoid the mines, and outsmart your opponents to claim victory and lucrative rewards.'
    },
    {
        id: 'coinflip',
        image: Coinflip,
        title: 'Flip for Fortune',
        description: 'Try your luck with our Coinflip feature, where you bet on a simple coin toss. Choose heads or tails and double your stake with each win. Attractively quick, thrilling way to test your fortune and potentially make instant gains.'
    }
];

function Features() {
    return (
        <section className="features" id='features'>
                <h2 className="features__title title">Our Features</h2>
                <ul className="features__list">
                    {FeaturesOptions.map(feature => (
                        <div key={feature.id} className="features__item animation">
                            <img src={feature.image} alt={feature.title} className="features__image"/>
                            <h3 className="features__subtitle">{feature.title}</h3>
                            <p className="features__description">{feature.description}</p>
                        </div>
                    ))}
                </ul>
        </section>
    )
}

export default Features;