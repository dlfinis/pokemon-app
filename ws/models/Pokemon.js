class Pokemon {
    constructor(id, name) {
		this.id = id;
		this.name = name;
	}

	info() {
		return `Pokemon: ${id} - ${name} `;
    }
}

module.exports = Pokemon;