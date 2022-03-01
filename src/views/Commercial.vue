<template>
    <v-container fluid>      
        <div class="img-container">
            <v-img :eager="true" transition="fade-transition" max-height="35rem" class="darken" src="@/assets/commercial-1.jpeg">              
            </v-img>
            <div v-bind:class="[$vuetify.breakpoint.mobile ? 'text-h5 text-center' : 'text-h4']" class="centered white--text">Commercial Pest Control for South Carolina</div>        
        </div>  
        
        <v-row justify="center" v-bind:class="[$vuetify.breakpoint.mobile ? 'display-1 text-center' : 'display-3']" class="ma-12 primary--text font-weight-light">Pest Control Customized for Your Business</v-row>

            <v-row 
            justify="center"
            class="ma-10">                
            <v-col  md="8">
            <div class="text-center dark-gray text-h6 font-weight-light">
                Chimex Eco-Pest knows that having unwelcome pests in your place of business can not only make your customers feel uneasy, but can also hurt your bottom line. Because every commercial space and business owner’s needs are different, Chimex offers a customized approach to making and keeping your business property pest free. Contact us today and one of our certified technicians will work with you to create and implement a pest management solution. Don’t let pests get in the way of your profits. With Chimex’s commercial services you can go about your business confident that you won’t be interrupted by any unwanted visitors. 
            </div>
            </v-col>
        </v-row>

        <v-sheet class="elevation-n1 tint">            
            <v-container fluid>
                <v-row class="ma-4" justify="center" align="center">
                    <v-col md="4">
                        <v-img :eager="true" max-width="20rem" src="@/assets/flex-dollar.png"></v-img>                
                    </v-col>

                    <v-col md="4">
                        <v-card class="pa-4">
                            <v-row>
                            <v-card-title class="text-center secondary--text font-weight-regular">
                                Flexible Terms with Flexible Pricing
                            </v-card-title>
                            <v-card-text class="text-subtitle-1 font-weight-light">
                                Chimex Eco-Pest understands that running a business means being flexible. That’s why our agreements and pricing are designed specifically to fit your business’s needs. Whether you need year round protection or a short term plan, Chimex has you covered. 
                                <br>    
                                <br>
                                Although we are flexible with our business customer’s needs, we are never flexible with our commitment to the highest quality of service and 100% customer satisfaction. No matter what, if you see even the occasional pest on your commercial property we will perform a complete interior and exterior reservice for FREE.
                            </v-card-text>
                            </v-row>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-sheet>

        
            <v-row justify="center" v-bind:class="[$vuetify.breakpoint.mobile ? 'display-1 text-center' : 'display-3']" class="ma-12 primary--text font-weight-light">Commercial Properties we Service</v-row>

            <v-row justify="center">
                <v-card   
                elevation="0"    
                class="ma-5 pa-1"             
                width="15rem"
                height="25rem"        
                >            
                <v-row justify="center"><v-icon color="secondary" size="4rem">$resManPropertyIcon</v-icon></v-row>
                <v-row justify="center" align="start" class="title-height"><v-card-title class=" text-center secondary--text">Residential Complexes & Property Managers</v-card-title></v-row>
        
                <v-card-text class="text-subtitle-1 text-center">
                    Don’t let your tenants bug you about household pests taking over your property. Keep renters happy and healthy with Chimex Eco-Pest’s custom plan designed for residential complexes and multiple property owners. 
                </v-card-text>
            </v-card>  

                <v-card   
                elevation="0"    
                class="ma-5 pa-1"             
                width="15rem"
                height="25rem"        
                >            
                <v-row justify="center"><v-icon color="secondary" size="4rem">$warehouseIcon</v-icon></v-row>
                <v-row justify="center" align="start" class="title-height"><v-card-title class="text-center secondary--text">WareHouses</v-card-title></v-row>
                
                <v-card-text class="text-subtitle-1 text-center">
                    Protecting your inventory and storage space means keeping pests out of your warehouse and away from your supplies. Let Chimex handle the pests so you can run your business without the threat of pest related contamination. 
                </v-card-text>
            </v-card>  

                <v-card   
                elevation="0"    
                class="ma-5 pa-1"             
                width="15rem"
                height="25rem"        
                >            
                <v-row justify="center"><v-icon color="secondary" size="4rem">$foodTruckIcon</v-icon></v-row>
                <v-row justify="center" align="start" class="title-height"><v-card-title class="text-center secondary--text">Restaurants & <br> Food Trucks</v-card-title></v-row>
        
                <v-card-text class="text-subtitle-1 text-center">
                    Pests have absolutely no place in your restaurant. Even the occasional pest can ruin your reputation or get the health department involved. Keep you food service environment protected with Chimex Eco-Pest.
                </v-card-text>
            </v-card>  

                <v-card   
                elevation="0"    
                class="ma-5 pa-1"             
                width="15rem"
                height="25rem"        
                >            
                <v-row justify="center"><v-icon color="secondary" size="4rem">$hotelIcon</v-icon></v-row>
                <v-row justify="center" align="start" class="title-height"><v-card-title class="text-center secondary--text">Hotels/Motels</v-card-title></v-row>
        
                <v-card-text class="text-subtitle-1 text-center">
                    Get rid of unwanted guests and give your welcome customers peace of mind with Chimex Eco-Pest’s Hotel servicing. We treat the entire property room by room to keep the pests away from your patrons.
                </v-card-text>
            </v-card>  

                <v-card   
                elevation="0"    
                class="ma-5 pa-1"             
                width="15rem"
                height="25rem"        
                >            
                <v-row justify="center"><v-icon color="secondary" size="4rem">$storefrontIcon</v-icon></v-row>
                <v-row justify="center" align="start" class="title-height"><v-card-title class="text-center secondary--text">StoreFronts</v-card-title></v-row>
        
                <v-card-text class="text-subtitle-1 text-center">
                    Pests have no business interfacing with your customers. Don’t lose a potential sale over an intruding pest. Keep bugs out of sight and out of mind with Chimex Eco-Pest’s storefront protection.
                </v-card-text>
            </v-card>  
        </v-row>        
        
        <v-row justify="center" v-bind:class="[$vuetify.breakpoint.mobile ? 'display-1' : 'display-3']" class="ma-12 primary--text font-weight-light">Our Promise</v-row>        
                
        <v-row justify="center" class="ma-4 text-h6 dark-gray text-center font-weight-light">Chimex Eco-Pest is committed to keeping the pests out and you satisfied. If you’re still seeing even the occasional pest after we treat your home, call us back for a free re-service. We guarantee our work and its results.</v-row>        
        
        <div class="gr-container mt-12">                
            <v-img :eager="true" max-height="25rem" class="mt-4 fade" src="@/assets/commercial-2.jpeg"></v-img>
            <v-img :eager="true" class="gr" src="@/assets/satisfaction-badge.png" :max-width="$vuetify.breakpoint.mobile ? $vuetify.breakpoint.width - 100: '40rem'"></v-img>
        </div>

    <v-img :eager="true" src="@/assets/map.png" :max-width="$vuetify.breakpoint.width" max-height="20rem"></v-img>
    <chimex-footer></chimex-footer>

    </v-container>    
</template>

<script>
import ChimexFooter from '../components/ChimexFooter.vue'
    export default {
        name: "Commercial",
        components: {
            ChimexFooter
        }
    }

</script>

<style scoped>

.darken {
 filter: brightness(50%);
}

.img-container {
    position: relative;
}

.centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: .2rem solid white;
    padding: .25rem;    
}

.gr-container {
    position: relative;    
}

.gr { 
    position: absolute;    
    top: 80%;
    left: 85%;
    z-index: 10;
    transform: translate(-50%, -50%);
}

.fade { 
    /* opacity: 80%; */
}

.title-height {    
    height: 6rem;
}
</style>