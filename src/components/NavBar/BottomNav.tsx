'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Loja', href: '/' },
  { label: 'Blog', href: '/' },
  {
    label: 'Produtos',
    href: '/',
    dropdown: [
      { label: 'Roupas', href: '/roupas' },
      { label: 'Acessórios', href: '/acessorios' },
    ],
  },
  { label: 'Fale Conosco', href: '/' },
];

export default function BottomNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<Record<string, boolean>>(
    {},
  );
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (label: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdowns({});
  };

  return (
    <div
      className={`w-full border-b border-[color:var(--border)] bg-[color:var(--surface)] py-5 shadow-sm backdrop-blur transition-all duration-500 ${
        isFixed ? 'fixed-nav fixed left-0 top-0 z-50' : ''
      }`}
    >
      <div className='flex w-full items-center justify-between px-[8%] text-[color:var(--muted)] lg:px-[16%]'>
        {/* Logo mobile */}
        <Link
          href='/'
          className='font-audiowide text-3xl font-bold text-[color:var(--text)] lg:hidden'
        >
          Ben<span className='text-[var(--second)]'>Chique</span>
        </Link>

        {/* Logo desktop quando fixar */}
        <Link
          href='/'
          className={`font-audiowide text-4xl font-bold text-[color:var(--text)] ${
            isFixed ? 'hidden lg:block' : 'hidden'
          }`}
        >
          Ben<span className='text-[var(--second)]'>Chique</span>
        </Link>

        {/* Menu desktop centralizado */}
        <div className='hidden justify-center lg:flex'>
          <nav className='flex items-center gap-8'>
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className='group relative'>
                  <Link
                    href={link.href}
                    className='font-golos flex items-center gap-2 font-bold text-[color:var(--text)] transition-colors hover:text-[color:var(--accent)]'
                  >
                    {link.label}
                    <span className='h-1.5 w-1.5 rounded-full bg-[color:var(--accent)] opacity-80'></span>
                  </Link>

                  <div className='absolute left-0 top-full hidden min-w-[180px] rounded-lg border border-[color:var(--border)] bg-[color:var(--panel)] p-2 shadow-xl group-hover:block'>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className='font-golos block rounded-md px-4 py-2 text-[color:var(--text)] transition-colors hover:bg-[color:var(--surface)] hover:text-[color:var(--accent)]'
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className='font-golos flex items-center gap-2 font-bold text-[color:var(--text)] transition-colors hover:text-[color:var(--accent)]'
                >
                  {link.label}
                  <span className='h-1.5 w-1.5 rounded-full bg-[color:var(--accent)] opacity-80'></span>
                </Link>
              ),
            )}
          </nav>
        </div>

        {/* Direita desktop */}
        <div className='hidden items-center gap-6 lg:flex'>
          <Link
            href='/login'
            className='font-golos border-b border-[color:var(--border)] font-semibold text-[color:var(--text)] transition-colors hover:text-[color:var(--accent)]'
          >
            Login / Cadastro
          </Link>

          <Link
            href='/carrinho'
            className='relative text-3xl text-[color:var(--text)] transition-colors hover:text-[color:var(--accent)]'
            aria-label='Carrinho'
          >
            <i className='bi bi-cart3'></i>
            <span className='absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--accent)] text-xs font-bold text-[color:var(--accent-ink)]'>
              2
            </span>
          </Link>
        </div>

        {/* Mobile */}
        <div className='flex items-center justify-end gap-4 lg:hidden'>
          <Link
            href='/carrinho'
            className='relative text-2xl text-[color:var(--text)]'
            aria-label='Carrinho'
          >
            <i className='bi bi-cart3'></i>
            <span className='absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[color:var(--accent)] text-xs font-bold text-[color:var(--accent-ink)]'>
              2
            </span>
          </Link>

          <button
            type='button'
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className='text-2xl text-[color:var(--text)]'
            aria-label='Abrir menu'
          >
            <i
              className={mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'}
            ></i>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className='mt-3 border-t border-[color:var(--border)] bg-[color:var(--panel)] lg:hidden'>
          <nav className='flex flex-col px-[6%] py-4'>
            <Link
              href='/'
              onClick={closeMobileMenu}
              className='font-golos border-b border-[color:var(--border)] px-2 py-3 font-semibold text-[color:var(--text)] transition-colors hover:text-[color:var(--accent)]'
            >
              Login / Register
            </Link>

            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className='border-b border-[color:var(--border)] py-1'>
                  <button
                    type='button'
                    onClick={() => toggleDropdown(link.label)}
                    className='font-golos flex w-full items-center justify-between rounded-md px-2 py-3 text-left font-semibold text-[color:var(--text)] transition-colors hover:text-[color:var(--accent)]'
                  >
                    {link.label}
                    <i
                      className={`ri-arrow-down-s-line transition-transform duration-300 ${
                        openDropdowns[link.label] ? 'rotate-180' : ''
                      }`}
                    ></i>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openDropdowns[link.label] ? 'max-h-60' : 'max-h-0'
                    }`}
                  >
                    <div className='flex flex-col gap-2 bg-[color:var(--surface)] p-2'>
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          onClick={closeMobileMenu}
                          className='font-golos rounded-md border border-[color:var(--border)] bg-[color:var(--panel)] px-3 py-2 text-sm text-[color:var(--text)] hover:bg-[color:var(--surface)]'
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className='font-golos border-b border-[color:var(--border)] px-2 py-3 font-semibold text-[color:var(--text)] transition-colors hover:text-[color:var(--accent)]'
                >
                  {link.label}
                </Link>
              ),
            )}

            {/* Redes sociais só no mobile */}
            <div className='mt-4 flex items-center gap-4 px-2 text-2xl text-[color:var(--text)]'>
              <Link href='https://instagram.com' aria-label='Instagram'>
                <i className='bi bi-instagram transition-colors hover:text-[color:var(--accent)]'></i>
              </Link>

              <Link href='https://facebook.com' aria-label='Facebook'>
                <i className='bi bi-facebook transition-colors hover:text-[color:var(--accent)]'></i>
              </Link>

              <Link href='https://wa.me/5512999995555' aria-label='WhatsApp'>
                <i className='bi bi-whatsapp transition-colors hover:text-[color:var(--accent)]'></i>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
