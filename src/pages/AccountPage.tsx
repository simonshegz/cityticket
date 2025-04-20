import React from 'react';

const AccountPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>
      
      <div className="grid md:grid-cols-3 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-primary-100 rounded-full p-3">
                <span className="text-primary-600 text-xl">JD</span>
              </div>
              <div>
                <h2 className="font-semibold">John Doe</h2>
                <p className="text-gray-500 text-sm">john.doe@example.com</p>
              </div>
            </div>
            
            <nav>
              <ul className="space-y-2">
                <li className="bg-gray-100 rounded p-2 font-medium">Dashboard</li>
                <li className="p-2 hover:bg-gray-100 rounded transition-colors">My Tickets</li>
                <li className="p-2 hover:bg-gray-100 rounded transition-colors">Payment Methods</li>
                <li className="p-2 hover:bg-gray-100 rounded transition-colors">Account Settings</li>
                <li className="p-2 hover:bg-gray-100 rounded transition-colors">Sign Out</li>
              </ul>
            </nav>
          </div>
        </div>
        
        {/* Main content */}
        <div className="md:col-span-2">
          {/* Upcoming events */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">Summer Music Festival</h3>
                  <p className="text-gray-500 text-sm">July 15, 2025 • 2:00 PM</p>
                </div>
                <button className="text-primary-600 hover:text-primary-800">View Ticket</button>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">Tech Conference 2025</h3>
                  <p className="text-gray-500 text-sm">August 10, 2025 • 9:00 AM</p>
                </div>
                <button className="text-primary-600 hover:text-primary-800">View Ticket</button>
              </div>
            </div>
          </div>
          
          {/* Order history */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Order History</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Order ID</th>
                    <th className="text-left py-3 px-4">Date</th>
                    <th className="text-left py-3 px-4">Amount</th>
                    <th className="text-left py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4">#12345</td>
                    <td className="py-3 px-4">June 12, 2025</td>
                    <td className="py-3 px-4">$89.99</td>
                    <td className="py-3 px-4"><span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Completed</span></td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">#12346</td>
                    <td className="py-3 px-4">May 23, 2025</td>
                    <td className="py-3 px-4">$129.99</td>
                    <td className="py-3 px-4"><span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Completed</span></td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">#12347</td>
                    <td className="py-3 px-4">May 2, 2025</td>
                    <td className="py-3 px-4">$59.99</td>
                    <td className="py-3 px-4"><span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Completed</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;