<template>

<!-- Sección 1 -->

<div>
    <div class="section-1">
      <div class="container text-center">
        <div class="row">
          <div class="col-md-6 col-12">
            <div class="pray">
              <img src="..\assets\procreator-ux.jpg" alt="Pray" class="" />
            </div>
          </div>
          <div class="col-md-6 col-12">
            <div class="panel text-left">
              <img src="..\assets\NetworkRevolution.jpg" alt="Pray" class="" />
            
              <p class="pt-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere iure adipisci harum ducimus accusantium, repudiandae aperiam
                voluptatum, id ex ratione omnis reiciendis possimus officiis.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi vitae, tenetur quidem eum aliquid vel labore sint placeat
                ad deserunt consectetur fugit ullam. Eius unde neque ducimus obcaecati ipsum quos vero totam recusandae hic
                expedita nemo sit, illum harum. Quisquam impedit ullam itaque facere et ad molestiae quod reprehenderit excepturi!
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi vitae, tenetur quidem eum aliquid vel labore sint placeat
                ad deserunt consectetur fugit ullam. Eius unde neque ducimus obcaecati ipsum quos vero totam recusandae hic
                expedita nemo sit, illum harum. Quisquam impedit ullam itaque facere et ad molestiae quod reprehenderit excepturi!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
<divider></divider>
<!-- Sección 2 -->

<div class="d-flex container-fluid justify-content-end
                pb-2 mt-n2 " >
		<div class="row">
			<div class="col-lg-12 text-center">
	            <div class="row">
                    <!--tarjeta 1-->
	                <div class="col-lg-4 col-md-12 mb-4" >
	                  	<div class="card-section border rounded p-3" style="background-color: #f8f9fa">
	                  		<div class="card-header-first rounded pb-5">
		                      	<h2 class="card-header-title text-white pt-3">Empresa contenido 1</h2>
	                  		</div>
	                    	<div class="card-body text-center " >
	                      		<p class="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat malesuada, volutpat fermentum eu ac faucibus pellentesque torquent nullam gravida et, ut nam massa purus congue class mi nunc.</p>
	                    	<br>    
                                <button class="btn btn-lg btn-secondary">Más info</button>
                        </div>
	                  	</div>
	                </div>
                    <!--tarjeta 2-->
	                <div class="col-lg-4 col-md-12 mb-4" >
	                  	<div class="card-section border rounded p-3" style="background-color: #f8f9fa">
	                  		<div class="card-header-second rounded pb-5">
		                      	<h2 class="card-header-title text-white pt-3">Empresa contenido 2</h2>
	                  		</div>
	                    	<div class="card-body text-center " >
	                      		<p class="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat malesuada, volutpat fermentum eu ac faucibus pellentesque torquent nullam gravida et, ut nam massa purus congue class mi nunc.</p>
	                    	<br>    
                                <button class="btn btn-lg btn-secondary">Más info</button>
                        </div>
	                  	</div>
	                </div>
                    <!--tarjeta 3-->
	                <div class="col-lg-4 col-md-12 mb-4" >
	                  	<div class="card-section border rounded p-3" style="background-color: #f8f9fa">
	                  		<div class="card-header-third rounded pb-5">
		                      	<h2 class="card-header-title text-white pt-3">Empresa contenido 3</h2>
	                  		</div>
	                    	<div class="card-body text-center " >
	                      		<p class="card-text">Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat malesuada, volutpat fermentum eu ac faucibus pellentesque torquent nullam gravida et, ut nam massa purus congue class mi nunc.</p>
	                    	<br>    
                                <button class="btn btn-lg btn-secondary">Más info</button>
                        </div>
	                  	</div>
	                </div>
	            </div>
			</div>
		</div>
	</div>
</div>

</template>

<script>
export default {
  name: "PageNews",
};
</script>
<style scoped>

.section-1 {
  padding: 0vmin 0vmin;
}

.section-1 .row .col-md-6 .pray img {
  opacity: 0.8;
  width: 80%;
  border-radius: 0.2em;
}

.section-1 .row .col-md-6:last-child {
  position: relative;
}

.section-1 .row .col-md-6 .panel {
  position: relative;
  top: 8vmin;
  left: -18vmin;
  background: white;
  border-radius: 3px;
  text-align: left;
  padding: 6vmin 5vmin 12vmin 10vmin;
  box-shadow: 0px 15px 42px #000000;
  font-family: var(--Rubik);
  z-index: 1;
}

.section-1 .row .col-md-6 .panel h1 {
  font-weight: bold;
  padding: 0.4em 0;
  font-size: 2em;
}

.section-1 .row .col-md-6 .panel p {
  font-size: 0.9em;
  color: rgba(0, 0, 0, 0.5);
}

@media only screen and (max-width: 768px) {
  header .navbar-brand {
    padding-left: 1rem;
  }
  .section-1 .row .col-md-6 .panel {
    position: initial;
    width: initial;
    height: initial;
  }
}

</style>