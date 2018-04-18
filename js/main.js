;(function(){
	"use strict";

    var playList = [{
            author: "led zeppelin",
            song: "stairway to heaven",
            duration: "2:03"
        },
        {
            author: "queen",
            song: "bohemian rhapsody",
            duration: "2:30"
        },
        {
            author: "lynyrd skynyrd",
            song: "free bird",
            duration: "1:56"
        },
        {
            author: "deep purple",
            song: "smoke on the water",
            duration: "3:03"
        },
        {
            author: "jimi hendrix",
            song: "all along the watchtower",
            duration: "2:53"
        },
        {
            author: "AC/DC",
            song: "back in black",
            duration: "2:43"
        },
        {
            author: "queen",
            song: "we will rock you",
            duration: "2:13"            
        },
        {
            author: "metallica",
            song: "enter sandman",
            duration: "3:03"            
        },
        {
            author: "niva",
            song: "kol",
            duration: "2:07"            
        }
    ];

    var playSong = document.querySelector('.ba-playlist');
    var playSongList = document.createElement('ul');
    playSong.appendChild(playSongList);

    for (var i = 0; i < playList.length; i++) {
        var playListLi = document.createElement('li');
        playListLi.classList.add('ba-list');
        playSongList.appendChild(playListLi);

        var durationSongAuthor = document.createElement('div');
        durationSongAuthor.classList.add('ba-dur-author');
        playListLi.appendChild(durationSongAuthor);


        var durationSongName = document.createElement('div');
        durationSongName.classList.add('ba-songname');
        playListLi.appendChild(durationSongName);
        durationSongName.innerHTML = playList[i].song;

        var durationSong = document.createElement('span');
        durationSong.classList.add('ba-duration');
        durationSongAuthor.appendChild(durationSong);
        durationSong.innerHTML = playList[i].duration;

        var author = document.createElement('span');
        author.classList.add('ba-author');
        durationSongAuthor.appendChild(author);
        author.innerHTML = playList[i].author;

        
             
    }


	
// 
//     var quizForm = document.querySelector('.ba-quiz-form');
//     var quizList = document.createElement('ol');
//     quizForm.appendChild(quizList);

//     for (var i = 0; i < questions.length; i++) {
//     	var questionLi = document.createElement('li');
//     	var questionInput = document.createElement('input');

// 		questionLi.innerHTML = questions[i][0];
// 		questionInput.classList.add('ba-answer');
//     	questionInput.setAttribute('type','number');
//     	questionInput.setAttribute('required','required');
    	
//     	questionLi.appendChild(questionInput);

//     	quizList.appendChild(questionLi);
//     }

//     quizForm.addEventListener('submit', checkResults);
//     function checkResults(event) {
//     	event.preventDefault();

//     	var userAnswers = document.querySelectorAll('.ba-answer');
//     	var correctAnswers = 0;

//     	for (var i = 0; i < questions.length; i++) {
//     		if(questions[i][1] == userAnswers[i].value){
//     			correctAnswers++;
//     		}
//     	}
//     	document.querySelector('.ba-result').innerText = correctAnswers + ' Correct Answers';

//     }


})();
