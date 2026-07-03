import { PhotoCard } from './PhotoCard.jsx';

export function PhotoGrid({ photos, compact = false }) {
  return (
    <div className={compact ? 'photo-grid photo-grid-compact' : 'photo-grid'}>
      {photos.map((photo) => (
        <PhotoCard key={`${photo.title}-${photo.src}`} photo={photo} />
      ))}
    </div>
  );
}
