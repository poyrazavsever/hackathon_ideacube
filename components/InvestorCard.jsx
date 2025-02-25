import React from 'react'

const InvestorCard = ({ name, profilePic, popularity, isFeatured, bio, country, investments }) => {
  // Öne çıkan yatırımcılar için özel stil
  const cardStyle = isFeatured ? "bg-[#493D9E] text-white" : "bg-white text-black";

  return (
    <div className={`shadow-md rounded-lg p-6 flex flex-col items-center text-center ${cardStyle}`}>
      <img src={profilePic} alt={name} className="w-32 h-32 rounded-full mb-4" />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-lg text-gray-300 mb-2">Popülerlik: {popularity}</p>
      {bio && <p className="text-sm text-gray-200 mb-4">{bio}</p>}
      <div className="w-full text-left">
        {country && <p className="text-sm text-gray-200">Ülke: {country}</p>}
        {investments && investments.length > 0 && (
          <div>
            <p className="text-sm text-gray-200">Yatırımlar:</p>
            <ul className="text-sm text-gray-200 list-disc pl-5">
              {investments.map((investment, index) => (
                <li key={index}>{investment}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default InvestorCard;
