function groomsMenLeaderBoard() {

    // random number generator
    function getRandomArbitrary(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
    }

    // data
    var groomsMen = [
        {
            name: "Corey D",
            score: getRandomArbitrary(0, 100)
        },
        {
            name: "Judge",
            score: getRandomArbitrary(0, 100)
        },
        {
            name: "Maha",
            score: getRandomArbitrary(0, 100)
        },
        {
            name: "J-Boogie",
            score: getRandomArbitrary(0, 100)
        }, 
        {
            name: "B-Doyle",
            score: getRandomArbitrary(0, 100)
        },
        {
            name: "Nate Dawg",
            score: getRandomArbitrary(-100000, 0)
        }
    ];

    // sort based on score
    groomsMen.sort(function (a, b) {
        return b.score - a.score;
    });


    // iterate through sorted data
    groomsMen.forEach(function(groomsMan, index){
        var leaderTable = document.querySelector('.table--leaber-board tbody');
        var name = groomsMan.name;
        var score = groomsMan.score;
        
        if (leaderTable) {
            if (index === 0) {
                leaderTable.innerHTML += '<tr class="positive"><td>' + name + '</td><td>' + score.toLocaleString() + '</td><td>Yes</td></tr>';
            } else if (index === groomsMen.length-1) {
                leaderTable.innerHTML += '<tr class="negative"><td>' + name + '</td><td>' + score.toLocaleString() + '</td><td>Never</td></tr>';
            } else {
                leaderTable.innerHTML += '<tr><td>' + name + '</td><td>' + score.toLocaleString() + '</td><td>Not Yet</td></tr>';
            }
        }

        
    });
}

groomsMenLeaderBoard();