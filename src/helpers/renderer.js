import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/components/Home';

export default () => {
    const content = renderToString(<Home />);
    return `
            <html>
                <head>
                    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
                    <meta name="HandheldFriendly" content="true">
                    <link rel="stylesheet" href="style.css">
                </head>
                <body>
                    <div id='root'>${content}</div>
                    <script src="bundle.js"></script>
                </body>
            </html>
            `;
};
