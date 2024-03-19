import Image from 'next/image'
import React from 'react'
import { Tweet } from 'react-tweet'
import TweetEmbed from 'react-tweet-embed'

const Content = () => {
    return (
        <div className=' md:block'>
            <div className='flex flex-col md:flex-row justify-center m-9 mt-24 '>
                <div className='w-full md:w-1/4 md:mr-16 mb-8 md:mb-0 '>
                    <div className='bg-red-300 w-full md:w-96 mb-5'>
                        <p className=''>Before QuillAudits</p>
                    </div>
                    <p className='mb-5'>Exploits like reentrancy and front-running can let attackers withdraw extra funds and manipulate transaction timing for unfair gains</p>
                    <p>Vulnerabilities could allow users to mint CDP tokens or pension shares indefinitely, disrupting the system's economic balance.</p>
                </div>
                <div className='w-full md:w-1/4  '>
                    <div className='bg-teal-600 w-full md:w-96 mb-5'>
                        <p className=''>After QuillAudits</p>
                    </div>
                    <p className='mb-5'>Implementation of reentrancy protection mechanisms.</p>
                    <p>Ensure precision in decimal handling with standard libraries, recalculate accurately, fix logic errors, and secure referral systems against exploitation.</p>
                </div>
            </div>
            <div>
                <div className='text-center md:ml-12 md:mt-14 lg:ml-96 lg:mt-14 w-full md:w-2/4 font-semibold text-blue-900'>
                    <p className='text-2xl md:text-4xl lg:text-4xl'>See how QuillAudits is a trusted partner in 1000+ Audit stories</p>
                </div>
                <div className='text-center mt-8'>
                    <button className='hover:bg-gray-100 p-3 rounded-md cursor-pointer transition-all text-white hover:text-black border-2 border-blue-500 bg-blue-500'>Request An Audit</button>
                </div>

                <div className='w-full md:w-2/6 md:ml-12 lg:ml-96 mt-8 md:mt-14'>
                    <p className='text-base md:text-lg lg:text-lg'>Carpe Diem Pension, on Pulse blockchain, redefines retirement with a self-managed, inclusive, globally portable fund. Unique for its token burn mechanism, it ensures a sustainable 4.32% inflation payout. With $143.11k and 41.06% of CDP already burned, it serves 35 users globally.</p>
                    <p className='mt-4 md:mt-6 lg:mt-6 text-lg md:text-2xl lg:text-2xl font-semibold'>CarpeDiem Pension's Flexible, Blockchain-Enabled Future</p>
                    <p className='mt-4 md:mt-6 lg:mt-6 text-lg md:text-lg lg:text-lg'>CarpeDiem Pension redefines retirement planning with a unique approach that deviates from traditional pension funds. With no minimum age for retirement, it offers flexibility and freedom, ensuring all genders receive equal treatment. CarpeDiem Pension ensures blockchain transparency, anonymity, and global accessibility, safeguarding pensions during international relocation. Easily transfer pensions to loved ones; share wallet access. Re-deposit payouts for increased future benefits. Importantly, CarpeDiem Pension prioritizes deposit security by avoiding utilizing client funds for internal investments. To become a part of this forward-thinking pension scheme, one simply needs to install and configure a blockchain wallet.</p>
                    <img className='mt-4 md:mt-6 lg:mt-6' src='/1.png' alt='logo' width={490} height={70} />
                    <p className='mt-4 md:mt-6 lg:mt-6 text-lg md:text-2xl lg:text-2xl font-semibold'>CarpeDiem Pension's Challenges: Enhancing Security Against Reentrancy, Front-Running, and Infinite Minting</p>
                    <p className='mt-4 md:mt-6 lg:mt-6 text-lg md:text-lg lg:text-lg'>CarpeDiem Pension confronts critical security challenges, including the risks of reentrancy and front-running exploits. Malicious actors may exploit contract vulnerabilities, withdrawing excess funds or manipulating transaction timing for unfair advantages. System faces infinite minting threats, risking economic stability with endless creation of CDP tokens or pension shares. Addressing these challenges is paramount to safeguarding the integrity and security of CarpeDiem Pension</p>
                    <img className='mt-4 md:mt-6 lg:mt-6' src='/2.png' alt='logo' width={490} height={70} />
                    
                    <p className='mt-4 md:mt-6 lg:mt-6 text-lg md:text-2xl lg:text-2xl font-semibold'>CarpeDiem Pension's Journey Through our Audit Process</p>
                    <ol className="list-decimal">
                        <li className='ml-9 mt-3 text-lg font-medium'>Information Gathering:</li>
                        <ul className="list-disc ml-12">
                            <li className='mt-2'>Collected and reviewed all relevant documentation, including whitepaper, technical specifications, and design documents.</li>
                            <li className='mt-2'>Obtained a clear understanding of the CDP platform's functionality, economic model, and intended user interactions.</li>
                            <li className='mt-2'>Discussed client concerns and specific areas of focus for the audit.</li>
                        </ul>
                        <li className='ml-9 mt-3 text-lg font-medium'>Manual Code Review:</li>
                        <ul className=' list-disc ml-12' >
                        <li>Conducted a line-by-line review of the smart contract code, focusing on:</li>
                            <ul className='list-disc ml-10 mt-3'>
                                <li><span className=' font-medium'>Vulnerability identification:</span>  Searching for known vulnerabilities like reentrancy, front-running, integer overflows, and access control issues etc.</li>
                                <li><span className='font-medium'>Logic flaws:</span> Identifying inconsistencies or unintended behaviors in the code logic.</li>
                                <li><span className='font-medium'>Tokenomics correctness:</span> Verifying if the code accurately implements the intended economic model and token distribution mechanisms.</li>
                                <li> <span className='font-medium'>Solidity best practices:</span> Compliance with secure coding standards and adherence to established guidelines.</li>
                            </ul>
                        </ul>
                        <li className='ml-9 mt-3 text-lg font-medium'>Functional Testing:</li>
                        <ul className="list-disc ml-12">
                            <li className='mt-2'>Developed and executed a comprehensive set of test cases covering various user interactions and edge cases.</li>
                            <li className='mt-2'>Simulated different deposit, claim, and referral scenarios to assess functionality and uncover potential exploits.</li>
                            <li className='mt-2'> Focused on scenarios identified during the manual review and client concerns (e.g., infinite minting, reward calculation errors).</li>
                            <li className='mt-2'>Leveraged tools like Hardhat and Ganache to deploy and test the smart contract locally.</li>
                        </ul>
                        <li className='ml-9 mt-3 text-lg font-medium'>Automated Testing:</li>
                        <ul className="list-disc ml-12">
                            <li className='mt-2'>Employed static analysis tools like Slither to identify vulnerabilities through automated code scanning.</li>
                            <li className='mt-2'>Utilized symbolic execution tools like Mythril to explore various code execution paths and uncover potential attack vectors.</li>
                            <li className='mt-2'>Integrated unit tests are written by the CDP team to verify specific contract functions and their behaviour.</li>
                        </ul>

                        <li className='ml-9 mt-3 text-lg font-medium'>Reporting & Remediation:</li>
                        <ul className="list-disc ml-12">
                            <li className='mt-2'>Prepared a detailed report outlining all identified vulnerabilities, categorized by severity and potential impact</li>
                            <li className='mt-2'>Provided clear recommendations for fixing each vulnerability, including code snippets and best practices.</li>
                            <li className='mt-2'>Conducted additional verification testing after vulnerability fixes were implemented.</li>
                        </ul>

                    </ol>

                    <p className='mt-4 md:mt-6 lg:mt-6 text-lg md:text-2xl lg:text-2xl font-semibold'>QuillAudits' Strategic Approach to CDP Security Audits</p>
                    <p className='mt-4 md:mt-6 lg:mt-6 text-lg md:text-lg lg:text-lg'>We prioritize threat modeling based on platform-specific risks. Security-first, we identify and mitigate vulnerabilities beyond functionality testing. Using white-box and black-box tests, we conduct thorough vulnerability assessments. Maintaining transparency, we communicate openly with the CDP team. Emphasizing clarity, we present actionable insights for efficient issue resolution</p>

                    <p className='mt-4 md:mt-6 lg:mt-6 text-lg md:text-2xl lg:text-2xl font-semibold'>Comprehensive Audit Discoveries and Remediation Strategies</p>
                    <p className='mt-4 md:mt-6 lg:mt-6 text-lg md:text-lg lg:text-lg'>Throughout the audit process, we unearthed a total of 33 issues, spanning from minor concerns to critical vulnerabilities. Among these, some of the critical issues identified were: Here's how we remediated them :</p>
                    <ol className=' list-decimal ml-9'>
                        <li className='mt-3 font-medium'>Unauthorized Claim/Compound:</li>
                        <ul className='list-disc ml-3'>
                            <li className='mt-3'>Users could claim/compound a substantial amount without making a deposit or waiting for the stipulated time.</li>
                        </ul>
                        <li className='mt-3 font-medium'>Precision Loss in mintCDP():</li>
                        <ul className='list-disc ml-3'>
                            <li className='mt-3'>Precision loss and unscaled values were identified while calculating rewardPerShare in the mintCDP() function.</li>
                        </ul>
                        <li className='mt-3 font-medium'>Multiplication Accuracy:</li>
                        <ul className='list-disc ml-3'>
                            <li className='mt-3'>Multiplication operations were prone to providing incorrect answers due to unscaled values, posing a potential risk to accurate calculations.</li>
                        </ul>
                        <li className='mt-3 font-medium'>Incorrect Share Allocation:</li>
                        <ul className='list-disc ml-3'>
                            <li className='mt-3'>The protocol was allocating shares for all days, even when there were no corresponding deposits, leading to inefficient use of resources.</li>
                        </ul>
                        <li className='mt-3 font-medium'>Logic Error in Referral Handling:</li>
                        <ul className='list-disc ml-3'>
                            <li className='mt-3'>A logic error resulted in users always having their user.referral set to address(0), which could be exploited to trick the referral system.</li>
                        </ul>
                    </ol>


                    <p className='mt-4 md:mt-6 lg:mt-6 text-lg md:text-2xl lg:text-2xl font-semibold'>Remediation & Impact:</p>
                    <p className='mt-4 md:mt-6 lg:mt-6 text-lg md:text-lg lg:text-lg'>All identified vulnerabilities were addressed by the CDP team, significantly enhancing the smart contract's security posture. Key improvements include</p>
                    <ul className='list-disc ml-7'>
                        <li className='mt-2'>Implementation of reentrancy protection mechanisms.</li>
                        <li className='mt-2'>Accurate handling of decimal values using established libraries or best practices.</li>
                        <li className='mt-2'>Revised calculations with proper scaling factors</li>
                        <li className='mt-2'>Fixing logic errors to ensure deposits and waiting periods are enforced.</li>
                        <li className='mt-2'>Addressing referral system vulnerabilities to prevent abuse.</li>
                    </ul>
                    

                    <div className="dark">
                        <Tweet id="1742906560794296402" />
                    </div>

                    <p className='mt-4 md:mt-6 lg:mt-6 text-lg md:text-lg lg:text-lg'>CDP smart contract audit revealed and fixed critical vulnerabilities, safeguarding funds and ensuring platform stability. This underscores the need for proactive security in blockchain projects, crucial for financial asset management. Through audits and issue resolution, CDP reinforces platform security, bolstering user trust.</p>
                </div>
            </div>



        </div>
    )
}

export default Content