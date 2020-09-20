import React from 'react';


const Header = () => {
	render(
		<div>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 70 }} style={{ height: 300, width: 400 }} >
					<div className="Tilt-inner pa3">
						<img style={{paddingTop: '5px'}} alt='top' src={topintro}/>					
					</div>
			</Tilt>
			
		</div>
		)
}

export default Header;