var numbers  = document.getElementsByClassName('g-number')
    window.time = new Date()
    var callback = function() { 
        window.requestAnimationFrame(function() {

            var date = new Date();
            if(date - window.time < 1000){
                callback()
                return
            }
            let hours = date.getHours();
            let minutes= date.getMinutes();
            let seconds = date.getSeconds();
            hours = hours > 10 ? hours:('0' + hours);
            minutes = minutes > 10 ? minutes:('0' + minutes);
            seconds = seconds > 10 ? seconds:('0' + seconds);
            var time = '' + hours + minutes + seconds;
            Array.prototype.slice.call(numbers).forEach((element,i) => {
                element.setAttribute('data-digit',parseInt(time.charAt(i)))
            });
            window.time = date
            callback()
        })
    }
    callback();

    var link = document.createElement('link')
    link.rel = 'preload';
    link.href = 'https://code.z01.com/font/ZoomlaShuaisong-A028.ttf'
    link.as = 'font'
    link.type = 'font/ttf'
    link.crossOrigin = '';
    document.getElementsByTagName('head')[0].appendChild(link)

    function addAnimation(type){
      if(document.documentElement.dataset.animation === type) return;
      var newStyle = null
      var animationStyle = document.getElementById('animation')
      var oldStyle = animationStyle.childNodes[0]
      if(type === '3d'){
        newStyle = document.createTextNode(`@-webkit-keyframes rotateReverse {
          0% {
            -webkit-transform: rotateZ(0deg);
                    transform: rotateZ(0deg);
          }
          100% {
            -webkit-transform: rotateZ(-360deg);
                    transform: rotateZ(-360deg);
          }
        }

        @keyframes rotateReverse {
          0% {
            -webkit-transform: rotateZ(0deg);
                    transform: rotateZ(0deg);
          }
          100% {
            -webkit-transform: rotateZ(-360deg);
                    transform: rotateZ(-360deg);
          }
        }
        @-webkit-keyframes rotate {
          0% {
            -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
                    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          50% {
            -webkit-transform: rotateX(40deg) rotateY(40deg) rotateZ(180deg);
                    transform: rotateX(40deg) rotateY(40deg) rotateZ(180deg);
          }
          100% {
            -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(360deg);
                    transform: rotateX(0deg) rotateY(0deg) rotateZ(360deg);
          }
        }
        @keyframes rotate {
          0% {
            -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
                    transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          50% {
            -webkit-transform: rotateX(40deg) rotateY(40deg) rotateZ(180deg);
                    transform: rotateX(40deg) rotateY(40deg) rotateZ(180deg);
          }
          100% {
            -webkit-transform: rotateX(0deg) rotateY(0deg) rotateZ(360deg);
                    transform: rotateX(0deg) rotateY(0deg) rotateZ(360deg);
          }
        } `)
        
      } else {
        newStyle = document.createTextNode(`
            @-webkit-keyframes rotateReverse {
            }
            @keyframes rotateReverse {
            }
            @-webkit-keyframes rotate {
            }
            @keyframes rotate {
            }
            .g-number-container {
                margin-top:10%;
            }
          .g-number-rotate {
            -webkit-box-reflect: below -1.5vw linear-gradient(to top, rgba(255,255,255,0.5), rgba(255,255,255,0));
          }      
        `)
      }
      document.documentElement.setAttribute('data-animation',type)
      animationStyle.replaceChild(newStyle,oldStyle);
    }