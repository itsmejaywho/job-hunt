function Footer() {
  return (
    <footer className='bg-[#d9d9e2] text-[#1f2230]'>
      <div className='mx-auto flex min-h-[240px] w-full max-w-6xl flex-col justify-between px-6 py-8 md:px-10'>
        <div className='grid gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]'>
          <div className='space-y-4'>
            <h2 className='text-2xl font-semibold tracking-tight'>hackAssist</h2>
            <p className='max-w-xs text-sm text-[#2e3242]'>From Problem to Solution</p>
          </div>
          <ul className='space-y-2 text-sm'>
            <li>About</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
          <ul className='space-y-2 text-sm'>
            <li>Documentation</li>
            <li>FAQ</li>
            <li>Support</li>
          </ul>
          <ul className='space-y-2 text-sm'>
            <li>X (Twitter)</li>
            <li>LinkedIn</li>
            <li>YouTube</li>
          </ul>
        </div>
        <div className='mt-10 flex flex-col gap-4 text-xs text-[#31364a] md:mt-12 md:flex-row md:items-center md:justify-between'>
          <div className='inline-flex w-fit items-center gap-2 rounded-full border border-[#bfc3ce] bg-[#e8e9ef] px-3 py-1'>
            <span className='h-2 w-2 rounded-full bg-lime-500' />
            <span>All systems operational</span>
          </div>
          <div className='flex flex-wrap items-center gap-5'>
            <span>&copy; 2026 hackAssist. All rights reserved</span>
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
