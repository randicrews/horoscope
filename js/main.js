
document.getElementById("tellMe").addEventListener('click', reveal)

function reveal(e){
    // 30 DAYS ARE SEP46 & NOV EVRYBODY ELSE 31 EXCEPT FEB
    e.preventDefault()
    let month = Number(document.getElementById("bdayMonth").value)
    let day = Number(document.getElementById("bdayDay").value)

    console.log(month, day)

    if /*Aquarius (Water Bearer):120–February 18*/((month === 1 && day > 19 && day < 32) || (month === 2 && day > 0 && day < 19))  {
        document.getElementById("uGoHere").innerText = 'Aquarius: The Water Bearer. They\'re the quirky and unconventional friend who\'s always thinking outside the box and pushing boundaries. But sometimes they can be a bit aloof or detached.'
    } else if /*Pisces (Fish):219–March 20*/((month === 2 && day > 18 && day < 29)||(month === 3 && day > 0 && day < 21)){
        document.getElementById("uGoHere").innerText = 'Pisces: The Fish. They\'re like your sensitive and creative friend who\'s always in tune with their emotions and the emotions of others. But sometimes they can be a bit dreamy or unrealistic.'
    } else if /*Aries (Ram):321–April 19*/((month === 3 && day > 20 && day < 32)||(month === 4 && day > 0 && day < 20)){
        document.getElementById("uGoHere").innerText = 'Aries: The Ram. They\'re like that friend who\'s always down for a wild adventure, ready to take on any challenge. But watch out, they can be a bit hot-headed at times!'
    } else if /*Taurus (Bull):420–May 20*/((month === 4 && day > 19 && day < 31 )||(month === 5 && day > 0 && day < 21)){
        document.getElementById("uGoHere").innerText = 'Taurus: The Bull. They\'re like your friend who loves the finer things in life, always up for a good meal or a cozy night in. Just be careful not to mess with their possessions or they might get a little possessive.'
    } else if /*Gemini (Twins):521–June 21*/((month === 5 && day > 20 && day < 31 )||(month === 6 && day > 0 && day < 22)){
        document.getElementById("uGoHere").innerText = 'Gemini: The Twins. They\'re the ultimate social butterfly, always flitting from one group to another and never afraid to strike up a conversation. But sometimes they can be a bit indecisive or scatterbrained.'
    } else if /*Cancer (Crab):622–July 22*/((month === 6 && day > 21 && day < 31 )||(month === 7 && day > 0 && day < 23)){
        document.getElementById("uGoHere").innerText = 'Cancer: The Crab. They\'re like that friend who\'s always there to lend a listening ear, full of empathy and compassion. Just be careful not to step on their toes or they might retreat back into their shell.'
    } else if /*Leo (Lion):723–August 22*/((month === 7 && day > 22 && day < 31 )||(month === 8 && day > 0 && day < 23)){
        document.getElementById("uGoHere").innerText = 'Leo: The Lion. They\'re the life of the party, always commanding attention and exuding confidence. But be prepared for a bit of drama or diva-like behavior every now and then.'
    } else if /*Virgo (Virgin):823–September 22*/((month === 8 && day > 22 && day < 31 )||(month === 9 && day > 0 && day < 23)){
        document.getElementById("uGoHere").innerText = 'Virgo: The Virgin. They\'re like your hyper-organized friend who always has their life together and never forgets a detail. But sometimes they can be a bit critical or nitpicky.'
    } else if /*Libra (Balance):923–October 23*/((month === 9 && day > 22 && day < 31 )||(month === 10  && day > 0 && day < 24)){
        document.getElementById("uGoHere").innerText = 'Libra: The Scales. They\'re the ultimate peacemaker, always striving for balance and harmony in their relationships. But sometimes they can be a bit indecisive or conflict-avoidant.'
    } else if /*Scorpio (Scorpion):1024–November 21*/((month === 10  && day > 23 && day < 31 )||(month === 11  && day > 0 && day < 22)){
        document.getElementById("uGoHere").innerText = 'Scorpio: The Scorpion. They\'re the mysterious and intense friend who always seems to have a hidden agenda. But once you earn their trust, they\'re fiercely loyal and passionate.'
    } else if /*Sagittarius (Archer):1122–December 21*/((month === 11  && day > 21 && day < 31 )||(month === 12  && day > 0 && day < 22)){
        document.getElementById("uGoHere").innerText = 'Sagittarius: The Archer. They\'re like your free-spirited friend who\'s always on the go, seeking out new experiences and adventures. But sometimes they can be a bit reckless or blunt.'
    } else if /*Capricornus (Goat):1222–January 19*/((month === 12  && day > 21 && day < 31 )||(month === 1 && day > 0 && day < 20)){
        document.getElementById("uGoHere").innerText = 'Capricorn: The Goat. They\'re like that friend who\'s always working hard and striving for success, no matter what it takes. But sometimes they can be a bit pessimistic or overly serious.'
    }
    
}




// if /*Aquarius (Water Bearer):120–February 18*/((month === 1 || month === 1 && day > 19 && day < 32) || (month === 2 || month === 2 && day > 0 && day < 19)) {
//     document.getElementById("uGoHere").innerText = 'aqua' 
// } else if /*Pisces (Fish):219–March 20*/((month === 2 || 2 && day > 18 && day < 29)||(month === 3 || month === 3 && day > 0 && day < 21)){
//     document.getElementById("uGoHere").innerText = 'pisces'
// } else if /*Aries (Ram):321–April 19*/((month === 3 || month === 3 && day > 20 && day < 32)||(month === 4 || month === 4 && day > 0 && day < 20)){
//     document.getElementById("uGoHere").innerText = 'aries'
// } else if /*Taurus (Bull):420–May 20*/((month === 4 || month === 4 && day > 19 && day < 31 )||(month === 5 || month === 5 && day > 0 && day < 21)){
//     document.getElementById("uGoHere").innerText = 'taurus'
// } else if /*Gemini (Twins):521–June 21*/((month === 5 || month === 5 && day > 20 && day < 31 )||(month === 6 || month === 6 && day > 0 && day < 22)){
//     document.getElementById("uGoHere").innerText = 'gemini'
// } else if /*Cancer (Crab):622–July 22*/((month === 6 || month === 6 && day > 21 && day < 31 )||(month === 7 || month === 7 && day > 0 && day < 23)){
//     document.getElementById("uGoHere").innerText = 'cancer'
// } else if /*Leo (Lion):723–August 22*/((month === 7 || month === 7 && day > 22 && day < 31 )||(month === 8 || month === 8 && day > 0 && day < 23)){
//     document.getElementById("uGoHere").innerText = 'leo'
// } else if /*Virgo (Virgin):823–September 22*/((month === 8 || month === 8 && day > 22 && day < 31 )||(month === 9 || month === 9 && day > 0 && day < 23)){
//     document.getElementById("uGoHere").innerText = 'virgo'
// } else if /*Libra (Balance):923–October 23*/((month === 9 || month === 9 && day > 22 && day < 31 )||(month === 10 || month === 10 && day > 0 && day < 24)){
//     document.getElementById("uGoHere").innerText = 'libra'
// } else if /*Scorpio (Scorpion):1024–November 21*/((month === 10 || month === 10 && day > 23 && day < 31 )||(month === 11 || month === 11 && day > 0 && day < 22)){
//     document.getElementById("uGoHere").innerText = 'scorpio'
// } else if /*Sagittarius (Archer):1122–December 21*/((month === 11 || month === 11 && day > 21 && day < 31 )||(month === 12 || month === 12 && day > 0 && day < 22)){
//     document.getElementById("uGoHere").innerText = 'sag'
// } else if /*Capricornus (Goat):1222–January 19*/((month === 12 || month === 12 && day > 21 && day < 31 )||(month === 1 || month === 1 && day > 0 && day < 20)){
//     document.getElementById("uGoHere").innerText = 'cap'
// }