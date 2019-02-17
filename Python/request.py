import requests

auth = ('email','password')

site = "xxxxxx"
startdate = "2019-02-04"
enddate = "2019-02-08"
format = "json"

querystring = "?&columns={d_device_type,m_visits}&sort={-m_visits}&space={s:"+site+"}&period={D:{start:'"+startdate+"',end:'"+enddate+"'}}&max-results=50&page-num=1"

response = requests.get("https://apirest.atinternet-solutions.com/data/v2/"+format+"/getData", auth=auth, params=querystring)
data = response.text
print(data)