import { registerSettings } from "./settings.js";

Hooks.once('init', () => {
    registerSettings();
});

Hooks.once('ready', async () => {
    const override = await game.settings.get("cairn-es", "override-generator");
    if (override) {
        CONFIG.Cairn.characterGenerator = {
            ability: "3d6",
            hitProtection: "1d6",
            gold: "3d6",
            name: {
                text: "{name} {surname}",
                items: {
                    name: "cairn-es.cairn-es-tables;Nombres",
                    surname: "cairn-es.cairn-es-tables;Apellidos"
                }
            },
            background: "cairn-es.cairn-es-tables;Trasfondo",
            startingItems: [
                "cairn-es.cairn-es-items;Raciones;1",
                "cairn-es.cairn-es-items;Antorcha;1"
            ],
            startingGear: [
                "cairn-es.cairn-es-tables;Equipo inicial - Armadura",
                "cairn-es.cairn-es-tables;Equipo inicial - Yelmos y Escudos",
                "cairn-es.cairn-es-tables;Equipo inicial - Armas",
                "cairn-es.cairn-es-tables;Equipo inicial - Equipo para expediciones",
                "cairn-es.cairn-es-tables;Equipo inicial - Herramientas",
                "cairn-es.cairn-es-tables;Equipo inicial - Baratijas",
                "cairn-es.cairn-es-tables;Equipo inicial - Objeto extra"
            ],
            biography: {
                text: "Soy de físico <strong>{physique}</strong>, de piel <strong>{skin}</strong>, de cabello <strong>{hair}</strong>, y un rostro <strong>{face}</strong>. Tengo una voz <strong>{speech}</strong> y llevo una vestimenta <strong>{clothing}</strong>. Mi mayor defecto es ser <strong>{vice}</strong> pero también soy <strong>{virtue}</strong>, se dice que soy <strong>{reputation}</strong>. Tengo la mala fortuna de <strong>{misfortune}</strong>. Tengo <strong>{age}</strong> años.",
                age: "2d20 + 10",
                items: {
                    physique: "cairn-es.cairn-es-tables;Físico",
                    skin: "cairn-es.cairn-es-tables;Piel",
                    hair: "cairn-es.cairn-es-tables;Cabello",
                    face: "cairn-es.cairn-es-tables;Rostro",
                    speech: "cairn-es.cairn-es-tables;Voz",
                    clothing: "cairn-es.cairn-es-tables;Vestimenta",
                    vice: "cairn-es.cairn-es-tables;Defecto",
                    virtue: "cairn-es.cairn-es-tables;Virtud",
                    misfortune: "cairn-es.cairn-es-tables;Desgracia",
                    reputation: "cairn-es.cairn-es-tables;Reputación"
                }
            }
        };
    }
});
