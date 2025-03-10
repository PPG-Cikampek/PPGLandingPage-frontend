import React from 'react';

// Modern footer with gradient and cards
const ModernFooter = () => {
    return (
        <footer className="mt-12 w-full bg-gradient-to-b from-white to-gray-50 pt-12 pb-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-row flex-wrap justify-between gap-8">

                    <div className="">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Bidang PPG</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Home</a></li>
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">About</a></li>
                                    <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Services</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Alamat</h3>
                        <ul className="space-y-3">
                            <li className="text-sm text-gray-600">
                                Jomin Barat, Kota Baru, Karawang, Jawa Barat 41374
                            </li>
                            <li>
                                <a href="mailto:contact@example.com" className="text-sm text-gray-600 hover:text-gray-900">
                                    contoh@email.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+1234567890" className="text-sm text-gray-600 hover:text-gray-900">
                                    (+62) 81345678910
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Hubungi Kami</h3>
                        <p className="text-sm text-gray-600 mb-4">
                            Masukan, saran, atau info lainnya
                        </p>
                        <div className="flex space-x-2">
                            {/* <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            /> */}
                            <button className="btn-primary-sharp m-0">
                                Kirim Email
                            </button>
                        </div>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="mt-8 pt-4 border-t border-primary-subtle">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-gray-500 mb-4 md:mb-0">
                            © {new Date().getFullYear()} PPG Karawang. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Privacy Policy</a>
                            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Terms of Service</a>
                            <a href="#" className="text-sm text-gray-500 hover:text-gray-700">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ModernFooter ;