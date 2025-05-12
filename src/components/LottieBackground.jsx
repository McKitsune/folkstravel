import { Player } from '@lottiefiles/react-lottie-player';

export default function LottieBackground() {
    return (
        <div className="lottie-bg-container">
            <Player
                autoplay
                loop
                src='/assets/animations/mountain.json'
                renderer="svg"
                style={{ width: '100%', height: '100%' }}
            />
            <div className="overlay-dark-xp" />
        </div>
    );
}