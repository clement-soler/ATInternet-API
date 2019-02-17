const request = new XMLHttpRequest();

var site = "xxxxxx";
    startdate = "2019-02-04";
    enddate = "2019-02-08";
    querystring = "?&columns={d_device_type,m_visits}&sort={-m_visits}&space={s:"+site+"}&period={D:{start:'"+startdate+"',end:'"+enddate+"'}}&max-results=50&page-num=1";
    format = "json"

    user = "email";
    pass = "password";

const url='https://apirest.atinternet-solutions.com/data/v2/'+format+'/getData'+querystring;

request.open("GET", url);
request.setRequestHeader("Authorization", "Basic " + btoa(user+":"+pass));
request.send(null);

request.addEventListener('readystatechange', function() {
    if (request.readyState === request.DONE) {
    	//Text response
    	console.log(request.responseText);
    	//Array
		var json = request.responseText;
		var result = JSON.parse(json);
		console.log(result);
    }
});