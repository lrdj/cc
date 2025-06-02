const regionData = {
  "east-asia": {
    title: "East Asia",
    content: `
      <ul>
        <li>Chinese developments in chemistry (e.g. gunpowder), mathematics, medicine, paper, printing.</li>
        <li>Korean innovations like movable metal type.</li>
        <li>Japanese metallurgy and optics.</li>
      </ul>
    `
  },
  "north-east-africa": {
    title: "North & East Africa",
    content: `
      <ul>
        <li>Ancient Egyptian mathematics and medicine.</li>
        <li>Islamic Golden Age contributions from scholars in Cairo and Timbuktu.</li>
        <li>North African algebra, astronomy, and medicine via scholars like Ibn al-Haytham.</li>
      </ul>
    `
  },
  "south-asia": {
    title: "South Asia",
    content: `
      <ul>
        <li>Indian advances in zero, calculus, astronomy, metallurgy (e.g. the iron pillar of Delhi).</li>
        <li>Ayurvedic medicine.</li>
      </ul>
    `
  },
  "mesoamerica": {
    title: "Mesoamerica & the Andes",
    content: `
      <ul>
        <li>Maya and Aztec calendrical systems, astronomy, and architecture.</li>
        <li>Incan engineering and agriculture (e.g. terraces, aqueducts).</li>
      </ul>
    `
  },
  "polynesia": {
    title: "Polynesia & the Pacific",
    content: `
      <ul>
        <li>Navigational science using ocean swells, birds, and stars — all without instruments.</li>
      </ul>
    `
  },
  "europe": {
    title: "Europe",
    content: `
      <ul>
        <li>Greek philosophy and geometry.</li>
        <li>Enlightenment-era mechanics, optics, and later industrial innovations (e.g. the steam engine).</li>
      </ul>
    `
  },
  "middle-east": {
    title: "Middle East / Persia",
    content: `
      <ul>
        <li>Advances in algebra, optics, engineering, and medicine during the Abbasid Caliphate.</li>
      </ul>
    `
  }
};

function openModal(regionKey) {
  const modal = document.getElementById('modal');
  const contentDiv = document.getElementById('modal-content');
  const data = regionData[regionKey];
  contentDiv.innerHTML = `<h2>${data.title}</h2>${data.content}`;
  modal.classList.remove('hidden');
}

function closeModal() {
  document.getElementById('modal').classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.region').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.getAttribute('data-region')));
  });
  document.getElementById('modal-close').addEventListener('click', () => closeModal());
  document.getElementById('modal').addEventListener('click', e => {
    if (e.target === document.getElementById('modal')) {
      closeModal();
    }
  });
});