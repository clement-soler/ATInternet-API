<?php

$request = new HttpRequest();
$request->setUrl('https://apirest.atinternet-solutions.com/data/v2/json/getData');
$request->setMethod(HTTP_METH_GET);

$request->setQueryData(array(
  'columns' => '{d_device_type,m_visits}',
  'sort' => '{-m_visits}',
  'space' => '{s:xxxxxx}', //replace xxxxxx by your ID Site
  'period' => '{D:{start:%272019-02-04%27,end:%272019-02-08%27}}',
  'max-results' => '50',
  'page-num' => '1',
  '' => ''
));

$user = "email";
$pass = "password";

$request->setHeaders(array(
  'cache-control' => 'no-cache',
  'Authorization' => "Authorization: Basic " . base64_encode("$user:$pass")  
));

try {
  $response = $request->send();
  echo $response->getBody();
} catch (HttpException $ex) {
  echo $ex;
}

?>

