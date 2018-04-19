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
    ];
        var playListEl = document.getElementById('playlist'),
        playListTmpl = document.getElementById('playlist-li').innerHTML,
        playListHTML = '';

    console.log(playListTmpl);

    playList.forEach(function (item) {

        playListHTML += playListTmpl
            .replace(/{{author}}/ig, item.author)
            .replace(/{{duration}}/ig, item.duration)
            .replace(/{{song}}/ig, item.song);
    });

    playListEl.innerHTML = playListHTML;





        // Alternative decision
    // var playSong = document.querySelector('.ba-playlist');
    // var playSongList = document.createElement('ul');
    // playSong.appendChild(playSongList);

    // for (var i = 0; i < playList.length; i++) {
    //     var playListLi = document.createElement('li');
    //     playListLi.classList.add('ba-list');
    //     playSongList.appendChild(playListLi);

    //     var durationSongAuthor = document.createElement('div');
    //     durationSongAuthor.classList.add('ba-dur-author');
    //     playListLi.appendChild(durationSongAuthor);


    //     var durationSongName = document.createElement('div');
    //     durationSongName.classList.add('ba-songname');
    //     playListLi.appendChild(durationSongName);
    //     durationSongName.innerHTML = playList[i].song;

    //     var durationSong = document.createElement('span');
    //     durationSong.classList.add('ba-duration');
    //     durationSongAuthor.appendChild(durationSong);
    //     durationSong.innerHTML = playList[i].duration;

    //     var author = document.createElement('span');
    //     author.classList.add('ba-author');
    //     durationSongAuthor.appendChild(author);
    //     author.innerHTML = playList[i].author;

        
             
    


	



})();
