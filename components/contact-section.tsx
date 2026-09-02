"use client"

import { Send } from 'lucide-react';
import { useState, SubmitEvent } from 'react';
import { PiFacebookLogoLight, PiInstagramLogoLight, PiLinkedinLogo, PiXLogoLight } from "react-icons/pi";
import { StatusDialog } from './status-dialog';
import { toast } from 'sonner';
import z from 'zod';

export const ContactSection = () => {

  const initialState = {
    error: undefined,
    success: false,
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<any>({});

  const submitHandler = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const validationResult = z.object({
        name: z.string().trim().min(1, "Name required"),
        email: z.email("Invalid email address"),
        content: z.string().trim().min(1, "Message is required")
      }).safeParse({
        name,
        email,
        content: message
      });

      if (!validationResult.success) {
        setLoading(false);
        setErrors(z.treeifyError(validationResult.error));
        toast.error("Kindly correct the errors on the contact form");
        return;
      }

      const url = "/api/messages";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          content: message
        })
      });

      const { success } = await res.json();

      if (!res.ok || !success) {
        setLoading(false);
        toast.error("Failed to send message. Please try again later.");
        return;
      }

      setLoading(false);
      toast.success("Message sent successfully. Our team shall be in contact shortly.")
      setName("");
      setEmail("");
      setMessage("");
      return;

    } catch (error) {
      setLoading(false);
      toast.error("Service temporarily unavailable. Please try again later.")
      return;
    }
  }

  return (
    <div className="w-full bg-white font-sans">

      {/* Main Content */}
      <div className="w-full border border-black p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">

          {/* Left Column - Contact Info */}
          <div className="space-y-6 sm:space-y-8">

            {/* Email */}
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1 sm:mb-2">
                Email
              </h3>
              <p className="text-base sm:text-lg text-gray-800 break-words">
                info@cedroadventures.com
              </p>
            </div>

            {/* Phone */}
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1 sm:mb-2">
                Phone
              </h3>
              <p className="text-base sm:text-lg text-gray-800">
                (+254) 721 174 008
              </p>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 sm:mb-4">
                Follow us
              </h3>
              <div className="flex gap-4 sm:gap-6">
                <a
                  href="https://www.linkedin.com/company/cedro-adventures/posts/?feedView=all"
                  className="text-gray-500 hover:text-black transition-transform hover:scale-110"
                  aria-label="Twitter"
                >
                  <PiLinkedinLogo className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://www.instagram.com/cedroadventures/"
                  className="text-gray-500 hover:text-black transition-transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <PiInstagramLogoLight className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://web.facebook.com/cedroadventuresEA"
                  className="text-gray-500 hover:text-black transition-transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <PiFacebookLogoLight className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <form onSubmit={submitHandler} className="space-y-4 sm:space-y-5 md:space-y-6">

              {/* Name Field */}
              <div className='flex flex-col gap-2'>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Jane Smith"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition text-sm sm:text-base"
                />
                {errors?.properties?.name?.errors?.length && <ul className="list-disc pl-4">
                  {errors.properties.name.errors.map((error: string, index: number) =>
                    <li key={index} className="text-xs text-red-600 font-bold">{error}</li>
                  )}
                </ul>}
              </div>

              {/* Email Field */}
              <div className='flex flex-col gap-2'>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="email@gmail.com"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition text-sm sm:text-base"
                />
                {errors?.properties?.email?.errors?.length && <ul className="list-disc pl-4">
                  {errors.properties.email.errors.map((error: string, index: number) =>
                    <li key={index} className="text-xs text-red-600 font-bold">{error}</li>
                  )}
                </ul>}
              </div>

              {/* Message Field */}
              <div className='flex flex-col gap-2'>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Hello! I would like to know more about..."
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition resize-none text-sm sm:text-base"
                />
                {errors?.properties?.content?.errors?.length && <ul className="list-disc pl-4">
                  {errors.properties.content.errors.map((error: string, index: number) =>
                    <li key={index} className="text-xs text-red-600 font-bold">{error}</li>
                  )}
                </ul>}
              </div>

              {/* Submit Button */}
              <div className="pt-2 sm:pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-2.5 sm:py-3 bg-[#F0A823] text-black hover:bg-gray-800 transition text-sm sm:text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send message"}
                  <Send className="w-4 h-4 text-black" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};