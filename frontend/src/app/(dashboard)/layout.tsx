import Sidebar from "@/app/components/sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-primary-3">
      <Sidebar />

      <main className="flex-1 p-6 bg-primary-3">
        {children}
      </main>
    </div>
  );
}
