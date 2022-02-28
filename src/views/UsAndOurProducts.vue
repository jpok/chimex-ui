<template>
    <v-container fluid>      
        
        <v-img max-height="35rem" class="darken" src="@/assets/about-us-1.jpeg"></v-img>

        <v-row 
        justify="center"
        class="ma-10">
            <div class="text-h3 primary--text">About Us</div>                        
        </v-row>
        <v-row justify="space-around">
            <v-spacer></v-spacer>
            <v-col md="4">
                    <div class="text-subtitle-1 dark-gray font-weight-light">Chimex Eco-Pest was founded with the intention of delivering the highest quality residential and commercial pest control service available to homeowners and business owners, without compromising our commitment to keeping the Palmetto State beautiful. While many other pest control companies have only their service technicians licensed. At Chimex we ensure that all of our office, sales and service staff have been Commercially Licensed by the state of South Carolina to identify and treat for pests. This policy ensures that the best types of products are always used to treat for the correct pest in the right places. As a customer of Chimex Eco-Pest, you can be sure that only the safest and most effective products on the market are being applied by highly trained and licensed experts whose mission is to protect you and your family from unwanted pests. 
                    </div>
            </v-col>
            <v-spacer></v-spacer>
            <div class="line secondary"></div>
            <v-spacer></v-spacer>
            <v-col md="2">                
                <v-list>
                    <v-list-item-group                                     
                    >
                    <v-list-item>
                        <a target="_blank" href="https://www.domyown.com/msds/Stryker_Wasp_and_Hornet_Killer_Label.pdf">Stryker Wasp and Hornet Killer </a>
                    </v-list-item>
                    <v-list-item>
                        <a target="_blank" href="https://www.domyown.com/msds/Maxforce_FC_Roach_Bait_Gel_Label_2020.pdf">Maxforce FC</a>
                    </v-list-item>
                    <v-list-item>
                        <a target="_blank" href="https://www.domyown.com/msds/Suspend_SC_Label.pdf">Suspend SC</a>
                    </v-list-item>
                    <v-list-item>
                        <a target="_blank" href="https://f.hubspotusercontent30.net/hubfs/4028833/Specimen%20Labels/Specimen-BifenIT-53883-118.pdf">Bifen IT</a>
                    </v-list-item>
                                       

                    </v-list-item-group>
                </v-list>
            </v-col>
            <v-col md="2">
                <v-list>
                    <v-list-item-group                    
                    >                    
                    <v-list-item>
                        <a target="_blank" href="https://www.domyown.com/msds/DeltaGard_G_Granules_Label_2020.pdf">DeltaGard G</a>
                    </v-list-item>
                    <v-list-item>
                        <a target="_blank" href="http://www.logbookcreator.com/docs/book/sheets/catchmaster-brand-adhesive-devices-sds2018.pdf">Catchmaster - Brand Adhesive Mouse Control</a>
                    </v-list-item>
                    <v-list-item>
                        <a target="_blank" href="https://www.domyown.com/msds/ExciteR_Specimen_Label.pdf">Excite R</a>
                    </v-list-item>
                    <v-list-item>
                        <a target="_blank" href="https://www.domyown.com/msds/Delta_Dust_Insecticide_Label_2020.pdf">DeltaDust</a>
                    </v-list-item>
                    

                    </v-list-item-group>
                </v-list>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>

    </v-container>    
    
</template>

<script>
export default {
    name: 'UsAndOurProducts'
}
</script>

<style scoped>
    .line {
        width: .25rem;
        height: 20rem;        
    }
</style>