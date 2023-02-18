// Enemy
let enemy = {
    name: null,
    type: null,
    lvl: null,
    stats: {
        hp: null,
        hpMax: null,
        atk: 0,
        def: 0,
        atkSpd: 0,
        vamp: 0,
        critRate: 0,
        critDmg: 0
    },
    image: {
        name: null,
        type: null,
        size: null
    },
    rewards: {
        exp: null,
        gold: null,
        drop: null
    }
};

const generateRandomEnemy = (condition) => {
    // List of possible enemy names
    const enemyNames = [
        // Scav
        'Scav', 'Pistol Scav', 'Buckshot Scav', 'Sniper Scav',
        // USEC PMC
        'Timmy USEC PMC', 'Scav-geared USEC PMC', 'Budget-kit USEC PMC',
        // BEAR PMC
        'Timmy BEAR PMC', 'Scav-geared BEAR PMC', 'Budget-kit BEAR PMC', 'Juiced BEAR PMC',
        // More Scav
        'Juiced Scav', 'ADAR Scav', 'Mosin Scav', 'Kedr Scav',
        // Raiders
        'Manul', 'Vepr', 'Leopard',
        // More Raiders
        'Padalschik', 'Stervyatnik', 'Medved', 'Berkut', 'Barrakuda', 'Skorpion', 'Puma',
        // Bosses
        'Cultist Priest', 'Cultist', 'Sektant', 'Aimbotkin', 'Triggerhappy', 'Scottsdale', 'Cliffhanger', 'Hellshrimp', 'Nevada', 'Madknight', 'Two-Finger', 'Boogerman', 'Juggernaut', 'Donutop', 'Rambo',
        // Monarch
        'Reshala', 'Glukhar', 'Shturman', 'Killa', 'Tagilla', 'Big Pipe', 'Knight', 'Birdeye', 'Sanitar'
    ];
    const enemyTypes = ['Offensive', 'Defensive', 'Balanced', 'Quick', 'Lethal'];
    let selectedEnemies = null;

    // Generate enemy type
    enemy.type = enemyTypes[Math.floor(Math.random() * enemyTypes.length)];

    // Calculate enemy level
    const maxLvl = dungeon.progress.floor * dungeon.settings.enemyLvlGap + (dungeon.settings.enemyBaseLvl - 1);
    const minLvl = maxLvl - (dungeon.settings.enemyLvlGap - 1);
    if (condition == "guardian") {
        enemy.lvl = minLvl;
    } else if (condition == "sboss") {
        enemy.lvl = maxLvl;
    } else {
        enemy.lvl = randomizeNum(minLvl, maxLvl);
    }

    // Generate proper enemy info
    switch (enemy.type) {
        case "Offensive":
            // Select name and apply stats for Offensive enemies
            if (condition == "guardian") {
                selectedEnemies = enemyNames.filter(name => [
                    'Cultist Priest', 'Cultist', 'Sektant', 'Scottsdale'
                ].includes(name));
            } else if (condition == "sboss") {
                selectedEnemies = enemyNames.filter(name => [
                    'Tagilla', 'Sanitar'
                ].includes(name));
            } else {
                selectedEnemies = enemyNames.filter(name => [
                    'Buckshot Scav', 'Sniper Scav',
                    'Timmy USEC PMC', 'Scav-geared USEC PMC', 'Budget-kit USEC PMC',
                    'Budget-kit BEAR PMC',
                    'Juiced Scav', 'ADAR Scav', 'Mosin Scav', 'KEDR Scav',
                    'Vepr',
                    'Padalschik', 'Stervyatnik', 'Berkut', 'Barrakuda', 'Skorpion',
                ].includes(name));
            }
            enemy.name = selectedEnemies[Math.floor(Math.random() * selectedEnemies.length)];
            setEnemyStats(enemy.type, condition);
            break;
        case "Defensive":
            // Select name and apply stats for Defensive enemies
            if (condition == "guardian") {
                selectedEnemies = enemyNames.filter(name => [
                    'Cliffhanger', 'Hellshrimp', 'Nevada'
                ].includes(name));
            } else if (condition == "sboss") {
                selectedEnemies = enemyNames.filter(name => [
                    'Glukhar',
                ].includes(name));
            } else {
                selectedEnemies = enemyNames.filter(name => [
                    'Scav-geared BEAR PMC', 'Budget-kit BEAR PMC', 'Juiced BEAR PMC',
                    'Leopard',
                    'Medved', 'Puma'
                ].includes(name));
            }
            enemy.name = selectedEnemies[Math.floor(Math.random() * selectedEnemies.length)];
            setEnemyStats(enemy.type, condition);
            break;
        case "Balanced":
            // Select name and apply stats for Balanced enemies
            if (condition == "guardian") {
                selectedEnemies = enemyNames.filter(name => [
                    'Madknight', 'Two-Finger', 'Boogerman'
                ].includes(name));
            } else if (condition == "sboss") {
                selectedEnemies = enemyNames.filter(name => [
                    'Shturman', 'Killa', 'Knight'
                ].includes(name));
            } else {
                selectedEnemies = enemyNames.filter(name => [
                    'Scav',
                    'Timmy BEAR PMC', 'Scav-geared BEAR PMC', 'Budget-kit BEAR PMC',
                    'Juiced Scav', 'ADAR Scav', 'Mosin Scav', 'KEDR Scav',
                    'Manul',
                    'Medved', 'Puma'
                ].includes(name));
            }
            enemy.name = selectedEnemies[Math.floor(Math.random() * selectedEnemies.length)];
            setEnemyStats(enemy.type, condition);
            break;
        case "Quick":
            // Select name and apply stats for Quick enemies
            if (condition == "guardian") {
                selectedEnemies = enemyNames.filter(name => [
                    'Juggernaut', 'Donutop'
                ].includes(name));
            } else if (condition == "sboss") {
                selectedEnemies = enemyNames.filter(name => [
                    'Birdeye', 'Reshala'
                ].includes(name));
            } else {
                selectedEnemies = enemyNames.filter(name => [
                    'Scav', 'Pistol Scav', 'Sniper Scav',
                    'Timmy USEC PMC', 'Scav-geared USEC PMC', 'Budget-kit USEC PMC',
                    'Juiced Scav',
                    'Manul', 'Vepr', 'Leopard',
                    'Stervyatnik', 'Barrakuda', 'Skorpion'
                ].includes(name));
            }
            enemy.name = selectedEnemies[Math.floor(Math.random() * selectedEnemies.length)];
            setEnemyStats(enemy.type, condition);
            break;
        case "Lethal":
            // Select name and apply stats for Lethal enemies
            if (condition == "guardian") {
                selectedEnemies = enemyNames.filter(name => [
                    'Rambo', 'Aimbotkin', 'Triggerhappy'
                ].includes(name));
            } else if (condition == "sboss") {
                selectedEnemies = enemyNames.filter(name => [
                    'Big Pipe'
                ].includes(name));
            } else {
                selectedEnemies = enemyNames.filter(name => [
                    'Pistol Scav',
                    'Timmy USEC PMC', 'Scav-geared USEC PMC', 'Budget-kit USEC PMC',
                    'Juiced Scav', 'ADAR Scav',
                    'Vepr',
                    'Stervyatnik', 'Skorpion'
                ].includes(name));
            }
            enemy.name = selectedEnemies[Math.floor(Math.random() * selectedEnemies.length)];
            setEnemyStats(enemy.type, condition);
            break;
    }
    if (condition == "chest") {
        enemy.name = "Mimic";
    } else if (condition == "door") {
        enemy.name = "Door Mimic";
    }
    setEnemyImg();
}

// Set a randomly generated stat for the enemy
const setEnemyStats = (type, condition) => {
    if (type == "Offensive") {
        enemy.stats = {
            hp: 0,
            hpMax: randomizeNum(300, 370),
            atk: randomizeNum(70, 100),
            def: randomizeNum(20, 50),
            atkSpd: randomizeDecimal(0.2, 0.4),
            vamp: 0,
            critRate: randomizeDecimal(1, 4),
            critDmg: randomizeDecimal(6.5, 7.5)
        };
    } else if (type == "Defensive") {
        enemy.stats = {
            hp: 0,
            hpMax: randomizeNum(400, 500),
            atk: randomizeNum(40, 70),
            def: randomizeNum(40, 70),
            atkSpd: randomizeDecimal(0.1, 0.3),
            vamp: 0,
            critRate: 0,
            critDmg: 0
        };
    } else if (type == "Balanced") {
        enemy.stats = {
            hp: 0,
            hpMax: randomizeNum(320, 420),
            atk: randomizeNum(50, 80),
            def: randomizeNum(30, 60),
            atkSpd: randomizeDecimal(0.15, 0.35),
            vamp: 0,
            critRate: randomizeDecimal(0.5, 1.5),
            critDmg: randomizeDecimal(1, 3)
        };
    } else if (type == "Quick") {
        enemy.stats = {
            hp: 0,
            hpMax: randomizeNum(300, 370),
            atk: randomizeNum(50, 80),
            def: randomizeNum(30, 60),
            atkSpd: randomizeDecimal(0.35, 0.45),
            vamp: 0,
            critRate: randomizeDecimal(1, 4),
            critDmg: randomizeDecimal(3, 6)
        };
    } else if (type == "Lethal") {
        enemy.stats = {
            hp: 0,
            hpMax: randomizeNum(300, 370),
            atk: randomizeNum(70, 100),
            def: randomizeNum(20, 50),
            atkSpd: randomizeDecimal(0.15, 0.35),
            vamp: 0,
            critRate: randomizeDecimal(4, 8),
            critDmg: randomizeDecimal(6, 9)
        };
    }

    if (dungeon.enemyMultipliers == undefined) {
        dungeon.enemyMultipliers = {
            hp: 1,
            atk: 1,
            def: 1,
            atkSpd: 1,
            vamp: 1,
            critRate: 1,
            critDmg: 1
        }
    }

    // Apply stat scaling for enemies each level
    for (const stat in enemy.stats) {
        if (["hpMax", "atk", "def"].includes(stat)) {
            enemy.stats[stat] += Math.round(enemy.stats[stat] * ((dungeon.settings.enemyScaling - 1) * enemy.lvl));
        } else if (["atkSpd"].includes(stat)) {
            enemy.stats[stat] = 0.4;
            enemy.stats[stat] += enemy.stats[stat] * (((dungeon.settings.enemyScaling - 1) / 4) * enemy.lvl);
        } else if (["critRate"].includes(stat)) {
            enemy.stats[stat] += enemy.stats[stat] * (((dungeon.settings.enemyScaling - 1) / 4) * enemy.lvl);
        } else if (["critDmg"].includes(stat)) {
            enemy.stats[stat] = 50;
            enemy.stats[stat] += enemy.stats[stat] * (((dungeon.settings.enemyScaling - 1) / 4) * enemy.lvl);
        }
    }

    // Stat multiplier for floor guardians
    if (condition == "guardian") {
        enemy.stats.hpMax = enemy.stats.hpMax * 1.5;
        enemy.stats.atk = enemy.stats.atk * 1.3;
        enemy.stats.def = enemy.stats.def * 1.3;
        enemy.stats.critRate = enemy.stats.critRate * 1.1;
        enemy.stats.critDmg = enemy.stats.critDmg * 1.2;
    }

    // Stat multiplier for monarchs
    if (condition == "sboss") {
        enemy.stats.hpMax = enemy.stats.hpMax * 6;
        enemy.stats.atk = enemy.stats.atk * 2;
        enemy.stats.def = enemy.stats.def * 2;
        enemy.stats.critRate = enemy.stats.critRate * 1.1;
        enemy.stats.critDmg = enemy.stats.critDmg * 1.3;
    }

    // Apply stat multipliers for every stat
    let floorMultiplier = (dungeon.progress.floor / 3);
    if (floorMultiplier < 1) {
        floorMultiplier = 1;
    }
    enemy.stats.hpMax = Math.round((enemy.stats.hpMax * floorMultiplier) * dungeon.enemyMultipliers.hp);
    enemy.stats.atk = Math.round(enemy.stats.atk * dungeon.enemyMultipliers.atk);
    enemy.stats.def = Math.round(enemy.stats.def * dungeon.enemyMultipliers.def);
    enemy.stats.atkSpd = enemy.stats.atkSpd * dungeon.enemyMultipliers.atkSpd;
    enemy.stats.vamp = enemy.stats.vamp * dungeon.enemyMultipliers.vamp;
    enemy.stats.critRate = enemy.stats.critRate * dungeon.enemyMultipliers.critRate;
    enemy.stats.critDmg = enemy.stats.critDmg * dungeon.enemyMultipliers.critDmg;

    // Calculate exp and gold that the monster gives
    const expYield = [];

    for (const stat in enemy.stats) {
        let statExp;
        if (["hpMax", "atk", "def"].includes(stat)) {
            statExp = enemy.stats[stat] + enemy.stats[stat] * 0.5;
        } else if (["atkSpd", "critRate", "critDmg"].includes(stat)) {
            statExp = enemy.stats[stat] + enemy.stats[stat] * 2;
        } else if (["vamp", "hp"].includes(stat)) {
            statExp = enemy.stats[stat] + enemy.stats[stat] * 1;
        }
        expYield.push(statExp);
    }

    let expCalculation = (expYield.reduce((acc, cur) => acc + cur, 0)) / 20;
    enemy.rewards.exp = Math.round(expCalculation + expCalculation * (enemy.lvl * 0.1));
    if (enemy.rewards.exp > 1000000) {
        enemy.rewards.exp = 1000000 * randomizeDecimal(0.9, 1.1);
    }
    enemy.rewards.gold = Math.round((enemy.rewards.exp * randomizeDecimal(0.9, 1.1)) * 1.5);
    enemy.rewards.drop = randomizeNum(1, 3);
    if (enemy.rewards.drop == 1) {
        enemy.rewards.drop = true;
    } else {
        enemy.rewards.drop = false;
    }

    enemy.stats.hp = enemy.stats.hpMax;
    enemy.stats.hpPercent = 100;

    // Caps attack speed to 2.5
    if (enemy.stats.atkSpd > 2.5) {
        enemy.stats.atkSpd = 2.5;
    }
}

const setEnemyImg = () => {
    // Apply monster image
    enemy.image.type = '.png';
    switch (enemy.name) {
        // Scavs
        case 'Scav':
            enemy.image.name = 'Scav';
            enemy.image.size = '50%';
            break;
        case 'Pistol Scav':
            enemy.image.name = 'Scav';
            enemy.image.size = '50%';
            break;
        case 'Sniper Scav':
            enemy.image.name = 'Scav';
            enemy.image.size = '50%';
            break;
        case 'Buckshot Scav':
            enemy.image.name = 'Scav';
            enemy.image.size = '50%';
            break;

        // USEC PMC
        case 'Timmy USEC PMC':
            enemy.image.name = 'Timmy USEC PMC';
            enemy.image.size = '50%';
            break;
        case 'Scav-geared USEC PMC':
            enemy.image.name = 'wolf_black';
            enemy.image.size = '50%';
            break;
        case 'Budget-kit USEC PMC':
            enemy.image.name = 'wolf_winter';
            enemy.image.size = '50%';
            break;

        // Timmy BEAR PMC
        case 'Timmy BEAR PMC':
            enemy.image.name = 'Timmy BEAR PMC';
            enemy.image.size = '50%';
            break;
        case 'Scav-geared BEAR PMC':
            enemy.image.name = 'slime_angel';
            enemy.image.size = '50%';
            break;
        case 'Budget-kit BEAR PMC':
            enemy.image.name = 'slime_knight';
            enemy.image.size = '50%';
            break;
        case 'Juiced BEAR PMC':
            enemy.image.name = 'slime_crusader';
            enemy.image.size = '50%';
            break;

        // Orc
        case 'Juiced Scav':
            enemy.image.name = 'orc_swordsmaster';
            enemy.image.size = '50%';
            break;
        case 'ADAR Scav':
            enemy.image.name = 'orc_axe';
            enemy.image.size = '50%';
            break;
        case 'Mosin Scav':
            enemy.image.name = 'orc_archer';
            enemy.image.size = '50%';
            break;
        case 'KEDR Scav':
            enemy.image.name = 'orc_mage';
            enemy.image.size = '50%';
            break;

        // Raiders
        case 'Manul':
            enemy.image.name = 'Manul';
            enemy.image.size = '50%';
            break;
        case 'Vepr':
            enemy.image.name = 'spider_red';
            enemy.image.size = '50%';
            break;
        case 'Leopard':
            enemy.image.name = 'spider_green';
            enemy.image.size = '50%';
            break;

        // More Raiders
        case 'Padalschik':
            enemy.image.name = 'skeleton_archer';
            enemy.image.size = '50%';
            break;
        case 'Stervyatnik':
            enemy.image.name = 'skeleton_swordsmaster';
            enemy.image.size = '50%';
            break;
        case 'Medved':
            enemy.image.name = 'skeleton_knight';
            enemy.image.size = '50%';
            break;
        case 'Berkut':
            if (randomizeNum(1, 2) == 1) {
                enemy.image.name = 'skeleton_mage1';
            } else {
                enemy.image.name = 'skeleton_mage2';
            }
            enemy.image.size = '50%';
            break;
        case 'Barrakuda':
            enemy.image.name = 'skeleton_pirate';
            enemy.image.size = '50%';
            break;
        case 'Skorpion':
            enemy.image.name = 'skeleton_samurai';
            enemy.image.size = '50%';
            break;
        case 'Puma':
            enemy.image.name = 'skeleton_warrior';
            enemy.image.size = '50%';
            break;

        // Mimic
        case 'Mimic':
            enemy.image.name = 'mimic';
            enemy.image.size = '50%';
            break;
        case 'Door Mimic':
            enemy.image.name = 'mimic_door';
            enemy.image.size = '50%';
            break;

        // Bosses
        case 'Cultist Priest':
            enemy.image.name = 'CultistPriest';
            enemy.image.size = '70%';
            break;
        case 'Cultist':
            enemy.image.name = 'CultistPriest';
            enemy.image.size = '50%';
            break;
        case 'Sektant':
            enemy.image.name = 'CultistPriest';
            enemy.image.size = '50%';
            break;
        case 'Aimbotkin':
            enemy.image.name = 'Rogue';
            enemy.image.size = '50%';
            break;
        case 'Triggerhappy':
            enemy.image.name = 'Rogue';
            enemy.image.size = '50%';
            break;
        case 'Scottsdale':
            enemy.image.name = 'Rogue';
            enemy.image.size = '50%';
            break;
        case 'Cliffhanger':
            enemy.image.name = 'Rogue';
            enemy.image.size = '50%';
            break;
        case 'Hellshrimp':
            enemy.image.name = 'Rogue';
            enemy.image.size = '50%';
            break;
        case 'Nevada':
            enemy.image.name = 'Rogue';
            enemy.image.size = '50%';
            break;
        case 'Madknight':
            enemy.image.name = 'Rogue';
            enemy.image.size = '50%';
            break;
        case 'Two-Finger':
            enemy.image.name = 'Rogue';
            enemy.image.size = '50%';
            break;
        case 'Boogerman':
            enemy.image.name = 'Rogue';
            enemy.image.size = '50%';
            break;
        case 'Donutop':
            enemy.image.name = 'Rogue';
            enemy.image.size = '50%';
            break;
        case 'Juggernaut':
            enemy.image.name = 'Rogue';
            enemy.image.size = '50%';
            break;
        case 'Rambo':
            enemy.image.name = 'Rogue';
            enemy.image.size = '50%';
            break;

        // Special Boss
        case 'Reshala':
            enemy.image.name = 'Reshala';
            enemy.image.size = '70%';
            break;
        case 'Glukhar':
            enemy.image.name = 'Glukhar';
            enemy.image.size = '70%';
            break;
        case 'Shturman':
            enemy.image.name = 'Shturman';
            enemy.image.size = '70%';
            break;
        case 'Killa':
            enemy.image.name = 'Killa';
            enemy.image.size = '70%';
            break;
        case 'Tagilla':
            enemy.image.name = 'Tagilla';
            enemy.image.size = '70%';
            break;
        case 'Big Pipe':
            enemy.image.name = 'BigPipe';
            enemy.image.size = '70%';
            break;
        case 'Knight':
            enemy.image.name = 'Knight';
            enemy.image.size = '70%';
            break;
        case 'Birdeye':
            enemy.image.name = 'Birdeye';
            enemy.image.size = '70%';
            break;
        case 'Sanitar':
            enemy.image.name = 'Sanitar';
            enemy.image.size = '70%';
            break;
    };
}

const enemyLoadStats = () => {
    // Shows proper percentage for respective stats
    let rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    if (enemy.stats.hp > enemy.stats.hpMax) {
        enemy.stats.hp = enemy.stats.hpMax;
    }
    enemy.stats.hpPercent = ((enemy.stats.hp / enemy.stats.hpMax) * 100).toFixed(2).replace(rx, "$1");

    const enemyHpElement = document.querySelector('#enemy-hp-battle');
    const enemyHpDamageElement = document.querySelector('#enemy-hp-dmg');
    enemyHpElement.innerHTML = `&nbsp${nFormatter(enemy.stats.hp)}/${nFormatter(enemy.stats.hpMax)}<br>(${enemy.stats.hpPercent}%)`;
    enemyHpElement.style.width = `${enemy.stats.hpPercent}%`;
    enemyHpDamageElement.style.width = `${enemy.stats.hpPercent}%`;
}