from flask import Flask, render_template, request, redirect
import requests

token = 'Api token goes here'

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/profile_name', methods = ['POST'])
def profile_name():
    profile_name = request.form['profilename']

    url_player = " https://api.brawlapi.cf/v1/player?tag="+profile_name
    headers = { 'Authorization': token, 'Accept-Encoding': 'gzip' }
    response = requests.request("GET", url_player, headers=headers)

    data = response.json()
    brawlers = data.get('brawlers')
    topThree = [0,1,2]
    for i in range(3):
        topThree[i] = brawlers[i]
    image = './static/images/colt.png'

    return render_template('profile_page.html', topThree=topThree, data=data, image=image)

@app.route('/leaderboards')
def leaderboards():
    
    url_board = "https://api.brawlapi.cf/v1/leaderboards/players"
    headers = { 'Authorization': token, 'Accept-Encoding': 'gzip' }
    response = requests.request("GET", url_board, headers=headers)

    ldata = response.json()
    names = []
    for item in ldata:
        names.append(item.get('name'))
    

    return render_template('leaderboards.html', ldata=ldata, names=names)

if __name__ == '__main__':
    app.run(debug=True)