
let kobe = {
  id: 2,
  sayId: function () {
    setTimeout(function () {
      console.log('id:', this.id, this)
    }, 0)
    // this为Timeout
  },
  sayIdWithThis: function () {
    var that = this
    setTimeout(function () {
      console.log('id:', that.id, that)
    }, 10)
    // that为kobe
  },
  sayIdWidthArrow: function(){ 
    setTimeout(() => { 
      console.log('id:', this.id, this)
    }, 100)
    //this为kobe
  },
  sayGloablIdWithArrow: () => { 
    setTimeout(() => { 
      console.log('id:', this.id, this)
    }, 1000)
    // this为{}
  }
}

kobe.sayId()
kobe.sayIdWithThis()
kobe.sayIdWidthArrow()
kobe.sayGloablIdWithArrow()