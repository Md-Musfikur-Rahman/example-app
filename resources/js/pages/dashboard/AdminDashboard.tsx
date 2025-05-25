import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];
export default function AdminDashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Admin Dashboard" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h2 className="mb-4 text-2xl font-bold">Admin Dashboard</h2>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                <div className="rounded-lg bg-blue-100 p-4">
                                    <h3 className="mb-2 text-lg font-semibold">Total Users</h3>
                                    <p className="text-3xl font-bold">150</p>
                                </div>

                                <div className="rounded-lg bg-green-100 p-4">
                                    <h3 className="mb-2 text-lg font-semibold">Property Owners</h3>
                                    <p className="text-3xl font-bold">45</p>
                                </div>

                                <div className="rounded-lg bg-yellow-100 p-4">
                                    <h3 className="mb-2 text-lg font-semibold">Tenants</h3>
                                    <p className="text-3xl font-bold">105</p>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="mb-4 text-xl font-semibold">Recent Activities</h3>
                                <div className="space-y-4">
                                    <div className="border-l-4 border-blue-500 pl-4">
                                        <p className="font-semibold">New Property Owner Registered</p>
                                        <p className="text-sm text-gray-600">2 hours ago</p>
                                    </div>
                                    <div className="border-l-4 border-green-500 pl-4">
                                        <p className="font-semibold">New Property Listed</p>
                                        <p className="text-sm text-gray-600">5 hours ago</p>
                                    </div>
                                    <div className="border-l-4 border-yellow-500 pl-4">
                                        <p className="font-semibold">New Tenant Registration</p>
                                        <p className="text-sm text-gray-600">1 day ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
