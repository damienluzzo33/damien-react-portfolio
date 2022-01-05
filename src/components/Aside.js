import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import contact from "../data/contact.json";

export default function Aside() {
    return (
        <div className="asideBox">
            <a href={contact.github} target="_blank" rel="noreferrer">
						<GitHubIcon aria-label="github" className='contactIcons' fontSize="large"/>
					</a>
					<a href={contact.linkedin} target="_blank" rel="noreferrer">
						<LinkedInIcon aria-label="linkedin" className='contactIcons' fontSize="large"/>
					</a>
					<a href={contact.twitter} target="_blank" rel="noreferrer">
						<TwitterIcon aria-label="twitter" className='contactIcons' fontSize="large"/>
					</a>
        </div>
    )
}