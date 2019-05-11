from flask import Flask, render_template, request, redirect
import requests

token = 'API key goes here'

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/profile_name', methods = ['POST'])
def profile_name():
    profile_name = request.form['profilename']

    url_player = "https://brawlapi.cf/api/player?tag="+profile_name
    headers = { 'Authorization': token, 'Accept-Encoding': 'gzip' }
    response = requests.request("GET", url_player, headers=headers)

    data = response.json()
    brawlers = data.get('brawlers')
    topThree = [0,1,2]
    for i in range(3):
        topThree[i] = brawlers[i]

    return render_template('profile_page.html', topThree=topThree, data=data)

@app.route('/leaderboards')
def leaderboards():
    return render_template('leaderboards.html')

if __name__ == '__main__':
    app.run(debug=True)