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
            hours = hours > 9 ? hours:('0' + hours);
            minutes = minutes > 9 ? minutes: ('0' + minutes);
            seconds = seconds > 9 ? seconds: ('0' + seconds);
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
      var container = document.getElementsByClassName('g-number-container')[0]
      var rotator = document.getElementsByClassName('g-number-rotate')[0]
      if(type==='reflect'){
        container.classList.add('reflect')
        rotator.classList.add('reflect')
      } else {
        container.classList.remove('reflect')
        rotator.classList.remove('reflect')
      }
      document.documentElement.setAttribute('data-animation',type)
    }