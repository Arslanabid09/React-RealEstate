import React from 'react';
import { Input } from '../Components';

export const Contact = () => {
  return (
    <main className="font-SpaceGrotesk">
      {/* Section for Headline */}
      <section className="flex flex-col gap-5 px-10  justify-center min-h-screen">
        <h1 className="w-[70%] text-5xl sm:text-6xl tracking-wider md:text-7xl lg:text-9xl">
          Let’s Work Together
        </h1>
      </section>

      {/* Contact Form */}
      <form className="flex flex-col gap-y-12 px-10">
        <div className='flex flex-col md:flex-row justify-between gap-10 md:gap-20'>
          {/* Name Input */}
        <div className="flex w-full flex-col gap-y-2">
          <label
            htmlFor="name"
            className="text-2xl font-medium text-gray-700"
          >
            Enter Your Name
          </label>
          <Input type={'text'} placeholder={'Name'} />
        </div>

        {/* Email Input */}
        <div className="flex w-full flex-col gap-y-2">
          <label
            htmlFor="email"
            className="text-2xl font-medium text-gray-700"
          >
            Your Email
          </label>
          <Input type={'email'} placeholder={'Email'} />
        </div>
        </div>

        {/* Message Textarea */}
        <div className="flex flex-col gap-y-2">
          <label
            htmlFor="message"
            className="text-2xl font-medium text-gray-700"
          >
            Your Message
          </label>
          <textarea
            id="message"
            className="w-full h-32 px-4 py-3 text-2xl bg-transparent border-b resize-none border-black outline-none  "
            placeholder="Write your message here..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="px-6 py-3  font-semibold text-white bg-black text-xl"
        >
          Submit
        </button>
      </form>
    </main>
  );
};
