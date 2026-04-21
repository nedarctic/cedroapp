"use client"

import { Send } from 'lucide-react';
import { useState, useActionState, useEffect } from 'react';
import { PiFacebookLogoLight, PiInstagramLogoLight, PiXLogoLight } from "react-icons/pi";
import { ContactAction } from '@/actions/contact.actions';
import { StatusDialog } from './status-dialog';

export const ContactSection = () => {

  const initialState = {
    error: undefined,
    success: false,
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [open, setOpen] = useState<boolean>(false);

  const [state, formAction, pending] = useActionState(ContactAction, initialState);

  useEffect(() => {
    if (state.success) {
      setOpen(true);
      setEmail('');
      setName('');
      setMessage('');
    }
  }, [state.success]);

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
                (123) 456 7890
              </p>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 sm:mb-4">
                Follow us
              </h3>
              <div className="flex gap-4 sm:gap-6">
                <a 
                  href="#" 
                  className="text-gray-500 hover:text-black transition-transform hover:scale-110"
                  aria-label="Twitter"
                >
                  <PiXLogoLight className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a 
                  href="#" 
                  className="text-gray-500 hover:text-black transition-transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <PiInstagramLogoLight className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
                <a 
                  href="#" 
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
            <form action={formAction} className="space-y-4 sm:space-y-5 md:space-y-6">
              
              {/* Name Field */}
              <div>
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
              </div>

              {/* Email Field */}
              <div>
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
              </div>

              {/* Message Field */}
              <div>
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
              </div>

              {/* Submit Button */}
              <div className="pt-2 sm:pt-4">
                <button
                  type="submit"
                  disabled={pending}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-2.5 sm:py-3 bg-black text-white hover:bg-gray-800 transition text-sm sm:text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {pending ? "Sending..." : "Send message"}
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Error Message */}
              {state.error && (
                <div className="mt-4 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm sm:text-base font-medium">
                    Error sending message. Please check your connection and try again.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Status Dialog */}
      {state.success && (
        <StatusDialog 
          open={open} 
          onOpenChange={setOpen} 
          message="Message sent successfully!" 
          error={false} 
        />
      )}
    </div>
  );
};