import ContactForm from './contactForm';
export default function Contact() {
  return (
    <>
      <section className="bg-blue-200">
        <div className="container mx-auto mt-10 p-10">
          <h2 className="font-extrabold text-4xl">CONTACT</h2>
          <div className="m-5">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
