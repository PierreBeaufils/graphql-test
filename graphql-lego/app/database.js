const csv = require('csvtojson');

const themes = async () => csv().fromFile(__dirname + '/../data/themes.csv');
const sets = async () => csv().fromFile(__dirname + '/../data/sets.csv');

module.exports = {
    sets,
    themes
}