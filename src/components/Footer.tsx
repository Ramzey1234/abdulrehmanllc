export function Footer() {
  return (
    <footer className="border-t border-emerald-200">
      <div className="container-page py-10 text-sm text-emerald-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="font-semibold text-emerald-900">
            Abdul Rehman Store
          </div>
          <div className="mt-1">
            Built for those who appreciate quality and elegance.
          </div>
        </div>
        <div className="opacity-70">
          © {new Date().getFullYear()} Abdul Rehman Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
