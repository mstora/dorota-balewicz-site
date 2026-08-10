// ===== Data =====
const LOGOS = [
  { name: "VOX", src: "assets/vox-logo.png" },
  { name: "Boomplastic", src: "assets/boomplastic-logo.png" },
  { name: "L'Oréal", src: "assets/loreal-logo-v2.png" },
  { name: "NAJ Design", src: "assets/naj-design-logo.png" },
  { name: "Havas", src: "assets/havas-logo.png" },
  { name: "OpenUp", src: "assets/openup-logo.png" },
  { name: "Prawda", src: "assets/prawda-logo.svg" },
];

const PROJECTS = [
  {
    name: "Lampa Madonna", meta: "Boomplastic, 2024", client: "Boomplastic", year: "2024",
    tags: ["recykling", "oświetlenie", "Boomplastic"], cat: "Produkt",
    featured: true,
    description: "Lampa wykonana z ręcznie formowanego oraz toczonego materiału z plastiku z recyklingu. Oprawę stanowią dwa krążki wykonane również z tworzywa postkonsumenckiego. Nigdy nie będzie dwóch takich samych egzemplarzy — każdy element jest unikatowy i jedyny w swoim rodzaju.",
    photos: [
      { src: "assets/madonna-01.jpg", label: "Lampa Madonna 01" },
      { src: "assets/madonna-02.jpg", label: "Lampa Madonna 02" },
      { src: "assets/madonna-03.png", label: "Lampa Madonna 03" },
    ],
  },
  {
    name: "Masuria", meta: "NAJ Design / Boomplastic, 2021", client: "NAJ Design + Boomplastic", year: "2021",
    tags: ["recykling", "przestrzeń publiczna", "nagroda", "Milan Design Week"], cat: "Produkt",
    featured: false,
    description: "Projekt materiału oraz ławki do przestrzeni publicznych. MASURIA to całościowe opracowanie obejmujące pełny proces projektowy — od koncepcji i stworzenia innowacyjnego materiału po finalny produkt. Projekt odpowiada na problem zagospodarowania odpadów w postaci sznurków tworzywowych wykorzystywanych w rolnictwie. Wyróżnienie w światowym konkursie RoGuiltless Plastic 2021. Pokazany podczas Milan Design Week 2021 oraz w Muzeum w Doha w Katarze.",
    photos: [
      { src: "assets/masuria-01.jpg", label: "Masuria 01" },
      { src: "assets/masuria-02.jpg", label: "Masuria 02" },
      { src: "assets/masuria-03.jpg", label: "Masuria 03" },
      { src: "assets/masuria-04.jpg", label: "Masuria — detal materiału" },
    ],
  },
  {
    name: "Kolekcja Soform", meta: "VOX, 2022", client: "VOX", year: "2022",
    tags: ["akustyka", "panele ścienne", "VOX", "kolekcja"], cat: "Produkt",
    featured: true,
    description: "Projekt kolekcji modułowych paneli ściennych, które łączą funkcję dekoracyjną z właściwościami akustycznymi. Panele zaprojektowano jako samodzielne elementy aranżacyjne, dostępne w gotowych zestawach umożliwiających łatwe komponowanie spójnych układów. Uzupełnieniem kolekcji są ozdobne listwy o dodatkowej funkcjonalności — pozwalające na ekspozycję zdjęć, zawieszenie rośliny lub probówki z olejkiem zapachowym.",
    photos: [
      { src: "assets/soform-01.jpg", label: "Soform 01" },
      { src: "assets/soform-02.jpg", label: "Soform 02" },
      { src: "assets/soform-03.jpg", label: "Soform 03" },
      { src: "assets/soform-04.jpg", label: "Soform 04" },
      { src: "assets/soform-05.jpg", label: "Soform 05" },
    ],
  },
  {
    name: "Night in Paris", meta: "NAJ Design, 2023", client: "NAJ Design", year: "2023",
    tags: ["trofea", "L'Oréal", "NAJ Design", "rzemiosło"], cat: "Trofea",
    description: "Statuetki inspirowane Paryżem – miastem, w którym odbywają się finały konkursu Brandstorm. Grafika została wygrawerowana na kilku warstwach przezroczystego materiału, tworząc przestrzenną kompozycję. Podświetlenie wydobywa wygrawerowane linie i wzmacnia trójwymiarowy efekt. Bazę statuetki wykonano z plastiku pochodzącego z recyklingu.",
    photos: [
      { src: "assets/trofea-01.jpg", label: "Trofea L'Oréal Brandstorm 2023" },
      { src: "assets/night in paris.jpeg", label: "Trofea L'Oréal Brandstorm 2023" }
    ],
  },
  {
    name: "Chmurnik", meta: "własny, 2019", client: "Projekt własny", year: "2019",
    tags: ["tkactwo", "Dutch Design Week", "tradycja", "rzemiosło"], cat: "Produkt",
    featured: false,
    description: "Chmurnik to współczesna reinterpretacja tkactwa: mebel, którego forma jest jednocześnie krosnem. Rama siedziska służy jako osnowa, na której tka się tkaninę; to ona, nie konstrukcja, gra główną rolę. Projekt wyrasta z troski o zanikające rzemiosło i osobistej więzi z północno-wschodnią Polską: regionem bogatym w dziedzictwo tkackie, które rzadko trafia do szerszego obiegu. Chmurnik jest próbą nadania tej wartości współczesnej formy.",
    photos: [
      { src: "assets/chmurnik-01.jpg", label: "Chmurnik 01" },
      { src: "assets/chmurnik-02.jpg", label: "Chmurnik 02" },
      { src: "assets/chmurnik-03.jpg", label: "Chmurnik — Dutch Design Week" },
      { src: "assets/chmurnik-04.jpg", label: "Chmurnik — making of" },
      { src: "assets/chmurnik-05.jpg", label: "Chmurnik — making of 2" },
    ],
  },
  {
    name: "Nadczułość", meta: "własny, 2021", client: "Projekt własny", year: "2021",
    tags: ["inkluzywność", "neuroróżnorodność", "biżuteria"], cat: "Produkt",
    featured: false,
    description: "Biżuteria dla osób z potrzebą stymulacji ruchowej dłoni (stimming). Stimming (czyli zachowania autostymulacyjne) pomaga osobom neuroróżnorodnym regulować układ nerwowy. Może służyć obniżeniu stresu, radzeniu sobie z nadmiarem bodźców, poprawie koncentracji albo wyrażaniu emocji, takich jak radość czy ekscytacja. Dzięki stimmingowi ciało i mózg łatwiej wracają do poczucia równowagi.",
    photos: [
      { src: "assets/nadczulosc-01.jpg", label: "Nadczułość — bransoleta" },
      { src: "assets/nadczulosc-02.jpg", label: "Nadczułość — kolczyk" },
      { src: "assets/nadczulosc-03.jpg", label: "Nadczułość — pierścień" },
    ],
  },
  {
    name: "Panele elewacyjne Fronto", meta: "VOX, 2022", client: "VOX", year: "2022",
    tags: ["elewacja", "panele", "VOX"], cat: "Produkt",
    featured: false,
    description: "Panel oraz kolekcje dekorów. Odpowiednie opracowanie profilu umożliwia montaż zarówno w układzie pionowym jak i poziomym. Dodatkowo można go łączyć z innymi panelami elewacyjnymi VOX lub tworzyć harmonijne przejścia między różnymi płaszczyznami takimi jak ściana i sufit.",
    photos: [
      { src: "assets/fronto-01.jpg", label: "Fronto — realizacja elewacji" },
      { src: "assets/fronto-02.webp", label: "Fronto — panel" },
      { src: "assets/fronto-03.jpg", label: "Fronto — dąb winchester" },
      { src: "assets/fronto-04.jpg", label: "Fronto — dąb miodowy" },
    ],
  },
  {
    name: "Stolik Beetlejuice", meta: "Boomplastic, 2024", client: "Boomplastic", year: "2024",
    tags: ["recykling", "meble", "tworzywo postkonsumenckie"], cat: "Produkt",
    featured: true,
    description: "Konstrukcja stolika umożliwia wysyłkę w formie flatpack oraz proste składanie przez indywidualnego użytkownika. Wykonany z płyty w 100% z recyklingu postkonsumenckiego.",
    photos: [
      { src: "assets/beetlejuice-01.jpeg", label: "Beetlejuice — stolik" },
      { src: "assets/beetlejuice-02.jpeg", label: "Beetlejuice — detal" },
      { src: "assets/beetlejuice-03.jpg", label: "Beetlejuice — widok z góry" },
    ],
  },
  {
    name: "Materiał ze sznurków rolniczych Masuria", meta: "NAJ Design / Boomplastic, 2021",
    client: "NAJ Design + Boomplastic", year: "2021",
    tags: ["recykling", "materiał", "tworzywa postkonsumenckie"], cat: "Materiały",
    featured: true,
    description: "Autorski materiał opracowany z odpadowych sznurków rolniczych z tworzyw sztucznych. Powstał w odpowiedzi na problem zagospodarowania trudnego do recyklingu odpadu z rolnictwa. Materiał posłużył jako baza do realizacji ławki MASURIA prezentowanej podczas Milan Design Week 2021 oraz w Muzeum w Doha w Katarze.",
    photos: [
      { src: "assets/masuria-mat-01.jpg", label: "Masuria — detal materiału" },
      { src: "assets/masuria-mat-02.jpeg", label: "Masuria — Guiltless Plastic" },
    ],
  },
  {
    name: "Materiały Boomplastic", meta: "Boomplastic, 2024", client: "Boomplastic", year: "2024",
    tags: ["recykling", "tworzywa postkonsumenckie", "Boomplastic"], cat: "Materiały",
    featured: false,
    description: "Rozwój i opracowywanie autorskich kompozycji materiałowych z tworzyw postkonsumenckich. Praca obejmuje dobór surowców, testy technologiczne oraz tworzenie palet kolorystycznych dla produktów Boomplastic.",
    photos: [
      { src: "assets/boomplastic-mat-01.jpeg", label: "Boomplastic — materiał brązowy" },
      { src: "assets/boomplastic-mat-02.jpeg", label: "Boomplastic — detal biały z kolorami" },
      { src: "assets/boomplastic-mat-03.jpeg", label: "Boomplastic — panele niebieskie we wnętrzu" },
      { src: "assets/boomplastic-mat-04.jpeg", label: "Boomplastic — detal niebiesko-biały" },
      { src: "assets/boomplastic-mat-05.jpeg", label: "Boomplastic — panel niebieski" },
      { src: "assets/boomplastic-mat-06.jpeg", label: "Boomplastic — panel czarno-biały" },
    ],
  },
  {
    name: "Statuetki 4Youth", meta: "L'Oréal Groupe, 2025", client: "L'Oréal", year: "2025",
    tags: ["recykling", "tworzywa postkonsumenckie", "trofeum", "NAJ design"], cat: "Trofea",
    featured: false,
    description: "Forma statuetki wycięta w całości z tworzywa pochodzącego z recyklingu. Nietypowy dla statuetek materiał podkreśla innowacyjny charakter konkursu oraz odwagę w poszukiwaniu nowych rozwiązań. ",
    photos: [
      { src: "assets/4you-naj-design.jpg", label: "4Youth" }
    ],
  },
  {
    name: "Big City Life", meta: "L'Oréal Groupe, 2020", client: "L'Oréal Groupe", year: "2020",
    tags: ["Brandstorm", "recykling", "Paryż", "NAJ Design"], cat: "Trofea",
    featured: true,
    description: "Seria unikatowych statuetek tworzących panoramę Paryża. Każdy z laureatów otrzymał własny fragment miasta, a wszystkie trofea ustawione razem odtwarzały charakterystyczną linię paryskiej zabudowy. Połączenie drewna z tworzywem pochodzącym z recyklingu odpadów produkcyjnych podkreśla dialog między nowoczesnym projektowaniem a tradycyjnym rzemiosłem.",
    photos: [
      { src: "assets/big-city-life-naj-design-dorota-balewicz-2.jpeg", label: "Big City Life — NAJ Design" },
      { src: "assets/big-city-life-naj-design-dorota-balewicz.jpeg", label: "Big City Life — NAJ Design" },
      { src: "assets/loreal_recykling_dorota-balewicz_naj-design.jpeg", label: "Big City Life — NAJ Design" },
      { src: "assets/trofea-04.jpg", label: "Big City Life — NAJ Design" },
    ],
  },
  {
    name: "Conquer the Peaks", meta: "L'Oréal Poland, 2019", client: "L'Oréal Poland", year: "2019",
    tags: ["statuetka", "brandstorm", "Poland&Baltic Hub", "NAJ Design"], cat: "Trofea",
    featured: false,
    description: "Zestaw eleganckich, unikatowych statuetek wykonanych z drewna i szkła. Każdy z laureatów otrzymał niepowtarzalny egzemplarz, a wszystkie trofea ustawione razem tworzyły spójną kompozycję nawiązującą do górskiego krajobrazu. Indywidualne wyróżnienia połączyły się w jedną symboliczną całość.",
    photos: [
      { src: "assets/poland_baltic_loreal_brandstorm_trophies.jpg", label: "Conquer the Peaks — NAJ Design" },
      { src: "assets/trofea-05.jpg", label: "Conquer the Peaks — NAJ Design" },
    ],
  },
  {
    name: "Go with the Flow", meta: "L'Oréal Groupe, 2026", client: "L'Oréal Groupe", year: "2025",
    tags: ["brandstorm", "statuetka", "interaktywność","NAJ Design"], cat: "Trofea",
    featured: true,
    description: "Oficjalne trofeum międzynarodowych finałów konkursu, rozwijane i odświeżane na przestrzeni kolejnych edycji. Forma inspirowana fryzjerstwem składa się z trzech łuków symbolizujących członków zwycięskiej drużyny. Zaprogramowane podświetlenie LED pozwala na wyświetlanie różnych kolorów i sekwencji świetlnych, a każda edycja zyskuje nową interpretację poprzez zmianę materiałów, kolorystyki i efektów świetlnych.",
    photos: [
      { src: "assets/go-with-the-flow.jpeg", label: "Go with the Flow — NAJ Design" },
      { src: "assets/loreal_flow_trophy.jpeg", label: "Go with the Flow — NAJ Design" },
      { src: "assets/dorota-balewicz-works-25.jpg", label: "Go with the Flow — NAJ Design" },
    ],
  },
  {
    name: "Terraformation", meta: "L'Oréal Groupe, 2022", client: "L'Oréal Groupe", year: "2022",
    tags: ["NAJ Design", "rzemiosło", "recykling", "statuetka"], cat: "Trofea",
    featured: false,
    description: "Kolekcja ręcznie wykonywanych statuetek powstających z połączenia metalu, betonu oraz elementów pochodzących z upcyclingu. W projektach wykorzystano odpady z plexi, szklane kulki z odzysku oraz autorskie kompozycje zatopione w żywicy epoksydowej. Każda z form jest unikatowa i pokazuje, jak materiały zyskują nowe życie w formie eleganckich trofeów. ",
    photos: [
      { src: "assets/cosmic_najdesign_loreal_handmade_trophy_waste_recycling_set_2-scaled.jpg", label: "Terraformation — NAJ Design" },
    ],
  },
  {
    name: "VHS", meta: "Ale Kino!, 2025", client: "Ale Kino!", year: "2025",
    tags: ["recykling", "statuetka", "boomplastic"], cat: "Trofea",
    featured: false,
    description: "Statuetka inspirowana kultową kasetą VHS, zaprojektowana jako współczesna interpretacja symbolu kina. Wykonana z tworzywa pochodzącego z recyklingu, łączy nostalgię z nowoczesnym podejściem do projektowania i odpowiedzialnym wykorzystaniem materiałów.",
    photos: [
      { src: "assets/vhs-ale-kino-dorota-balewicz.jpeg", label: "VHS — NAJ Design" },
    ],
  },
  {
    name: "With love from", meta: "2026", client: "", year: "2026",
    tags: ["statuetka", "ceramika", "NAJ Design"], cat: "Trofea",
    featured: false,
    description: "Pamiątkowa statuetka wykonana z ceramiki, metalu i szkła akrylowego. Centralnym elementem kompozycji jest ręcznie wykonane ceramiczne serce – symbol uznania, zaangażowania i wdzięczności za 10 lat pracy. ",
    photos: [
      { src: "assets/anniversary-trophy-bespoke-2.jpeg", label: "Work Anniversary" },
    ],
  },
  {
    name: "You are the Winner", meta: "L'Oréal Groupe, 2021", client: "L'Oréal Groupe", year: "2021",
    tags: ["statuetka", "neon", "NAJ Design"], cat: "Trofea",
    featured: false,
    description: "Statuetki wykorzystujące oryginalne szklane neony, osadzone w formie inspirowanej retro telewizorem. Połączenie charakterystycznego światła neonowego z nostalgiczną bryłą tworzy wyrazistą formę, nawiązującą do estetyki dawnych ekranów i kultury pop.",
    photos: [
      { src: "assets/2021_winner-trophies.jpg", label: "You are the Winner" },
    ],
  },
  {
    name: "Dekory", meta: "Projekty wzorów", client: "", year: "2019-2021",
    tags: ["tapety", "wzory cyfrowe", "pattern"], cat: "Wzory",
    featured: false,
    description: "Autorskie wzory projektowane z myślą o różnorodnych mediach i technologiach zadruku. Kompozycje powstają na bazie własnoręcznie tworzonych materiałów – fotografii, rysunków, kolaży i eksperymentów z fakturą.",
    photos: [
      { src: "assets/banana leaves-dorota-balewicz-small.jpeg", label: "Banana Leaves" },
      { src: "assets/konfetti-dorota balewicz.jpg", label: "Konfetti" },
      { src: "assets/liscie-dorota-balewicz.jpg", label: "Liście" },
    ],
  },
  {
    name: "Geometric Linen", meta: "VOX, 2020", client: "VOX", year: "2020",
    tags: ["tag", "tag", "tag"], cat: "Wzory",
    featured: true,
    description: "Wzór inspirowany tradycyjnym tkactwem oraz rytmem geometrycznych splotów. Powtarzalna kompozycja łączy rzemieślniczy charakter z nowoczesnym, minimalistycznym wyrazem. ",
    photos: [
      { src: "assets/vox_creative_04_1108_geometric_linen_2_kerradeco.jpg", label: "Geometric Linen" },
    ],
  },
  {
    name: "Geometric Wood", meta: "VOX, 2020", client: "VOX", year: "2020",
    tags: ["tag", "tag", "tag"], cat: "Wzory",
    featured: false,
    description: "Autorski wzór inspirowany tradycyjnym snycerstwem oraz śladami pozostawianymi przez narzędzia rzeźbiarskie w drewnie. ",
    photos: [
      { src: "assets/wzory_cyfrowe_geometric-wood_vox_dorota-balewicz.jpeg", label: "Geometric Wood" },
    ],
  },
  {
    name: "Typography", meta: "VOX, 2020", client: "VOX", year: "2020",
    tags: ["tag", "tag", "tag"], cat: "Wzory",
    featured: true,
    description: "Autorski wzór stworzony z wyciętych fragmentów liter i napisów pochodzących ze starych gazet. Kompozycja inspirowana estetyką retro, uzupełniona kolorystyką czerpanego papieru, nadaje dekorowi wyrazisty, analogowy charakter. ",
    photos: [
      { src: "assets/wzory_cyfrowe_geometric_typoghraphy_kerradeco_vox_dorota-balewicz.jpeg", label: "Typography" },
    ],
  },
  {
    name: "Wzory na panele elewacyjne", meta: "VOX, 2018-2021", client: "VOX", year: "",
    tags: ["elewacja", "wzory", "druk", "dekory"], cat: "Wzory",
    featured: false,
    description: "Projektowanie kolekcji dekorów oraz opracowywanie kierunków rozwoju wzornictwa dla produktów wykończeniowych. Doświadczenie w nadzorowaniu wdrożeń, projektowaniu walców odpowiedzialnych za tłoczenie struktur i nanoszenie nadruków oraz rozwijaniu innowacyjnych technologii zadruku. Połączenie projektowania wzorniczego z wiedzą o procesach produkcyjnych pozwala tworzyć rozwiązania gotowe do wdrożenia na skalę przemysłową.",
    photos: [
      { src: "assets/dorota-balewicz-projekty-dla-vox (1).jpg", label: "Projekty" },
      { src: "assets/kerrafront_vox.jpg", label: "Kerrafront" },
      { src: "assets/panel-lamelowy-fronto-dab-miodowy3.jpg", label: "Dąb miodowy" },
      { src: "assets/panel-lamelowy-fronto-dab-winchester-new.jpg", label: "Dąb winchester" },
    ],
  }
];

const AWARDS = [
  ["2021", "Wyróżnienie RoGuiltless Plastic", "Rossana Orlandi · projekt MASURIA"],
  ["2021", "Milan Design Week", "projekt MASURIA"],
  ["2021", "Muzeum w Doha, Katar", "projekt MASURIA"],
  ["2019", "Dutch Design Week — Young Polish Designers", "projekt CHMURNIK"],
  ["2018", "L'Oréal Brandstorm — 1. miejsce Polska & Kraje Bałtyckie", "projekt FLOW"],
  ["2018", "Światowe finały L'Oréal Brandstorm, Paryż", "projekt FLOW"],
];

const NAV_IDS = ["prace", "o-mnie", "uslugi", "kontakt"];

// ===== Helpers =====
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") node.className = v;
    else if (k === "html") node.innerHTML = v;
    else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2), v);
    else if (v !== false && v != null) node.setAttribute(k, v);
  }
  for (const c of children.flat()) {
    if (c == null) continue;
    node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
  }
  return node;
}

// ===== Logo marquee =====
function renderLogos() {
  const track = $("#logo-track");
  for (let i = 0; i < 2; i++) {
    const group = el("div", { class: "logo-marquee-group", "aria-hidden": i === 1 ? "true" : "false" });
    for (const logo of LOGOS) {
      const item = el("div", { class: "logo-item" });
      if (logo.src) {
        item.appendChild(el("img", { src: logo.src, alt: logo.name, loading: "lazy" }));
      } else {
        item.appendChild(document.createTextNode(logo.name));
      }
      group.appendChild(item);
    }
    track.appendChild(group);
  }
}

// ===== Awards =====
function renderAwards() {
  const list = $("#awards-list");
  for (const [year, name, place] of AWARDS) {
    list.appendChild(
      el("li", {},
        el("span", {}, year),
        el("div", {},
          el("p", {}, name),
          el("p", {}, place),
        ),
      ),
    );
  }
}

// ===== Projects grid =====
let activeFilter = "Wyróżnione";

function renderProjects() {
  const grid = $("#projects-grid");
  grid.innerHTML = "";
  const visible = PROJECTS.filter((p) =>
    activeFilter === "Wyróżnione" ? p.featured : p.cat === activeFilter
  );
  for (const p of visible) {
    const card = el("article", { class: "project-card", "data-cat": p.cat });
    card.addEventListener("click", () => openModal(p));
    const imgWrap = el("div", { class: "project-card-img" });
    const first = p.photos[0];
    if (first && first.src) {
      imgWrap.appendChild(el("img", { src: first.src, alt: first.label, loading: "lazy" }));
    } else {
      imgWrap.style.aspectRatio = "16 / 10";
      imgWrap.appendChild(el("div", { class: "muted italic small" }, p.name));
    }
    card.appendChild(imgWrap);
    const body = el("div", { class: "project-card-body" });
    body.appendChild(el("h3", {}, p.name));
    body.appendChild(el("p", { class: "project-card-meta" }, p.meta));
    const tagRow = el("div", { class: "tag-row" });
    for (const t of p.tags) tagRow.appendChild(el("span", { class: "tag" }, t));
    body.appendChild(tagRow);
    card.appendChild(body);
    grid.appendChild(card);
  }
}

function setupFilters() {
  $$(".filter").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeFilter = btn.dataset.filter;
      $$(".filter").forEach((b) => b.classList.toggle("active", b === btn));
      renderProjects();
    });
  });
}

// ===== Modal =====
let currentProject = null;
let photoIndex = 0;

function openModal(p) {
  currentProject = p;
  photoIndex = 0;
  const modal = $("#modal");
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  renderModal();
}

function closeModal() {
  $("#modal").hidden = true;
  currentProject = null;
  document.body.style.overflow = "";
}

function renderModal() {
  const body = $("#modal-body");
  body.innerHTML = "";
  if (!currentProject) return;
  const p = currentProject;

  // Left: photo + thumbs
  const left = el("div");
  const photoWrap = el("div", { class: "modal-photo" });
  const ph = p.photos[photoIndex];
  if (ph && ph.src) {
    photoWrap.appendChild(el("img", { src: ph.src, alt: ph.label }));
  } else {
    photoWrap.appendChild(el("div", { class: "muted italic small" }, ph ? ph.label : ""));
  }
  if (p.photos.length > 1) {
    photoWrap.appendChild(
      el("button", {
        class: "modal-arrow prev",
        "aria-label": "Poprzednie",
        onclick: (e) => { e.stopPropagation(); photoIndex = (photoIndex - 1 + p.photos.length) % p.photos.length; renderModal(); },
        html: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',
      }),
    );
    photoWrap.appendChild(
      el("button", {
        class: "modal-arrow next",
        "aria-label": "Następne",
        onclick: (e) => { e.stopPropagation(); photoIndex = (photoIndex + 1) % p.photos.length; renderModal(); },
        html: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',
      }),
    );
  }
  left.appendChild(photoWrap);
  const thumbs = el("div", { class: "modal-thumbs" });
  p.photos.forEach((photo, i) => {
    const thumb = el("button", {
      class: "modal-thumb" + (i === photoIndex ? " active" : ""),
      onclick: (e) => { e.stopPropagation(); photoIndex = i; renderModal(); },
    });
    if (photo.src) thumb.style.backgroundImage = `url(${photo.src})`;
    thumbs.appendChild(thumb);
  });
  left.appendChild(thumbs);
  body.appendChild(left);

  // Right: info
  const info = el("div", { class: "modal-info" });
  info.appendChild(el("span", { class: "small-caps" }, `${p.client} · ${p.year}`));
  info.appendChild(el("h2", {}, p.name));
  info.appendChild(el("p", { class: "desc" }, p.description));
  const tagRow = el("div", { class: "tag-row" });
  for (const t of p.tags) tagRow.appendChild(el("span", { class: "tag" }, t));
  info.appendChild(tagRow);
  body.appendChild(info);
}

// ===== Scroll behaviour =====
function setupScroll() {
  const nav = $("#nav");
  const onScroll = () => {
    const y = window.scrollY;
    nav.classList.toggle("scrolled", y > 40);
    let curr = "";
    for (const id of NAV_IDS) {
      const sec = document.getElementById(id);
      if (sec && sec.offsetTop <= y + 120) curr = id;
    }
    $$(".nav-links a").forEach((a) => {
      a.classList.toggle("active", a.dataset.section === curr);
    });
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

// ===== Init =====
document.addEventListener("DOMContentLoaded", () => {
  renderLogos();
  renderAwards();
  renderProjects();
  setupFilters();
  setupScroll();

  $("#modal-close").addEventListener("click", closeModal);
  $("#modal").addEventListener("click", (e) => { if (e.target.id === "modal") closeModal(); });

  document.addEventListener("keydown", (e) => {
    if (!currentProject) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight") { photoIndex = (photoIndex + 1) % currentProject.photos.length; renderModal(); }
    if (e.key === "ArrowLeft") { photoIndex = (photoIndex - 1 + currentProject.photos.length) % currentProject.photos.length; renderModal(); }
  });
});