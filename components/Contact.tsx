import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Contact() {
  const [isChecked, setIsChecked] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Nuevo estado para el envío

  const initialValues = {
    nombre: "",
    email: "",
    empresa: "",
    detalle: "",
  };

  const validationSchema = Yup.object({
    nombre: Yup.string().required("El nombre es requerido"),
    email: Yup.string()
      .email("El email no es válido")
      .required("El email es requerido"),
    empresa: Yup.string().required("La empresa es requerida"),
    detalle: Yup.string().required("Los detalles del evento son requeridos"),
  });

  const handleSubmit = async (values: any, { resetForm }: any) => {
    setIsSubmitting(true); // Establecer isSubmitting en true al comenzar el envío
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/solicitudes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.status === 201) {
        setIsSent(true);
        resetForm();
        setIsChecked(false); // Restablecer los valores iniciales después del envío exitoso
      } else {
        console.log(
          "Error al enviar el formulario. Estado de respuesta:",
          response.status
        );
        // Agregar más detalles del error si están disponibles
        const responseData = await response.json();
        console.error("Detalles del error:", responseData);
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    } finally {
      setIsSubmitting(false); // Establecer isSubmitting en false al completar el envío
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <hr className="my-6 border-t-2 border-gray-600" />
      <h1 id="contacto" className="my-6 text-3xl font-bold text-center">
        Formulario de Contacto 👨‍💼
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="w-full max-w-xl mx-auto bg-black rounded-xl">
          <div className="p-4">
            <div className="mt-4 space-y-6">
              <div>
                <label className="block mb-3 text-sm font-medium text-white">
                  Nombre
                </label>
                <Field
                  name="nombre"
                  className="block w-full px-6 py-3 text-white bg-black border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="Nombre"
                />
                <ErrorMessage
                  name="nombre"
                  component="div"
                  className="text-sm text-red-500"
                />
              </div>
              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-white">
                  Nombre de la Empresa
                </label>
                <Field
                  name="empresa"
                  className="block w-full px-6 py-3 text-white bg-black border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="Nombre de la Empresa"
                />
                <ErrorMessage
                  name="empresa"
                  component="div"
                  className="text-sm text-red-500"
                />
              </div>
              <div className="col-span-full">
                <label className="block mb-3 text-sm font-medium text-white">
                  Email
                </label>
                <Field
                  name="email"
                  className="block w-full px-6 py-3 text-white bg-black border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="email@spagio.com"
                  autoComplete="off"
                  type="email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-sm text-red-500"
                />
              </div>
              <div>
                <div>
                  <label className="block mb-3 text-sm font-medium text-white">
                    Detalles del Evento
                  </label>
                  <Field
                    name="detalle"
                    as="textarea"
                    className="block w-full px-6 py-3 text-white bg-black border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    placeholder="Descripcion"
                  />
                  <ErrorMessage
                    name="detalle"
                    component="div"
                    className="text-sm text-red-500"
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 mb-3">
              <label className="text-sm text-white cursor-pointer hover:underline">
                <Field
                  type="checkbox"
                  name="isChecked"
                  className="mr-2"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                Acepto los términos y condiciones
                <span
                  className="ml-1 text-sm text-blue-500 hover:underline"
                  onClick={openModal}
                >
                  (Ver términos)
                </span>
              </label>
            </div>
            <div className="col-span-full">
              <button
                className={`items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 border-2 border-black rounded-full inline-flex hover:bg-transparent hover:border-black hover:text-white focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black ${
                  !isChecked || isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                style={{
                  background: "linear-gradient(90deg, purple, blue)",
                }}
                type="submit"
                disabled={!isChecked || isSubmitting}
              >
                {isSubmitting
                  ? "Enviando..."
                  : isSent
                  ? "Enviado ✅"
                  : "Enviar ✉️"}
              </button>
            </div>
          </div>
        </Form>
      </Formik>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black opacity-70"></div>
          <div className="z-10 max-w-[700px] p-4 text-sm text-white bg-black rounded-md border">
            <h1 className="mb-4 text-lg font-semibold text-center">
              <b>Términos y Condiciones</b>
              <hr className="my-6 border-t-2 border-gray-600" />
            </h1>
            <div className="w-[600px] mx-auto text-justify">
              <ol className="pl-6 list-decimal">
                <li>
                  <p>
                    <b>Aceptación de los Términos y Condiciones: </b> Al comprar
                    un boleto en formato NFT para eventos organizados por
                    Spagio, aceptas cumplir y estar sujeto a los siguientes
                    términos y condiciones. Si no estás de acuerdo con estos
                    términos, te recomendamos que no adquieras boletos para
                    nuestros eventos.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Compra de Boletos en Formato NFT: </b>Los boletos en
                    formato NFT se pueden adquirir exclusivamente a través de
                    nuestra plataforma en línea. Cada boleto en formato NFT es
                    único y representa un derecho de acceso a un evento
                    específico de Spagio.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Pago y Precios:</b> Los precios de los boletos en formato
                    NFT se establecen en criptomonedas o moneda digital, como
                    Solana (SOL), y están sujetos a las tarifas de transacción
                    correspondientes. El pago se realiza mediante transferencia
                    de criptomonedas u otros métodos de pago digitales
                    aceptados.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Propiedad y Transferencia:</b> de NFT Los boletos en
                    formato NFT son propiedad digital y están registrados en una
                    cadena de bloques (blockchain). Los compradores son
                    responsables de mantener la seguridad de sus claves privadas
                    y direcciones de billetera. Los boletos en formato NFT son
                    transferibles dentro de la plataforma de Spagio y se pueden
                    revender o regalar a otros usuarios.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Acceso al Evento: </b>Acceso al Evento: La posesión de un
                    boleto en formato NFT válido es necesaria para el acceso al
                    evento. Debes presentar tu NFT en la fecha y hora
                    designadas.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Reembolsos y Cambios:</b> Los boletos en formato NFT son
                    no reembolsables, a menos que el evento sea cancelado por
                    Spagio. En caso de cancelación, se proporcionará una
                    solución adecuada a los compradores, que puede incluir un
                    reembolso en criptomonedas. Los cambios en la fecha o la
                    hora del evento pueden estar sujetos a restricciones y
                    cargos adicionales, y están sujetos a disponibilidad.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Responsabilidad y Conducta del Comprador: </b> Los
                    compradores de boletos en formato NFT son responsables de su
                    comportamiento durante el evento y deben seguir las
                    instrucciones del personal de Spagio y las políticas del
                    lugar.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Cambios en los Eventos:</b> Spagio se reserva el derecho
                    de realizar cambios en la programación del evento,
                    incluyendo cambios en la fecha, la hora, el lugar o los
                    artistas, sin previo aviso.
                  </p>
                </li>
                <li>
                  <p>
                    <b>Política de Privacidad:</b> Spagio recopila y utiliza
                    información personal de los compradores de boletos en
                    formato NFT de acuerdo con nuestra política de privacidad.
                    Al comprar un boleto, aceptas los términos de nuestra
                    política de privacidad. Estos términos y condiciones
                    reflejan la naturaleza digital y única de los boletos en
                    formato NFT de Spagio.
                  </p>
                </li>
              </ol>
            </div>
            <button
              className="block px-4 py-2 mx-auto mt-4 text-white bg-black border border-white rounded-full hover:bg-white hover:text-black hover:border-black"
              onClick={closeModal}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;
