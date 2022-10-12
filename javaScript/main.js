/// music genre arrays
let Rock = [
  "../videos/Rock/CarNival_Of_Rust-Poets_Of_The_Fall.mp4",
  "../videos/Rock/Heaven-Bryan_Adams.mp4",
  "../videos/Rock/IT'S_My_Life-Bon_Jovi.mp4",
  "../videos/Rock/Manchester_Orchestra-The_Silence_Lyrics.mp4",
  "../videos/Rock/Metallica-Nothing_else_matter_lyrics.mp4",
  "../videos/Rock/Nightwish-The_Phantom_Of_The_Opera_with_lyrics.mp4",
  "../videos/Rock/She's_Gone-Steelheart.mp4",
  "../videos/Rock/Snuff-Corey_Taylor_Acoustic_lyrics.mp4",
  "../videos/Rock/Staind-Something_To_Remind_You_Lyrics.mp4",
  "../videos/Rock/Still_Loving_You-Scorpions.mp4",
  "../videos/Rock/Scorpions-When_The_Smoke_Is_Going_Down.mp4",
  "../videos/Rock/Under_Your_Scars-Godsmack_lyrics.mp4",
  "../videos/Rock/BrokenSeether-Amy_Lee.mp4",
  "../videos/Rock/Metallica-The_Unforgiven_II_Lyrics.mp4",
  "../videos/Rock/EvanescenceBring-Me_To_Life_lyrics.mp4",
  "../videos/Rock/five_finger_death_punch-wrong_side_of_heaven.mp4",
];
let Pop = [
  "../videos/Pop/Alexander_Rybak-Fairytale_LYRICS.mp4",
  "../videos/Pop/Ariana_Grande-One_Last_Time_Lyrics.mp4",
  "../videos/Pop/Backstreet_Boys-I_Want_It_That_Way.mp4",
  "../videos/Pop/Bruno_Mars-Just_The_Way_You_Are_Lyrics.mp4",
  "../videos/Pop/Maroon_5-Memories_Lyrics.mp4",
  "../videos/Pop/OneRepublic-Counting_Stars.mp4",
  "../videos/Pop/Rihanna-Diamonds_Lyrics.mp4",
  "../videos/Pop/Show_Me_The_Meaning-Backstreet_Boys-Lyrics.mp4",
];
let WorldWide = [
  "../videos/worldWide/Indila-Ainsi_Bas_La_Vida.mp4",
  "../videos/worldWide/Lara_Fabian-Je_Taime.mp4",
  "../videos/worldWide/Rauf&Faik-Cant_Buy_Me_Loving_Lyrics.mp4",
  "../videos/worldWide/Rauf&Faik-вечера_Official.mp4",
  "../videos/worldWide/Rauf&Faik-колыбельная_Lyrics.mp4",
  "../videos/worldWide/sting-desert_rose.mp4",
  "../videos/worldWide/Arash-Broken_Angel.mp4",
];
let Mix = [
  "../videos/Mix/Alan_Walker-Diamond_Heart-feat-Sophia_Somajo.mp4",
  "../videos/Mix/Alan_Walker-The_Spectre.mp4",
  "../videos/Mix/Dua_Lipa-Levitating-Feat-DaBab_Lyrics.mp4",
  "../videos/Mix/Imagine_Dragon_x_JID-Enemy_Lyrics.mp4",
  "../videos/Mix/Imagine_Dragons-Natural_Lyrics.mp4",
  "../videos/Mix/Lil_Wayne_feat-Bruno_Mars-Mirror-Lyrics.mp4",
  "../videos/Mix/passenger-let_her_go_lyrics.mp4",
  "../videos/Mix/The_Chainsmokers-Dont_Let_Me_Down_Lyrics-ft_Daya.mp4",
  "../videos/Mix/The_Script-Hall_Of_Fame_Lyrics.mp4",
];
let All = [...Rock, ...Pop, ...Mix];

//// form select input initial values
let selectType = "Video";
let selectGenre = "";

jQuery(() => {
/// if input extention type is a video ///
  if (selectType == "Video") {
    /// empty out the div from previous appended elements
    $(".music-list-div").empty();

    for (let i = 0; i < All.length; i++) {
      /// iterate over the array and append the elements 
      $(".music-list-div").append(`
      <div class="video_audio">
      <video width="400" height="400" controls>
<source src=${All[i]} type="video/mp4" class="sourceTag">
Your browser does not support the video tag.
</video></div>`);
    }
  }
//// if a video is on play and another one is played the previous video is paused ////
  $("audio,video").bind("play", function () {
    activated = this;
    $("audio,video").each(function () {
      if (this != activated) this.pause();
    });
  });
});


jQuery(() => {
  /// when select input type is changed take it value and store it inside the variable
  $("#select-type").on("change", () => {
    selectType = $("#select-type option:selected").val();
/// empty out previously appended elements and append new elements
    if (selectType == "Audio") {
      $(".music-list-div").empty();
      for (let i = 0; i < All.length; i++) {
        $(".music-list-div").append(`
        <div class="video_audio">
        <audio width="400" height="400" controls>
  <source src=${All[i]} type="video/mp4" class="sourceTag">
  Your browser does not support the video tag.
  </audio></div>`);
      }
    }
    
    if (selectType == "Video") {
      $(".music-list-div").empty();
      for (let i = 0; i < All.length; i++) {
        $(".music-list-div").append(`
        <div class="video_audio">
        <video width="400" height="400" controls>
  <source src=${All[i]} type="video/mp4" class="sourceTag">
  Your browser does not support the video tag.
  </video></div>`);
      }
    }
  });

  $("#select").on("change", () => {
    selectGenre = $("#select option:selected").val();

    if (selectType == "Video") {
      if (selectGenre == "All") {
        $(".music-list-div").empty();
        for (let i = 0; i < All.length; i++) {
          $(".music-list-div").append(`
          <div class="video_audio">
          <video width="400" height="400" controls>
    <source src=${All[i]} type="video/mp4" class="sourceTag">
    Your browser does not support the video tag.
    </video></div>`);
        }
      }

      if (selectGenre == "Pop") {
        $(".music-list-div").empty();
        for (let i = 0; i < Pop.length; i++) {
          $(".music-list-div").append(`
        <div class="video_audio">
        <video width="400" height="400" controls>
  <source src=${Pop[i]} type="video/mp4" class="sourceTag">
  Your browser does not support the video tag.
  </video></div>`);
        }
      }

      if (selectGenre == "Rock") {
        $(".music-list-div").empty();
        for (let i = 0; i < Rock.length; i++) {
          $(".music-list-div").append(`
        <div class="video_audio">
        <video width="400" height="400" controls>
  <source src=${Rock[i]} type="video/mp4" class="sourceTag">
  Your browser does not support the video tag.
  </video></div>`);
        }
      }

      if (selectGenre == "WorldWide") {
        $(".music-list-div").empty();
        for (let i = 0; i < WorldWide.length; i++) {
          $(".music-list-div").append(`
        <div class="video_audio">
        <video width="400" height="400" controls>
  <source src=${WorldWide[i]} type="video/mp4" class="sourceTag">
  Your browser does not support the video tag.
  </video></div>`);
        }
      }
      if (selectGenre == "Mix") {
        $(".music-list-div").empty();
        for (let i = 0; i < Mix.length; i++) {
          $(".music-list-div").append(`
        <div class="video_audio">
        <video width="400" height="400" controls>
  <source src=${Mix[i]} type="video/mp4" class="sourceTag">
  Your browser does not support the video tag.
  </video></div>`);
        }
      }
    }

    if (selectType == "Audio") {
      if (selectGenre == "All") {
        $(".music-list-div").empty();
        for (let i = 0; i < All.length; i++) {
          $(".music-list-div").append(`
      <div class="video_audio">
      <audio width="400" height="400" controls>
<source src=${All[i]} type="video/mp4" class="sourceTag">
Your browser does not support the video tag.
</audio></div>`);
        }
      }
      if (selectGenre == "Pop") {
        $(".music-list-div").empty();
        for (let i = 0; i < RockAudio.length; i++) {
          $(".music-list-div").append(`<audio width="400" height="400" controls>
          <source src=${Pop[i]} type="audio/mp3" class="sourceTag">
          Your browser does not support the video tag.
          </audio>`);
        }
      }
      if (selectGenre == "Rock") {
        $(".music-list-div").empty();
        for (let i = 0; i < Rock.length; i++) {
          $(".music-list-div").append(`<audio width="400" height="400" controls>
          <source src=${Rock[i]} type="audio/mp3" class="sourceTag">
          Your browser does not support the video tag.
          </audio>`);
        }
      }
      if (selectGenre == "WorldWide") {
        $(".music-list-div").empty();
        for (let i = 0; i < WorldWide.length; i++) {
          $(".music-list-div").append(`<audio width="400" height="400" controls>
          <source src=${WorldWide[i]} type="audio/mp3" class="sourceTag">
          Your browser does not support the video tag.
          </audio>`);
        }
      }
      if (selectGenre == "Mix") {
        $(".music-list-div").empty();
        for (let i = 0; i < Mix.length; i++) {
          $(".music-list-div").append(`<audio width="400" height="400" controls>
          <source src=${Mix[i]} type="audio/mp3" class="sourceTag">
          Your browser does not support the video tag.
          </audio>`);
        }
      }
    }

    $("audio,video").bind("play", function () {
      activated = this;
      $("audio,video").each(function () {
        if (this != activated) this.pause();
      });
    });
  });
});



// (window).scroll(function() {
//   var top_of_element = $("video").offset().top;
//   var bottom_of_element = $("video").offset().top + $("video").outerHeight();
//   var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
//   var top_of_screen = $(window).scrollTop();

//   if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
//       // the element is visible, do something
//       $('video').exitPictureInPicture();
//   } else {
//       // the element is not visible, do something else
//       $('video').requestPictureInPicture();
//   }
// });$
// $(window).on('resize scroll', function() {
//   if ($('video').isInViewport() && ('video').on('play')) {
//     HTMLVideoElement.autoPictureInPicture
//   } else {
//     HTMLVideoElement.autoPictureInPicture
//       // do something else
//   }
// });