import React from 'react';
import PropTypes from 'prop-types';
import serialize from 'serialize-javascript';

/* eslint-disable react/no-danger */

class Html extends React.Component {
    static propTypes = {
        helmet: PropTypes.object,
        // description: PropTypes.string,
        // styles: PropTypes.arrayOf(
        //   PropTypes.shape({
        //     id: PropTypes.string.isRequired,
        //     cssText: PropTypes.string.isRequired,
        //   }).isRequired,
        // ),
        styles: PropTypes.arrayOf(PropTypes.string.isRequired),
        scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
        app: PropTypes.object, // eslint-disable-line
        children: PropTypes.string.isRequired,
        initial_state: PropTypes.object
    };

    static defaultProps = {
        styles: [],
        scripts: [],
    };

    render() {
        const {helmet, styles, scripts, app, children, initial_state} = this.props;
        return (
            <html className="no-js" lang="en">
            <head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
                {helmet.title.toComponent()}
                {helmet.base.toComponent()}
                {helmet.meta.toComponent()}
                {helmet.link.toComponent()}
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                {scripts.map(script => (
                    <link key={script} rel="preload" href={script} as="script"/>
                ))}
                {styles.map(style => (
                    <link key={style} rel="stylesheet" href={style}/>
                ))}
            </head>
            <body>
            <div id="root" suppressHydrationWarning dangerouslySetInnerHTML={{__html: children}}/>
            {/*<script*/}
            {/*dangerouslySetInnerHTML={{__html: `window.App=${serialize(app)}`}}*/}
            {/*/>*/}
            <script
                dangerouslySetInnerHTML={{__html: `window.__INITIAL_STATE__ = ${serialize(initial_state)}`}}
            />
            {scripts.map(script => <script key={script} src={script}/>)}
            {/*{config.analytics.googleTrackingId && (
            <script
              dangerouslySetInnerHTML={{
                __html:
                  'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' +
                  `ga('create','${
                    config.analytics.googleTrackingId
                  }','auto');ga('send','pageview')`,
              }}
            />
          )}
          {config.analytics.googleTrackingId && (
            <script
              src="https://www.google-analytics.com/analytics.js"
              async
              defer
            />
          )}*/}
            </body>
            </html>
        );
    }
}

export default Html;
