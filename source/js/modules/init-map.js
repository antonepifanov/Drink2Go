import L from "leaflet";

const map = L.map("map").setView({
  lat: 59.968229,
  lng: 30.316438,
}, 17);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',},
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: "./img/pin-icon.svg",
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const marker = L.marker(
  {
    lat: 59.968229,
    lng: 30.316438,
  },
  {
    icon: mainPinIcon,
  },
);

marker.addTo(map);
map.scrollWheelZoom.disable();
