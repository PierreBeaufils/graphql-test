import {
    themes as db
} from '../database';

class Theme {
    constructor(data) {
        for (let prop in data) {
            this[prop] = data[prop];
        }
    }

    static async findAll() {
        const themes = await db();
        return themes.map(t => new Theme(t));
    }

    static async findOne(id) {
        const themes = await db();
        return themes.find(t => t.id === id);
    }

    static async findByParent(parentId) {
        const themes = await db();
        return themes
            .filter(t => t.parent_id === parentId)
            .map(t => new Theme(t));
    }
}

module.exports = Theme;