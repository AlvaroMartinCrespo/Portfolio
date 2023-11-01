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
      <div className="text-center text-xl my-5">
        <p>Feel free to reach out for any inquiries or collaborations</p>
      </div>
      <div className=" bg-white py-10 px-8 shadow rounded-lg flex justify-center">
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
      </div>
    </>
  );
}
