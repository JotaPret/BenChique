'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function MiddleNav() {
  const [query, setQuery] = useState('');
  return (
    <div className='relative w-full border-b border-[color:var(--border)] bg-[color:var(--surface)] backdrop-blur'>
      <div className='flex items-center justify-between px-[8%] py-3 lg:px-[16%]'>
        {/* Logo */}
        <Link
          href='/'
          className='font-audiowide text-4xl font-bold text-[color:var(--text)] lg:text-5xl'
        >
          Ben<span className='text-[var(--second)]'>Chique</span>
        </Link>

        {/* Search Box */}
        <div className='relative mx-0 ms-6 flex flex-1 flex-col rounded-lg border border-[color:var(--border)] bg-[color:var(--panel)] shadow-sm lg:max-w-2xl'>
          <div className='flex items-center'>
            <input
              type='text'
              placeholder='Busque por um produto ou marca'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className='flex-1 rounded-l-lg bg-transparent px-4 py-4 text-[color:var(--text)] outline-none placeholder:text-[color:var(--muted)]'
            />
            <button className='cursor-pointer px-3 text-2xl text-[color:var(--muted)] transition-colors hover:text-[color:var(--accent)]'>
              <i className='bi bi-search'></i>
            </button>
          </div>
        </div>
        {/* Contact */}
        <div className='flex items-center gap-2'>
          <Image
            src='/suporte.png'
            alt='Descrição do contato'
            width={50}
            height={50}
            className='opacity-90'
          />
          <div className='flex flex-col'>
            <h2 className='font-golos ps-2 text-xs font-semibold text-[color:var(--muted)]'>
              SUPORTE
            </h2>
            <h1 className='font-golos font-semibold text-[color:var(--text)]'>
              12 9999-5555
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
