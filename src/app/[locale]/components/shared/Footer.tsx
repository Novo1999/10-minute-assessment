import { MessageCircle, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="container mb-24 md:mb-0">
        <div className="flex flex-col pt-12 md:flex-row md:border-[#E4E4E4]">
          {/* Logo and App Download Section */}
          <div className="flex flex-col items-center w-full mb-7 md:mb-0 md:items-start mx-lg:mb-7 mx-lg:mr-6">
            <Link className="mb-4" href="/">
              <div className="rounded-md opacity-1 transition-opacity duration-300 ease-in-out">
                <Image alt="Instructor" src="https://10minuteschool.com/images/logo.svg" width="116" height="32" className="w-auto h-8" />
              </div>
            </Link>

            <h3 className="mb-[14px] text-base font-semibold md:font-medium">Download Our Mobile App</h3>

            <div className="flex">
              <div className="mr-4">
                <Link href="https://play.google.com/store/apps/details?id=com.a10minuteschool.tenminuteschool">
                  <Image alt="google play" src="https://cdn.10minuteschool.com/images/google-play-icon_1695731678094.png" width="156" height="49" className="w-39 h-auto" />
                </Link>
              </div>
              <div>
                <Link href="https://apps.apple.com/us/app/10-minute-school/id1577061772">
                  <Image alt="ios download" src="https://cdn.10minuteschool.com/images/ios-store-icon_1695731704002.png" width="156" height="49" className="w-39 h-auto" />
                </Link>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="mx-0 flex w-full justify-center border-b border-[#E4E4E4] pb-8 md:mx-14 md:border-none mx-lg:mx-0 mx-lg:border-b mx-lg:border-[#E4E4E4]">
            <div className="flex justify-center w-full max-w-sm">
              {/* Company Links */}
              <div className="w-1/2 mr-4">
                <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold">Company</h3>
                <ul className="flex flex-col justify-center mb-4 text-gray-600 md:mb-0 md:justify-start md:gap-4">
                  <li>
                    <Link href="https://app.10minuteschool.com/careers" className="mb-2 text-sm font-medium hover:text-green-600 md:text-base">
                      Career / Recruitment
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://docs.google.com/forms/d/e/1FAIpQLScWh9jjyWnUKdDKET1-LHvdTxuU6-ssd0GLTI-0JlQ2MH6RzA/viewform"
                      className="mb-2 text-sm font-medium hover:text-green-600 md:text-base"
                    >
                      Join as a Teacher
                    </Link>
                  </li>
                  <li>
                    <Link href="https://affiliation.10minuteschool.com/" className="mb-2 text-sm font-medium hover:text-green-600 md:text-base">
                      Join as an Affiliate
                    </Link>
                  </li>
                  <li>
                    <Link href="https://app.10minuteschool.com/privacy-policy" className="mb-2 text-sm font-medium hover:text-green-600 md:text-base">
                      Privacy policy
                    </Link>
                  </li>
                  <li>
                    <Link href="https://app.10minuteschool.com/refund-policy" className="mb-2 text-sm font-medium hover:text-green-600 md:text-base">
                      Refund policy
                    </Link>
                  </li>
                  <li>
                    <Link href="https://app.10minuteschool.com/terms-and-conditions" className="mb-2 text-sm font-medium hover:text-green-600 md:text-base">
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Others Links */}
              <div className="w-1/2">
                <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold">Others</h3>
                <ul className="flex flex-col justify-center mb-4 text-gray-600 md:mb-0 md:justify-start md:gap-4">
                  <li>
                    <a href="https://blog.10minuteschool.com/" className="mb-2 text-sm font-medium hover:text-green-600 md:text-base">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="/store/all" className="mb-2 text-sm font-medium hover:text-green-600 md:text-base">
                      Book Store
                    </a>
                  </li>
                  <li>
                    <a href="https://10minuteschool.com/content" className="mb-2 text-sm font-medium hover:text-green-600 md:text-base">
                      Free Notes & Guides
                    </a>
                  </li>
                  <li>
                    <a href="/jobs-prep" className="mb-2 text-sm font-medium hover:text-green-600 md:text-base">
                      Job Preparation Courses
                    </a>
                  </li>
                  <li>
                    <a href="/certificate" className="mb-2 text-sm font-medium hover:text-green-600 md:text-base">
                      Verify Certificate
                    </a>
                  </li>
                  <li>
                    <a href="/resource" className="mb-2 text-sm font-medium hover:text-green-600 md:text-base">
                      Free Download
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact and Social Section */}
          <div className="flex flex-col w-full ml-0 md:ml-4">
            {/* Contact Info - Hidden on Mobile */}
            <div className="hidden md:block">
              <h3 className="mb-3 text-base font-semibold md:text-xl md:font-bold">Keep up with us at</h3>
              <p className="mb-4 text-base font-normal">
                Call Us:{' '}
                <span>
                  <a className="text-green-600" href="tel:16910">
                    16910
                  </a>{' '}
                  (24x7)
                </span>
              </p>
              <p className="mb-4 text-base font-normal">
                whatsapp:{' '}
                <span>
                  <a className="text-green-600" href="https://api.whatsapp.com/send?phone=+8801896016252&text=I need your assistance">
                    +8801896016252
                  </a>{' '}
                  (24x7)
                </span>
              </p>
              <p className="mb-4 text-base font-normal">
                Outside Bangladesh:{' '}
                <span>
                  <a className="text-green-600" href="tel:+8809610916910">
                    +880 9610916910
                  </a>
                </span>
              </p>
              <p className="mb-2 text-base font-normal">
                Email Us: <span className="text-green-600">support@10minuteschool.com</span>
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="mx-auto mb-3 mt-5 flex w-full max-w-[256px] gap-6 md:mx-0">
              <div>
                <a href="https://www.facebook.com/10minuteschool/" target="_blank" rel="noreferrer">
                  <Image alt="facebook" src="https://cdn.10minuteschool.com/images/facebook_1695730910971.png" width="32" height="32" className="w-8 h-8" />
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/10ms_insta/" target="_blank" rel="noreferrer">
                  <Image alt="instagram" src="https://cdn.10minuteschool.com/images/instagram_1695731442397.png" width="32" height="32" className="w-8 h-8" />
                </a>
              </div>
              <div>
                <a href="https://www.linkedin.com/company/10ms/" target="_blank" rel="noreferrer">
                  <Image alt="linkedin" src="https://cdn.10minuteschool.com/images/linkedin_1695731507042.png" width="32" height="32" className="w-8 h-8" />
                </a>
              </div>
              <div>
                <a href="https://www.youtube.com/channel/UCL89KKkLs0tZKld-iIS3NGw" target="_blank" rel="noreferrer">
                  <Image alt="youtube" src="https://cdn.10minuteschool.com/images/youtube_1695731538726.png" width="32" height="32" className="w-8 h-8" />
                </a>
              </div>
              <div>
                <a href="https://www.tiktok.com/@10minuteschool?lang=en" target="_blank" rel="noreferrer">
                  <Image alt="Tiktok" src="https://cdn.10minuteschool.com/images/Tiktok_1695731564895.png" width="32" height="32" className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pb-5 text-center">
          <p className="text-xs font-normal text-gray-600 md:text-sm">2015 - 2025 Copyright © 10 Minute School. All rights reserved.</p>
        </div>
      </div>

      {/* Fixed Chat and WhatsApp Buttons */}
      <button
        id="chat-button"
        className="fixed right-0 rounded-full bottom-[130px] z-10 md:bottom-[60px] flex gap-2 items-center m-5 px-2 py-2 md:px-4 md:py-[14px] text-white"
        style={{
          background: 'linear-gradient(226.1deg, rgb(8, 206, 51) 0%, rgb(20, 156, 82) 101.24%)',
          zIndex: 49,
        }}
      >
        <MessageCircle className="w-5 h-5" fill="currentColor" />
      </button>

      <a
        href="https://wa.me/8801896016252"
        target="_blank"
        rel="noreferrer"
        className="fixed right-0 rounded-full bottom-[86px] z-10 md:bottom-[0px] flex gap-2 items-center m-5 px-2 py-2 md:px-4 md:py-[14px] text-white"
        style={{
          background: 'linear-gradient(226.1deg, rgb(8, 206, 51) 0%, rgb(20, 156, 82) 101.24%)',
          zIndex: 49,
        }}
      >
        <Phone className="w-5 h-5" fill="currentColor" />
      </a>
    </>
  )
}

export default Footer
