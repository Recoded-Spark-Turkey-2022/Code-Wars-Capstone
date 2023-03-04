function Card({ imageUrl, header, text }) {
  return (
    <div
      style={{ fontFamily: 'Poppins, sans-serif' }}
      className="bg-white rounded-lg drop-shadow-xl p-6  mb-4 "
    >
      <img
        src={imageUrl}
        alt="cardsphoto"
        className="h-20 w-15 rounded-full mx-auto mb-4"
      />
      <h2 className="text-2xl font-bold text-center mb-2">{header}</h2>
      <p className="text-gray-700 text-center">{text}</p>
    </div>
  );
}
export default Card;
