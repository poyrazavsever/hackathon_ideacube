import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    // Örnek geliştirici verisi
    const sampleMembers = [
      { 
        id: 1, 
        name: "Ahmet Arslan", 
        profilePic: "images/poyraz.jpg", 
        isFeatured: true, 
        role: "Full Stack Developer",
        bio: "10 yılı aşkın yazılım geliştirme deneyimi.",
        country: "Türkiye",
        skills: ["JavaScript", "React", "Node.js", "Express"]
      },
      { 
        id: 2, 
        name: "Merve Yıldız", 
        profilePic: "images/poyraz.jpg", 
        isFeatured: true, 
        role: "Frontend Developer",
        bio: "UI/UX tasarımı ve ReactJS üzerine uzmanlık.",
        country: "Türkiye",
        skills: ["React", "CSS", "HTML", "Figma"]
      },
      { 
        id: 3, 
        name: "Emre Kılıç", 
        profilePic: "images/poyraz.jpg", 
        isFeatured: false, 
        role: "Backend Developer",
        bio: "Veritabanı yönetimi ve API geliştirme üzerine 5 yıl tecrübe.",
        country: "Türkiye",
        skills: ["Node.js", "MongoDB", "GraphQL"]
      },
      { 
        id: 4, 
        name: "Zeynep Can", 
        profilePic: "images/poyraz.jpg", 
        isFeatured: false, 
        role: "DevOps Engineer",
        bio: "CI/CD süreçlerinde uzman, bulut bilişim ve Docker kullanımı.",
        country: "Türkiye",
        skills: ["AWS", "Docker", "Kubernetes"]
      },
      { 
        id: 5, 
        name: "Baran Güngör", 
        profilePic: "images/poyraz.jpg", 
        isFeatured: false, 
        role: "Mobile Developer",
        bio: "Android ve iOS uygulama geliştirme konusunda uzman.",
        country: "Türkiye",
        skills: ["Swift", "Kotlin", "React Native"]
      }
    ];

    setTeamMembers(sampleMembers);
  }, []);

  // Öne çıkan geliştiriciler
  const featuredMembers = teamMembers.filter(member => member.isFeatured);

  // Tüm geliştiriciler
  const otherMembers = teamMembers.filter(member => !member.isFeatured);

  return (
    <div className="container mx-auto p-6 py-12 md:py-24">
      {/* Öne Çıkan Geliştiriciler */}
      <h1 className="text-2xl font-bold mb-12">Öne Çıkan Geliştiriciler</h1>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {featuredMembers.map((member) => (
          <div 
            key={member.id} 
            className={`shadow-md rounded-lg p-6 flex flex-col items-center text-center ${member.isFeatured ? "bg-primary text-white" : "bg-white"}`}
          >
            <img src={member.profilePic} alt={member.name} className="w-32 h-32 rounded-full mb-4" />
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-lg mb-2">{member.role}</p>
            {member.bio && <p className="text-sm mb-4">{member.bio}</p>}
            <div className="w-full text-left">
              <p className="text-sm">Ülke: {member.country}</p>
              {member.skills && (
                <div>
                  <p className="text-sm">Yetenekler:</p>
                  <ul className="text-sm list-disc pl-5">
                    {member.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Diğer Geliştiriciler */}
      <h1 className="text-2xl font-bold my-12">Diğer Geliştiriciler</h1>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {otherMembers.map((member) => (
          <div 
            key={member.id} 
            className="shadow-md rounded-lg p-6 flex flex-col items-center text-center bg-white"
          >
            <img src={member.profilePic} alt={member.name} className="w-32 h-32 rounded-full mb-4" />
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-lg mb-2">{member.role}</p>
            {member.bio && <p className="text-sm mb-4">{member.bio}</p>}
            <div className="w-full text-left">
              <p className="text-sm">Ülke: {member.country}</p>
              {member.skills && (
                <div>
                  <p className="text-sm">Yetenekler:</p>
                  <ul className="text-sm list-disc pl-5">
                    {member.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TeamMembers;
