const aliens = [
    {
        name: "HEATBLAST",
        species: "PYRONITE",
        planet: "PYROS",
        description: "Magma-based lifeform. Controls fire.",
        image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg3.wikia.nocookie.net%2F__cb20131012092051%2Fben10%2Fimages%2F2%2F20%2FHeatblast_omniverse_official.png&f=1&nofb=1&ipt=379aac48e1eaeec89e802a02a2ec6d2e4248e51c0904d9fac0e86eec7e16e12e",
    },
    {
        name: "DIAMONDHEAD",
        species: "PETROSAPIEN",
        planet: "PETROPIA",
        description: "Crystal structure. Indestructible.",
        image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvignette1.wikia.nocookie.net%2Fben10%2Fimages%2Fa%2Fab%2FDiamondhead_os.png%2Frevision%2Flatest%3Fcb%3D20141231142005&f=1&nofb=1&ipt=678e206613ca6404a80262f3ae7d3799758c308161f5a85d965b87a0f2c25a99",
    },
    {
        name: "FOUR ARMS",
        species: "TETRAMAND",
        planet: "KHOROS",
        description: "Quad-armed powerhouse. Super strength.",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngfre.com%2Fwp-content%2Fuploads%2FBen-10-7-640x1024.png&f=1&nofb=1&ipt=357f42f7d6325a28f6a9d94e16b3ba49693093a5860e6b9c13b346bec7cb093e",
    },
    {
        name: "XLR8",
        species: "KINECELERAN",
        planet: "KINET",
        description: "Super speed. Frictionless movement.",
        image: "https://www.pikpng.com/pngl/b/190-1906134_xlr8-de-ben-10-clipart.png",
    },
    {
        name: "UPGRADE",
        species: "MECHAMORPH",
        planet: "GALVAN B",
        description: "Living technology. Merges with machines.",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fben10%2Fimages%2F6%2F62%2FUpgrade_Model.png%2Frevision%2Flatest%2Fscale-to-width-down%2F250%3Fcb%3D20200511092500&f=1&nofb=1&ipt=4f95f6470da50afe209ebc4b593adf6042956f2bb747967596a1c745d5bd7692",
    },
    {
        name: "STRINGFLY",
        species: "Lepidopterran",
        planet: " Lepidopterra",
        description: "Living technology. Merges with machines.",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wikia.nocookie.net%2Fb10mv%2Fimages%2F5%2F5d%2FStinkfly_Fig.png%2Frevision%2Flatest%2Fscale-to-width-down%2F1200%3Fcb%3D20221220211026&f=1&nofb=1&ipt=2d50e73d4e45b4d34a90ae49c04a08d820ed5153553168507834ad7b9f200d09",
    },
    {
        name: "WOILDMUTT",
        species: "Vulpimancer",
        planet: " Vulpin",
        description: "Living technology. Merges with machines.",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Ffull%2F119-1195955_ben-10-alien-characters-ben-10-aliens-wildmutt.png&f=1&nofb=1&ipt=47ee01639ed948dcea864cc9926aae4de68d02448ced5a6a452246d1f8728cb9",
    },
    {
        name: "WOILDMUTT",
        species: "Piscciss Volann",
        planet: " Piscciss",
        description: "Living technology. Merges with machines.",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fben10%2Fimages%2F9%2F98%2FRipjaws.png%2Frevision%2Flatest%3Fcb%3D20140822023344&f=1&nofb=1&ipt=b0a553da654067d43d92fe8b7fe1298862ea9e632aaaf2a513073f319237b411",
    },
    {
        name: "GHOSTFREAK",
        species: "Ectonurite",
        planet: " Anur Phaetos",
        description: "Living technology. Merges with machines.",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fben10%2Fimages%2Fa%2Fa3%2FGhostfreakPose2.png%2Frevision%2Flatest%3Fcb%3D20171019164933&f=1&nofb=1&ipt=d2db04a4e08b7828f5d704512185259b5dc44488b3e16fb961342dbbac73a1b9",
    },
    {
        name: "GRAYMATTER",
        species: "Galvan",
        planet: "Galvan Prime",
        description: "Living technology. Merges with machines.",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette2.wikia.nocookie.net%2Fben10%2Fimages%2F1%2F1d%2FGrey_matter_profile.png%2Frevision%2Flatest%3Fcb%3D20120207221638&f=1&nofb=1&ipt=38f764f197e9496cbc2c14abfc237d4422a754a5939fb0d38e5ca81bb40f3ddb",
    },
    {
        name: "GRAYMATTER",
        species: "Galvan",
        planet: "Galvan Prime",
        description: "Living technology. Merges with machines.",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette2.wikia.nocookie.net%2Fben10%2Fimages%2F1%2F1d%2FGrey_matter_profile.png%2Frevision%2Flatest%3Fcb%3D20120207221638&f=1&nofb=1&ipt=38f764f197e9496cbc2c14abfc237d4422a754a5939fb0d38e5ca81bb40f3ddb",
    }
];

let currentIndex = 0;
const dial = document.querySelector('.omnitrix-core');
const ring = document.querySelector('.ring-outer');
const carouselContainer = document.getElementById('carousel');

// UI Elements
const display = {
    name: document.getElementById('alienName'),
    species: document.getElementById('alienSpecies'),
    planet: document.getElementById('alienPlanet'),
    desc: document.getElementById('alienDesc')
};

// initialize Carousel
function initCarousel() {
    carouselContainer.innerHTML = '';
    aliens.forEach((alien, index) => {
        const card = document.createElement('div');
        card.classList.add('alien-card');
        card.id = `alien-${index}`;

        const img = document.createElement('img');
        img.src = alien.image;
        img.alt = alien.name;

        card.appendChild(img);
        carouselContainer.appendChild(card);
    });
    updateCarousel();
}

function updateCarousel() {
    const cards = document.querySelectorAll('.alien-card');

    cards.forEach((card, index) => {
        // Reset classes
        card.className = 'alien-card';

        // Calculate relative position
        let diff = index - currentIndex;

        // Handle wrapping for infinite feel relative logic
        if (diff < -2) diff += aliens.length;
        if (diff > 2) diff -= aliens.length;

        if (index === currentIndex) {
            card.classList.add('active');
        } else if (diff === 1 || (currentIndex === aliens.length - 1 && index === 0)) {
            // Next item
            // Simplfy wrap logic for visual neighbor
            if (index === (currentIndex + 1) % aliens.length) {
                card.classList.add('next');
            } else {
                card.classList.add('hidden');
            }
        } else if (diff === -1 || (currentIndex === 0 && index === aliens.length - 1)) {
            // Prev item
            if (index === (currentIndex - 1 + aliens.length) % aliens.length) {
                card.classList.add('prev');
            } else {
                card.classList.add('hidden');
            }
        } else {
            card.classList.add('hidden');
        }
    });

    // Update Text Info
    const alien = aliens[currentIndex];
    display.name.setAttribute('data-text', alien.name);
    display.name.innerText = alien.name;
    display.species.innerText = alien.species;
    display.planet.innerText = alien.planet;
    display.desc.innerText = alien.description;
}

function rotateDial(direction) {
    // direction: 1 (right) or -1 (left)
    const rotation = direction * 45;

    // Animate Ring
    ring.style.transition = "transform 0.3s ease-out";
    ring.style.transform = `rotate(${rotation}deg)`;

    setTimeout(() => {
        ring.style.transition = "none";
        ring.style.transform = "rotate(0deg)";
    }, 300);

    // Update Index
    currentIndex = (currentIndex + direction + aliens.length) % aliens.length;

    // Trigger update
    updateCarousel();
}

// Event Listeners
document.getElementById('nextBtn').addEventListener('click', () => rotateDial(1));
document.getElementById('prevBtn').addEventListener('click', () => rotateDial(-1));

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') rotateDial(1);
    if (e.key === 'ArrowLeft') rotateDial(-1);
});

dial.addEventListener('click', () => {
    dial.style.transform = "scale(0.9)";
    const activeCard = document.querySelector('.alien-card.active img');
    activeCard.style.filter = "brightness(2) drop-shadow(0 0 50px #39ff14)";

    setTimeout(() => {
        dial.style.transform = "scale(1)";
        activeCard.style.filter = "drop-shadow(0 0 20px var(--core-green)) sepia(100%) hue-rotate(50deg) saturate(300%) contrast(1.2)";
        alert(`TRANSFORMATION INITIATED: ${aliens[currentIndex].name}`);
    }, 200);
});

// Start
initCarousel();
