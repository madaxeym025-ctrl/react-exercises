import React, { useState } from 'react';

function Levels({ lesson }) {
  // 1. Samee state lagu kaydiyo qoraalka la raadinayo (search term)
  const [searchTerm, setSearchTerm] = useState("");

  // 2. Sifeey casharada iyadoo la eegayo qoraalka ku jira 'searchTerm'
  const filteredLessons = lesson ? lesson.filter((item) => {
    // Waxay hubinaysaa in magaca casharku uu ka kooban yahay xarfaha la raadinayo (iyadoo laga dhigayo lowercase)
    return item.lesson.toLowerCase().includes(searchTerm.toLowerCase());
  }) : [];

  return (
    <>
      <div>
        {/* preventDefault() wuxuu celinayaa in page-ku refresh garoobo marka form-ka la submit gareeyo */}
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="search"
            placeholder="Search lessons..."
            value={searchTerm} // Ku xidh state-ka
            onChange={(e) => setSearchTerm(e.target.value)} // Cusboonaysii state-ka marka wax la qorayo
            className="border p-3 m-10 w-100 h-1- rounded" // Waxaad ku dari kartaa Tailwind si uu u qurxonaado
          />
        </form>
      </div>

      <h1 className="py-10 text-4xl text-bold">level one</h1>
      
      <div className="grid grid-cols-2">
        {/* 3. Halkii aad ka map-gareyn lahayd 'lesson', hadda sifeey 'filteredLessons' */}
        {filteredLessons.map((item, index) => {
          return (
            <div key={index}>
              <video className="w-80 h-50" controls src={item.videoUrl}></video>
              <h1>{item.lesson}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Levels;