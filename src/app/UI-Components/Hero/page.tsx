import Image from 'next/image';
import hero from '@/../public/Hero.png';

export default function Hero() {
  return (
    <section className='relative overflow-hidden bg-[color:var(--bg)] px-[8%] py-12 lg:px-[10%]'>
      <div className='mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 lg:flex-row'>
        <div className='w-full lg:w-1/2'>
          <div className='hero-content'>
            <h1 className='font-golos text-5xl font-semibold leading-[1.05] text-[color:var(--text)] md:text-6xl lg:text-[5rem]'>
              Ative seu estilo.
              <span className='mt-2 flex items-center gap-3'>
                <span className='h-3 w-3 rounded-full bg-[color:var(--accent)] shadow-sm'></span>
                <span className='text-[color:var(--accent)]'>Em modo missão</span>
              </span>
              <span className='block'>pra encarar qualquer aventura.</span>
            </h1>

            <p className='font-golos mt-5 text-lg text-[color:var(--muted)] md:text-xl'>
              Frete grátis nas compras acima de{' '}
              <span className='font-mono text-[color:var(--accent)]'>R$399,00</span>
            </p>

            <div className='mt-8 flex flex-wrap items-center gap-4'>
              <button className='font-golos rounded-md bg-[color:var(--accent)] px-6 py-3 text-lg font-semibold text-[color:var(--accent-ink)] transition-all duration-300 hover:opacity-90'>
                Comprar
              </button>

              <button className='font-golos rounded-md border border-[color:var(--border-strong)] bg-transparent px-6 py-3 text-lg text-[color:var(--text)] transition-all duration-300 hover:bg-[color:var(--panel)]'>
                Ver Detalhes
              </button>
            </div>
          </div>
        </div>

        <div className='w-full lg:w-1/2'>
          <div className='hero-image'>
            <div className='border-shap1'></div>
            <div className='border-shap2'></div>

            <div className='hero-ring -left-6 -top-6'></div>
            <div className='hero-ring -bottom-8 left-10'></div>
            <div className='hero-ring -right-6 top-1/2 -translate-y-1/2'></div>

            <Image
              src={hero}
              alt='Imagem Banner'
              className='relative z-10 w-full drop-shadow-lg md:w-[85%] lg:w-[85%]'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
