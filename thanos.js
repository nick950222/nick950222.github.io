(function(window,$){
    var scrollDelayTo = function(time,x,y,delay){
        return new Promise(function(resolve,reject){
            var times = time / delay , //// 需要滚动的次数
                x_current = window.scrollX,
                y_current = window.scrollY,
                x_step = (x - x_current) / times  ,//每次要滚动的x方向长度
                y_step = (y - y_current) / times  ,//每次要滚动的y方向长度
                self = this ,
                count = 0;
            var timer = setInterval(function(){
                if(count == times){
                    clearInterval(timer);
                    resolve({x:x_current,y:y_current})
                    //window.scrollTo(x , y) // 把计算小数部分的丢失部分滚完
                }else{
                    window.scrollTo( x_current+=x_step , y_current+=y_step );
                    count += 1;
                }
            } , delay)
        })
    }
    var snapFinger = function(){
        var self = this
        this.keys = [10,12,0,8,9,3,7]
        this.maxCanvas = 32;
        this.elements = [];
        this.dead = new Set();
        this.DEFAULT_DURATION = 1.5;
        this.aniOver = $.noop()
        this.container = null
        this.removeElement = function(ele){
            return ele && ele.parentNode ? ele.parentNode.removeChild(ele) : null;
        }
        this.insertBefore = function(ele,slibling){
            return slibling.parentNode && slibling.parentNode.insertBefore(ele,slibling)
        }
        this.deleteElemet = function(ele,parent){
            return ele.parentNode == parent && parent.removeChild(ele)
        }
        this.setElementStyle = function(ele,key,value){
            $(ele).css(key,value)
        }
        this.init = function(){
            this.container = document.getElementById('container')
            for(var i = 0; i < this.container.children.length ; i++){
                this.elements.push(this.container.children[i])
            }
        }
        this.startAnimation = async function(){
            var self = this,
                x ,
                y;
            for(let key of self.keys){
                console.log(key)
                if(self.dead.has(key)){
                    continue
                }else{
                    self.dead.add(key);
                    x = self.elements[key].offsetLeft;
                    y = self.elements[key].offsetTop;
                    await scrollDelayTo(1500,x,y,20)
                    document.getElementById(`dust${key%6 + 1}`).play()
                    await self.annihilate(self.elements[key])
                }
            }
        }
        this.eyeOfAgamotto = function(){
            var self = this
            return new Promise(function(resolve,reject){
                self.elements.forEach(function(ele,index){
                    // self.setElementStyle(item,'transition','opacity ' + self.DEFAULT_DURATION + 's ease');
                    // self.setElementStyle(item, 'opacity', 1);
                    // setTimeout(function () {
                    //     self.setElementStyle(item, 'visibility', 'visible');
                    // }, 1E3 * self.DEFAULT_DURATION);
                    $(ele).css('visibility', 'visible');
                    $(ele).css('opacity', '1');
                    $(ele).animate({"opacity": 1}, 1000, "linear", function () {
                    });
                    $(ele).animate({"color": "#008000"}, 1000, "linear", function () {
                        //$(ele).animate({"color": "#000"}, 1500, "linear", function () {
                        //});
                    });

                })
                resolve()
            })
        }
        this.annihilate = function(target){
            var self = this;
            return new Promise(function(resolve,reject){
                html2canvas(target,{
                    allowTaint: false,
                    useCORS: false })
                .then(function(canvas){
                    var context = canvas.getContext('2d'),
                        width = canvas.width,
                        height = canvas.height;
                    try {
                        var originImageData = context.getImageData(0, 0, width, height);
                    } catch (e) { 
                        console.log(e)
                        return;
                    }  // 这里是因为getImageData函数在width和height为0或者前面的坐标超出范围时会报错
                    /// 下面就是实现湮灭的基本代码
                    /// 首先原本的htmlElement需要设置transition,最后opacity变为0
                    /// 然后利用前面html2canvas返回的promise对象中的canvas对象实现湮灭的纷飞效果
                    /// 那么阿拉莫克之眼的时候,就直接把opacity用transition变回1,最后把文字颜色设置成绿色就可以了
                    self.setElementStyle(target,'transition','opacity ' + self.DEFAULT_DURATION + 's ease');
                    self.setElementStyle(target, 'opacity', 0);
                    setTimeout(function () {
                        self.setElementStyle(target, 'visibility', 'hidden');
                    }, 1E3 * self.DEFAULT_DURATION);
                    self.setElementStyle(canvas, 'position', 'absolute');  // 让canvas的存在不会影响到文档流
                    self.setElementStyle(canvas, 'pointerEvents', 'none');
                    //// 上面将原本html元素的行为设置完毕
                    var marginLeft = 0;
                    self.setElementStyle(canvas, 'margin-left', marginLeft + 'px');
                    self.setElementStyle(canvas, 'transition', 'transform ' + self.DEFAULT_DURATION + 's ease-out, opacity ' + self.DEFAULT_DURATION + 's ease-out');
                    var imgDataList = [];
                    for (var i = 0; self.maxCanvas > i; ++i) {
                        imgDataList.push(context.createImageData(width, height));
                    }
                    console.log(imgDataList)
                    for (var w = 0; w < width; ++w)
                        for (var h = 0; h < height; ++h)
                            for (var l = 0; 2 > l; ++l) {
                                for (var rndIndex = Math.floor(32 * (Math.random() + 2 * w / width) / 3),
                                        n = 4 * (h * width + w),
                                        pixelColorIndex = 0
                                    ; 4 > pixelColorIndex;
                                    ++pixelColorIndex) {
                                    imgDataList[rndIndex].data[n + pixelColorIndex] = originImageData.data[n + pixelColorIndex];

                                }
                            }
                    for (var imgIndex = 0; self.maxCanvas > imgIndex;
                        ++imgIndex) {
                        var tempCanvas = canvas.cloneNode(true);
                        tempCanvas.uniqueIndex = imgIndex
                        tempCanvas.getContext('2d').putImageData(imgDataList[imgIndex], 0, 0);
                        $(tempCanvas).css('transitionDelay', 1.35 * imgIndex / 32 + 's');
                        self.insertBefore(tempCanvas, target);
                        setTimeout(function (tempCanvas) {
                            return function () {
                                var r = 2 * Math.PI * (Math.random() - .5);
                                $(tempCanvas).css('transform', 'rotate(' + 15 * (Math.random() - .5) + 'deg) translate(' + 60 * Math.cos(r) + 'px, ' + 30 * Math.sin(r) + 'px)\n  rotate(' + 15 * (Math.random() - .5) + 'deg)');
                                $(tempCanvas).css('opacity', 0);
                                setTimeout(function () {
                                    (function(index){
                                        self.removeElement(tempCanvas)
                                        if(tempCanvas.uniqueIndex == self.maxCanvas - 1){
                                            resolve();
                                        }
                                    })(imgIndex);
                                },1E3 * (1.5 + 1 + Math.random()))
                            };
                        }(tempCanvas), 0);
                    }
                })
            })
        }


    }
    window.thanos = new snapFinger()
})(window,jQuery);