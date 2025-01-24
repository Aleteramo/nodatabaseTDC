'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';
import { toast } from 'sonner';

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
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split('/')[1]; // Get current locale from URL

  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    console.log('Attempting login...'); // Debug log

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      console.log('Login result:', result); // Debug log

      if (result?.error) {
        setError('Invalid credentials');
        toast.error('Invalid email or password');
      } else if (result?.ok) {
        console.log('Login successful, redirecting to:', `/${locale}/admin`); // Debug log
        router.push(`/${locale}/admin`);
        router.refresh(); // Force a refresh of the page
        toast.success('Login successful!');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('An unexpected error occurred');
      toast.error('Login failed');
    } finally {
      setIsLoading(false);
    }
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
            <h1 className="text-3xl font-bold text-gold mb-4">{translations.title}</h1>
            <p className="text-gold/60">{translations.subtitle}</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-black/50 p-8 rounded-lg border border-gold/10"
          >
            {error && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-500 p-3 rounded-md">
                {error}
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gold/80 mb-2">
                {translations.form.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 bg-black border border-gold/30 rounded-md text-gold focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gold/80 mb-2">
                {translations.form.password}
              </label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 bg-black border border-gold/30 rounded-md text-gold focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gold text-black font-semibold rounded-md hover:bg-gold/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading || !email || !password}
            >
              {isLoading ? 'Loading...' : translations.form.submit}
            </button>
          </motion.form>
        </div>
      </div>
    </main>
  );
}