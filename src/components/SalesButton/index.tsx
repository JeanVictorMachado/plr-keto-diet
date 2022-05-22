import "./styles.css";

interface SalesButtonProps {
  textButton: string;
}

export const SalesButton = ({ textButton }: SalesButtonProps) => {
  return (
    <div className="sales-button__container">
      <span className="sales-button__price">
        12x de R$9,90 ou à vista R$97,00
      </span>

      <button className="sales-button__button">{textButton}</button>

      <div className="sales-button__flags-cards-container">
        <div className="sales-button__flags-cards">
          <img
            src="mastercard-logo.png"
            alt="Logo master card"
            style={{
              width: "95%",
              height: "95%",
            }}
          />
        </div>
        <div className="sales-button__flags-cards">
          <img
            src="visa-logo.png"
            alt="Logo Visa card"
            style={{
              width: "100%",
              height: "65%",
            }}
          />
        </div>
        <div className="sales-button__flags-cards">
          <img
            src="elo-logo.png"
            alt="Logo Elo card"
            style={{
              width: "100%",
              height: "70%",
            }}
          />
        </div>
        <div className="sales-button__flags-cards">
          <img
            src="diners-logo.png"
            alt="Logo Diners card"
            style={{
              width: "80%",
              height: "90%",
            }}
          />
        </div>
        <div className="sales-button__flags-cards">
          <img
            src="hipercard-logo.png"
            alt="Logo Hipercard card"
            style={{
              width: "90%",
              height: "90%",
            }}
          />
        </div>
        <div className="sales-button__flags-cards">
          <img
            src="pix-logo.png"
            alt="Logo Pix card"
            style={{
              width: "95%",
              height: "60%",
            }}
          />
        </div>
        <div className="sales-button__flags-cards">
          <img
            src="boleto-logo.png"
            alt="Logo Boleto card"
            style={{
              width: "90%",
              height: "90%",
            }}
          />
        </div>
      </div>

      <div className="sales-button__security-page">
        <img
          src="checkout-image.webp"
          alt="Imagem  de segurança da página"
          style={{
            width: "100%",
          }}
        />
      </div>
    </div>
  );
};