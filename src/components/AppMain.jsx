import comics from "../assets/comics";

export default function AppMain() {
    return (
        <main>
            <section className="jumbotron"></section>
            <section className="comics-section">
                <div className="container">
                    <div className="comics-header">
                        <span className="current-series-tag">CURRENT SERIES</span>
                    </div>

                    <div className="comics-grid">
                        {comics.map((comic) => (
                            <div key={comic.id} className="comic-card">
                                <div className="thumb-wrapper">
                                    <img src={comic.thumb} alt={comic.title} />
                                </div>
                                <h3 className="comic-title">{comic.series}</h3>
                            </div>
                        ))}
                    </div>


                    <div className="load-more-wrapper">
                        <button className="load-more-btn">LOAD MORE</button>
                    </div>
                </div>
            </section>

            <section className="blue-bar">
                <div className="container blue-bar-inner">

                    <div className="blue-item">
                        <img
                            src="/img/buy-comics-digital-comics.png"
                            alt="Digital Comics"
                        />
                        <span>DIGITAL COMICS</span>
                    </div>

                    <div className="blue-item">
                        <img
                            src="/img/buy-comics-merchandise.png"
                            alt="DC Merchandise"
                        />
                        <span>DC MERCHANDISE</span>
                    </div>

                    <div className="blue-item">
                        <img
                            src="/img/buy-comics-subscriptions.png"
                            alt="Subscriptions"
                        />
                        <span>SUBSCRIPTION</span>
                    </div>

                    <div className="blue-item">
                        <img
                            src="/img/buy-comics-shop-locator.png"
                            alt="Comic Shop Locator"
                        />
                        <span>COMIC SHOP LOCATOR</span>
                    </div>

                    <div className="blue-item">
                        <img src="/img/buy-dc-power-visa.svg" alt="DC Power Visa" />
                        <span>DC POWER VISA</span>
                    </div>
                </div>
            </section>
        </main>
    );
}