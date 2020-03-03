import {FantasyPremierLeagueService} from "../services/fantasy-premier-league";

const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    const service = new FantasyPremierLeagueService();
    service.getBootstrap().then((data) => {
        const players = data.elements.map(player => {
            const transferRatio = player.transfers_in_event - player.transfers_out_event;

            // array of next five game difficulty score
            const upcomingDifficulty = data.teams.find(club => {
                // by game
                    // get game
                    // is it home or away
                    // compare attack vs defence by home or away
                    // compare defence vs attack by home or away
            });

            return {
                id: player.id,
                playerName: `${player.first_name} ${player.second_name}`,
                transferRatio,
                news: player.news,
                form: player.form,
                valueForm: player.value_form,
                expPoints: player.ep_next,
                thisPoints: player.ep_this,
                teamLogo: `https://fantasy.premierleague.com/dist/img/badges/badge_${player.team_code}_80.png`,
                pointsPerGame: player.points_per_game
            };
        });
        res.render('fantasy', {players});
    });
});

module.exports = router;
