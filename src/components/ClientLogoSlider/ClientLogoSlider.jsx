import "./ClientLogoSlider.scss";
import apporto from "../../assets/logos/apporto.png";
import automynd from "../../assets/logos/automynd.png";
import datagain from "../../assets/logos/datagain.png";
import docsink from "../../assets/logos/docsink.png";
import omni from "../../assets/logos/omni.png";
import portqii from "../../assets/logos/portqii.png";
import randomtrees from "../../assets/logos/randomtrees.png";
import serviceup from "../../assets/logos/serviceup.png";
import udemy from "../../assets/logos/udemy.png";
const LOGOS = [
  { name: "Portqii", src: portqii },
  { name: "Apporto", src: apporto },
  { name: "Udemy", src: udemy },
  { name: "Omni", src: omni },
  { name: "AutoMynd", src: automynd },
  { name: "Datagain", src: datagain },
  { name: "RandomTrees", src: randomtrees },
  { name: "ServiceUp", src: serviceup },
  { name: "DocsInk", src: docsink }
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
