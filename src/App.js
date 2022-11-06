import logo from './logo.png';
import complet from './logo_complet.png'
import location from './img/icons/location.png'
import open from './img/icons/open-time.png'
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
		  <img src={complet} className="complet" alt="logo" />
		  <div className='description-open-bar'>
			<p>Notre site est en cours de construction  <br /></p>
			<p className='description-open-bar-seeyou'>À bientôt !</p>
		  </div>
      </header>
		<main className='main'>
			<div className='description-work'>
				<div className='description-open-bar'>
					<div className='description-open-hours'>
					<div className='description-location-icon'>
				<img src={open} className='location-icon' alt='location-icon'/>
				</div>
				<p className='description-hour'>Mercredi-Dimanche 15:00 - 20:00</p>
					</div>
			
				</div>
				<div className='description-block'>
				<div className='description-location-icon'>
				<img src={location} className='location-icon' alt='location-icon'/>
				</div>
				<p className='description-adress'><a href='https://www.google.com/maps/place/3+Rue+des+Tournelles,+75004+Paris/@48.8539945,2.3650542,17z/data=!3m1!4b1!4m5!3m4!1s0x47e6720025bead49:0xf473271e49e1bef6!8m2!3d48.853991!4d2.3672429' 
				target='blank' className='description-adress-link'>3 rue des Tournelles 75004</a></p>
			</div>
			</div>
		</main>
		<footer>
			<div className="footer-content">
				<div className="footer-logo">
				<img src={logo} className="App-logo" alt="logo" />
				</div>
				<p className='footer-content-logo-description'> Les Amoureuses 2022</p>
			</div>
		</footer>
    </div>
  );
}

export default App;
