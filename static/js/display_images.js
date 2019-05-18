
function load() {
    document.getElementById('image_1').src = display_0();
    document.getElementById('image_2').src = display_1();
    document.getElementById('image_3').src = display_2();
}

function display_0() {
    return (first_name == 'Colt')     ? "static/images/brawlers/colt_profile.png"
         : (first_name == 'Bull')     ? "static/images/brawlers/bull_profile.png"
         : (first_name == 'El Primo') ? "static/images/brawlers/elprimo_profile.png"
         : (first_name == 'Shelly')   ? "static/images/brawlers/shelly_profile.png"
         : (first_name == 'Nita')     ? "static/images/brawlers/nita_profile.png"
         : (first_name == 'Bo')       ? "static/images/brawlers/bull_profile.png"
         : (first_name == 'Barley')   ? "static/images/brawlers/elprimo_profile.png"
         : (first_name == 'Brock')    ? "static/images/brawlers/shelly_profile.png"
         : (first_name == 'Rico')     ? "static/images/brawlers/nita_profile.png"
         : (first_name == 'Dynamike') ? "static/images/brawlers/bull_profile.png"
         : (first_name == 'Pam')      ? "static/images/brawlers/elprimo_profile.png"
         : (first_name == 'Crow')     ? "static/images/brawlers/shelly_profile.png"
         : (first_name == 'Spike')    ? "static/images/brawlers/nita_profile.png"
         : (first_name == 'Darryl')   ? "static/images/brawlers/bull_profile.png"
         : (first_name == 'Frank')    ? "static/images/brawlers/elprimo_profile.png"
         : (first_name == 'Jessie')   ? "static/images/brawlers/shelly_profile.png"
         : (first_name == 'Leon')     ? "static/images/brawlers/nita_profile.png"
         : (first_name == 'Mortis')   ? "static/images/brawlers/bull_profile.png"
         : (first_name == 'Penny')    ? "static/images/brawlers/elprimo_profile.png"
         : (first_name == 'Piper')    ? "static/images/brawlers/shelly_profile.png"
         : (first_name == 'Poco')     ? "static/images/brawlers/nita_profile.png"
         : (first_name == 'Tara')     ? "static/images/brawlers/bull_profile.png"
         : (first_name == 'Gene')     ? "static/images/brawlers/gene_profile.png" 
         : (first_name == 'Carl')     ? "static/images/brawlers/carl_profile.png" 
         : (first_name == 'Rosa')     ? "static/images/brawlers/rosa_profile.png" 
         :'nothing.png';
}
function display_1() {
    return (second_name == 'Colt')     ? "static/images/brawlers/colt_profile.png"
         : (second_name == 'Bull')     ? "static/images/brawlers/bull_profile.png"
         : (second_name == 'El Primo') ? "static/images/brawlers/elprimo_profile.png"
         : (second_name == 'Shelly')   ? "static/images/brawlers/shelly_profile.png"
         : (second_name == 'Nita')     ? "static/images/brawlers/nita_profile.png"
         : (second_name == 'Bo')       ? "static/images/brawlers/bull_profile.png"
         : (second_name == 'Barley')   ? "static/images/brawlers/elprimo_profile.png"
         : (second_name == 'Brock')    ? "static/images/brawlers/shelly_profile.png"
         : (second_name == 'Rico')     ? "static/images/brawlers/nita_profile.png"
         : (second_name == 'Dynamike') ? "static/images/brawlers/bull_profile.png"
         : (second_name == 'Pam')      ? "static/images/brawlers/elprimo_profile.png"
         : (second_name == 'Crow')     ? "static/images/brawlers/shelly_profile.png"
         : (second_name == 'Spike')    ? "static/images/brawlers/nita_profile.png"
         : (second_name == 'Darryl')   ? "static/images/brawlers/bull_profile.png"
         : (second_name == 'Frank')    ? "static/images/brawlers/elprimo_profile.png"
         : (second_name == 'Jessie')   ? "static/images/brawlers/shelly_profile.png"
         : (second_name == 'Leon')     ? "static/images/brawlers/nita_profile.png"
         : (second_name == 'Mortis')   ? "static/images/brawlers/bull_profile.png"
         : (second_name == 'Penny')    ? "static/images/brawlers/elprimo_profile.png"
         : (second_name == 'Piper')    ? "static/images/brawlers/shelly_profile.png"
         : (second_name == 'Poco')     ? "static/images/brawlers/nita_profile.png"
         : (second_name == 'Tara')     ? "static/images/brawlers/bull_profile.png"
         : (second_name == 'Gene')     ? "static/images/brawlers/gene_profile.png" //need img
         : (second_name == 'Carl')     ? "static/images/brawlers/carl_profile.png"  //.
         : (second_name == 'Rosa')     ? "static/images/brawlers/rosa_profile.png" //.
         :'nothing.png';
}
function display_2() {
    return (third_name == 'Colt')     ? "static/images/brawlers/colt_profile.png"
         : (third_name == 'Bull')     ? "static/images/brawlers/bull_profile.png"
         : (third_name == 'El Primo') ? "static/images/brawlers/elprimo_profile.png"
         : (third_name == 'Shelly')   ? "static/images/brawlers/shelly_profile.png"
         : (third_name == 'Nita')     ? "static/images/brawlers/nita_profile.png"
         : (third_name == 'Bo')       ? "static/images/brawlers/bull_profile.png"
         : (third_name == 'Barley')   ? "static/images/brawlers/elprimo_profile.png"
         : (third_name == 'Brock')    ? "static/images/brawlers/shelly_profile.png"
         : (third_name == 'Rico')     ? "static/images/brawlers/nita_profile.png"
         : (third_name == 'Dynamike') ? "static/images/brawlers/bull_profile.png"
         : (third_name == 'Pam')      ? "static/images/brawlers/elprimo_profile.png"
         : (third_name == 'Crow')     ? "static/images/brawlers/shelly_profile.png"
         : (third_name == 'Spike')    ? "static/images/brawlers/nita_profile.png"
         : (third_name == 'Darryl')   ? "static/images/brawlers/bull_profile.png"
         : (third_name == 'Frank')    ? "static/images/brawlers/elprimo_profile.png"
         : (third_name == 'Jessie')   ? "static/images/brawlers/shelly_profile.png"
         : (third_name == 'Leon')     ? "static/images/brawlers/nita_profile.png"
         : (third_name == 'Mortis')   ? "static/images/brawlers/bull_profile.png"
         : (third_name == 'Penny')    ? "static/images/brawlers/elprimo_profile.png"
         : (third_name == 'Piper')    ? "static/images/brawlers/shelly_profile.png"
         : (third_name == 'Poco')     ? "static/images/brawlers/nita_profile.png"
         : (third_name == 'Tara')     ? "static/images/brawlers/bull_profile.png"
         : (third_name == 'Gene')     ? "static/images/brawlers/gene_profile.png" //need img
         : (third_name == 'Carl')     ? "static/images/brawlers/carl_profile.png"  //.
         : (third_name == 'Rosa')     ? "static/images/brawlers/rosa_profile.png" //.
         :'nothing.png';
}