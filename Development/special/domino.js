var app1 = new Vue({
    el: '#app1',
    data: {
        message:"",
        message1: "",
        coupon: false,
        promo: " ",
        lijst: [],
        code: " CODE: ",
        message2: "",
        coupon1: false
    },

    methods: {
        check () { 
            console.log()
            for(let i = 0; i < this.lijst.length; i++){
                if(this.message != this.lijst[i]){
                    this.coupon = false,
                    console.log('aww')
                }
                else{
                    this.coupon = true,
                    console.log('heu')
                    break
                }
            }
            if(this.coupon == true) {
                this.message1 = " Je hebt 20% korting toegevoegd "
            }
            else{
                this.message1 = " Code is incorrect "
            }
        },

        rndStr() {
            let text = ""
            let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        
              for( let i=0; i < 5; i++ ) {
                      text += chars.charAt(Math.floor(Math.random() * chars.length))
              }
              this.promo=text,
              this.lijst.push(text)
          
          }
    },

    mounted () {

        for(let i = 0; i < this.lijst.length; i++){
            if(this.code == this.lijst[i]){
                this.coupon1 = true;
                break;
            }
        }

        if(this.coupon1 == true){
            console.log('Code klopt')
            this.message2="Coupon klopt"
        }
        else{
            console.log('Coupon is incorrect')
        }
        
        
    }

})

const buildSlideMarkup = (count) => {
	let slideMarkup = '';
  for (var i = 1; i <= count; i++) {
  	slideMarkup += '<slide><span class="label">' + i + '</span></slide>'
  }
  return slideMarkup;
};

new Vue({
	el: '#example',
  components: {
  	'carousel': VueCarousel.Carousel,
    'slide': VueCarousel.Slide
  },
  template: '<div><carousel :autoplay="true">' + buildSlideMarkup(10) + '</carousel></div>'
});

