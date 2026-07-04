export function QrCode() {
  return (
    <section className="qrcode-page">
      <div className="section-inner qrcode-layout">
        <div className="qrcode-copy reveal-up">
          <p className="figma-kicker">Acesso rápido</p>
          <h1>QR Code</h1>
          <p>Escaneie para abrir esta lembrança da formatura direto no celular.</p>
          <a className="gallery-cta" href="/fotos">
            Ver fotos
          </a>
        </div>

        <figure className="qrcode-display reveal-up">
          <img src="/qrcode.svg" alt="QR Code para acessar o site da formatura" />
          <figcaption>Letícia Rocumback França</figcaption>
        </figure>
      </div>
    </section>
  );
}
