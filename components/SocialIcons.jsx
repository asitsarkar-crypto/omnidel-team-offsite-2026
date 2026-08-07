const icons = {
  facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9c0-.6.4-1 1-1z"
      />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 4.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 2A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5zm5.2-3.4a1.05 1.05 0 1 0 1.05 1.05 1.05 1.05 0 0 0-1.05-1.05z"
      />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M23 12.2s0-3.2-.4-4.7c-.2-.9-.9-1.6-1.8-1.8C18.4 5.2 12 5.2 12 5.2s-6.4 0-8.8.5c-.9.2-1.6.9-1.8 1.8C1 9 1 12.2 1 12.2s0 3.2.4 4.7c.2.9.9 1.6 1.8 1.8 2.4.5 8.8.5 8.8.5s6.4 0 8.8-.5c.9-.2 1.6-.9 1.8-1.8.4-1.5.4-4.7.4-4.7zM9.8 15.5v-6.6l6.2 3.3-6.2 3.3z"
      />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M18.9 3H21l-6.5 7.4L22 21h-6.2l-4.9-6.4L5.3 21H3.2l7-8L2 3h6.3l4.4 5.8L18.9 3zm-1.1 16.2h1.7L7.3 4.7H5.5l12.3 14.5z"
      />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M6.3 9.3H3.5V21h2.8V9.3zM4.9 3A1.8 1.8 0 1 0 5 6.6 1.8 1.8 0 0 0 4.9 3zM21 21h-2.8v-6.2c0-1.7-.6-2.9-2.1-2.9-1.2 0-1.9.8-2.2 1.5-.1.3-.1.7-.1 1.1V21H11V9.3h2.7v1.6c.5-.8 1.5-2 3.7-2 2.7 0 4.6 1.8 4.6 5.5V21z"
      />
    </svg>
  ),
  web: (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm7.4 9h-3.1a15.3 15.3 0 0 0-1.3-5 8 8 0 0 1 4.4 5zM12 4a13.4 13.4 0 0 1 1.8 5H10.2A13.4 13.4 0 0 1 12 4zM4.6 13a8 8 0 0 1 0-2h3.1a15.3 15.3 0 0 0 .2 2H4.6zm3.3 2h2.5a13.4 13.4 0 0 1-1.8 5 8 8 0 0 1-.7-5zm2.5-2a15.3 15.3 0 0 1-.2-2h4.6a15.3 15.3 0 0 1-.2 2H10.4zm2.7 2h2.5a8 8 0 0 1-.7 5 13.4 13.4 0 0 1-1.8-5zm4.4 0a8 8 0 0 1-.7 5 13.4 13.4 0 0 0 1.8-5h-1.1zm1.1-2h3.1a8 8 0 0 0-4.4-5 15.3 15.3 0 0 1 1.3 5zM8.5 6a15.3 15.3 0 0 0-1.3 5H4.1a8 8 0 0 1 4.4-5z"
      />
    </svg>
  ),
};

export default function SocialIcons({ items, className = '' }) {
  return (
    <ul className={`social-icons ${className}`.trim()}>
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${item.label}${item.handle ? ` (${item.handle})` : ''}`}
            title={item.label}
            className={`social-icon-link social-${item.id}`}
          >
            {icons[item.id] || icons.web}
            <span className="sr-only">{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
