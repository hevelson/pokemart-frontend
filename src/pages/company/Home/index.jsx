import React from 'react';

const HomePage = () => {

	return(
		<main className="home-page">
			<header>
				<h1>Pokemart</h1>
				<div className="right-elements">
					<button>User</button>
					<button>Cart</button>
				</div>
			</header>
			<section class="hero-banner">
					<h2 class="title">Receba as nossas mais recentes novidades!</h2>
					<form action="/" class="form-sign">
						<input type="email" name="email" placeholder="Cadastre seu e-mail..." class="form-input"/>
						<button class="btn">Cadastrar!</button>
					</form>
			</section>
			<section class="short-description">
				<div class="description-box">
					<h2 class="title">Fully Responsive</h2>
					<p class="description">This theme will look great on any device, no matter the size!</p>
				</div>
				<div class="description-box">
					<h2 class="title">Bootstrap 4 Ready</h2>
					<p class="description">Featuring the latest build of the new Bootstrap 4 framework!</p>
				</div>
				<div class="description-box">
					<h2 class="title">Easy to Use</h2>
					<p class="description">ready to use with your own content, os customize the source files!</p>
				</div>
			</section>
		</main>
	);
}

export default HomePage;
