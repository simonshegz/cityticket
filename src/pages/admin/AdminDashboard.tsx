import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminDashboard: React.FC = () => {
  const { currentUser, isAdmin } = useAuth();

  if (!currentUser || !isAdmin) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Events Management */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Events Management</h2>
          <ul className="space-y-2">
            <li>
              <button className="text-blue-600 hover:text-blue-800">Create Event</button>
            </li>
            <li>
              <button className="text-blue-600 hover:text-blue-800">View All Events</button>
            </li>
            <li>
              <button className="text-blue-600 hover:text-blue-800">Manage Categories</button>
            </li>
          </ul>
        </div>

        {/* User Management */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">User Management</h2>
          <ul className="space-y-2">
            <li>
              <button className="text-blue-600 hover:text-blue-800">View All Users</button>
            </li>
            <li>
              <button className="text-blue-600 hover:text-blue-800">Manage Roles</button>
            </li>
          </ul>
        </div>

        {/* Analytics */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Analytics</h2>
          <ul className="space-y-2">
            <li>
              <button className="text-blue-600 hover:text-blue-800">Sales Reports</button>
            </li>
            <li>
              <button className="text-blue-600 hover:text-blue-800">User Activity</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;