import React, { useState } from 'react';
import './Banner.css';

interface Video {
  title: string;
  url: string;
  channel: string;
  thumbnail?: string;
}

const Banner: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Video[]>([]);

  const handleSearch = () => {
    if (!query.trim()) return;

    fetch(`https://music-langchain-ebbd399f0b6a.herokuapp.com/search?q=${encodeURIComponent(query)}`)
      .then((res) => res.json())
      .then((data) => {
        console.log('🎶 Resultado:', data);
        setResults(data.results || []);
      })
      .catch((err) => {
        console.error('Erro ao buscar:', err);
        setResults([]);
      });
  };

  return (
    <div className="banner bg-dark text-white py-5">
      <div className="container">
        <h1 className="fw-bold text-center mb-4">Busque sua música favorita</h1>
        <div className="input-group mb-4 justify-content-center">
          <input
            type="text"
            className="form-control w-50"
            placeholder="Digite aqui sua busca..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          />
          <button className="btn btn-primary" onClick={handleSearch}>
            Buscar
          </button>
        </div>

        {results.length > 0 && (
          <>
            <h3 className="text-white mb-4">Resultados encontrados:</h3>
            <div className="row g-4">
              {results.map((video, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="card h-100 shadow-sm">
                    {video.thumbnail && (
                      <img src={video.thumbnail} className="card-img-top" alt={video.title} />
                    )}
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{video.title}</h5>
                      <p className="card-text text-muted">Canal: <strong>{video.channel}</strong></p>
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary mt-auto"
                      >
                        Assistir no YouTube
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Banner;
