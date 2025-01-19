import React from "react";
import {
  faClock,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import ContactCards from "../../components/ContactCards";

function Contact() {
  return (
    <div>
      <div className="heading my-5">
        <h1 className="sectionHead">Get In Touch With Us</h1>
        <p className="sectionPera">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>
      {/* contact section */}
      <div className="contactArea flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 w-3/4 gap-4 justify-center my-6">
          <div className="flex flex-col gap-6 order-last md:order-first">
            <ContactCards
              icons={faLocationDot}
              contactCardsHead="Address"
              contactCardsPera="236 5th SE Avenue, New York NY10000, United States"
            />
            <ContactCards
              icons={faPhone}
              contactCardsHead="Phone"
              contactCardsPera="Mobile: +(84) 546-6789 Hotline: +(84) 456-6789"
            />
            <ContactCards
              icons={faClock}
              contactCardsHead="Working Time"
              contactCardsPera="Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00"
            />
          </div>
          {/* Contact form */}
          <div>
            <form className="space-y-4 my-4">
              {/* Name Field */}
              <div className="order-first md:order-last">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-900"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Abc"
                  className="mt-1 w-full border border-gray-300 rounded-md p-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-900"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Abc@def.com"
                  className="mt-1 w-full border border-gray-300 rounded-md p-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-900"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="This is an optional"
                  className="mt-1 w-full border border-gray-300 rounded-md p-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-900"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Hi! I’d like to ask about"
                  rows={4}
                  className="mt-1 w-full border border-gray-300 rounded-md p-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="explorebtn"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
