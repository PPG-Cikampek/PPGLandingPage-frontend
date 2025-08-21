import React from "react";

const Footer = () => {
    const bidangPPG = [
        { label: "Kurikulum", href: "" },
        { label: "Sarpras", href: "" },
        { label: "KMM", href: "" },
        { label: "Tahfidz", href: "" },
        { label: "ICT", href: "" },
    ];

    return (
        <footer className="mt-12 w-full bg-linear-to-b from-primary to-primary-dark pt-12">
            <div className="max-w-6xl mx-auto px-4">
                {/* Top Section */}
                <div className="flex flex-row flex-wrap justify-between gap-8 text-white">
                    <div className="">
                        <h3 className="">Bidang PPG</h3>
                        <div className="flex flex-col flex-wrap gap-2 max-h-32">
                            {bidangPPG.map((item, index) => (
                                <div key={index} className="min-w-24 shrink-0">
                                    <a
                                        href={item.href}
                                        className="text-sm hover"
                                    >
                                        {item.label}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="">
                        <h3 className="">Alamat</h3>
                        <ul className="space-y-3">
                            <li className="text-sm">
                                Jomin Barat, Kota Baru, Karawang, Jawa Barat
                                41374
                            </li>
                            <li>
                                <a
                                    href="mailto:contact@example.com"
                                    className="text-sm hover"
                                >
                                    contoh@email.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+1234567890"
                                    className="text-sm hover"
                                >
                                    (+62) 81345678910
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="">
                        <h3 className="">Hubungi Kami</h3>
                        <p className="text-sm text-white">
                            Masukan, saran, atau info lainnya
                        </p>
                        <div className="flex space-x-2">
                            {/* <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-md focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                            /> */}
                            <button className="btn-primary-sharp text-black m-0 text-sm">
                                Kirim Email
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
            </div>
            <div className="mt-8 pt-4 bg-primary-dark text-white">
                <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto px-4  pb-6">
                    <p className="text-sm text-white md:mb-0">
                        © {new Date().getFullYear()} PPG Karawang. All rights
                        reserved.
                    </p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-sm hover">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-sm hover">
                            Terms of Service
                        </a>
                        <a href="#" className="text-sm hover">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
