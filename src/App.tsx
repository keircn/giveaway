import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Gift, ArrowRight } from 'lucide-react';
import VideoPlayer from './components/VideoPlayer';

function Home() {
  const [showVideo, setShowVideo] = useState(false);

  if (showVideo) {
    return <VideoPlayer />;
  }

  return (
    <div className="min-h-screen bg-[#0B0B0E] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          <img src="/e-z.svg" alt="E-Z Services" className="h-12 w-12" />
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            E-Z Services Giveaway
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="text-purple-400" />
              <span className="text-purple-400 font-semibold">Limited Time Offer</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Get Free Access to E-Z Services
            </h2>
            
            <p className="text-gray-400 text-lg">
              We're giving away free invites to our platform. Join thousands of satisfied users and experience the future of digital services.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-purple-500/20 transition-shadow"
              onClick={() => setShowVideo(true)}
            >
              Redeem Yours
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl rounded-full" />
            <div className="relative bg-[#0F0F13] p-8 rounded-2xl border border-gray-800">
              <div className="flex items-center gap-4 mb-6">
                <Gift className="w-12 h-12 text-purple-400" />
                <div>
                  <h3 className="text-xl font-semibold">What You'll Get</h3>
                  <p className="text-gray-400">Services we provide</p>
                </div>
              </div>
              
              <ul className="space-y-4">
                {[
                  'Unlimited uploads to e-z.host',
                  'Gorgeous, professional bio page',
                  'URL Shortening with 180+ domains',
                  'Pastes to share your code snippets',
                ].map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                    <span className="text-gray-300">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-24 text-center text-gray-400"
        >
          <p>Limited spots available. Don't miss out on this exclusive opportunity.</p>
        </motion.div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;