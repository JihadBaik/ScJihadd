
const chalk = require("chalk");

const figlet = require("figlet");

const inquirer = require("inquirer");

const request = require("@i-scrapper/plugins-request");

const questions = [

    {

        type: "input",

        name: "authorization",

        message: color("By Jihad Authorization keys:"),

        prefix: `${color("[", "redBright")}+${color("]", "redBright")}`,

        suffix: "~",

        validate: function (input) {

            const done = this.async();

            if (!input) {

                done('You need to provide Authorization keys');

                return false;

            }

            let authParse;

            try {

                authParse = JSON.parse(input);

            } catch (error) {

                authParse = error.message;

            }

            if (typeof authParse != "object") {

                done("You need to provide Authorization keys as Object");

                return false;

            }

            return done(null, true);

        },

    },

    {

        type: "list",

        name: "round",

        message: color("By Steven Authorization keys taken at 'Round':"),

        prefix: `${color("[", "redBright")}+${color("]", "redBright")}`,

        suffix: "~",

        choices: ["Stage 1", "Stage 2", "Stage 3"],

        filter: (value) => {

            return {

                "Stage 1": 1,

                "Stage 2": 2,

                "Stage 3": 3,

                "Stage 4": 4,

            }[value];

        },

    },

    {

        type: "input",

        name: "interval",

        message: color("Interval Delay:"),

        prefix: `${color("[", "redBright")}+${color("]", "redBright")}`,

        suffix: "~",

        default: 1000,

        validate: function (input) {

            const done = this.async();

            if (input && isNaN(input)) {

                done('You need to provide a number');

                return false;

            }

            return done(null, true);

        },

    }

];

const asciiText = figlet.textSync("VIP NEW", {

    font: 'Graffiti',
