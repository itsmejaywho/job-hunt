function AppShell({ children }) {
  return (
    <div className='app-shell'>
      <header className='app-shell__header'>
        <h1>Map</h1>
      </header>
      <main className='app-shell__main'>{children}</main>
    </div>
  );
}

export default AppShell;

