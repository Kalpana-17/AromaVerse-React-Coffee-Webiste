import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Offer} from "../components/Offer"
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";

const Home = () => {
  return (
    <>
        <style>
        {`
            .carousel-item img {
                width: 45%;
                margin-left: 10px;
            }

            .history-container {
                background-color: rgba(223, 217, 210, 0.443);
                border-radius: 15px;
                border: 1.7px dashed rgb(159, 87, 87);
            }

            .image-carousel-inner img{
                height: 50%;
            }
            
            .timeline-container {
                background-color: rgba(172, 133, 100, 0.461);
                border: 1.7px dashed rgb(62, 36, 36);
            }

            .scroll-content {
                max-height: 330px; 
                overflow-y: auto; 
                border: 2px dashed rgb(84, 62, 33);
                padding: 15px;
            } 

            .scroll-content h4 {
                color: rgb(22, 120, 48);
            }

            #carousel-item-image {
                background-color: rgba(109, 47, 49, 0.525);
                border: 2px dashed rgb(46, 44, 41);
            }

            #carousel-item-content {
                background-color: rgba(109, 47, 49, 0.525);
                border: 2px dashed rgb(46, 44, 41);
            }
        `}
        </style>    

        <Offer />
        <NavBar />

        {/* -- History -- */}
        <div className="container history-container d-flex flex-column mt-3">
            <div className="container intro-container m-3 p-2">
                <h2>🌍 Welcome to the World of AromaVerse Coffee store</h2>
                <h4>
                    At Aroma Verse, coffee isn't just served — it's shared as a story. 
                    While your order is being prepared, dive into rich content that reveals the journey of every bean. 
                    Grab your cup, sip in comfort, and explore the culture of coffee like never before. 
                    With full customization options, every brew is crafted to match your taste perfectly.
                </h4>
                <p>
                    <i><strong>Our mission is simple:</strong> to make every coffee moment special.</i> 
                    <br/>From the first sip to the last, we bring you flavors full of warmth, stories full of tradition, and a place where coffee feels like home.
                </p>
            </div>

            <div id="imageCarouselAutoplaying" className="carousel carousel-dark slide image-carousel" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#imageCarouselAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#imageCarouselAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#imageCarouselAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>

                <h5>
                    🥐Look below at some of our staff at work... Happy Caffiening...☕
                </h5>
                <div className="carousel-inner image-carousel-inner mb-4">
                    <div className="carousel-item active" data-bs-interval="1800">
                        <img src={"https://i.pinimg.com/originals/26/c8/4c/26c84c3c65ef57816059bc4417cbf17d.gif"} 
                            className="rounded d-block w-100 carousel-img" alt="image1"/>
                    </div>

                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={"https://i.pinimg.com/originals/c0/17/25/c017250e30f153842a896791e6bdaae8.gif"} 
                            className="rounded d-block w-100 carousel-img" alt="image2"/>
                    </div>

                    <div className="carousel-item" data-bs-interval="1800">
                        <img src={"https://i.gifer.com/DfwT.gif"} 
                            className="rounded d-block w-100 carousel-img" alt="image3"/>
                    </div>
                </div>
            </div>
        </div>
        
        {/* -- Timeline of the events -- */}
        <div className="row timeline-container m-3 p-3">
            <h2>☕ Coffee & 🥐 Croissant: A Timeless Pair</h2>
            <h4>📜 Timeline of Origins</h4>
            <div className="col-4">
                <div id="list-example" className="history-list list-group">
                    <a className="list-group-item list-group-item-action list-group-item-dark" href="#list-item-1">9th century - Ethiopia</a>
                    <a className="list-group-item list-group-item-action list-group-item-dark" href="#list-item-2">13th century - Austria</a>
                    <a className="list-group-item list-group-item-action list-group-item-dark" href="#list-item-3">15th century - Arabia</a>
                    <a className="list-group-item list-group-item-action list-group-item-dark" href="#list-item-4">17th century - Europe</a>
                    <a className="list-group-item list-group-item-action list-group-item-dark" href="#list-item-5">17th century: 1683 - Battle of Vienna</a>
                    <a className="list-group-item list-group-item-action list-group-item-dark" href="#list-item-6">19th century - Paris</a>
                    <a className="list-group-item list-group-item-action list-group-item-dark" href="#list-item-7">20th century - Cafe Culture</a>
                    <a className="list-group-item list-group-item-action list-group-item-dark" href="#list-item-8">21th century - Rise in Popularity</a>
                </div>
            </div>

            <div className="col-8">
                <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example scroll-content" tabIndex="0">
                    <h4 id="list-item-1">9th century - Ethiopia</h4>
                    <p>
                        Coffee's story begins with the legend of Kaldi, 
                        a goat herder who noticed his goats dancing energetically after eating red berries. 
                        Curious, locals experimented with the beans, first chewing them and later brewing them into a drink. 
                        This marked the earliest known use of coffee as a stimulant. 
                        Though the story blends myth and history, Ethiopia is recognized as the birthplace of coffee. 
                        The region still grows some of the world's finest beans today.
                    </p>

                    <h4 id="list-item-2">13th century - Austria</h4>
                    <p>
                        Long before the croissant, Austrians enjoyed the kipferl, a crescent-shaped pastry. 
                        It was baked in many variations, from plain to filled with nuts or marzipan. 
                        Its shape carried cultural and sometimes religious symbolism, making it popular for festive occasions. 
                        The pastry laid the foundation for what would later inspire the French croissant. 
                        Even centuries later, kipferl remains a traditional treat in Austria.
                    </p>

                    <h4 id="list-item-3">15th century - Arabia</h4>
                    <p>
                        Coffee cultivation and trade flourished in Yemen, where beans were roasted and brewed much like we enjoy today. 
                        The first coffeehouses, known as qahveh khaneh, became popular gathering spots. 
                        These cafés were not just for drinking but for music, chess, and intellectual debate. 
                        Coffee gained the title “wine of Islam” because it was enjoyed socially without breaking religious restrictions. 
                        From here, coffee spread through the Middle East and North Africa.
                    </p>

                    <h4 id="list-item-4">17th century - Europe</h4>
                    <p>
                        Venetian traders first brought coffee to Italy, where it quickly spread across the continent. 
                        Coffeehouses opened in Vienna, London, and Paris, attracting artists, scholars, and politicians. 
                        They became known as “penny universities” in England, where a single cup bought hours of debate and learning. 
                        Around this time, blending beans from different regions became common to balance flavors and create unique profiles. 
                        Coffee transitioned from a foreign curiosity into a daily European ritual.
                    </p>

                    <h4 id="list-item-5">17th century: 1683 - Battle of Vienna</h4>
                    <p>
                        During the battle, the Ottomans left behind sacks of coffee beans, which Viennese bakers and merchants quickly embraced. 
                        To celebrate victory, bakers created crescent-shaped pastries, symbolizing the Ottoman crescent moon. 
                        This marked the legendary birth of the croissant's link to coffee. 
                        Coffeehouses in Vienna soon became famous for serving coffee with milk and sugar, making the drink smoother and more approachable. 
                        This victory not only shaped history but also created one of Europe's most beloved food traditions.
                    </p>

                    <h4 id="list-item-6">19th century - Paris</h4>
                    <p>
                        French bakers refined the Austrian kipferl into the flaky, buttery croissant we know today. 
                        Parisian cafés paired them with strong black coffee, turning the duo into a breakfast staple. 
                        The café scene became central to French culture, drawing writers, poets, and artists for inspiration. 
                        Coffee and croissants were no longer just food — they symbolized a lifestyle. 
                        This Parisian café culture still inspires coffeehouses around the world.
                    </p>

                    <h4 id="list-item-7">20th century - Cafe Culture</h4>
                    <p>
                        Coffee and croissants became inseparable across Europe and beyond. 
                        With globalization, café chains brought this pairing to cities worldwide. 
                        Meanwhile, small artisan bakeries and roasters preserved the authenticity of tradition. 
                        Coffee innovations like espresso machines and cappuccinos spread widely, making café menus richer than ever. 
                        By the century's end, grabbing coffee and a croissant became part of daily life for millions.
                    </p>

                    <h4 id="list-item-8">21th century - The Modern Coffee Scene</h4>
                    <p>
                        oday, coffee is celebrated not just for taste but also for craft. 
                        Specialty cafés highlight sustainable sourcing, single-origin beans, and latte art. 
                        Croissants, too, have evolved into creative versions like almond, chocolate, and even matcha-filled. 
                        Social media has turned coffee and croissants into symbols of lifestyle and aesthetics. 
                        Together, they remain timeless icons of comfort, culture, and connection in the modern world.
                    </p>
                </div>
            </div>
        </div>

        {/* -- Coffee Carousel -- */}
        <div id="coffee-carousel" className="carousel slide vertical m-3" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#coffee-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#coffee-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#coffee-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#coffee-carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#coffee-carousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#coffee-carousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
                <button type="button" data-bs-target="#coffee-carousel" data-bs-slide-to="6" aria-label="Slide 7"></button>
                <button type="button" data-bs-target="#coffee-carousel" data-bs-slide-to="7" aria-label="Slide 8"></button>
                <button type="button" data-bs-target="#coffee-carousel" data-bs-slide-to="8" aria-label="Slide 9"></button>
            </div>

            <h3>Coffees famous out in the world...</h3>
            <div className="carousel-inner">
                {/* -- 1st item -- */}
                <div className="carousel-item active">
                    <div className="row">
                        {/* -- Left: Image -- */}
                        <div className="col d-flex align-items-center justify-content-center" id="carousel-item-image">
                            <img src={"https://www.nescafe.com/in/sites/default/files/2023-08/Nes_Web3_Article_Header_Espresso_1448x1240.png"} 
                                className="img-fluid" alt="espresso"/>
                        </div>

                        {/* -- Right: Content -- */}
                        <div className="col d-flex flex-column justify-content-center text-center" id="carousel-item-content">
                            <div className="col-8">
                                <h5 className="bg-success text-white d-inline px-2">ESPRESSO</h5>
                                <p>
                                    A strong, concentrated shot of coffee with a rich crema on top.<br/>
                                    It forms the base for many other coffee drinks.<br/>
                                    Perfect for those who love bold flavor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* -- 2nd item -- */}
                <div className="carousel-item">
                    <div className="row">
                        <div className="col d-flex align-items-center justify-content-center" id="carousel-item-image">
                            <img src={"https://www.nescafe.com/in/sites/default/files/2023-08/Nes_Web3_Article_Header_Cappuccino_1448x1240.png"} 
                                className="img-fluid" alt="cappuccino"/>
                        </div>
                        <div className="col d-flex flex-column justify-content-center text-center" id="carousel-item-content">
                            <div className="col-8">
                                <h5 className="bg-success text-white d-inline px-2">CAPPUCCINO</h5>
                                <p>
                                    Equal parts of espresso, steamed milk, and foam,<br/>
                                    often dusted with cocoa powder.<br/>
                                    Light yet rich in taste. A classNameic morning favorite.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* -- 3rd item-- */}
                <div className="carousel-item">
                    <div className="row">
                        <div className="col d-flex align-items-center justify-content-center" id="carousel-item-image">
                            <img src={"https://www.nescafe.com/in/sites/default/files/2023-08/Nes_Web3_Article_Header_Americano_1448x1240.png"} 
                                className="img-fluid" alt="americano"/>
                        </div>
                        <div className="col d-flex flex-column justify-content-center text-center" id="carousel-item-content">
                            <div className="col-8">
                                <h5 className="bg-success text-white d-inline px-2">AMERICANO</h5>
                                <p>
                                    Espresso diluted with hot water, giving a milder taste 
                                    but keeping the same aroma. <br/>
                                    It's smooth and easy to sip. <br/>
                                    Great choice for a longer coffee experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* -- 4th item -- */}
                <div className="carousel-item">
                    <div className="row">
                        <div className="col d-flex align-items-center justify-content-center" id="carousel-item-image">
                            <img src={"https://www.nescafe.com/in/sites/default/files/2023-08/Nes_Web3_Article_Header_Latte_1448x1240.png"} 
                                className="img-fluid" alt="latte"/>
                        </div>
                        <div className="col d-flex flex-column justify-content-center text-center" id="carousel-item-content">
                            <div className="col-8">
                                <h5 className="bg-success text-white d-inline px-2">LATTE</h5>
                                <p>
                                    A smooth blend of espresso and steamed milk, topped with a light layer of foam. <br/>
                                    Creamy and mellow in flavor. <br/>
                                    Often customized with flavors like vanilla or caramel.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* -- 5th item -- */}
                <div className="carousel-item">
                    <div className="row">
                        <div className="col d-flex align-items-center justify-content-center" id="carousel-item-image">
                            <img src={"https://www.nescafe.com/in/sites/default/files/2023-08/Nes_Web3_Article_Header_Mocha_1448x1240.png"} 
                                className="img-fluid" alt="mocha"/>
                        </div>
                        <div className="col d-flex flex-column justify-content-center text-center" id="carousel-item-content">
                            <div className="col-8">
                                <h5 className="bg-success text-white d-inline px-2">MOCHA</h5>
                                <p>
                                    A chocolate-flavored latte made with espresso, steamed milk, and cocoa. <br/>
                                    Sweet and indulgent. <br/>
                                    A treat for coffee and chocolate lovers.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* -- 6th item -- */}
                <div className="carousel-item">
                    <div className="row">
                        <div className="col d-flex align-items-center justify-content-center" id="carousel-item-image">
                            <img src={"https://www.nescafe.com/in/sites/default/files/2023-08/Nes_Web3_Article_Header_Frappe_1448x1240.png"} 
                                className="img-fluid" alt="frappe"/>
                        </div>
                        <div className="col d-flex flex-column justify-content-center text-center" id="carousel-item-content">
                            <div className="col-8">
                                <h5 className="bg-success text-white d-inline px-2">FRAPPE</h5>
                                <p>
                                    A cold, frothy coffee drink often blended with ice, milk, and sweeteners.<br/> 
                                    Creamy, chilled, and delicious.<br/>
                                    Popular as a dessert-style coffee.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* -- 7th item -- */}
                <div className="carousel-item">
                    <div className="row">
                        <div className="col d-flex align-items-center justify-content-center" id="carousel-item-image">
                            <img src={"https://www.nescafe.com/in/sites/default/files/2023-08/Nes_Web3_Article_Header_IcedCoffee_1448x1240.png"} 
                                className="img-fluid" alt="iced coffee"/>
                        </div>
                        <div className="col d-flex flex-column justify-content-center text-center" id="carousel-item-content">
                            <div className="col-8">
                                <h5 className="bg-success text-white d-inline px-2">ICED COFFEE</h5>
                                <p>
                                    Brewed coffee served chilled over ice, refreshing and light. <br/> 
                                    It's simple but energizing. <br/>
                                    Perfect for hot days.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* -- 8th item -- */}
                <div className="carousel-item">
                    <div className="row">
                        <div className="col d-flex align-items-center justify-content-center" id="carousel-item-image">
                            <img src={"https://www.nescafe.com/in/sites/default/files/2023-08/Nes_Web3_Article_Header_Macchiato_1448x1240.png"} 
                                className="img-fluid" alt="macchiato"/>
                        </div>
                        <div className="col d-flex flex-column justify-content-center text-center" id="carousel-item-content">
                            <div className="col-8">
                                <h5 className="bg-success text-white d-inline px-2">MACCHIATO</h5>
                                <p>
                                    An espresso “stained” with a small amount of milk or foam, bold and intense.<br/>
                                    Stronger than a latte but softer than plain espresso. <br/>
                                    Ideal for espresso lovers who want a twist.
                                </p>
                            </div>                        
                        </div>
                    </div>
                </div>

                {/* -- 9th item -- */}
                <div className="carousel-item">
                    <div className="row">
                        <div className="col d-flex align-items-center justify-content-center" id="carousel-item-image">
                            <img src={"https://media.30seconds.com/tip/md/How-to-Make-DIY-Flavored-Coffees-at-Home-Save-Money-4840-f9f6710067-1497367891.jpg"} 
                                className="img-fluid" alt="other coffees"/>
                        </div>
                        <div className="col d-flex flex-column justify-content-center text-center" id="carousel-item-content">
                            <div className="col-8">
                                <h5 className="bg-success text-white d-inline px-2">OTHER COFFEES</h5>
                                <p>
                                    Coffee isn't just fixed, it can be customised. <br/>
                                    From milk and sweetness to strength and flavors, every cup can be made to suit taste. <br/>
                                    It's all about creating the perfect sip for you.
                                </p>
                            </div>                        
                        </div>
                    </div>
                </div>


            </div>

            {/* -- Controls -- */}
            <button className="carousel-control-prev" type="button" data-bs-target="#coffee-carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#coffee-carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>
        </div>

        <Footer />
    </>
  );
};

export default Home;