import React from 'react';

const Hero = () => {
    return (
        <div id="hero" className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('/assets/media__1771346328218.jpg')` }}
            >
                <div className="absolute inset-0 bg-black/30"></div> {/* Overlay for text readability */}
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-6 drop-shadow-lg">
                    The 보리밭
                </h1>
                <p className="mt-4 max-w-lg mx-auto text-xl sm:text-2xl text-white/90 font-light mb-10 drop-shadow-md">
                    강남에서 30분, 2만평의 광활한 자연
                </p>
                <a
                    href="#gallery"
                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-sky-700 bg-white hover:bg-sky-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                    살펴보기
                </a>
            </div>
        </div>
    );
};

export default Hero;
