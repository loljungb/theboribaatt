import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-800 mb-4">
                        About The 보리밭
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        도심에서 벗어나 탁 트인 자연을 만나보세요.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Size & Location */}
                    <div className="bg-sky-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                        <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-6 text-sky-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">Scale & Location</h3>
                        <p className="text-slate-600">
                            약 20,000평 (42,975m²)의 압도적인 규모.<br />
                            강남에서 30분 거리, 경기도 안산시에 위치하여 접근성이 뛰어납니다.
                        </p>
                    </div>

                    {/* Seasons */}
                    <div className="bg-sky-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                        <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-6 text-sky-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">Seasons</h3>
                        <ul className="text-slate-600 space-y-2">
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                <strong>4월 ~ 5월:</strong> 청보리의 푸르름
                            </li>
                            <li className="flex items-center">
                                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
                                <strong>5월 ~ 6월:</strong> 황금보리의 물결
                            </li>
                        </ul>
                    </div>

                    {/* Rules */}
                    <div className="bg-sky-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                        <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mb-6 text-sky-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">Usage Rules</h3>
                        <ul className="text-slate-600 text-sm space-y-2">
                            <li>• 이용 시간을 철저히 준수해 주세요.</li>
                            <li>• 장비 사용 시 바닥 보호 조치(테니스공 등)가 필요합니다.</li>
                            <li>• 발생한 쓰레기는 모두 수거해 주셔야 합니다.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
