import brawlstats
import asyncio
token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNjb3JkX3VzZXJfaWQiOiIxOTE5NjMyNjE0MTQwMTQ5ODYiLCJyZWFzb24iOiI0MDdfcHJvamVjdCIsInZlcnNpb24iOjEsImlhdCI6MTU1NjczNDM5Mn0.KBm8LkjzJj-8RH1YQKeNsHUOM9ruebH44cCYe_-h5Pg'
client = brawlstats.core.Client(token)

try:
    player = client.get_profile('889PJJLLL')
    leaderboard = client.get_leaderboard('players', count=5)  # gets top 5 players
    brawlers = player.brawlers

    print(player.trophies)
    print(player.name)

    for player in leaderboard:
          print(player.name, player.position, player.exp_level)

    for brawler in brawlers:
        print(brawler.name)
except brawlstats.ServerError:
    print('I couldn\'t fetch your profile.')