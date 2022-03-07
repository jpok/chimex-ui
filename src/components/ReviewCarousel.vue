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

            <v-carousel :height="$vuetify.breakpoint.xs ? '10rem' : '15rem'" hide-delimiters v-model="model">
                <v-carousel-item
                    v-for="(review) in reviews"
                    :key="review.reviewer"
                >
                
                    <v-col                 
                        align="center"                        
                    >
                        <div v-bind:class="[!$vuetify.breakpoint.mobile ? 'display-1' : 'text-subtitle-1']" class=" font-weight-light secondary--text">
                            {{ review.comments }}
                        </div>
                        <br>
                        <div v-bind:class="[!$vuetify.breakpoint.mobile ? 'display-2' : 'text-h6']" class="font-weight-light primary--text">
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
            reviewer: 'Rosa Simmons',
            comments: 'I was so impressed with our technician Ben. He arrived on time and was super thorough!',
            },
            {
            reviewer: 'Gary Campbell',
            comments: 'Great same day service! I booked an appointment with Hunter in the morning and the service guy was at my door before noon.',
            }
        ]
    }),
  }
</script>
