import { HeartHandshakeIcon, PaintbrushVertical, Store } from "lucide-react";

export function SupportSection() {
  return (
    <section className="pb-8 md:py-10 relative">
      <div className="absolute inset-0 hidden md:block bg-[url('/background-features.svg')] bg-cover bg-center bg-no-repeat opacity-90" />

      <div className="container flex flex-col items-center gap-12 relative">
        <h2
          className='font-sans text-balance text-center text-heading-xl text-gray-100'
        >
          Sua loja de afiliados, simples, do jeito que deveria ser
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-blue-400">
            <div className="flex size-12 items-center justify-center rounded-lg bg-blue-300 mb-4">
              <PaintbrushVertical className="size-6 text-white" />
            </div>
            <div>
              <strong className="text-heading-sm text-gray-100">
                Personalize seu site
              </strong>
              <p className="text-gray-200 text-body-sm">
                Adicione sua logo, favicon, cores no seu catalogo e tenha tudo com a sua cara
              </p>
            </div>
          </div>

          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-cyan-300">
            <div className="flex size-12 items-center justify-center rounded-lg bg-cyan-200 mb-4">
              <Store className="size-6 text-white" />
            </div>
            <div>
              <strong className="text-heading-sm text-gray-100">
                Venda de qualquer loja
              </strong>
              <p className="text-gray-200 text-body-sm">
                Não importa a loja, o Site.Set permite que você insira qualquer link de afiliado.
              </p>
            </div>
          </div>

          <div className="flex flex-col text-left gap-2 rounded-lg p-6 md:p-12 bg-blue-400">
            <div className="flex size-12 items-center justify-center rounded-lg bg-blue-300 mb-4">
              <HeartHandshakeIcon className="size-6 text-white" />
            </div>
            <div>
              <strong className="text-heading-sm text-gray-100">
                Receba suporte amigável
              </strong>
              <p className="text-gray-200 text-body-sm">
                Nossa equipe está sempre pronta para te  atender para ajudar no que for preciso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
