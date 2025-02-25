import React from 'react';

const TopList = () => {
  const participants = [
    {
      name: 'Ahmet Arslan',
      position: 'Full Stack Developer',
      country: 'Türkiye',
      bio: '10 yılı aşkın yazılım geliştirme deneyimi.',
    },
    {
      name: 'Merve Yıldız',
      position: 'Frontend Developer',
      country: 'Türkiye',
      bio: 'UI/UX tasarımı ve ReactJS üzerine uzmanlık.',
    },
    {
      name: 'Emre Kılıç',
      position: 'Backend Developer',
      country: 'Türkiye',
      bio: 'Veritabanı yönetimi ve API geliştirme üzerine 5 yıl tecrübe.',
    },
    {
      name: 'Zeynep Can',
      position: 'DevOps Engineer',
      country: 'Türkiye',
      bio: 'CI/CD süreçlerinde uzman, bulut bilişim ve Docker kullanımı.',
    },
    {
      name: 'Baran Güngör',
      position: 'Mobile Developer',
      country: 'Türkiye',
      bio: 'Android ve iOS uygulama geliştirme konusunda uzman.',
    },
  ];

  return (
    <div className="container mx-auto p-6 py-12 md:py-24">
      <h1 className="text-3xl font-bold mb-8 text-black">Katılımcı Listesi</h1>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-primary text-white">
            <th className="p-4">#</th>
            <th className="p-4">Ad</th>
            <th className="p-4">Pozisyon</th>
            <th className="p-4">Ülke</th>
            <th className="p-4">Biyografi</th>
          </tr>
        </thead>
        <tbody>
          {participants.map((participant, index) => (
            <tr
              key={index}
              className={`border-b ${index % 2 === 0 ? 'bg-secondary' : 'bg-white'} hover:bg-primary hover:text-white transition-all`}
            >
              <td className="p-4">{index + 1}</td>
              <td className="p-4">{participant.name}</td>
              <td className="p-4">{participant.position}</td>
              <td className="p-4">{participant.country}</td>
              <td className="p-4">{participant.bio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopList;
