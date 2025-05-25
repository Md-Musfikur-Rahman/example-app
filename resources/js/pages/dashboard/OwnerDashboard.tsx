import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];
export default function OwnerDashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Property Owner Dashboard" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h2 className="mb-4 text-2xl font-bold">Property Owner Dashboard</h2>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                                <div className="rounded-lg bg-blue-100 p-4">
                                    <h3 className="mb-2 text-lg font-semibold">My Properties</h3>
                                    <p className="text-3xl font-bold">5</p>
                                </div>

                                <div className="rounded-lg bg-green-100 p-4">
                                    <h3 className="mb-2 text-lg font-semibold">Active Tenants</h3>
                                    <p className="text-3xl font-bold">3</p>
                                </div>

                                <div className="rounded-lg bg-yellow-100 p-4">
                                    <h3 className="mb-2 text-lg font-semibold">Total Revenue</h3>
                                    <p className="text-3xl font-bold">$4,500</p>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="mb-4 text-xl font-semibold">Property Listings</h3>
                                <div className="space-y-4">
                                    <div className="rounded-lg border p-4">
                                        <h4 className="font-semibold">Luxury Apartment</h4>
                                        <p className="text-sm text-gray-600">123 Main St, City</p>
                                        <p className="text-sm text-green-600">Occupied</p>
                                    </div>
                                    <div className="rounded-lg border p-4">
                                        <h4 className="font-semibold">Downtown Condo</h4>
                                        <p className="text-sm text-gray-600">456 Park Ave, City</p>
                                        <p className="text-sm text-yellow-600">Available</p>
                                    </div>
                                    <div className="rounded-lg border p-4">
                                        <h4 className="font-semibold">Beach House</h4>
                                        <p className="text-sm text-gray-600">789 Ocean Dr, City</p>
                                        <p className="text-sm text-green-600">Occupied</p>
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
