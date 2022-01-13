var app1 = new Vue({
    el: '#app1',
    data: {
        message:"",
        message1: "",
        coupon: false,
        codes:["GARV4", "9LSKG", "SBS15", "SAAXM", "W42B1", "A95PD", "C1HSN", "E241F", "61G58", "JD1HS"],
    },

    methods: {
        check () { 
            console.log()
            for(let i = 0; i < this.codes.length; i++){
                if(this.message != this.codes[i]){
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
        }
    }

})