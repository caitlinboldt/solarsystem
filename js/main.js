//planet information stored in an object

planets = {
    sun: {
        name: "Sun",
        info: "The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process."
    },
    mercury: {
        name: "Mercury",
        info: "Mercury is the smallest and innermost planet in the Solar System. Its orbital period around the Sun of 87.97 days is the shortest of all the planets in the Solar System. It is named after the Roman deity Mercury, the messenger of the gods."
    },
    venus: {
        name: "Venus",
        info: "Venus is the second planet from the Sun, orbiting it every 224.7 Earth days. It has the longest rotation period of any planet in the Solar System and rotates in the opposite direction to most other planets. It does not have any natural satellites."
    },
    earth: {
        name: "Earth",
        info: "Earth is the third planet from the Sun and the only object in the Universe known to harbor life. According to radiometric dating and other sources of evidence, Earth formed over 4 billion years ago."
    },
    mars: {
        name: "Mars",
        info: "Mars is the fourth planet from the Sun and is the second smallest planet in the solar system. Named after the Roman god of war, Mars is also often described as the “Red Planet” due to its reddish appearance. Mars is a terrestrial planet with a thin atmosphere composed primarily of carbon dioxide."
    },
    jupiter: {
        name: "Jupiter",
        info: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a giant planet with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined."
    },
    saturn: {
        name: "Saturn",
        info: "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth."
    },
    neptune: {
        name: "Neptune",
        info: "Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet."
    },
    uranus: {
        name: "Uranus",
        info: "It appears that Uranus does not have a rocky core like Jupiter and Saturn but rather that its material is more or less uniformly distributed. Uranus' atmosphere is about 83% hydrogen, 15% helium and 2% methane. Like the other gas planets, Uranus has bands of clouds that blow around rapidly."
    }
};

// when the planet img is clicked the function runs and put the information from the object into the empty html tags
function planetInfo(planet) {
    let planetName = document.getElementById('planet');
    let info = document.getElementById('information');
    planetName.textContent = planets[planet].name
    info.textContent = planets[planet].info;
}

