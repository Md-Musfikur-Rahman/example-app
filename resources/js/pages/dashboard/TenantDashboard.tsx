import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];
export default function TenantDashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tenant Dashboard" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h2 className="mb-4 text-2xl font-bold">Tenant Dashboard</h2>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                <div className="rounded-lg bg-blue-100 p-4">
                                    <h3 className="mb-2 text-lg font-semibold">Current Rent</h3>
                                    <p className="text-3xl font-bold">$1,500</p>
                                </div>

                                <div className="rounded-lg bg-green-100 p-4">
                                    <h3 className="mb-2 text-lg font-semibold">Lease Ends</h3>
                                    <p className="text-3xl font-bold">120 days</p>
                                </div>

                                <div className="rounded-lg bg-yellow-100 p-4">
                                    <h3 className="mb-2 text-lg font-semibold">Maintenance Requests</h3>
                                    <p className="text-3xl font-bold">2</p>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="mb-4 text-xl font-semibold">Current Property</h3>
                                <div className="rounded-lg border p-4">
                                    <h4 className="font-semibold">Luxury Apartment</h4>
                                    <p className="text-sm text-gray-600">123 Main St, City</p>
                                    <div className="mt-4">
                                        <h5 className="mb-2 font-semibold">Property Owner</h5>
                                        <p className="text-sm text-gray-600">John Doe</p>
                                        <p className="text-sm text-gray-600">Contact: (555) 123-4567</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="mb-4 text-xl font-semibold">Recent Activities</h3>
                                <div className="space-y-4">
                                    <div className="border-l-4 border-blue-500 pl-4">
                                        <p className="font-semibold">Rent Payment Confirmed</p>
                                        <p className="text-sm text-gray-600">2 days ago</p>
                                    </div>
                                    <div className="border-l-4 border-yellow-500 pl-4">
                                        <p className="font-semibold">Maintenance Request Submitted</p>
                                        <p className="text-sm text-gray-600">1 week ago</p>
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
