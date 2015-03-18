define(function() {

	function Auto(color, marca) {
		this.color = color;
		this.marca = marca;
	}

	Auto.prototype.getColor = function() {
		return this.color;
	}

	Auto.prototype.getMarca = function() {
		return this.marca;
	}

	return Auto;
})