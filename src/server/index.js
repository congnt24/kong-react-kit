const express = require('express');
import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config'
import main_routes from "../routes/index";
import {Provider} from 'react-redux';
import store from "../client/redux/store";
const port = process.env.PORT || 3000;
const app = express();
const fs = require('fs');
const path = require('path');

function reducer(state) {
    return state;
}

let template_html = fs.readFileSync(path.resolve(__dirname, '../../public/index.html'), 'utf-8');

// express will serve up index.html if it doesn't recognize the route
app.get('*', (req, res) => {
    let context = {};
    let content = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url} context={context}>
                {renderRoutes(main_routes)}
            </StaticRouter>
        </Provider>
    );
    content = template_html.replace('<\!--REPLACE_ME-->', content).replace('<\!--REPLACE_SCRIPT-->', `<script type="text/javascript" src="/Volumes/Data/FE/react_demo_01/webpack/build/bundle.main.js"></script>`);
    console.log(content, 'content');

    res.send(content)
});

app.listen(port, () => console.log(`Listening on port ${port}`));