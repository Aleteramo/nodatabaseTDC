"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

type ContactFormProps = {
  translations: {
    title: string;
    subtitle: string;
    success: string;
    error?: string; // Aggiunto per gestire errori
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
      sending?: string; // Aggiunto per stato di invio
    };
    info?: {
      location?: {
        title: string;
        address: string;
      };
      contact?: {
        title: string;
        email: string;
        phone: string;
      };
      hours?: {
        title: string;
        weekdays: string;
        weekend: string;
      };
    };
  };
};

export function ContactForm({ translations }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      });

      if (!response.ok) {
        throw new Error(translations.error || 'Failed to send message');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gold mb-6">{translations.title}</h1>
            <p className="text-gold/80 text-xl max-w-2xl mx-auto">
              {translations.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {submitted ? (
                <div className="text-center text-gold p-4 bg-gold/10 border border-gold/30 rounded-lg">
                  {translations.success}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="text-red-500 bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                      {error}
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="name" className="block text-gold mb-2">
                      {translations.form.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-gold/30 rounded-lg focus:border-gold/60 focus:outline-none text-gold/90 placeholder-gold/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gold mb-2">
                      {translations.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-gold/30 rounded-lg focus:border-gold/60 focus:outline-none text-gold/90 placeholder-gold/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gold mb-2">
                      {translations.form.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 border border-gold/30 rounded-lg focus:border-gold/60 focus:outline-none text-gold/90 placeholder-gold/50"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 bg-gold text-black font-semibold rounded-lg hover:bg-gold/90 transition-colors disabled:bg-gold/50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (translations.form.sending || 'Sending...') : translations.form.submit}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            {translations.info && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-8"
              >
                {translations.info.location && (
                  <div>
                    <h3 className="text-2xl font-semibold text-gold mb-4">
                      {translations.info.location.title}
                    </h3>
                    <p className="text-gold/80">
                      {translations.info.location.address}
                    </p>
                  </div>
                )}

                {translations.info.contact && (
                  <div>
                    <h3 className="text-2xl font-semibold text-gold mb-4">
                      {translations.info.contact.title}
                    </h3>
                    <p className="text-gold/80">
                      {translations.info.contact.email}
                      <br />
                      {translations.info.contact.phone}
                    </p>
                  </div>
                )}

                {translations.info.hours && (
                  <div>
                    <h3 className="text-2xl font-semibold text-gold mb-4">
                      {translations.info.hours.title}
                    </h3>
                    <p className="text-gold/80">
                      {translations.info.hours.weekdays}
                      <br />
                      {translations.info.hours.weekend}
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}