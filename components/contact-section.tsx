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
    setOpen(true)
  }, [state.success]);

  return (
    <div className="min-h-screen bg-white font-sans">


      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 border border-black px-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">

          {/* Left Column - Contact Info */}
          <div>

            <div className="space-y-6">
              {/* Email */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Email</h3>
                <p className="text-lg text-gray-800">info@cedroadventures.com</p>
              </div>

              {/* Phone */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Phone</h3>
                <p className="text-lg text-gray-800">(123) 456 7890</p>
              </div>

              {/* Follow Us */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Follow us</h3>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-500 hover:text-black transition">
                    <PiXLogoLight className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-black transition">
                    <PiInstagramLogoLight className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-500 hover:text-black transition">
                    <PiFacebookLogoLight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <form action={formAction} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Jane Smith"
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="email@gmail.com"
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Hello!"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition resize-none"
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">

                <button
                  type="submit"
                  className="flex gap-4 items-center px-6 py-3 bg-black text-white hover:bg-gray-800 transition text-sm font-medium"
                >
                  {pending ? "Sending..." : "Send message"}
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>

              {state.success && <StatusDialog open={open} onOpenChange={setOpen} />}

              {state.error && <p className="text-red-600 text-md font-medium mt-4">Error sending message. Check connection and try again.</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};