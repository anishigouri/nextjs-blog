import { ArrowRight, Clock, Store } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

export const HeroSection = () => {
  return (
    <section className="container relative mt-16 pb-8 pt-8 md:py-10">
      <div className="grid min-h-80 grid-cols-1 items-center gap-8 md:h-144 md:grid-cols-2">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <h1 className="text-balance text-center font-heading text-heading-hg text-gray-100 md:text-left">
            Venda seus produtos como afiliado em um único lugar
          </h1>

          <div className="flex flex-col items-center gap-4 md:items-start">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-cyan-100" />
                <span className="text-body-sm text-gray-200">
                  Crie o seu site em menos de 5 minutos
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Store className="h-4 w-4 shrink-0 text-cyan-100" />
                <span className="text-body-sm text-gray-200">
                  Acompanhe e otimize seu negócio online
                </span>
              </div>
            </div>

            <div className="mt-5 flex flex-col items-center gap-2 md:items-start">
              <Button
                nativeButton={false}
                render={<Link href="/criar-loja" />}
                className="w-fit rounded-full"
              >
                Criar loja grátis
                <ArrowRight />
              </Button>

              <p className="text-body-xs text-gray-300">
                Não precisa de cartão de crédito
              </p>
            </div>
          </div>
        </div>

        <div className="relative order-first hidden h-80 items-center justify-center md:order-last md:flex md:h-full">
          <Image
            src="/hero-section.svg"
            alt="Ilustração com ícones de store, tag e sacola"
            width={471}
            height={491}
            priority
            className="h-full w-auto max-w-full object-contain"
            style={{ width: 'auto', height: 'auto' }}
          />
        </div>
      </div>
    </section>
  );
};
