const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 9915;

app.use(bodyParser.json());

// Endpoint to receive PagerDuty webhooks
app.post('/pagerduty-icinga-integration', (req, res) => {

  console.log('Received JSON:', JSON.stringify(req.body, null, 2));

  // Send back the received JSON as the response
  res.status(200).json(req.body);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});