import React from 'react';
import aboutMe from "../data/aboutMe.json";

export default function About() {

	return (
		<section id="about" className="about">
			<h2>About Me</h2>
			<article>
				<div id="profilePic"></div>
				<div id='bioText'>
					<p className='profileBio'>
						{aboutMe.bio_part1}
					</p>
					<p className='profileBio'>
						{aboutMe.bio_part2}
					</p>
				</div>
				
			</article>
		</section>
	);
}
