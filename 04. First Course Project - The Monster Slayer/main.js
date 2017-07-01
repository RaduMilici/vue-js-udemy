/**
 * Created by radu on 30.06.2017.
 */
class Character {
    constructor(name, health) {
        this.name = name;
        this.health = this.maxHealth = health;
        this.baseDamage = 10;
        this.baseHeal = 25;
    }

    attack(enemy) {
        this.dealDamage(enemy, this.getDamage());
    }

    specialAttack(enemy) {
        for (let i = 0; i < 2; i++) {
            this.attack(enemy);
        }
    }

    heal() {
        this.takeDamage(-this.baseHeal);
    }

    getDamage() {
        return Math.round(Math.random() * this.baseDamage);
    }

    takeDamage(num) {
        this.health -= num;

        this.health > this.maxHealth ?
            this.health = this.maxHealth :
            this.checkDeath();
    }

    checkDeath() {
        if (this.health <= 0) {
            this.health = 0;
            this.game.quit();
        }
    }

    dealDamage(character, num) {
        character.takeDamage(num);
        this.game.log(`${this.name} deals ${num} damage to ${character.name}.`);
    }
}

class Game {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
        this.player1.game = this.player2.game = this;
        this.combatLog = [];
    }

    log(data) {
        this.combatLog.push(data);
    }

    attack() {
        this.player1.attack(this.player2);
        this.player2.attack(this.player1);
    }

    special() {
        this.player1.specialAttack(this.player2);
        this.player2.attack(this.player1);
    }

    heal() {
        this.player1.heal();
    }
}

new Vue({
    el: '#game',
    data: {
        players: {
            player1: null,
            player2: null
        },
        game: null,
        winnerText: null
    },
    methods: {
        newGame() {
            this.winnerText = null;
            this.players.player1 = new Character('radu', 100);
            this.players.player2 = new Character('monster', 100);
            this.game = new Game(this.players.player1, this.players.player2);
            this.game.quit = this.quit;
        },
        getHpPercent(player) {
            return `${(player.health / player.maxHealth) * 100}%`;
        },
        quit() {
            this.game = null;

            let winnerName;

            if(this.players.player1.health > this.players.player2.health) {
                winnerName = this.players.player1.name;
            }
            else if(this.players.player1.health < this.players.player2.health) {
                winnerName = this.players.player2.name;
            }

            this.winnerText = `${winnerName} wins the game`;
        },
        getLogClass(i) {
            return i % 2 === 0 ? 'playerLog' : 'monsterLog';
        }
    },
    computed: {
    }
});