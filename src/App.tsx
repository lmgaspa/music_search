import VideoCard from './components/VideoCard';

{/* Dentro do return, crie a nova seção */}
<section className="section text-center py-4">
  <h2>Vídeos Recomendados</h2>
  <div className="container mt-4">
    <div className="row">
      <div className="col-md-4">
        <VideoCard
          title="MARKETING DIGITAL E FACÇÕES CRIMINOSAS"
          author="Raiam Santos McArn"
          views="36 mil visualizações"
          time="há 1 dia"
          thumbnail="https://img.youtube.com/vi/VIDEO_ID_1/hqdefault.jpg"
        />
      </div>
      <div className="col-md-4">
        <VideoCard
          title="MEU TRABALHO NA DISNEY ERA MENTIRA?"
          author="Jovem Tranquilão"
          views="349 visualizações"
          time="há 23 minutos"
          thumbnail="https://img.youtube.com/vi/VIDEO_ID_2/hqdefault.jpg"
        />
      </div>
      <div className="col-md-4">
        <VideoCard
          title="NOTÍCIAS E POLÊMICAS DA BOLHA TECH"
          author="mano deyvin"
          views="1,8 mil assistindo"
          time="ao vivo"
          thumbnail="https://img.youtube.com/vi/VIDEO_ID_3/hqdefault.jpg"
        />
      </div>
    </div>
  </div>
</section>
