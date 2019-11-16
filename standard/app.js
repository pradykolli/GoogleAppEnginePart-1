/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// [START gae_node_request_example]
let express = require('express')
var bodyParser = require('body-parser')
let app = express()
let url = require('url')
let port = process.env.PORT || 8080
// app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(bodyParser.json()); //here
app.use(bodyParser.urlencoded({ extended: true }));
let timesHelloed = 0;
app.get('/hello', (req, res) => {
    timesHelloed++;
    res.render('helloView')
})
app.get('/timesHelloed', (req, res) => {
    res.render('timesView',{timesHelloed:timesHelloed})
})
app.get('/resetTimesHelloed', (req, res) => {
    timesHelloed = 0
    res.render('timesView',{timesHelloed:timesHelloed})
})

// POST method route
app.post('/', function (req, res) {
  res.send('POST req to the homepage\n')
})

app.listen(port, () => console.log('Example app listening on port: '+port))