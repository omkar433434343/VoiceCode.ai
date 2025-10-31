import React from 'react';
import { View } from '../App';

interface PricingPageProps {
  navigateTo: (view: View) => void;
}

const PricingPage: React.FC<PricingPageProps> = ({ navigateTo }) => {
  return (
    <section id="pricing" className="py-20 pt-32 px-4 min-h-screen">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-4">
                Choose Your <span className="text-brand-green">Learning Plan</span>
            </h2>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                Select the perfect plan to accelerate your coding journey.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="dark-card rounded-xl p-6 h-full flex flex-col">
                    <h3 className="text-2xl font-bold mb-3">Starter</h3>
                    <div className="text-4xl font-bold mb-4">Free</div>
                    <ul className="space-y-3 mb-6 text-gray-400 flex-grow">
                        <li className="flex items-start"><i className="fas fa-check text-brand-green mr-3 mt-1"></i> 30 min daily voice sessions</li>
                        <li className="flex items-start"><i className="fas fa-check text-brand-green mr-3 mt-1"></i> Basic debugging help</li>
                        <li className="flex items-start"><i className="fas fa-check text-brand-green mr-3 mt-1"></i> Community support</li>
                    </ul>
                    <button onClick={() => navigateTo('dashboard')} className="w-full btn-secondary py-3 rounded-lg">Get Started</button>
                </div>
                
                <div className="relative">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-brand-green text-black px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
                    </div>
                    <div className="dark-card rounded-xl p-6 border-2 border-brand-green h-full flex flex-col">
                        <h3 className="text-2xl font-bold mb-3">Pro</h3>
                        <div className="text-4xl font-bold mb-4">$19<span className="text-lg text-gray-400">/mo</span></div>
                        <ul className="space-y-3 mb-6 text-gray-400 flex-grow">
                            <li className="flex items-start"><i className="fas fa-check text-brand-green mr-3 mt-1"></i> Unlimited voice sessions</li>
                            <li className="flex items-start"><i className="fas fa-check text-brand-green mr-3 mt-1"></i> Advanced AI debugging</li>
                            <li className="flex items-start"><i className="fas fa-check text-brand-green mr-3 mt-1"></i> Code quality reviews</li>
                            <li className="flex items-start"><i className="fas fa-check text-brand-green mr-3 mt-1"></i> Priority support</li>
                        </ul>
                        <button onClick={() => navigateTo('dashboard')} className="w-full btn-primary py-3 rounded-lg">Start Free Trial</button>
                    </div>
                </div>
                
                <div className="dark-card rounded-xl p-6 h-full flex flex-col">
                    <h3 className="text-2xl font-bold mb-3">Team</h3>
                    <div className="text-4xl font-bold mb-4">$49<span className="text-lg text-gray-400">/mo</span></div>
                    <ul className="space-y-3 mb-6 text-gray-400 flex-grow">
                        <li className="flex items-start"><i className="fas fa-check text-brand-green mr-3 mt-1"></i> Everything in Pro</li>
                        <li className="flex items-start"><i className="fas fa-check text-brand-green mr-3 mt-1"></i> Team collaboration</li>
                        <li className="flex items-start"><i className="fas fa-check text-brand-green mr-3 mt-1"></i> Custom learning paths</li>
                        <li className="flex items-start"><i className="fas fa-check text-brand-green mr-3 mt-1"></i> Analytics dashboard</li>
                    </ul>
                    <button className="w-full btn-secondary py-3 rounded-lg">Contact Sales</button>
                </div>
            </div>
        </div>
    </section>
  );
};

export default PricingPage;
