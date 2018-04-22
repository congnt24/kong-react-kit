const express = require('express');
// let Redux = require('redux');
// let Provider = require('react-redux').Provider;
import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {matchRoutes, renderRoutes} from 'react-router-config'
import main_routes from "../routes/index";


const port = process.env.PORT || 3000;
const app = express();

function reducer(state) {
    return state;
}

// express will serve up index.html if it doesn't recognize the route
app.get('*', (req, res) => {
    let context = {};
    const content = renderToString(
        <StaticRouter location={req.url} context={context}>
            {renderRoutes(main_routes)}
        </StaticRouter>
    );
    res.send(content)
});

app.listen(port, () => console.log(`Listening on port ${port}`));