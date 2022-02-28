<template>
       <v-container fluid>

          <v-row 
            :justify="'center'"
            >
                <v-icon x-large> 
                    mdi-format-quote-open
                </v-icon>
          </v-row>
        
        <v-row v-if="model">
            <v-icon @click="model--">        
            </v-icon>            
            <v-icon @click="model++">        
            </v-icon>
        </v-row>

            <v-carousel height="10rem" hide-delimiters v-model="model">
                <v-carousel-item
                    v-for="(review) in reviews"
                    :key="review.reviewer"
                >
                
                    <v-col                 
                        align="center"                        
                    >
                        <div class="display-1 font-weight-light secondary--text">
                            {{ review.comments }}
                        </div>
                        <br>
                        <div class="font-weight-light display-2 primary--text">
                            {{ review.reviewer }}
                        </div>
                    </v-col>                      
        
                </v-carousel-item>
            </v-carousel>
    </v-container>
</template>

<script>

  export default {
    name: 'ReviewCarousel',

    data: () => ({
        model: 0,
        reviews: [
            {
            reviewer: 'James Bond',
            comments: 'What a great company',
            },
            {
            reviewer: 'Peter Parker',
            comments: 'They got rid of all my spiders',
            },
            {
            reviewer: 'Carole Basken',
            comments: 'All my tigers are super clean and no bugs found!',
            },
        ]
    }),
  }
</script>
