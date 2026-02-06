import Sidebar from "@/app/components/sidebar/Sidebar";
import TopBarMobile from "../components/header/TopBarMobile";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-primary-3">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <TopBarMobile />

        <main className="flex-1 p-6 bg-primary-3 flex justify-center">
          <div className="w-full max-w-6xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
