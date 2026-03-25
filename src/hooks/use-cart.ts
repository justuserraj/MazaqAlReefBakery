"use client";

import { useCart as useGlobalCart } from '@/context/CartContext';

// Re-exporting the global hook for backward compatibility with existing components
export const useCart = useGlobalCart;