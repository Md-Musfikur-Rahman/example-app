import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Property Management Platform">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
                {/* Header */}
                <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 dark:bg-gray-900/80 dark:border-gray-700">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center py-6">
                            <div className="flex items-center">
                                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    PropertyHub
                                </h1>
                            </div>
                            <nav className="flex items-center space-x-4">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg font-medium transition-colors dark:text-gray-300 dark:hover:text-white"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                                        >
                                            Get Started
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </div>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                            Modern Property
                            <span className="text-blue-600 block">Management Platform</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                            A user-friendly, secure, and scalable web-based platform that allows property owners and managers 
                            to manage all aspects of their properties, tenant relations, financial transactions, and compliance, 
                            with a focus on seamless user experience.
                        </p>
                        {!auth.user && (
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href={route('register')}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                                >
                                    Start Managing Properties
                                </Link>
                                <Link
                                    href={route('login')}
                                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                                >
                                    Sign In
                                </Link>
                            </div>
                        )}
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 bg-white dark:bg-gray-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                                Everything You Need to Manage Properties
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                                Streamline your property management workflow with our comprehensive suite of tools
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-8">
                            {/* Property Management */}
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-8 rounded-2xl">
                                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    Property Management
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Efficiently manage all aspects of your properties including maintenance schedules, 
                                    property details, documentation, and compliance tracking in one centralized platform.
                                </p>
                            </div>

                            {/* Tenant Relations */}
                            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-8 rounded-2xl">
                                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    Tenant Relations
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Build stronger relationships with tenants through streamlined communication, 
                                    lease management, maintenance requests, and tenant portal access for seamless interactions.
                                </p>
                            </div>

                            {/* Financial Management */}
                            <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-8 rounded-2xl">
                                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    Financial Management
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Handle all financial transactions with confidence including rent collection, 
                                    expense tracking, financial reporting, and automated payment processing.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
                    <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                        <h2 className="text-4xl font-bold text-white mb-6">
                            Ready to Transform Your Property Management?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                            Join thousands of property owners and managers who trust our platform 
                            to streamline their operations and grow their business.
                        </p>
                        {!auth.user && (
                            <Link
                                href={route('register')}
                                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
                            >
                                Get Started Today
                            </Link>
                        )}
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 text-white py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h3 className="text-2xl font-bold mb-4">PropertyHub</h3>
                        <p className="text-gray-400 mb-6">
                            Secure, scalable, and user-friendly property management platform
                        </p>
                        <div className="border-t border-gray-800 pt-6">
                            <p className="text-gray-500">
                                © 2024 PropertyHub. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
