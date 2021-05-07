let Terrain = (function() {
	let Terrain = {};
	
	Terrain.types = [
		{img:"imgTileNone", name:"No Terrain", desc:"...", bgAlpha:0, value:0},
		{img:"imgTileWater", name:"Water", desc:"Lake or sea, a point of interest might indicate an island or islands.", bgAlpha:0, value:1.5},
		{img:"imgTileFarmland", name:"Ancient Farmland", desc:"A huge stretch of land was re-engineered for optimal farming.", bgAlpha:0, value:1.5},
		{img:"imgTileArratu", name:"Arratu Wasteland", desc:"An area here was once xenoformed by the Outsiders into an environment hostile to humanity or one inhabited by dangerous alien lifeforms.", bgAlpha:0, value:0.5},
		{img:"imgTileBlasted", name:"Blasted Lands", desc:"Radioactive or scorched over by ancient war. Many ruins, likely.", bgAlpha:0, value:0.5},
		{img:"imgTileCanyons", name:"Canyons", desc:"A region with extensive canyons cut by rivers present or long-vanished. Make sure the rivers don’t climb after leaving them", bgAlpha:0, value:0.5},
		{img:"imgTileDenseForest", name:"Dense Forest", desc:"Trackless, dark, and an effective natural barrier.", bgAlpha:0, value:0.5},
		{img:"imgTileGrasslands", name:"Grasslands", desc:"A broad sweep of savannah or grassy plains is a coherent whole here.", bgAlpha:0, value:2.0},
		{img:"imgTileIsland", name:"Island", desc:"An island off the coast here", bgAlpha:0, value:1.0},
		{img:"imgTileJaggedMountains", name:"Jagged Mountains", desc:"A new or resharpened mountain range forms a barrier in the region. The mountains are young, tall, and likely cast a substantial rain shadow.", bgAlpha:0, value:0.75},
		{img:"imgTileJungle", name:"Jungle", desc:"A classic adventure-worthy jungle of wild, semi-alien flora and fauna.", bgAlpha:0, value:0.5}, 
		{img:"imgTileLightForest", name:"Light Forest", desc:"Interspersed with other terrain", bgAlpha:0, value:1.5},
		{img:"imgTileMegaplex", name:"Megaplex", desc:"The ruins of a single huge ancient structure stretch for endless miles.", bgAlpha:0, value:0.5},
		{img:"imgTilePit", name:"Pit", desc:"A Deep or some other underground megastructure collapsed and left a hole with a diameter measured in tens of miles.", bgAlpha:0, value:0.5},
		{img:"imgTileRainForest", name:"Rain Forest", desc:"Vast, damp, and green.", bgAlpha:0, value:0.75},
		{img:"imgTileRockyHills", name:"Rocky Hills", desc:"Rough and stony, with little arable land. Herding and raiding are the most profitable employments here.", bgAlpha:0, value:1.0},
		{img:"imgTileRollingHills", name:"Rolling Hills", desc:"A stretch of gently rolling hills makes for good agricultural land.", bgAlpha:0, value:1.5},
		{img:"imgTileSandDesert", name:"Sand Desert", desc:"This desert is a waste of sand and dunes. It may be from a rain shadow, or it might be a legacy of ancient war.", bgAlpha:0, value:0.75},
		{img:"imgTileScrubDesert", name:"Scrub Desert", desc:"These often appear on the leeward side of mountain ranges. Borders will often be grasslands or savannah", bgAlpha:0, value:0.75},
		{img:"imgTileSwamp", name:"Swamp", desc:"A sinking river, lake margin, or wet coastal delta forms a vast bog in this flat land.", bgAlpha:0, value:0.5},
		{img:"imgTileVolcano", name:"Volcano", desc:" One or more mountains in a nearby range are volcanically active. This may be natural or it may be a consequence of Legacy flux or ancient manipulation.", bgAlpha:0, value:0.5},
		{img:"imgTileWeatheredMountains", name:"Weathered Mountains", desc:"A significant skirt of hills is common. The rain shadow is likely limited due to the rounded, low mountains.", bgAlpha:0, value:0.75}
	]
	
	console.log(Terrain.types);
	
	Terrain.chooseFillerTerrain = function() {
		if (Math.random() < 0.333) {
			if (Math.random() < 0.333) {
				return Terrain.types[7];
			} else {
				if (Math.random() < 0.5) {
					return Terrain.types[11];
				} else {
					if (Math.random() < 0.5) {
						return Terrain.types[16];
					} else {
						return Terrain.types[15];
					}
				}
			}
		} else {
			return Terrain.types[Math.floor(Math.random()*(Terrain.types.length-1))+1];
		}
	}
	
	Terrain.chooseTerrain = function() {
		let list = [];
		
		for (let i = 2; i < Terrain.types.length; i++) {
			if (i == 13) { continue; }
			list.push(Terrain.types[i]);
		}
		
		let chosen = [];
		
		for (let i = 0; i < 6; i++) {
			let r = Math.floor(i+Math.random()*(list.length-i));
			let choice = list[r];
			list[r] = list[i];
			list[i] = choice;
			chosen.push(choice);
		}
		
		return chosen;
	}
	
	return Terrain;
}) ();