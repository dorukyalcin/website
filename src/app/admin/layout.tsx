import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Applications — Avernsys Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-white/[0.08]">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-5">
          <Link href="/admin/applications" className="text-[15px] font-medium">
            Avernsys <span className="text-gray-500">Admin</span>
          </Link>
          <Link
            href="/"
            className="text-[13px] text-gray-500 hover:text-white transition-colors"
          >
            ← Back to site
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-[1100px] px-6 py-10">{children}</main>
    </div>
  );
}
