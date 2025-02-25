import React from 'react';
import classNames from 'classnames';

const InvestorCard = ({ name, profilePic, popularity, isFeatured, bio, country, investments }) => {
  return (
    <div
      className={classNames(
        'shadow-md rounded-lg p-6 flex flex-col items-center text-center',
        {
          'bg-primary text-white': isFeatured,  // isFeatured ise arkaplan primary ve yazılar beyaz olacak
          'bg-white text-neutral-800': !isFeatured  // isFeatured değilse arkaplan beyaz, yazılar koyu gri olacak
        }
      )}
    >
      <img src={profilePic} alt={name} className="w-32 h-32 rounded-full mb-4" />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-lg mb-2">Popülerlik: {popularity}</p>
      {bio && <p className="text-sm mb-4">{bio}</p>}
      <div className="w-full text-left">
        {country && <p className="text-sm">Ülke: {country}</p>}
        {investments && investments.length > 0 && (
          <div>
            <p className="text-sm">Yatırımlar:</p>
            <ul className="text-sm list-disc pl-5">
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
