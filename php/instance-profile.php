<?php

require __DIR__ . '/vendor/autoload.php';

use Aws\Credentials\InstanceProfileProvider;
use Aws\Ec2\Ec2Client;

$client = new EC2Client([
    'credentials' => new InstanceProfileProvider(),
    'region'      => 'eu-west-1',
    'version'     => 'latest',
]);
var_dump($client->describeTags()); 
