window.onload = () => {
  let places = staticLoadPlaces();
  renderPlaces(places);
};

function staticLoadPlaces() {
  return [
    {
      name: 'Magnemite',
      location: {
        lat: 41.610895,
        lng: 0.634365,
      }
    },
    {
      name: 'Toy',
      location: {
        lat: 41.617300,
        lng: 0.630431,
      }
    },
  ];
}

function renderPlaces(places) {
  let scene = document.querySelector('a-scene');

  places.forEach((place) => {
    let latitude = place.location.lat;
    let longitude = place.location.lng;

    let model = document.createElement('a-entity');
    model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
    model.setAttribute('gltf-model', './assets/plush_toy/scene.gltf');
    model.setAttribute('rotation', '0 0 0');
    model.setAttribute('look-at', '[gps-camera]');
    model.setAttribute('animation-mixer', '');
    model.setAttribute('scale', '1 1 1');

    model.addEventListener('loaded', () => {
      window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
    });

    scene.appendChild(model);
  });
}
