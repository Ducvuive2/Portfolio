function ContactSection() {
  return (
    <div className="flex flex-col mb-8">
      <div className="mb-4">
        <h3 className="mb-2 text-2xl font-semibold text-primary-variant-light">Contact</h3>
        <div className="w-10 h-1 mb-12 rounded bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
      </div>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10635.849229586951!2d106.70001765018178!3d10.809585684266342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528bf02414443%3A0x188f12841b11c755!2zMjE3IELDuWkgxJDDrG5oIFR1w70sIFBoxrDhu51uZyAxNCwgQsOsbmggVGjhuqFuaCwgSOG7kyBDaMOtIE1pbmggODQ4MDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1740671617923!5m2!1svi!2s"
        width="100%"
        height="450"
        className="border-0 rounded-2xl [filter:grayscale(1)_invert(1)]"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default ContactSection;