import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { BuildingOfficeIcon } from '@heroicons/react/24/outline';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaApple } from 'react-icons/fa';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>('');

  const handleLogin = async (values: { email: string; password: string }) => {
    try {
      const response = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        navigate('/dashboard');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred during login');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="flex min-h-screen">
        {/* Left side - Form */}
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-md">
            <div className="flex justify-center">
              <BuildingOfficeIcon className="h-12 w-12 text-primary" />
            </div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Welcome back
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="font-medium text-primary hover:text-primary/80 transition-colors">
                Sign up
              </Link>
            </p>

            <div className="mt-8">
              {/* Social Login Options */}
              <div className="space-y-4 mb-8">
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                  onClick={() => {/* TODO: Implement Google login */}}
                >
                  <FcGoogle className="w-5 h-5" />
                  <span className="text-gray-700 font-medium">Continue with Google</span>
                </button>

                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                  onClick={() => {/* TODO: Implement Facebook login */}}
                >
                  <FaFacebook className="w-5 h-5 text-[#1877F2]" />
                  <span className="text-gray-700 font-medium">Continue with Facebook</span>
                </button>

                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                  onClick={() => {/* TODO: Implement Apple login */}}
                >
                  <FaApple className="w-5 h-5" />
                  <span className="text-gray-700 font-medium">Continue with Apple</span>
                </button>
              </div>

              {/* Divider */}
              <div className="relative mb-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500">Or continue with email</span>
                </div>
              </div>

              <div className="bg-white py-8 px-4 shadow-2xl rounded-xl sm:px-10 ring-1 ring-gray-900/5">
                <Formik
                  initialValues={{ email: '', password: '' }}
                  validationSchema={LoginSchema}
                  onSubmit={handleLogin}
                >
                  {({ errors, touched }) => (
                    <Form className="space-y-6">
                      {error && (
                        <div className="bg-red-50 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative" role="alert">
                          <span className="block sm:inline">{error}</span>
                        </div>
                      )}

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Email address
                        </label>
                        <div className="mt-1">
                          <Field
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className={`block w-full appearance-none rounded-lg border ${
                              errors.email && touched.email ? 'border-red-300' : 'border-gray-300'
                            } px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm transition-colors`}
                            placeholder="you@example.com"
                          />
                          {errors.email && touched.email && (
                            <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                          Password
                        </label>
                        <div className="mt-1">
                          <Field
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            className={`block w-full appearance-none rounded-lg border ${
                              errors.password && touched.password ? 'border-red-300' : 'border-gray-300'
                            } px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm transition-colors`}
                            placeholder="••••••••"
                          />
                          {errors.password && touched.password && (
                            <p className="mt-2 text-sm text-red-600">{errors.password}</p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                          />
                          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                            Remember me
                          </label>
                        </div>

                        <div className="text-sm">
                          <Link to="/forgot-password" className="font-medium text-primary hover:text-primary/80 transition-colors">
                            Forgot your password?
                          </Link>
                        </div>
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="flex w-full justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
                        >
                          Sign in
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="hidden lg:block relative flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="/images/login-background.jpg"
            alt="Modern luxury home interior"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-xl p-8">
              <h2 className="text-4xl font-bold text-white">
                Find Your Dream Home with Jeff Realty
              </h2>
              <p className="mt-4 text-xl text-gray-200">
                Access exclusive property listings and personalized recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
