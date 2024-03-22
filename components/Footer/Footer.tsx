import Image from "next/image";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { FaRedditAlien } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

function Footer() {
    return (
        <>
            <div className="bg-gradient-to-r from-indigo-900 to-indigo-950  h-1/2 w-full ">
                <div className=" ml-44 pt-9">

                    <Image src='/QA.webp'
                        alt='logo'
                        width={240}
                        height={30}
                    />
                <p className="text-white ml-14">Making a Web3 safe place </p>
                </div>

                <div className="h-1/2 w-full flex md:flex-row flex-col justify-around items-start pl-20 pt-10">
                    <div className="p-5 ">
                        <ul>
                            <p className="text-white font-bold text-xl pb-4">More About Quill</p>
                            

                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                About Us
                            </li>
                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                FAQs
                            </li>
                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                Blockchains We Audit
                            </li>
                        </ul>
                        <ul>
                            <p className="text-white font-bold text-base pb-4 pt-4">Contact Us:</p>
                            <div className="flex">
                                <CiMail className="text-2xl text-white cursor-pointer hover:text-black pl-1 mr-2" />
                                <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                    audits@quillhash.com
                                </li>
                            </div>
                            <div className="flex">
                                <FaTelegramPlane className="text-2xl text-white cursor-pointer hover:text-black pl-1 mr-2" />

                                <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                    t.me/quillaudits
                                </li>
                            </div>

                            <div  className=" w-60">

                            <div className="flex">
                                <CiLocationOn className="text-2xl text-white cursor-pointer hover:text-black mt-4 mr-1 " />
                                <p className="text-white font-bold text-base pb-4 pt-4">Our Location:</p>
                            </div>
                            <p className="text-white text-sm">Office 104/105 Level 1,
                                Emaar Square12, Building 4
                                Sheikh Mohammed Bin Rashid
                                Boulevard Downtown Dubai,
                                United Arab Emirates
                                P.O box: 416654</p>
                            </div>


                        </ul>
                    </div>
                    <div className="p-5">
                        <ul>
                            <p className="text-white font-bold text-xl pb-4">Audit Services</p>
                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                Ethereum Audit
                            </li>
                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                Polygon Audit
                            </li>
                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                BSC Audit
                            </li>
                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                Solana Audit
                            </li>
                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                NEAR Audit
                            </li>
                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                Algorand Audit
                            </li>
                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                Tezos Audit
                            </li>
                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                Hyperledger Fabric Audit
                            </li>
                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                L1 Audit
                            </li>
                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                Polkadot Audit
                            </li>
                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                Wallet Audit
                            </li>
                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                Zksync Audit
                            </li>
                        </ul>
                    </div>
                    <div className="p-5">
                        <ul>
                            <p className="text-white font-bold text-xl pb-4">Quill Ecosystem</p>
                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                QuillAI
                            </li>
                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                QuillCheck
                            </li>
                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                QuillShield
                            </li>
                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                QuillAcademy
                            </li>
                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                QuillMonitor
                            </li>
                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                Web3Suggest
                            </li>
                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                Explore All Tools
                            </li>
                        </ul>
                    </div>
                    <div className="p-5">
                        <ul>
                            <p className="text-white font-bold text-xl pb-4">Other Services</p>
                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                Red Teaming
                            </li>
                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                dApp Pentesting
                            </li>
                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                DeFi Diligence
                            </li>
                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                NFT Due Diligence
                            </li>
                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                Rug Pull Due Diligence
                            </li>
                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                Security Consultation
                            </li>
                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                Blockchain Forensics
                            </li>
                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                KYC (Know Your Customer)
                            </li>
                        </ul>
                    </div>
                    <div className="p-5">
                        <ul>
                            <p className="text-white font-bold text-xl pb-4">Quick Links</p>
                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                Pricing
                            </li>
                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                Audit Process
                            </li>
                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                Our Audits
                            </li>
                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                Testimonials
                            </li>
                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                Security Synopsis
                            </li>
                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                Blog
                            </li>
                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                Clients
                            </li>
                            <li className="text-white text-sm  pb-2 font-semibold hover:text-red-300  cursor-pointer">
                                Careers <span>Hiring</span> 
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="ml-4 md:ml-24 pb-9 flex flex-col md:flex-row md:justify-between">
                    <div className="flex space-x-8 md: ml-12">
                        <Image src='/Footer1.png'
                            alt='logo'
                            width={140}
                            height={30}
                        />
                        <Image src='/Ft2.png'
                            alt='logo'
                            width={140}
                            height={30}
                        />
                    </div>
                    <div className="flex space-x-6 mr-12 md: mt-8 md: ml-20">
                        <FaXTwitter className="text-2xl text-white cursor-pointer hover:text-black" />
                        <FaLinkedin className="text-2xl text-white cursor-pointer hover:text-black" />
                        <FaTelegramPlane className="text-2xl text-white cursor-pointer hover:text-black" />
                        <FaRedditAlien className="text-2xl text-white cursor-pointer hover:text-black" />
                        <FaMedium className="text-2xl text-white cursor-pointer hover:text-black" />
                        <FaDiscord className="text-2xl text-white cursor-pointer hover:text-black" />
                        <FaYoutube className="text-2xl text-white cursor-pointer hover:text-black" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
                <h1 className=" text-gray-800 font-semibold">
                    All Rights Reserved. © Copyright 2024. QuillAudits - LLC

                </h1>
            </div>

        </>
    );
}

export default Footer;