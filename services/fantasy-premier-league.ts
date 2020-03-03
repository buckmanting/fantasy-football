import {FantasyFootballBootstrap} from "../models/fantasy-football-bootstrap";
import * as https from 'https';
import {IncomingMessage} from "http";

const BASE_URL = 'https://fantasy.premierleague.com/';
const staticBootstrapEndpoint = '/api/bootstrap-static/';
const teamHistory = '{team_id}/history/';

export class FantasyPremierLeagueService {
    public getBootstrap(): Promise<FantasyFootballBootstrap> {
        return new Promise((resolve, reject) => {
            const request = https.request({
                host: 'fantasy.premierleague.com',
                method: 'GET',
                path: staticBootstrapEndpoint
            }, (res: IncomingMessage) => {
                const body = [];
                res.on('data', function (data) {
                    body.push(data);
                });

                res.on('end', function() {
                    let result: FantasyFootballBootstrap;
                    try {
                        result = JSON.parse(Buffer.concat(body).toString());
                    } catch(e) {
                        reject(e);
                    }
                    resolve(result);
                });

            }).on('error', function (e) {
                reject(e);
            });

            request.end();
        });
    }
}
