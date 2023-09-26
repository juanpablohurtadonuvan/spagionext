import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../@/components/ui/accordion";

export default function FAQ() {
  return (
    <>
    <hr className="my-6 border-t-2 border-gray-600" />
      <h2 id="preguntas-frecuentes" className="mb-8 text-3xl font-bold text-center text-white">
        Preguntas Frecuentes
      </h2>
      <div className="flex flex-wrap justify-between w-full">
        <div className="w-1/2 p-2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="p-2 text-lg font-bold bg-black rounded-t-md">
                Que es Spagio?
              </AccordionTrigger>
              <AccordionContent className="p-2 text-justify bg-black0 rounded-b-md">
                Somos una empresa líder en innovación que se dedica a garantizar
                la integridad y autenticidad de los boletos a través de la
                implementación de tecnología NFT (Token No Fungible). Al adoptar
                esta tecnología emergente, nos aseguramos de que cada boleto sea
                único, rastreable y no pueda ser duplicado fraudulentamente.
                Hemos elegido trabajar con Solana, una de las cadenas de bloques
                más rápidas y eficientes del mercado. Esta elección no solo nos
                permite ofrecer transacciones más rápidas y a menor costo, sino
                que también brinda una experiencia de usuario más fluida y
                segura. Nuestro compromiso es con la transparencia, la seguridad
                y proporcionar a nuestros clientes la mejor experiencia posible
                en la compra y venta de boletos. ¡Con nosotros, tu entrada es
                más que un simple papel, es una pieza de tecnología avanzada!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="w-1/2 p-2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-2">
              <AccordionTrigger className="p-2 text-lg font-bold bg-black rounded-t-md">
                Como compro boletos en Spagio?
              </AccordionTrigger>
              <AccordionContent className="p-2 text-justify bg-black rounded-b-md">
                Para disfrutar de la experiencia de comprar boletos mediante
                nuestra plataforma, necesitas contar con una billetera digital
                compatible con la red Solana, como Phantom. Esta billetera debe
                estar financiada con Solana (SOL), la criptomoneda nativa de
                esta cadena de bloques. La razón detrás de esta elección es
                proporcionar a nuestros usuarios un sistema de transacciones
                rápido y eficiente. El proceso es sencillo y seguro. Primero,
                conectas tu billetera digital con nosotros, lo cual te permite
                aprovechar todas las ventajas de la tecnología blockchain. A
                partir de ahí, puedes explorar y seleccionar los boletos que
                desees comprar. La transacción se ejecuta de forma instantánea y
                segura, y una vez que se completa, podrás verificar que el NFT
                (Token No Fungible) correspondiente a tu boleto estará
                inmediatamente disponible en tu billetera digital. Esta es una
                forma innovadora de comprar boletos que te brinda la propiedad
                digital de tu entrada, otorgándote un mayor control y
                autenticidad sobre tu acceso al evento. Además, la transferencia
                de NFTs entre billeteras es rápida y sin complicaciones, lo que
                significa que puedes compartir o vender tus boletos de manera
                conveniente si así lo deseas. En resumen, nuestro objetivo es
                ofrecerte una experiencia de compra de boletos sin igual,
                combinando la seguridad y la velocidad de la tecnología
                blockchain con la comodidad de tener tus boletos directamente en
                tu billetera digital. ¡Es el futuro de la adquisición de
                entradas para eventos!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="w-1/2 p-2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-2">
              <AccordionTrigger className="p-2 text-lg font-bold bg-black rounded-t-md">
                Por que comprar en Spagio?
              </AccordionTrigger>
              <AccordionContent className="p-2 text-justify bg-black rounded-b-md">
                Comprar en Spagio es optar por la innovación y la seguridad en
                la adquisición de boletos. Trabajamos con la tecnología
                blockchain, específicamente con NFTs en la red Solana, lo que
                nos permite garantizar transparencia en cada transacción,
                integridad en la autenticidad de cada boleto y una velocidad
                inigualable en el proceso de compra. Al elegir Spagio, estás
                eligiendo una experiencia de compra respaldada por la robustez y
                confiabilidad de la blockchain, asegurando que tu boleto es
                único, auténtico y completamente tuyo.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="w-1/2 p-2">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-2">
              <AccordionTrigger className="p-2 text-lg font-bold bg-black rounded-t-md">
                Quienes somos?
              </AccordionTrigger>
              <AccordionContent className="p-2 text-justify bg-black rounded-b-md">
                Cuando eliges Spagio, estás abrazando la innovación y la
                seguridad en la adquisición de boletos. Nuestra asociación con
                la tecnología blockchain y el uso de NFTs en la red Solana nos
                permite garantizar transacciones transparentes y la integridad
                absoluta de cada boleto. La velocidad de nuestro proceso de
                compra es incomparable, gracias a la eficiencia de Solana. Con
                nosotros, obtienes una experiencia respaldada por la robustez de
                la blockchain, asegurando que tu boleto sea auténtico, único y
                completamente tuyo. En Spagio, estamos revolucionando la compra
                de boletos, llevándola a un nivel superior. Nuestro compromiso
                es proporcionarte boletos que no solo representen tu acceso a un
                evento, sino también la seguridad y propiedad digital. Con
                nosotros, cada boleto es un testimonio de nuestra dedicación a
                la innovación y la confiabilidad en el mundo de los eventos en
                vivo. Únete a nosotros en el futuro de la compra de boletos en
                línea.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Puedes agregar más items aquí para completar la matriz de 2x2 */}
      </div>
    </>
  );
}
