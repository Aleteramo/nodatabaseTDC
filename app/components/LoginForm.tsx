'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

type LoginFormProps = {
  translations: {
    title: string;
    subtitle: string;
    form: {
      email: string;
      password: string;
      submit: string;
    };
  };
};

export function LoginForm({ translations }: LoginFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-3xl font-bold text-white mb-4">{translations.title}</h1>
            <p className="text-gray-400">{translations.subtitle}</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                {translations.form.email}
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                {translations.form.password}
              </label>
              <input
                type="password"
                id="password"
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              {translations.form.submit}
            </button>
          </motion.form>
        </div>
      </div>
    </main>
  );
}