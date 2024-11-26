import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpIcon,
  ArrowDownIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  BanknotesIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

const stats = [
  {
    name: 'Total Properties',
    stat: '71',
    icon: BuildingOfficeIcon,
    change: '12%',
    changeType: 'increase',
  },
  {
    name: 'Active Listings',
    stat: '58',
    icon: BuildingOfficeIcon,
    change: '2.1%',
    changeType: 'increase',
  },
  {
    name: 'Total Revenue',
    stat: '$405,091',
    icon: BanknotesIcon,
    change: '4.75%',
    changeType: 'increase',
  },
  {
    name: 'Active Clients',
    stat: '23',
    icon: UserGroupIcon,
    change: '3%',
    changeType: 'decrease',
  },
];

const DashboardHome: React.FC = () => {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Welcome back! Here's what's happening with your properties today.
        </p>
      </div>

      {/* Stats */}
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.name}
            className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div className="absolute rounded-md bg-indigo-500 p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
              <p
                className={`ml-2 flex items-baseline text-sm font-semibold ${
                  item.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {item.changeType === 'increase' ? (
                  <ArrowUpIcon className="h-5 w-5 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
                ) : (
                  <ArrowDownIcon className="h-5 w-5 flex-shrink-0 self-center text-red-500" aria-hidden="true" />
                )}
                <span className="ml-1">{item.change}</span>
              </p>
            </dd>
          </div>
        ))}
      </dl>

      {/* Quick Actions */}
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900">Quick Actions</h2>
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            to="/dashboard/upload"
            className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-6 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <BuildingOfficeIcon className="mx-auto h-8 w-8 text-gray-400" />
            <span className="mt-2 block text-sm font-medium text-gray-900">
              Add New Property
            </span>
          </Link>
          
          <Link
            to="/dashboard/properties"
            className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-6 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <UserGroupIcon className="mx-auto h-8 w-8 text-gray-400" />
            <span className="mt-2 block text-sm font-medium text-gray-900">
              View All Properties
            </span>
          </Link>

          <Link
            to="/dashboard/analytics"
            className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-6 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <BanknotesIcon className="mx-auto h-8 w-8 text-gray-400" />
            <span className="mt-2 block text-sm font-medium text-gray-900">
              View Analytics
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
