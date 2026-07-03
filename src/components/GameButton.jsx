export function GameButton({ children, className = '', ...props }) {
  return (
    <button className={`game-button ${className}`} type="button" {...props}>
      {children}
    </button>
  );
}
