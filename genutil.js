let GenUtil = (function() {
	let GenUtil = {};
	
	GenUtil.pickRandom = function(list) {
		return list[Math.floor(Math.random()*list.length)];
	}
	
	GenUtil.generatePattern = function(pattern, data) {
		for (name in data) {
			var regexp = new RegExp("{" + name + "}");
			while (pattern.search(regexp) > -1) {
				pattern = pattern.replace(regexp, function() { return GenUtil.pickRandom(data[name]); });
			}
		}
		
		return pattern;
	}
	
	GenUtil.pickList = function(list, count) {
			let copy = list.slice(0,list.length);
			
			console.log(copy);
			
			for (let i = 0; i < count; i++) {
				let k = i+Math.floor(Math.random()*(copy.length-i));
				let v = copy[k];
				copy[k] = copy[i];
				copy[i] = v;
				
				console.log(i, copy[i]);
				console.log(k, v);
			}
			
			console.log(copy);
			
			return copy.slice(0,count);
	}
	
	return GenUtil;
}) ();