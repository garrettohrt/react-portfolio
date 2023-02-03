import React from 'react';

function About() {
	return (
		<div role="tabpanel" id="tabpanel-about" aria-labelledby="tab-about">
			<div id="about">
				<h1>About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/images/IMG_5843.jpg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
					I am a full stack web developer looking to build a more
					intuitive user experience on the web. BLAH BLAH BLAH
				</p>
			</div>
		</div>
	);
}

export default About;