var AWS = require('aws-sdk');

AWS.config.region = 'eu-central-1';
AWS.config.apiVerison = 'latest';
AWS.config.credentials = new AWS.EC2MetadataCredentials({
  httpOptions: { timeout: 5000 }
});

AWS.config.credentials.get(function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('authorized!');

  var ec2 = new AWS.EC2();
  ec2.describeTags(function (err, data) {
    console.log(err, data);
  });
})
