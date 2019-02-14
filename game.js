        function randomnumber(min, max) {
          return (Math.floor(Math.random() * (max - min + 1) + min))
        }
        var crystalType = [{
            name: 'Red',
            image: "assets/images/red.png",
            value: 0
          },
          {
            name: 'blue',
            image: "assets/images/blue.png",
            value: 0
          },
          {
            name: 'purple',
            image: "assets/images/purple.png",
            value: 0
          },
          {
            name: 'green',
            image: "assets/images/green.png",
            value: 0
          }
        ]

        var targetNumber;
        var imageCrystal;
        var counter = mywins = mylooses = lastScore = 0;

        function startGame() {
          counter = 0;
          targetNumber = randomnumber(19, 120);
          displayScreen();
          resetCrystalValues();
        }

        function resetCrystalValues() {
          for (var i = 0; i < crystalType.length; i++) {
            let valueCheck = randomnumber(1, 12);
            $('img[crystal-name~=' + crystalType[i].name + ']').attr("data-crystalvalue", valueCheck);
          }
        }

        function displayScreen() {
          $("#number-to-guess").text(targetNumber);
          $("#your-count").text(counter);
        }

        $(document).ready(function () {
          $.each(crystalType, function (key, crystalName) {
            imageCrystal = $("<img>");
            imageCrystal.addClass("crystal-image");
            imageCrystal.attr("crystal-name", crystalName.name);
            imageCrystal.attr("src", crystalName.image);
            crystalName.value = randomnumber(1, 12)
            imageCrystal.attr("data-crystalvalue", crystalName.value);
            $("#crystals").append(imageCrystal);
          })
          startGame();

          $(".crystal-image").on("click", function () {
            $('#results-game').text('');
            var crystalValue = ($(this).attr("data-crystalvalue"));
            crystalValue = parseInt(crystalValue);
            counter += crystalValue;
            $("#your-count").text(counter);
            if (counter === targetNumber) {
              mywins++
              $("#wins").text(mywins);
              startGame();
            } else if (counter >= targetNumber) {
              mylooses++;
              $("#losses").text(mylooses);
              startGame();
            }

          });
        })