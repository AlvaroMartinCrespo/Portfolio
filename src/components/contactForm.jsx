import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailJs from '@emailjs/browser';
import { useRef } from 'react';

export default function ContactForm() {
  const form = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailServiceId = 'service_qag7i33';
    const templateId = 'template_vvxghao';
    const apiKey = 'EeQWUNBxyC3h-0-HB';

    const res = await emailJs.sendForm(emailServiceId, templateId, form.current, apiKey);
    if (res.status === 200) {
      toast.success('Formulario Enviado', {
        position: 'top-right',
        autoClose: 700,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      form.current.reset();
    } else {
      toast.error('Error', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };
  return (
    <>
      {/* <div className="text-center text-xl my-5">
        <p>Feel free to reach out for any inquiries or collaborations</p>
      </div> */}
      <div className="bg-slate-100 py-10 px-8 shadow rounded-lg flex justify-center">
        <form ref={form} onSubmit={handleSubmit} className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-blue-500 text-center">¡Contáctanos!</h2>

          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Nombre
            </label>
            <input
              className="mt-1 p-2 w-full border-b-2 border-blue-500 focus:outline-none focus:border-blue-700 transition-all"
              id="name"
              name="name"
              type="text"
              placeholder="Ejemplo: Juan Pérez"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Correo electrónico
            </label>
            <input
              className="mt-1 p-2 w-full border-b-2 border-blue-500 focus:outline-none focus:border-blue-700 transition-all"
              id="email"
              name="email"
              type="email"
              placeholder="Ejemplo: juan@example.com"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-600">
              Mensaje
            </label>
            <textarea
              className="mt-1 p-2 w-full border-b-2 border-blue-500 focus:outline-none focus:border-blue-700 transition-all"
              id="message"
              name="message"
              rows="4"
              placeholder="Escribe tu mensaje aquí..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 w-full transition-all"
          >
            Enviar Mensaje
          </button>
        </form>
        <ToastContainer />
      </div>

      {/* <div className=" bg-white py-10 px-8 shadow rounded-lg flex justify-center">
        <form ref={form} onSubmit={handleSubmit}>
          <div className="flex lg:gap-10 lg:flex-row flex-col">
            <div className="flex flex-col">
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Nombre
                </label>
                <input
                  className="lg:w-[30rem] w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Nombre"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Mensaje
              </label>
              <textarea
                className="xl:w-[30rem] w-full h-32 bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                id="message"
                name="message"
                placeholder="Mensaje"
                required
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
        <ToastContainer />
      </div> */}
    </>
  );
}
