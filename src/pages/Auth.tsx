"use client";

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBasket, ArrowLeft, Mail, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { showSuccess } from '@/utils/toast';
import { useAuth } from '@/hooks/use-auth';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'email' | 'otp'>('email');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStep('otp');
    showSuccess("OTP sent to your email!");
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    login(email);
    showSuccess("Successfully logged in!");
    navigate('/');
  };

  const handleGuestLogin = () => {
    login('guest@example.com');
    showSuccess("Logged in as Guest");
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6">
      <Link to="/" className="absolute top-8 left-8 flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors">
        <ArrowLeft size={20} />
        <span>Back to Home</span>
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
            <ShoppingBasket className="text-white" size={28} />
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-900">
            Mazaq Al Reef
          </span>
        </div>

        <Card className="border-none shadow-xl rounded-3xl overflow-hidden">
          <CardHeader className="space-y-1 pb-8 text-center">
            <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
            <CardDescription>
              {step === 'email' ? 'Enter your email to receive a login code' : 'Enter the 6-digit code sent to your email'}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {step === 'email' ? (
              <form onSubmit={handleSendOtp} className="space-y-4">
                <div className="space-y-2">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <Input 
                      type="email" 
                      placeholder="name@example.com" 
                      className="pl-10 py-6 rounded-xl border-slate-200"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white py-6 rounded-xl text-lg">
                  Send Login Code
                </Button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <div className="space-y-2">
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <Input 
                      type="text" 
                      placeholder="000000" 
                      className="pl-10 py-6 rounded-xl border-slate-200 tracking-[0.5em] text-center font-bold"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      maxLength={6}
                      required
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white py-6 rounded-xl text-lg">
                  Verify & Login
                </Button>
                <button 
                  type="button" 
                  onClick={() => setStep('email')}
                  className="w-full text-sm text-slate-500 hover:text-amber-600 transition-colors"
                >
                  Change email address
                </button>
              </form>
            )}

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-slate-500">Or continue as</span>
              </div>
            </div>

            <Button 
              variant="outline" 
              onClick={handleGuestLogin}
              className="w-full py-6 rounded-xl border-slate-200 hover:bg-slate-50"
            >
              Guest User
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Auth;