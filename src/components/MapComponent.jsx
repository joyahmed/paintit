import { useScroll } from "@/src/components/useScroll";
import { m } from "framer-motion";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { grow } from "../utils/Animations";

export default function Map() {
  const [element, controls] = useScroll();
  return (
    <m.div
      ref={element}
      initial="hidden"
      variants={grow}
      animate={controls}
      className="w-site z-[1] mb-20 flex h-auto items-center justify-center overflow-hidden rounded-lg bg-gray-900 shadow-xl"
    >
      <MapContainer
        center={[45.411258, -75.698139]}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[45.411258, -75.698139]}>
          {/* <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup> */}
        </Marker>
      </MapContainer>
    </m.div>
  );
}
