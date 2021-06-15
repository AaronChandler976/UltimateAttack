// Generate randum number between 0 and arrLength
function randNum(arrLength) {
    let num = Math.floor(Math.random() * arrLength);
    return num;
}

// Create word banks for different parts of speech
const attackNoun = ['arrow',   'assault', 'barrage', 'beam', 'bite', 'blade',
    'blast',   'blow', 'cannon', 'claw', 'fang', 'fist', 'flame', 'gale', 'hammer',
    'inferno', 'laser',   'might', 'palm', 'roar', 'slam', 'slash', 'smash', 'strike',
    'sword', 'tempest', 'torrent', 'volley', 'whip'];

const attackAdj = ['blazing', 'crushing', 'cutting', 'decimating', 'demonic', 'devouring',
    'echoing', 'freezing', 'furious', 'holy', 'masterful', 'monstrous', 'radiant', 'raging', 
    'ravenous', 'rending', 'roaring', 'sundering', 'thundering', 'twisting', 'unyielding', 
    'vanishing', 'vicious'];

const possessiveNoun = ["Emporer's", "God's", "King's", "berserker's", "dragon's", "heaven's",
    "lightning's", "lion's", "mantis'", "master's", "mountain's", "slayer's", "titan's", 
    "winter's"];

const objectAdj = ['moonlit', 'infinite', 'whispering', 'misty', 'flowing', 'ashen', 'dying'];

const objectNoun = ['beast', 'lake', 'mind', 'star', 'storm', 'vortex'];

// Generate attack phrase
function generateAttack() {
    // Generate random words from each word bank
    let aNoun1 = attackNoun[randNum(attackNoun.length)];
    let aNoun2 = attackNoun[randNum(attackNoun.length)];
    let aAdj1 = attackAdj[randNum(attackAdj.length)];
    let aAdj2 = attackAdj[randNum(attackAdj.length)];
    let pNoun = possessiveNoun[randNum(possessiveNoun.length)];
    let oAdj = objectAdj[randNum(objectAdj.length)];
    let oNoun = objectNoun[randNum(objectNoun.length)];
    // Check for duplicate words
    while (aNoun1 === aNoun2) {
        aNoun2 = attackNoun[randNum(attackNoun.length)];
    }
    while (aAdj1 === aAdj2) {
        aAdj2 = attackAdj[randNum(attackAdj.length)];
    }
    // Randomly determine phrase structure
    const phraseIdx = randNum(5);
    switch (phraseIdx) {
        case 0:
            return `${pNoun} ${aAdj1} ${aNoun1}!`;
        case 1:
            return `${oAdj} ${pNoun} ${aAdj1} ${aNoun1}!`;
        case 2: 
            return `${oAdj} ${oNoun}, ${aAdj1} ${aNoun1}!`;
        case 3:
            return `${aAdj1} ${aNoun1}, ${aAdj2} ${aNoun2}!`;
        case 4:
            return `${pNoun} ${aNoun1}, ${aAdj1} ${aNoun2}!`;
    }
}

// Capitalize and print attack phrase
function printAttack(attack) {
    console.log(attack.toUpperCase());
}

printAttack(generateAttack());
