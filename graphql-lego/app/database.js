const csv = require('csvtojson');

const sets = async () => csv().fromFile('../data/sets.csv');
const themes = async () => csv().fromFile('../data/themes.csv');

module.exports = {
    sets,
    themes
}