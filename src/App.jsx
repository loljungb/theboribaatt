import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Gallery />

      {/* Simple Footer */}
      <footer id="contact" className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-2xl font-display font-bold mb-4">The 보리밭</h3>
              <p className="text-slate-400 text-sm">
                도심 속에서 벗어나 자연과 함께하는<br />특별한 순간을 선물합니다.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Address</h4>
              <p className="text-slate-400 text-sm">
                경기도 안산시 상록구<br />
                (상세 주소 예약 시 안내)
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <p className="text-slate-400 text-sm">
                010-1234-5678<br />
                info@theboribat.com
              </p>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} The 보리밭. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

