export default function ComicCard({ comic }) {
  return (
    <div className="comic-card">
      <div className="thumb-wrapper">
        <img src={comic.thumb} alt={comic.title} />
      </div>

      <h3 className="comic-title">{comic.series}</h3>
    </div>
  );
}