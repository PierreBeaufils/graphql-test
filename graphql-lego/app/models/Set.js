const {
    sets: db
} = require('../database');

class Set {
    constructor(data) {
        for (let prop in data) {
            this[prop] = data[prop];
        }
    }

    static async findAll() {
        const sets = await db();
        return sets.map(s => new Set(s));
    }

    static async findOne(set_num) {
        const sets = await db();
        return sets.find(s => s.set_num === set_num);
    }

    static async findByTheme(themeId) {
        const sets = await db();
        return sets
            .filter(s => s.theme_id === themeId)
            .map(s => new Set(s));
    }
}

module.exports = Set;