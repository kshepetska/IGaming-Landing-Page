import Gambling from '../images/icons/features/gambling.png';
import Poker from '../images/icons/features/poker-chips.png';
import Slot from '../images/icons/features/slot-machine.png';

const FeaturesOptions = [
    {
        id: 'roulette',
        image: Gambling,
        title: 'Experience the Thrill of Live Roulette',
        description: 'Step up to the wheel and place your bets in our live roulette game. Feel the anticipation as the wheel spins and the ball dances across the numbers. With multiple betting options and real-time interaction with professional dealers, every spin is a chance to win big and experience the glamour of the casino floor.'
    },
    {
        id: 'poker',
        image: Poker,
        title: 'Master Your Poker Skills',
        description: 'Take your seat at the poker table and challenge players from around the world in our live poker games. Enjoy the strategic depth and excitement of Texas Hold\'em, Three Card Poker, and other popular variants. Test your skills, bluff your opponents, and aim for the winning hand.'
    },
    {
        id: 'slot',
        image: Slot,
        title: 'Hit the Jackpot in Our Slot-Style Matching Game',
        description: 'For those who love the thrill of slots, our 777-style matching game offers fast-paced action and the chance to hit big jackpots. Match symbols across the reels to win prizes, trigger exciting bonus rounds, and enjoy the vibrant graphics and engaging sound effects that make every spin a thrilling adventure.'
    }
];

function Features() {
    return (
        <section className="features">
            <div className="features__container">
                <h2 className="features__title">Our Features</h2>
                <ul className="features__list">
                    {FeaturesOptions.map(feature => (
                        <div key={feature.id} className="features__item">
                            <img src={feature.image} alt={feature.title} className="features__image"/>
                            <h3 className="features__subtitle">{feature.title}</h3>
                            <p className="features__description">{feature.description}</p>
                        </div>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Features;