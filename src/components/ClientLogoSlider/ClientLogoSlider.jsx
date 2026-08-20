import "./ClientLogoSlider.scss";
import automynd from "../../assets/logos/automynd.png";
import omni from "../../assets/logos/omni.png";
import portqii from "../../assets/logos/portqii.png";
import serviceup from "../../assets/logos/serviceup.png";
import Takeoff41 from "../../assets/logos/TakeoffA1.webp"
import TukaTek from "../../assets/logos/TukaTek.webp"

const LOGOS = [
  { name: "Portqii", src: portqii },
  { name: "Omni", src: omni },
  { name: "AutoMynd", src: automynd },
  { name: "ServiceUp", src: serviceup },
  { name: "Takeoff41", src: Takeoff41 },
  { name: "TukaTek", src: TukaTek }

];
function ClientLogoSlider() {
  const items = [...LOGOS, ...LOGOS];
  return <div className="logos__viewport" aria-label="Clients and partners">
      <div className="logos__track">
        {items.map((logo, i) => <div className="logos__card" key={`${logo.name}-${i}`} aria-hidden={i >= LOGOS.length}>
            <img
    className="logos__img"
    src={logo.src}
    alt={i < LOGOS.length ? `${logo.name} logo` : ""}
    loading="lazy"
    draggable={false}
  />
          </div>)}
      </div>
    </div>;
}
export {
  ClientLogoSlider as default
};
