export default function AppFooter() {
    return (
        <footer className="site-footer">

            <section className="footer-top">
                <div className="container footer-links">
                    <div className="footer-column">
                        <h4>DC COMICS</h4>
                        <ul>
                            <li>Characters</li>
                            <li>Comics</li>
                            <li>Movies</li>
                            <li>TV</li>
                            <li>Games</li>
                            <li>Videos</li>
                            <li>News</li>
                        </ul>

                        <h4>SHOP</h4>
                        <ul>
                            <li>Shop DC</li>
                            <li>Shop DC Collectibles</li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>DC</h4>
                        <ul>
                            <li>Terms Of Use</li>
                            <li>Privacy policy (New)</li>
                            <li>Ad Choices</li>
                            <li>Advertising</li>
                            <li>Jobs</li>
                            <li>Subscriptions</li>
                            <li>Talent Workshops</li>
                            <li>CPSC Certificates</li>
                            <li>Ratings</li>
                            <li>Shop Help</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h4>SITES</h4>
                        <ul>
                            <li>DC</li>
                            <li>MAD Magazine</li>
                            <li>DC Kids</li>
                            <li>DC Universe</li>
                            <li>DC Power Visa</li>
                        </ul>
                    </div>
                </div>
            </section>


            <section className="footer-bottom">
                <div className="container footer-bottom-inner">
                    <button className="sign-up-btn">SIGN-UP NOW!</button>

                    <div className="social">
                        <span>FOLLOW US</span>
                        <img src="/img/footer-facebook.png" alt="Facebook" />
                        <img src="/img/footer-twitter.png" alt="Twitter" />
                        <img src="/img/footer-youtube.png" alt="YouTube" />
                        <img src="/img/footer-pinterest.png" alt="Pinterest" />
                        <img src="/img/footer-periscope.png" alt="Periscope" />
                    </div>
                </div>
            </section>
        </footer>
    );
}