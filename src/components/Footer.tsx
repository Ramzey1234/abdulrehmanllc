export function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="container-page py-10 text-sm text-neutral-600 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="font-semibold text-neutral-900">Idrees Store</div>
          <div className="mt-1">
            Built for teams who prefer hardware that just works.
          </div>
        </div>
        <div className="opacity-70">
          © {new Date().getFullYear()} Idrees Store. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
