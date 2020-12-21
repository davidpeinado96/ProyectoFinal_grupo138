<template >

        
    <div class="row mt-md-3 mt-sm-3 mt-xs-3 mb-md-3 mb-sm-3 mb-xs-3 text-white bg-dark">
        <div class="col-lg-6 col-xs-12" v-for="(movie,index) of movies" :key="index">
                <div class="d-flex justify-content-center" >
                    <div class="p-3">
                        <div class="imagen-poster">
                            <img :src="movie.Poster" alt="poster" heigth="200px" width="220px">
                        </div>
                        
                    </div>
                    <div class="p-2">
                        <div class="titulo-movie">
                            <h3>{{movie.Title}}</h3>
                        </div>
                        <p class="text-justify">
                            <span>Título:</span> {{movie.Title}}
                            <br>
                            <span>Tipo:</span> {{movie.Type}}
                            <br>
                            <span>imdbID:</span> {{movie.imdbID}}
                            <br>
                            <span>Año:</span> {{movie.Year}}
                            <br>
                            <b> Internet Movie Database (IMDb, en español:</b> <br>
                            Base de datos de películas en Internet) es una base de datos en línea que almacena información relacionada con películas, personal de equipo de producción (incluyendo directores y productores), actores, series de televisión, programas de televisión, videojuegos, actores de doblaje y, más recientemente, personajes ficticios que aparecen en los medios de entretenimiento visual. 
                        </p>
                    </div>
                </div>
                <div class="d-flex container-fluid justify-content-end
                pb-2 mt-n2">
                    <!--button type="button" class="btn btn-dark-->
                    <a :href="'https://www.imdb.com/title/'+movie.imdbID" target="_blank"
                        class="btn btn-primary btn-lg" role="button">Info ►</a>
                </div>
    </div>
</div>

    
</template>

<script>

import axios from "axios"
export default {
    name: "SectionApi",
    data(){
        return{
            movies:null
        }
    },
    mounted(){
        axios.get(`http://www.omdbapi.com/?s=web&type=movie&apikey=74798c2a`)
        .then(response=>{
            (this.movies = response.data.Search.slice(0,4));
            console.log(this.movies);
        })
    }
}
</script>
<style scoped>
    
</style>