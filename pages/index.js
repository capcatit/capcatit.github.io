
import { useTranslation, initReactI18next  } from 'next-i18next'
// import * as i18n from  '../next.config.js'
import i18n from "i18next";
export default function Home() {
  // console.log({i18n})
  const { t } = useTranslation('common', {useSuspense: false })
  
  return (
    <div id="wrapper" className="fade-in">
				{/* <!-- Intro --> */}
					<div id="intro">
						<h1>CAP<br />
						CAT</h1>
						<p>{t('intro.title')}.{t('WelcomeTo React')}</p>
						<ul className="actions">
							<li>
                <a href="#services" className="button icon solid solo fa-arrow-down scrolly">
                  {t('button.continue')}
                </a>
              </li>
						</ul>
					</div>

				{/* <!-- Header --> */}
					<header id="header">
						<img src="images/logo.png" className="logo" />
						{/* <!-- <a href="index.html" >Massively</a> --> */}
					</header>

				{/* <!-- Nav --> */}
					<nav id="nav">
						<ul className="links">
							<li className="active" id="service__tab"><a href="#services">{t('link.services')}</a></li>
							<li id="about-us__tab"><a href="#about-us">{t('link.about-us')}</a></li>
						</ul>
						<ul className="icons">
							<li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
							<li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
							<li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
							<li><a href="https://github.com/capcatit/capcat.github.io" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
						</ul>
					</nav>

				{/* <!-- Main --> */}
					<div id="main">

						{/* <!-- Featured Post --> */}
							<article id="about-us" className="post featured">
								<header className="major">
									{/* <!-- <span className="date">April 25, 2017</span> --> */}
									{/* <!-- <h2><a href="#">And this is a<br /> */}
									{/* massive headline</a></h2> --> */}
									<p>{t('about-us.resume')}<br/>
									<br />
									cloud, mobile, web.</p>
								</header>
								<a href="#" className="image main"><img src="images/pic01.jpg" alt="" /></a>
								<ul className="actions special">
									<li><a href="#footer" className="button large">{t('button.contact-us')}</a></li>
								</ul>
							</article>

						{/* <!-- Posts --> */}
							<section className="posts" id="services">
								<article>
									<header className="service__header">
										{/* <!-- <span className="date">April 24, 2017</span> */}
										 {/* --> */}

										<h2><a href="#">{t('services.cloud')} <br />
                    {t('services.cloud-2')}</a></h2>
									</header>
									<a href="#" className="image fit"><img src="images/pic02.jpg" alt="" /></a>
									<p>Amazon Web Service, Google Cloud, Azure IBM Cloud.</p>
									<ul className="actions special">
										<li><a href="#footer" className="button">{t('button.contact-us')}</a></li>
									</ul>
								</article>
								<article>
									<header className="service__header">
										{/* <!-- <span className="date">April 22, 2017</span> --> */}
										<h2><a href="#">{t('services.problem-solving')} <br />
                    {t('services.problem-solving-2')}</a></h2>
									</header>
									<a href="#" className="image fit"><img src="images/pic03.jpg" alt="" /></a>
									<p>{t('services.problem-solving-3')}.</p>
									<ul className="actions special">
										<li><a href="#footer" className="button">{t('button.contact-us')}</a></li>
									</ul>
								</article>
								<article>
									<header className="service__header">
										{/* <!-- <span className="date">April 18, 2017</span> --> */}
										<h2><a href="#">{t('services.development')}<br />
                    {t('services.development-2')}</a></h2>
									</header>
									<a href="#" className="image fit"><img src="images/development.png" alt="" /></a>
									<p>{t('services.development-3')}.</p>
									<ul className="actions special">
										<li><a href="#footer" className="button">{t('button.contact-us')}</a></li>
									</ul>
								</article>
								<article>
									<header className="service__header">
										{/* <!-- <span className="date">April 14, 2017</span> --> */}
										<h2><a href="#">Salesforce<br /></a></h2>
									</header>
									<a href="#" className="image fit"><img src="images/saleforce.jpg" alt="" /></a>
									<p>{t('services.salesforce')}.</p>
									<ul className="actions special">
										<li><a href="#footer" className="button">{t('button.contact-us')}</a></li>
									</ul>
								</article>
								<article>
									<header className="service__header">
										{/* <!-- <span className="date">April 11, 2017</span> --> */}
										<h2><a href="#">Mobile apps<br />
										</a></h2>
									</header>
									<a href="#" className="image fit"><img src="images/mobile-500.png" alt="" /></a>
									<p>{t('services.quotation')}.</p>
									<ul className="actions special">
										<li><a href="#footer" className="button">{t('button.contact-us')}</a></li>
									</ul>
								</article>
								<article>
									<header className="service__header">
										{/* <!-- <span className="date">April 7, 2017</span> --> */}
										<h2><a href="#">Graphic Design<br /></a></h2>
									</header>
									<a href="#" className="image fit"><img src="images/pic07.jpg" alt="" /></a>
									<p>{t('services.graphic-design')}.</p>
									<ul className="actions special">
										<li><a href="#footer" className="button">{t('button.contact-us')}</a></li>
									</ul>
								</article>
							</section>
					</div>

				{/* <!-- Footer --> */}
					<footer id="footer">
						<section>
							<form method="post" action="#">
								<div className="fields">
									<div className="field">
										<label htmlFor="name">{t('form.name')}</label>
										<input id="form__name" type="text" name="name" id="name" />
									</div>
									<div className="field">
										<label htmlFor="email">Email</label>
										<input id="form__email" type="text" name="email" id="email" />
									</div>
									<div className="field">
										<label htmlFor="message">{t('form.message')}</label>
										<textarea id="form__message" name="message" id="message" rows="3"></textarea>
									</div>
								</div>
								<ul className="actions">
									<li><input type="submit" value="Send Message" /></li>
									<li><input id="form__submit-wsp" type="submit" value="Send Message Whatsapp" /></li>
								</ul>
							</form>
						</section>
						<section className="split contact">
							<section className="alt">
								<h3>{t('form.address')}</h3>
								<p>Via padre bernardino dal vago 10<br />
								</p>
							</section>
							<section>
								<h3>Email</h3>
								<p><a href="#">contatto@capcat.it</a></p>
							</section>
							<section>
								<h3>Social</h3>
								<ul className="icons alt">
									<li><a href="#" className="icon brands alt fa-twitter"><span className="label">Twitter</span></a></li>
									<li><a href="#" className="icon brands alt fa-facebook-f"><span className="label">Facebook</span></a></li>
									<li><a href="#" className="icon brands alt fa-instagram"><span className="label">Instagram</span></a></li>
									<li><a href="#" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
								</ul>
							</section>
						</section>
					</footer>
					<div id="copyright">
						<ul><li>&copy; Untitled</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li></ul>
					</div>

			</div>
  )
}
