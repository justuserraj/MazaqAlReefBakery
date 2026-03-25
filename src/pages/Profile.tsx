"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  User, 
  Package, 
  Settings, 
  LogOut, 
  ChevronRight, 
  ArrowLeft,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/hooks/use-auth';
import { Badge } from '@/components/ui/badge';

const Profile = () => {
  const { user, logout } = useAuth();

  const orders = [
    {
      id: "#ORD-7721",
      date: "Oct 24, 2023",
      total: "45 AED",
      status: "Delivered",
      items: "Zaatar Manakish x2, Fresh Pita x5"
    },
    {
      id: "#ORD-6540",
      date: "Oct 12, 2023",
      total: "25 AED",
      status: "Delivered",
      items: "Baklava Selection x1"
    }
  ];

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Please login to view your profile</h2>
          <Button asChild className="bg-amber-600">
            <Link to="/auth">Login Now</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-amber-600 transition-colors mb-8">
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-none shadow-sm rounded-3xl overflow-hidden">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold">
                  {user.name[0].toUpperCase()}
                </div>
                <h2 className="text-xl font-bold text-slate-900">{user.name}</h2>
                <p className="text-sm text-slate-500 mb-6">{user.email}</p>
                <Button variant="outline" onClick={logout} className="w-full rounded-xl text-red-600 border-red-100 hover:bg-red-50">
                  <LogOut className="mr-2 h-4 w-4" /> Logout
                </Button>
              </CardContent>
            </Card>

            <nav className="space-y-2">
              <button className="w-full flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm text-amber-600 font-bold">
                <div className="flex items-center gap-3">
                  <Package size={20} />
                  <span>Orders</span>
                </div>
                <ChevronRight size={18} />
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm text-slate-600 hover:text-amber-600 transition-colors">
                <div className="flex items-center gap-3">
                  <User size={20} />
                  <span>Account</span>
                </div>
                <ChevronRight size={18} />
              </button>
              <button className="w-full flex items-center justify-between p-4 bg-white rounded-2xl shadow-sm text-slate-600 hover:text-amber-600 transition-colors">
                <div className="flex items-center gap-3">
                  <Settings size={20} />
                  <span>Settings</span>
                </div>
                <ChevronRight size={18} />
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">
            <Card className="border-none shadow-sm rounded-3xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Order History</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {orders.map((order, index) => (
                  <motion.div 
                    key={order.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 border border-slate-100 rounded-2xl hover:border-amber-200 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-sm font-bold text-amber-600">{order.id}</span>
                        <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                          <Clock size={12} />
                          <span>{order.date}</span>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-600 border-none flex items-center gap-1">
                        <CheckCircle2 size={12} /> {order.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-600 mb-4">{order.items}</p>
                    <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                      <span className="text-sm text-slate-500">Total Amount</span>
                      <span className="font-bold text-slate-900">{order.total}</span>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;