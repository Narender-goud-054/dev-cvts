export default function MapEmbed() {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden p-4">
      <iframe
        className="w-full h-full border-0"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.766452144572!2d78.45187017331872!3d17.422992201782083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb974a59bb382f%3A0x3281875086d9e929!2sNIMS%20Hospital!5e0!3m2!1sen!2sin!4v1765348524999!5m2!1sen!2sin"
      />
    </div>
  );
}