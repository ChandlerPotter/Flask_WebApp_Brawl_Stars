import requests

token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNjb3JkX3VzZXJfaWQiOiIxOTE5NjMyNjE0MTQwMTQ5ODYiLCJyZWFzb24iOiI0MDdfcHJvamVjdCIsInZlcnNpb24iOjEsImlhdCI6MTU1NjczNDM5Mn0.KBm8LkjzJj-8RH1YQKeNsHUOM9ruebH44cCYe_-h5Pg'

form = cgi.FieldStorage()
search_term = form.getvalue('profilename')
print(search_term)


def get_data(str_player):
    url_player = "https://brawlapi.cf/api/player?tag="+str_player

    headers = { 'Authorization': token, 'Accept-Encoding': 'gzip' }

    response = requests.request("GET", url_player, headers=headers)

    data = response.json()
    name = data['name']
    trophies = data['trophies']
    print(name, trophies)
    for i in range(len(data['brawlers'])):
        print(data['brawlers'][i])

get_data('889PJJLLL')