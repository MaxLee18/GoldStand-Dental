export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <header style={{ padding: '1rem', background: '#f0f0f0', borderBottom: '1px solid #ccc' }}>
          <h1>GoldStand Dental</h1>
        </header>
        <div style={{ display: 'flex' }}>
          <nav style={{ width: '200px', padding: '1rem', background: '#eaeaea' }}>
            <ul>
              <li><a href="/">Dashboard</a></li>
              <li><a href="/equipment">Equipment</a></li>
              <li><a href="/audits">Audits</a></li>
              <li><a href="/training">Training</a></li>
            </ul>
          </nav>
          <main style={{ flexGrow: 1, padding: '2rem' }}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
