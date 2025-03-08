export const registerSettings = () => {
    game.settings.register('cairn-es', 'override-generator', {
        name: "Generador español",// game.i18n.localize("LB.Settings.BasicRules.Label"),
        default: false,
        type: Boolean,
        scope: 'world',
        config: true,
        hint: "Sobrescribir el generador para que genere actores en español",
 //game.i18n.localize("LB.Settings.BasicRules.Hint"),
        requiresReload: true,
        restricted: true
    });
}