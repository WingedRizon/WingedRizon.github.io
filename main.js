
		        function spin() {
            const item1 = document.getElementById('item1');
            const item2 = document.getElementById('item2');
            const item3 = document.getElementById('item3');

            const num1 = Math.floor((Math.random() * 9) + 1);
            const num2 = Math.floor((Math.random() * 9) + 1);
            const num3 = Math.floor((Math.random() * 9) + 1);

            item1.innerHTML = `${num1}`;
            item2.innerHTML = `${num2}`;
            item3.innerHTML = `${num3}`;

            if (num1 === num2 && num1 === num3) {
                //playBoing();
                showMessage();
            } else {
                hideMessage();
            }
        }
		
		
		function myMove(){
			//var rarity = Math.floor((Math.random() * 100) + 1);
			const elems = document.getElementById("container");
			elems.style.background = "yellow";
			var colour;
			var rarity = 20;
			if (rarity < 80){
				colour = "purple"
			} else {
				colour = "red"
			}
			Gatch(colour)
		}
		function Gatch(rarity) {
		  let id = null;
		  const elem = document.getElementById("animate");
		  const pull = document.getElementById("pull");
		  pull.style.opacity = "0";
		  let pos = 0;
			var opa = 0;
			var topv = 0;
			var leftv = 0;
			var sizev = 50;
			console.log(rarity)
			elem.style.background = "red";
			elem.style.width = sizev + 'px';
			elem.style.height = sizev + 'px';
		  clearInterval(id);
		  id = setInterval(frame, 5);
		  function frame() {
			pos++;

			if (pos == 875) {
				clearInterval(id);
				
			  
			} else if(pos < 300) {
			  topv++;
			  leftv++;
			  elem.style.top = topv + 'px';
			  elem.style.left = leftv + 'px';

			} else if(pos < 400){
			  topv--;
			  elem.style.top = topv + 'px';
			} else if(pos < 600) {
			  leftv--;
			  elem.style.left = leftv + 'px';
			} else if(pos < 650) {
				elem.style.background = rarity;
			  topv++;
			  leftv++;
			  elem.style.top = topv + 'px';
			  elem.style.left = leftv + 'px';
			} else if(pos < 700){
			  topv--;
			  elem.style.top = topv + 'px';
			}else if(pos < 725) {
			  leftv++;
			  elem.style.left = leftv + 'px';
			  topv--;
			  elem.style.top = topv + 'px';
			}else{
				sizev++;
				sizev++;
				opa += 0.1
				//console.log(sizev)
			  leftv--;
			  elem.style.left = leftv + 'px';
			  topv--;
			  elem.style.top = topv + 'px';
				elem.style.width = sizev + 'px';
				elem.style.height = sizev + 'px';
				pull.style.opacity = opa + "px";
		  }
		  }

		  
		}
            function countWords() {

                // Get the input text value
                var text = document
                    .getElementById("inputField").value;
                text = text.toLowerCase();

                // Initialize the word counter
                var numWords = 0;

                // Loop through the text
                // and count spaces in it
                for (var i = 0; i < text.length; i++) {
                    var currentCharacter = text[i];

                    // Check if the character is a space
                    if (currentCharacter == " ") {
                        numWords += 1;
                    }
                }

                // Display it as output
                if (text === "snake") {
                    document.getElementById("show")
                        .innerHTML = "Chigau! Meno is not Snake!! Meno is Dragon!";
                }
                else if (text == "shake" || text == "yoyen") {
                    document.getElementById("show")
                        .innerHTML = "Meno Shaaaaaaake!";
                }
				else if (text == "stare" || text == "watching") {
                    document.getElementById("show")
                        .innerHTML = "Jiiiiiiiiii!";
                }
                else if (text == "sus" || text == "queen" || text == "sexy") {
                    document.getElementById("show")
                        .innerHTML = "Deshou, Meno is sexy dragon queen!";
                }
                else if (text == "yami meno" || text == "laugh") {
                    document.getElementById("show")
                        .innerHTML = "Meh heh heh heh";
                }
                else if (text == "mdem") {
                    document.getElementById("show")
                        .innerHTML = "Haato Shining Dragon, Haato Shining Dragon, Haato Shining Dragon, Haato Shining Dragon";
                }
				else if (text == "takoyaki") {
                    document.getElementById("show")
                        .innerHTML = "Jiiiiiii, Otagons will stay with Meno.....right?";
                }
				else if (text == "ambulance") {
                    document.getElementById("show")
                        .innerHTML = "If Iku can drive a UFO then, Iku can drive an ambulance, Oh No, Iku is stuck in traffic";
                }
                else if (text == "chris") {
                    document.getElementById("show")
                        .innerHTML = "Yo, is that the real Meno-chan?";
                }
                else if (text == "otagon power") {
                    
                    gatcha();

                }
                else if (text != "") {
                    var ippui = "Ippui"
                    for (let i = 0; i < numWords; i++) {
                        ippui = ippui + " "
                        ippui = ippui + "ippui"
                    }
                    ippui = ippui + "."
                    document.getElementById("show")
                        .innerHTML = ippui;
                }
                function gatcha() {
                    document.getElementById("show")
                        .innerHTML = "Meno Gains 10 PriMENOgem";
                    //A way to get points + store points
                    // Otagon Power - Adds 10 points to the pool
                    // Roll - Then it subtracts 1000 from the pool
                    // Play some form of animation and then you will get things and add to collection
                    //Gatcha itself

                }

                // Display it as output

            
                    function getRandomNumber() {
            return Math.floor(Math.random() * 2) + 1;
        }

        function getElement(id) {
            return document.getElementById(id);
        }



        function playBoing() {
            const boing = document.getElementById("boing");
            boing.play();
        }

        function showMessage() {
            const msg = document.getElementById("message");
            msg.style.display = "block";
            msg.classList.add('animated', 'pulse')
        }

        function hideMessage() {
            const msg = document.getElementById("message");
            msg.style.display = "none";
        }
            }
