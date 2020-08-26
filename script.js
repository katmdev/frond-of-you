const plantApp = {};

plantApp.allPlants = [
    {
        name: 'Desert Cacti',
        light: 'direct',
        care: 0,
        content: `Cacti are succulents that are characterized by their areoles, which often carry spines and from which flowers are produced. As desert cacti come from regions where sunlight is intense, these plants should be kept in the sunniest windows, and rotated regularly for consistent sun exposure. During warmer seasons, water liberally, but ensure your plant has drainage so it does not become over-saturated. In colder months, water in the morning when soil is nearly dry.`,
        image: `./assets/desertcactus.jpg`,
        imageAlt: `A desert cacti`,
    },
    {
        name: 'Sansevieria',
        light: 'direct',
        care: 1,
        content: `Also known as mother-in-law's tongue, snake plant, and lucky plant, the sansevieria is an easy plant to grow. They require plenty of direct light, but can also tolerate shade, though they will stop growing. They rarely require repotting, as they prefer cramped roots, so they are an easy plant to maintain. Be sure to keep soil moist, waiting only until the top inch of the soil is dry to rewater.`,
        image: `./assets/snake3.jpg`,
        imageAlt: `A potted sansevieria`,
    },
    {
        name: 'Succulent',
        light: 'direct',
        care: 2,
        content: `Though succulents have a reputation for being easy to care for, they require very specific conditions to flourish. As they require daily direct sunlight, keep on a sunny windowsill. As both too much water and not enough water will kill these plants, there is no one-size-fits-all recommendation, so be sure to research the varietal you take home on its specific watering instructions. Avoid splashing the leaves while watering, as they can become easily damaged.`,
        image: `./assets/succulent.jpg`,
        imageAlt: `Many succulents`,
    },
    {
        name: 'Palm',
        light: 'bright',
        care: 0,
        content: `Palms are mainly tropical plants known for their unbranched trunks and fan shaped fronds. Many potted palms are sold during their juvenile stage, and remain immature for the duration of their lives indoors. Though adult palms are often found in places with intense sun, indoor palms should be kept in bright, indirect light, as if they were shaded by other plants, as in the wild. Water liberally, and provide drainage.`,
        image: `./assets/palm.jpg`,
        imageAlt: `A palm frond`,
    },
    {
        name: 'Chlorophytum',
        light: 'bright',
        care: 1,
        image: `./assets/spider.jpg`,
        content: `More commonly known as spider plant, the chlorophytum requires bright, indirect light and liberal watering. Though simple to care for, left unattended, these plants will quickly reproduce and plantlets hang from the parent's pot. Propagating the plantlets by removing and rooting in water or leaving on the stem and planting in soil for six weeks before detaching will create an abundance of new plants.`,
        imageAlt: `Flowering spider plant`,
    },
    {
        name: 'Orchid',
        light: 'bright',
        care: 2,
        content: `Orchids form one of the largest flowering plant families. For successful cultivation, their very specific needs must be met. Provide bright, filtered light. As one of the most common causes of failure with orchids is overwatering, use a free draining potting medium, and water less than once a week. The best way to water is to soak the inner container in a bucket for a few minutes before returning it to its pot.`,
        image: `./assets/orchid.jpg`,
        imageAlt: `A white orchid.`,
    },
    {
        name: 'Fern',
        light: 'medium',
        care: 0,
        content: `Though ferns belong to several families, they share many characteristics, most noticeably their leafy foliage. Ferns grow best under conditions mimicking their natural habitats, so provide with medium light, as direct sunlight will scorch their tender fronds. As ferns lose a significant amount of water through their fronts, water liberally.`,
        image: `./assets/fern2.jpg`,
        imageAlt: `Fern foliage.`,
    },
    {
        name: 'Arabica',
        light: 'medium',
        care: 1,
        content: `A great gift for coffee and plant lovers alike, the arabica shrub is the only varietal of coffee grown as a house plant. Grow in medium light, such as near a slightly shaded window. Water liberally, but do not allow to stand in water. Flowers will grow after about three years.`,
        image: `./assets/arabica.jpg`,
        imageAlt: `Arabica flower`,
    },
    {
        name: 'Ficus',
        light: 'medium',
        care: 2,
        content: `While there are over 800 species of the genus Ficus, two popular varietals are the fiddle-leaf fig and the rubber plant. Keep in medium light, water moderately, allowing the top half of the soil to dry before watering again. Overwatering will cause lower leaves to fall. Sponge leaves clean regularly to remove accumulated dust.`,
        image: `./assets/ficus.jpg`,
        imageAlt: `A fiddle leaf fig`,
    },
    {
        name: 'Zamioculcas',
        light: 'shade',
        care: 0,
        content: `Also known as the ZZ plant, zanzibar gem, or emerald palm, this plant is a more recent addition to the houseplant canon. Dutch nurseries started wide-scale commercial propagation of the plant around 1996, and it's become widely popular due to its ability to grow in shaded conditions. Water sparingly.`,
        image: `./assets/zz.jpg`,
        imageAlt: `A zz plant`,
    },
    {
        name: 'Epipremnum Aureum',
        light: 'shade',
        care: 1,
        content: `Also known as golden pothos, money plant, and devil's ivy, these plants are notoriously difficult to kill, staying green even when kept in the dark. As these plants can tolerate both moderate and sparing watering, wait until the leaves droop slightly before providing rewatering.`,
        image: `./assets/pothos.jpg`,
        imageAlt: `A hanging pothos`,
    },
    {
        name: 'Monstera',
        light: 'shade',
        care: 2,
        content: `Though monsteras may seem easy to maintain, more nuanced care is required to achieve more desirable features, such as perforations and variegation. As monsteras climb up the trunks and along the branches of trees in the wild, they will throw off aerial roots as they grow. Train the roots to moss-covered poles or back into the pot to stay upright. Keep in bright, filtered light in the summer, and direct light in the winter. Water sparingly once the top third of soil is dry. Sponge leaves frequently to remove dust.`,
        image: `./assets/monstera2.jpg`,
        imageAlt: `Monstera leaves`,
    },
];

plantApp.getResults = function (light, care) {
    matchingPlant = plantApp.allPlants.filter((plant) => {
        return plant.light === light && plant.care === care;
    });
};

plantApp.displayResults = function (matchingPlant) {
    let finalPlant = matchingPlant[0];
    $('#plantName').text(`${finalPlant.name}`);
    $('#plantDescription').text(`${finalPlant.content}`);
    $('#plantImg').html(`<img src="${finalPlant.image}" alt="${finalPlant.imageAlt}">`);
    $('#results').toggleClass('hidden');
};


plantApp.init = function() {
    $('.secondSection').on('submit', function(e) {
        e.preventDefault();
        let light = $("input[name='amountOfLight']:checked").val();
        let care = parseInt($("input[name='levelOfCare']").val());
        plantApp.getResults(light, care);
        plantApp.displayResults(matchingPlant);
    });
    $('#hideResults').on('click', function() {
        $('#results').toggleClass('hidden');
    });
};

$(function() {
    plantApp.init();
});
