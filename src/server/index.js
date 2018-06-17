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
const config = require('../configs');

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
    console.log(content, 'content');
    
    // content = template_html.replace('<\!--REPLACE_ME-->', content)
    //     .replace('<\!--REPLACE_SCRIPT-->', `<script type="text/javascript" src="/bundle.main.js"></script>`);
    // console.log(content, 'content');

    res.send(content)

/*
    try {
        const css = new Set();

        // Enables critical path CSS rendering
        // https://github.com/kriasoft/isomorphic-style-loader
        const insertCss = (...styles) => {
            // eslint-disable-next-line no-underscore-dangle
            styles.forEach(style => css.add(style._getCss()));
        };

        // Universal HTTP client
        const fetch = createFetch(nodeFetch, {
            baseUrl: config.api.serverUrl,
            cookie: req.headers.cookie,
            schema,
            graphql,
        });

        // Global (context) variables that can be easily accessed from any React component
        // https://facebook.github.io/react/docs/context.html
        const context = {
            insertCss,
            fetch,
            // The twins below are wild, be careful!
            pathname: req.path,
            query: req.query,
        };

        const route = await router.resolve(context);

        if (route.redirect) {
            res.redirect(route.status || 302, route.redirect);
            return;
        }

        const data = { ...route };
        data.children = ReactDOM.renderToString(
            <App context={context}>{route.component}</App>,
        );
        data.styles = [{ id: 'css', cssText: [...css].join('') }];

        const scripts = new Set();
        const addChunk = chunk => {
            if (chunks[chunk]) {
                chunks[chunk].forEach(asset => scripts.add(asset));
            } else if (__DEV__) {
                throw new Error(`Chunk with name '${chunk}' cannot be found`);
            }
        };
        addChunk('client');
        if (route.chunk) addChunk(route.chunk);
        if (route.chunks) route.chunks.forEach(addChunk);

        data.scripts = Array.from(scripts);
        data.app = {
            apiUrl: config.api.clientUrl,
        };

        const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);
        res.status(route.status || 200);
        res.send(`<!doctype html>${html}`);
    } catch (err) {
        next(err);
    }
    */




});

app.listen(port, () => console.log(`Listening on port ${port}`));