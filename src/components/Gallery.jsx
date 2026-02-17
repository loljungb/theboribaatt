import React, { useState } from 'react';

const mediaItems = [
    { type: 'image', src: '/assets/media__1771346327494.jpg', alt: 'Green field landscape' },
    { type: 'image', src: '/assets/media__1771346328015.jpg', alt: 'Path through the field' },
    { type: 'image', src: '/assets/media__1771346328218.jpg', alt: 'Tree in the middle of the field' },
    { type: 'image', src: '/assets/media__1771346328253.jpg', alt: 'Wide open green space' },
    { type: 'image', src: '/assets/스크린샷 2026-02-17 오후 11.41.06.png', alt: 'Scenic view 1' },
    { type: 'image', src: '/assets/스크린샷 2026-02-17 오후 11.44.11.png', alt: 'Scenic view 2' },
    { type: 'image', src: '/assets/스크린샷 2026-02-17 오후 11.44.20.png', alt: 'Scenic view 3' },
    { type: 'video', src: '/assets/video1.mp4', alt: 'Nature video 1' },
    { type: 'video', src: '/assets/video2.mp4', alt: 'Nature video 2' },
    { type: 'video', src: '/assets/video3.mp4', alt: 'Nature video 3' },
    { type: 'video', src: '/assets/video4.mp4', alt: 'Nature video 4' },
];

const Gallery = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const openModal = (item) => {
        setSelectedItem(item);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedItem(null);
        document.body.style.overflow = 'unset';
    };

    const photos = mediaItems.filter(item => item.type === 'image');
    const videos = mediaItems.filter(item => item.type === 'video');

    return (
        <section id="gallery" className="py-20 bg-sky-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-800 mb-4">
                        Gallery
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        자연이 주는 평온함을 사진으로 만나보세요. 계절마다 변하는 아름다운 풍경을 담았습니다.
                    </p>
                </div>

                {/* Photos Section */}
                <div className="mb-16">
                    <div className="flex items-center mb-8">
                        <h3 className="text-2xl font-bold text-slate-800 border-l-4 border-sky-600 pl-3">Photos</h3>
                        <div className="h-px bg-slate-200 flex-grow ml-4"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {photos.map((item, index) => (
                            <div
                                key={`photo-${index}`}
                                className="group relative bg-white p-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                                onClick={() => openModal(item)}
                            >
                                <div className="aspect-video overflow-hidden rounded-lg bg-gray-100 relative">
                                    <img
                                        src={item.src}
                                        alt={item.alt}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300 pointer-events-none"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Videos Section */}
                <div>
                    <div className="flex items-center mb-8">
                        <h3 className="text-2xl font-bold text-slate-800 border-l-4 border-sky-600 pl-3">Videos</h3>
                        <div className="h-px bg-slate-200 flex-grow ml-4"></div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {videos.map((item, index) => (
                            <div
                                key={`video-${index}`}
                                className="group relative bg-white p-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                                onClick={() => openModal(item)}
                            >
                                <div className="aspect-video overflow-hidden rounded-lg bg-gray-100 relative">
                                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                        <span className="text-4xl z-10">▶️</span>
                                        <video
                                            src={item.src}
                                            className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                                            muted
                                            loop
                                            playsInline
                                            onMouseOver={e => e.target.play().catch(() => { })}
                                            onMouseOut={e => { e.target.pause(); e.target.currentTime = 0; }}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Media Modal */}
            {selectedItem && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-fade-in"
                    onClick={closeModal}
                >
                    {/* 16:9 Aspect Ratio Container for Modal Content */}
                    <div className="relative w-full max-w-6xl aspect-video flex items-center justify-center bg-black rounded-lg shadow-2xl overflow-hidden mx-4">
                        {selectedItem.type === 'video' ? (
                            <video
                                src={selectedItem.src}
                                controls
                                autoPlay
                                className="w-full h-full object-cover"
                                onClick={(e) => e.stopPropagation()}
                            />
                        ) : (
                            <img
                                src={selectedItem.src}
                                alt={selectedItem.alt}
                                className="w-full h-full object-cover"
                                onClick={(e) => e.stopPropagation()}
                            />
                        )}

                        <button
                            className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors z-10"
                            onClick={closeModal}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Gallery;
