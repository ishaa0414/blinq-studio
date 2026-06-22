export default function WhatsAppButton() {
  return (
    <>
      <style>{`
        .wa-btn {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9998;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #25D366;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 20px rgba(37,211,102,0.4);
          text-decoration: none;
          transition: transform 0.25s cubic-bezier(0.22,1,0.36,1), box-shadow 0.25s ease;
        }
        .wa-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 28px rgba(37,211,102,0.55);
        }
        @media (max-width: 768px) {
          .wa-btn { bottom: 20px; right: 16px; width: 50px; height: 50px; }
        }
      `}</style>

      <a
        href="https://wa.me/916205851500"
        target="_blank"
        rel="noopener noreferrer"
        className="wa-btn"
        aria-label="Chat on WhatsApp"
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14 2C7.373 2 2 7.373 2 14c0 2.144.563 4.155 1.545 5.9L2 26l6.291-1.52A11.94 11.94 0 0014 26c6.627 0 12-5.373 12-12S20.627 2 14 2z"
            fill="white"
          />
          <path
            d="M20.52 17.16c-.27-.135-1.6-.79-1.848-.88-.248-.09-.428-.135-.608.135-.18.27-.698.88-.856 1.06-.158.18-.315.2-.585.068-.27-.136-1.14-.42-2.172-1.34-.803-.716-1.345-1.6-1.503-1.87-.158-.27-.017-.416.118-.55.122-.12.27-.315.405-.472.135-.158.18-.27.27-.45.09-.18.045-.338-.022-.472-.068-.135-.608-1.463-.833-2.003-.22-.527-.443-.455-.608-.464l-.518-.009c-.18 0-.472.068-.72.338-.247.27-.945.923-.945 2.252 0 1.328.967 2.612 1.102 2.792.135.18 1.903 2.903 4.612 4.072.645.278 1.148.444 1.54.568.647.205 1.237.176 1.703.107.52-.077 1.6-.654 1.825-1.286.225-.63.225-1.17.158-1.283-.068-.112-.248-.18-.518-.315z"
            fill="#25D366"
          />
        </svg>
      </a>
    </>
  );
}
