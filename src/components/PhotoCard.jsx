export function PhotoCard({ photo }) {
  return (
    <article className="photo-card">
      <img src={photo.src} alt={photo.alt} loading="lazy" />
      <div className="photo-card-copy">
        <h3>{photo.title}</h3>
        <p>{photo.caption}</p>
      </div>
    </article>
  );
}
