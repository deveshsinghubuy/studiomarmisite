"use client";
import Link from "next/link";
import { useState } from "react";

const faqs = [
    {
        question: 'What types of stones does Studio Marmi offer ?',
        answer:
            'We provide a curated collection of premium natural stones including Marble, Quartzite, Dolomite, Granite, and Crystal. Each slab is carefully sourced from world-renowned quarries and selected for its beauty, durability, and uniqueness.',
    },
    {
        question: 'What finishes are available for your stones ?',
        answer:
            'At Studio Marmi, we offer four premium finishes : Polished Finish – glossy, reflective, and luxurious.   Honed Finish – smooth, matte, and contemporary. Leather Finish – textured elegance with a soft touch. Soft Leather Finish – refined depth and subtle sophistication.',
            
    },
    {
        question: 'Are your stones suitable for kitchens and bathrooms ?',
        answer:
            'Yes. Many of our stones, including granite, quartzite, and dolomite, are ideal for kitchen countertops, bathroom vanities, and flooring due to their durability and resistance. Softer stones like crystal can also be used for luxury interiors, especially in statement walls and decorative features, but they require more care.',
    },
    {
        question: 'What is the hardness scale shown on your website ?',
        answer:
            'The 1°– 7° hardness scale on our website is a practical durability guide, not the scientific Mohs scale. It considers scratch resistance, porosity, acid sensitivity, and real-life usability. For example, Crystal is rated softer (1°) to highlight that it needs more care, while Limestone is rated higher for better everyday durability.',
    },
    {
        question: 'Do you provide custom sizes and cutting ?',
        answer:
            'Yes. Studio Marmi offers custom slab cutting and finishing services to meet your project’s unique requirements. Whether for countertops, flooring, wall cladding, or facades, we tailor our solutions for residential, commercial, and hospitality projects in Kuwait',
    },
    {
        question: 'Do you handle installation ?',
        answer:
            'We primarily supply premium slabs and finishes, but we also work with trusted partners and contractors in Kuwait for installation. Our team can connect you with reliable professionals to ensure your project is executed to perfection',
    },
    {
        question: 'Can I view the slabs before purchasing ?',
        answer:
            'Absolutely. We encourage clients to visit our Studio Marmi Kuwait showroom to view available slabs in person. Seeing the stone’s natural veining, colours, and textures helps in making the perfect choice.',
    },
    {
        question: ' Do you deliver across Kuwait ?',
        answer:
            'Yes. Studio Marmi provides delivery services across Kuwait, ensuring safe handling and transportation of slabs from our showroom to your project site.',
    },
];

export default function FaqClient() {
    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        setSelected(selected === i ? null : i);
    };
    return (
        <>
            <div className="our_contact_wrp">
                <div className="main_header_wrp position-relative">
                    <div className="video-wrapper">
                        <img className="video-bg" src="https://d2ati23fc66y9j.cloudfront.net/studiomarmi/home/common-page-bg.png.webp" alt="common background" />
                    </div>
                    <div className="hero-section">
                        <div className="hero-content">
                            <p className="small_paragraph mb-3">
                                <span className="left_line"></span>Welcome to studiomarmi
                                <span className="right_line"></span>
                            </p>
                            <h1 className="mb-4">FAQ</h1>
                            <div
                                className="page_link_btn flex items-center justify-center gap-3 bg-white mt-4"
                            >
                                <Link href="/" className="flex items-center gap-2">
                                    <img src="https://d2ati23fc66y9j.cloudfront.net/studiomarmi/contact-us/home-icon.svg" alt="home" />
                                    Home
                                    <img src="https://d2ati23fc66y9j.cloudfront.net/studiomarmi/contact-us/arrow-icon.svg" alt="arrow" />
                                </Link>
                                FAQ
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="faq_section">
                <div className="container">
                    <div className="sec-pad grid grid-cols-1 md:grid-cols-2 gap-[60px]">
                        <div>
                            <img src="https://d2ati23fc66y9j.cloudfront.net/studiomarmi/faq/faq-thumbnail.png.webp" alt="faq" className="w-auto" />
                        </div>
                        <div>
                            <p className="text-[15px] uppercase text-gray-600  mb-3 linehead_div">
                                Popular Questions
                            </p>
                            <h2 className="text-3xl font-semibold mb-4">Frequently Asked Questions ?</h2>
                            <p className="text-gray-600 text-[15px] mb-6">
                                Have questions about our products, materials, or services? Here are some of the most
                                frequently asked questions to help guide your decision.
                            </p>

                            <div className="space-y-4">
                                {faqs.map((faq, i) => (
                                    <div
                                        key={i}
                                        className="border border-gray-300 rounded-[14px] select_accordion"
                                    >
                                        <button
                                            onClick={() => toggle(i)}
                                            className="w-full px-3 py-2 flex justify-between items-center text-left"
                                        >
                                            <span className="text-[15px] font-normal">{faq.question}</span>
                                            <span
                                                className={`text-[25px] text-gray-400 transform transition-transform duration-200 ${selected === i ? 'rotate-45' : ''
                                                    }`}
                                            >
                                                +
                                            </span>
                                        </button>
                                        <div
                                            className={`px-3 text-[14px] text-gray-600 overflow-hidden transition-all duration-300 ease-in-out
                                            ${selected === i ? "max-h-[500px] py-3 pt-0" : "max-h-0 py-0"}`}
                                        >
                                            {faq.answer}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
