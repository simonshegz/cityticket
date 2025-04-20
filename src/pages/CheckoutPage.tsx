import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart, CreditCard, CheckCircle } from 'lucide-react';

const CheckoutPage: React.FC = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const [isProcessing, setIsProcessing] = useState(false);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Order Summary */}
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <ShoppingCart className="h-5 w-5 text-indigo-600" />
            <h2 className="text-xl font-semibold">Order Summary</h2>
          </div>
          
          <p className="text-gray-600 mb-6">Event ID: {eventId}</p>
          
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>$XX.XX</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Fees</span>
              <span>$X.XX</span>
            </div>
            <div className="flex justify-between font-semibold text-lg mt-4 pt-4 border-t">
              <span>Total</span>
              <span>$XX.XX</span>
            </div>
          </div>
        </div>
        
        {/* Payment Information */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <CreditCard className="h-5 w-5 text-indigo-600" />
            <h2 className="text-xl font-semibold">Payment Information</h2>
          </div>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Cardholder Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="card" className="block text-sm font-medium text-gray-700 mb-1">
                Card Number
              </label>
              <input
                type="text"
                id="card"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="XXXX XXXX XXXX XXXX"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiry"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">
                  CVC
                </label>
                <input
                  type="text"
                  id="cvc"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="123"
                />
              </div>
            </div>
            
            <button
              type="button"
              className={`w-full py-3 px-4 text-white rounded-md font-medium transition-colors ${
                isProcessing 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
              onClick={() => setIsProcessing(true)}
              disabled={isProcessing}
            >
              {isProcessing ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></span>
                  Processing...
                </span>
              ) : (
                'Complete Purchase'
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;