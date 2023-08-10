import React, { useEffect } from "react";
import { Container, Row, Col, Button, Card, Carousel, Form, DropdownButton, Dropdown } from "react-bootstrap";
import FeaturesImg1 from '../img/Jones/features_img1.jpg';
import BlogImg from '../img/Jones/blog.jpg';
import BlogImg2 from '../img/Jones/blog2.jpg';
import BlogImg3 from '../img/Jones/blog3.jpg';
import BlogImg4 from '../img/Jones/blog4.jpg';
import FooterComponent from '../components/footer.component'


const Blog = () => {

    useEffect(() => {
          window.scrollTo(0, 0);   
    });

    return (
        <Container fluid>
            <Row>
                <Col className="p-0">
                    <section className="bannerArea mt-5 ">
                        <Container fluid>
                            <Row>
                                <Col>
                                    <Container fluid className="pt-5 pb-5">
                                        <Row>
                                            <Col className="p-0">
                                                <Container className="starImg">
                                                    <Row className="justify-content-center align-items-center h-100">
                                                        <Col sm={12} md={8} className="text-center h-100 d-flex">
                                                            <Container fluid className="pt-5 pb-5">
                                                                <Row>
                                                                    <Col className="pt-5 pb-5">
                                                                        <br />
                                                                        <h2 className="sectionMainHeading">My Blog</h2>
                                                                        <p className="mt-5">Web 3.0 Shaping the Future of Finance</p>
                                                                        <Button className="mt-5" variant="primary" size="lg">Contact Me</Button>{' '}
                                                                    </Col>
                                                                </Row>
                                                            </Container>
                                                        </Col>
                                                    </Row>
                                                </Container> 
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section>
                        <Container fluid className="mt-5 pb-5 blogContantArea">
                            <Row>
                                <Col>  
                                    <Container fluid className="pt-5 pb-5 position-relative">
                                        <Row>
                                            <Col>
                                                <Container>
                                                    <Row>
                                                        <Col md={12} lg={12}>
                                                            <Container fluid>
                                                                <Row>
                                                                    <Col sm={12} className="text-start mb-5">
                                                                        <img src={BlogImg} className="img-fluid"/>
                                                                        <h3 className="fs-30 mt-3 mb-3 text-primary d-flex">Web 3.0 Shaping the Future of Finance</h3>
                                                                        <p className="fs-18">The Internet is transitioning from offering read-only content to a more interactive, dynamic, and decentralised experience. Web 3.0 is at the forefront of this inception with the advancement and integration of decentralised finance (DeFi) blockchain, cryptocurrencies, etc. 
                                                                            According to CNBC, a rally in Ether resulted in cryptocurrencies' total market capitalisation reaching $2.2 trillion for the first time in April 2022. On the other hand, DeFi protocols’ total locked value increased by more than 1000% year-on-year. 
                                                                            If you are a Web 3.0 enthusiast wondering how it will shape the future of finance, this post is for you.
                                                                        </p>
                                                                        <p className="fs-18">
                                                                            <h4>Emerging Web 3.0 Trends</h4>
                                                                            Various Web 3.0 financial trends are reshaping the future of finance across several industries with a potential for growth in the next decade or so. Decentralisation of monetary transactions will be one of the most significant developments introduced by Web 3.0. This is where the world may witness businesses and consumers gradually moving away from conventional banking, causing a considerable shift in the financial landscape
                                                                        </p>
                                                                        <h4>Here are some of the common trends initialised or supported by Web 3.0.</h4><br/>
                                                                        <p className="fs-18">
                                                                            <h4>Banking or Finance</h4>
                                                                            2021 witnessed agrowth of 1500% in decentralised paid job listings. On the other hand, the worth of cryptocurrencies' secure transactions reached over $14 trillion. Moreover, insurance companies and banks are using AI to automate their credit risk modelling to manage assets in the digital era. 
                                                                        </p>
                                                                        <p className="fs-18">
                                                                            <h4>DeFi</h4>
                                                                            <p>Decentralised Finance(DeFi) is a peer-to-peer encrypted technology. It is a perfect alternative to conventional financial practices for receiving and transmitting money. The best part is that open-source platforms might help lower the cost of using such financial services.</p>
                                                                            <p>Several DeFi initiatives in Web 3.0, such as smart Oracles, digital wallets, and staking projects, have the potential to reshape the financial world.</p>
                                                                        </p>
                                                                        <p className="fs-18">
                                                                            <h4>DApps</h4>
                                                                            <p>According to the IDC report, 2021 witnessed an investment of $6.6 billion in blockchain tech and may experience a spike of up to $19 billion by 2024. While the worldwide adoption of cryptocurrency and blockchain increases, decentralised applications (dApps) in the finance world will continue to get stronger.</p>
                                                                        </p>
                                                                        <p className="fs-18">
                                                                            <h4>Digital Wallets</h4>
                                                                            <p>As Web 3.0 revolutionises digital money, digital wallets such as Circle, Coinbase, and many others may become platforms for keeping and transferring funds conveniently. Businesses and consumers will enjoy more financial freedom over their digital funds and assets and sign smart contracts. Digital wallets are already in demand for those already dealing in cryptocurrencies.</p>
                                                                        </p>
                                                                        <p className="fs-18">
                                                                            <h4>NFTs</h4>
                                                                            <p>Non-fungible tokens (NFTs) refer to digital blockchain tokens connected with specific digital assets ranging from digital art to merchandise and even virtual land. NFTs have the potential to revolutionise finance, banking, and global commerce and shake up the world of wealth and investment. </p>
                                                                            <p>The announcement of Metaverse by Meta (formerly known as Facebook) has led to the creation of several NFT marketplaces. These marketplaces allow creators to sell and purchase their content directly from the source eliminating intermediaries such as auction houses and agents. </p>
                                                                            <p>NFTs also have the potential for investors to benefit via the creation of funds and directly investing in other NFTs or ETFs tracking indexes involved in the NFT ecosystem. </p>
                                                                        </p>
                                                                        <p className="fs-18">
                                                                            <h4>Conclusion</h4>
                                                                            <p>Web 3.0 has the potential to transform the financial landscape worldwide. More and more industries are showing interest in exploring how Web 3.0, DeFi, and cryptocurrencies can help launch their businesses into the digital era of Metaverse. </p>
                                                                            <p>The most promising Web 3.0 initiatives that may gain traction in the upcoming five years include digital wallets, blockchain upgrades, the creation of new DeFi and dApps protocols, etc. All you need is to keep your ear to the ground and follow the trends and news on NFTs, Web 3.0, and cryptocurrencies.</p>
                                                                        </p>
                                                                    </Col>

                                                                    {/* <Col sm={12} md={6} className="text-start mb-5">
                                                                        <img src={FeaturesImg1} className="img-fluid"/>
                                                                        <h3 className="fs-30 mt-3 mb-3 text-primary d-flex">Article Title
                                                                        <small className="text-end ms-auto text-muted fs-10">05.07.2022</small>
                                                                        </h3>
                                                                        <p className="fs-18">The Internet is transitioning from offering read-only content to a more interactive, dynamic, and decentralised experience. Web 3.0 is at the forefront of this inception with the advancement and integration of decentralised finance (DeFi) blockchain, cryptocurrencies, etc. 
                                                                        According to CNBC, a rally in Ether resulted in cryptocurrencies' total market capitalisation reaching $2.2 trillion for the first time in April 2022. On the other hand, DeFi protocols’ total locked value increased by more than 1000% year-on-year. 
                                                                        If you are a Web 3.0 enthusiast wondering how it will shape the future of finance, this post is for you.
                                                                        </p>
                                                                    </Col>

                                                                    <Col sm={12} md={6} className="text-start mb-5">
                                                                        <img src={FeaturesImg1} className="img-fluid"/>
                                                                        <h3 className="fs-30 mt-3 mb-3 text-primary d-flex">Article Title
                                                                        <small className="text-end ms-auto text-muted fs-10">05.07.2022</small>
                                                                        </h3>
                                                                        <p className="fs-18">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sociis maecenas adipiscing accumsan pretium ultrices scelerisque. Sed.. </p>
                                                                    </Col> */}
                                                                </Row>
                                                            </Container>
                                                        </Col>
                                                        {/* <Col md={5} lg={4}>
                                                            <Container fluid>
                                                                <Row>
                                                                    <Col sm={12} className="text-start mb-5">
                                                                        <img src={FeaturesImg1} className="img-fluid"/>
                                                                        <h3 className="fs-30 mt-3 mb-3 text-primary d-flex">Web 3.0 Shaping the Future of Finance
                                                                        <small className="text-end ms-auto text-muted fs-10">05.07.2022</small>
                                                                        </h3>
                                                                        <p className="fs-18">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sociis maecenas adipiscing accumsan pretium ultrices scelerisque. Sed.. </p>
                                                                    </Col>

                                                                    <Col sm={12} className="text-start mb-5">
                                                                        <img src={FeaturesImg1} className="img-fluid"/>
                                                                        <h3 className="fs-30 mt-3 mb-3 text-primary d-flex">Web 3.0 Shaping the Future of Finance
                                                                        <small className="text-end ms-auto text-muted fs-10">05.07.2022</small>
                                                                        </h3>
                                                                        <p className="fs-18">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sociis maecenas adipiscing accumsan pretium ultrices scelerisque. Sed.. </p>
                                                                    </Col>
                                                                </Row>
                                                            </Container>
                                                        </Col> */}
                                                    </Row>
                                                    {/* <Row>
                                                        <Col className="text-center"> <Button className="mt-5" variant="primary" size="lg">Show All</Button>{' '}</Col>
                                                    </Row> */}
                                                </Container>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section>
                        <Container fluid className="mt-5 pb-5 blogContantArea">
                            <Row>
                                <Col>  
                                    <Container fluid className="pt-5 pb-5 position-relative">
                                        <Row>
                                            <Col>
                                                <Container>
                                                    <Row>
                                                        <Col md={12} lg={12}>
                                                            <Container fluid>
                                                                <Row>
                                                                    <Col sm={12} className="text-start mb-5">
                                                                        <img src={BlogImg2} className="img-fluid"/>
                                                                        <h3 className="fs-30 mt-3 mb-3 text-primary d-flex">What is a Crypto Wallet?</h3>
                                                                        <p className="fs-18">Are you new to cryptocurrencies and wondering what a crypto wallet is? If yes, you are in the right place. This post will give you insights into the basics of crypto wallets and how theywork. So, without further ado, let us dive right in. 
                                                                        </p>
                                                                        <p className="fs-18">
                                                                            <h4>What is Crypto Wallet? </h4>
                                                                            Various Web 3.0 financial trends are reshaping the future of finance across several industries with a potential for growth in the next decade or so. Decentralisation of monetary transactions will be one of the most significant developments introduced by Web 3.0. This is where the world may witness businesses and consumers gradually moving away from conventional banking, causing a considerable shift in the financial landscape
                                                                            <br/>
                                                                            If you are thinking about dealing in cryptocurrency, you will need a crypto wallet to keep your digital coins in a secure location. Think of it as a traditional wallet that you carry. You keep the money secured in the wallet and only use it when you need to take out or put the money in. the only difference is that you need a private key or password to access your digital wallet. 
                                                                        </p>
                                                                        <h4></h4><br/>
                                                                        <p className="fs-18">
                                                                            <h4>How Does Your Crypto Wallet Work? </h4>
                                                                            Crypto wallet operates in the realm of blockchain technology and cryptocurrencies. Remember, crypto coins are a digital currency; hence you can only store them in a digital safe protected by passwords and other security protocols.

                                                                            <p>
                                                                            The blockchain will keep a record of crypto transactions by identifying whose public and private key owns the coins. Just like remembering your bank account number, you can use a crypto wallet address to track your digital currency.    
                                                                            </p>

                                                                            <p>
                                                                                If you wish to transfer the money to another person, all you need is a bank account of the recipient. If someone wants to send you Bitcoins, you can provide them with your crypto wallet address. This is a great way to secure your finances because nobody else but you will be able to access your digital funds. 
                                                                            </p>

                                                                            <p>
                                                                                You can create as many crypto wallets as you like and spread your cryptocurrency into each address for various purposes. The best part about using a crypto wallet is that it will never reveal your identity to the other party or anyone else.
                                                                            </p>
                                                                        </p>

                                                                       
                                                                        <p className="fs-18">
                                                                            <h4>Public Key Vs. Private Key</h4>
                                                                            <p>Like your bank account or a physical locker, you need a key to access your crypto wallet. In order to do so, you will need a public key or a private key. However, both have different functionalities. </p>
                                                                        </p>

                                                                        <p className="fs-18">
                                                                            <h4>Public Key</h4>
                                                                            <p>A public key is a digital number that can encrypt and decrypt your data to protect it from any unauthorized access. It is a cryptographic code you can give other users to receive crypto coins from them into your account. As the key is encrypted, the user will only be able to transfer the money without access to your account or knowing your real-world identity. </p>
                                                                        </p>
                                                                        <p className="fs-18">
                                                                            <h4>Private Key</h4>
                                                                            <p>A private key is an encryption password that you can use to access your digital coin stash. A private key is your password to access your crypto wallet. You must enter the private key whenever you wish to transfer your crypto coins to your bank account. </p>
                                                                            <p>Nobody should ever have access to your private key. Therefore, you must always keep it secure and never share it with anyone. You can also use Two-Factor Authentication to add another layer of protection to your crypto wallet.</p>
                                                                        </p>
                                                                        
                                                                        <p className="fs-18">
                                                                            <h4>Conclusion</h4>
                                                                            <p>Creating a crypto wallet is easy; several platforms and exchanges allow you to create your crypto wallet with a step-by-step guide. All you need is to fill in the information, sign up, and you are good to go. However, it would be best if you only chose a reputable digital wallet. The best way is to do some research and check which crypto wallets offer the best security and features. </p>
                                                                        </p>
                                                                    </Col>
                                                                </Row>
                                                            </Container>
                                                        </Col>
                                                    </Row>
                                                    {/* <Row>
                                                        <Col className="text-center"> <Button className="mt-5" variant="primary" size="lg">Show All</Button>{' '}</Col>
                                                    </Row> */}
                                                </Container>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section>
                        <Container fluid className="mt-5 pb-5 blogContantArea">
                            <Row>
                                <Col>  
                                    <Container fluid className="pt-5 pb-5 position-relative">
                                        <Row>
                                            <Col>
                                                <Container>
                                                    <Row>
                                                        <Col md={12} lg={12}>
                                                            <Container fluid>
                                                                <Row>
                                                                    <Col sm={12} className="text-start mb-5">
                                                                        <img src={BlogImg3} className="img-fluid"/>
                                                                        <h3 className="fs-30 mt-3 mb-3 text-primary d-flex">How to Secure Your Cryptocurrency from Theft</h3>
                                                                        <p className="fs-18">Cryptocurrencies operate on a decentralized system with no financial institution regulating or offering a layer of security. So, how do you safeguard your cryptocurrency from theft? If you are looking for an answer, this post is for you. 
                                                                        </p>
                                                                        <p className="fs-18">
                                                                            <h4>How Hackers Steal Your Cryptocurrency?</h4>
                                                                            Cybercriminals mainly try to steal theadmin private key or password to your crypto wallet. For this, a hacker may create a fake cryptocurrency application or website that looks exactly like the platform you use to access your crypto wallet. The cyber attackers may also create fake exchanges for you to buy cryptocurrencies and enter your crypto wallet details. 
                                                                            <br/>
                                                                            The idea is to trick you into entering your crypto wallet IDand password, which actually gives cyber attackers access to your cryptocurrency stash. 
                                                                        </p>
                                                                        <h4></h4><br/>
                                                                        <p className="fs-18">
                                                                            <h4>5 Ways to Secure Your Cryptocurrency from Theft</h4>
                                                                            Here are five ways to keep your cryptocurrency secure from notorious hackers.

                                                                            <h4>1. Securing your Device</h4> 
                                                                            <p className="fs-18">Consider your cryptocurrency as digital data. To keep it secure, you must use security protocols to secure the device you use to access your digital currency. You can follow the below-mentioned protocols. </p>
                                                                            <ul>
                                                                                <li>Scan your device for any malware or viruses</li>
                                                                                <li>Do not open a suspicious email, or click on a link within such emails</li>
                                                                                <li>You should protect your accounts and digital wallets via Two-Factor Authentication (2FA) protocol.</li>
                                                                                <li>Regularly backup your data</li>
                                                                            </ul>
                                                                        </p>

                                                                       
                                                                        <p className="fs-18">
                                                                            <h4>2. Keeping Private Key Safe</h4>
                                                                            <p>Your private key is your first line of defense against hackers. The only way to access your crypto wallet is via an encrypted 256-bit number. Therefore, you must guard it at any cost. Using a strong password, 2FA, encrypted device, and secure Wi-Fi are a must to access your cryptocurrency digital wallet at all times.</p>
                                                                        </p>

                                                                        <p className="fs-18">
                                                                            <h4>3. Choosing an Exchange</h4>
                                                                            <p>You can choose from twotypes of exchange to maintain your cryptocurrency account. A centralized account controls your crypto coins' security. On the other hand, a decentralized account gives you full control over how you would like to secure your coins. Whichever account you choose, make sure that the UI is user-friendly and that you have ensured maximum security protocols.</p>
                                                                        </p>
                                                                        <p className="fs-18">
                                                                            <h4>4. Safeguarding Your Password</h4>
                                                                            <p>Some crypto services may allow login via username and password. This way, you do not need to remember your private key. However, if you are using this method, it gets easier for hackers to steal your cryptocurrency assets.</p>
                                                                            <p>Therefore, you must protect your password and set up multifactor authentication linked with your email or phone number. You can also use Google Authenticator as a simple yet effective security protocol. </p>
                                                                        </p>
                                                                        <p className="fs-18">
                                                                            <h4>5. Storing Your Cryptocurrency Offline</h4>
                                                                            <p>If you want to secure your cryptocurrency from theft, one of the best security measures is to keep your cryptocurrency in an offline wallet. This is also known as "cold storage,"protecting your digital currency from any online crimes, scams, and attacks.</p>
                                                                            <p>You can use a hardware wallet and secure it with a password. As your cryptocurrency stash is offline, it will be secure from any viruses, hacking, or phishing attempts. You can connect the hardware storage whenever you want to exchange or make a transaction, and disconnect it at the end of each session. </p>
                                                                        </p>
                                                                       
                                                                        
                                                                        <p className="fs-18">
                                                                            <h4>Conclusion</h4>
                                                                            <p>If you are worried about the safety of your digital coins, it is easier than you think. You do not need to be tech-savvy, as it does not require any coding or programming. Just ensure to follow the above-mentioned protocols to secure your cryptocurrency from theft. </p>
                                                                            <p>Remember, all you need is to choose your platform and crypto wallet wisely after thorough research. The next step is to deploy numerous layers of security to protect your crypto coins. In order to stay on top of the new ways cyber attackers develop to steal cryptocurrency, keep your ear to the ground to stay updated on the latest trends and developments in the crypto-verse.</p>
                                                                        </p>
                                                                    </Col>
                                                                </Row>
                                                            </Container>
                                                        </Col>
                                                    </Row>
                                                    {/* <Row>
                                                        <Col className="text-center"> <Button className="mt-5" variant="primary" size="lg">Show All</Button>{' '}</Col>
                                                    </Row> */}
                                                </Container>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section>
                        <Container fluid className="mt-5 pb-5 blogContantArea">
                            <Row>
                                <Col>  
                                    <Container fluid className="pt-5 pb-5 position-relative">
                                        <Row>
                                            <Col>
                                                <Container>
                                                    <Row>
                                                        <Col md={12} lg={12}>
                                                            <Container fluid>
                                                                <Row>
                                                                    <Col sm={12} className="text-start mb-5">
                                                                        <img src={BlogImg4} className="img-fluid"/>
                                                                        <h3 className="fs-30 mt-3 mb-3 text-primary d-flex">Can Cryptocurrency Survive Recession?</h3>
                                                                        <p className="fs-18">
                                                                        The massive sell-off in 2022 has left most investors concerned about the future of cryptocurrencies. Even top-tier coins like Bitcoin and Ethereum lost more than 80% of their value after reaching their all-time high value in November 2021. Moreover, surging inflation, Ukraine-Russia war, and difficulties in the global supply chain is moving the worldwide economy towards a recession. 
                                                                        </p>
                                                                        <p className="fs-18">
                                                                        These factors might make you wonder whether the crypto market can survive a recession. It will be the first recession since Bitcoin, and other cryptocurrencies came into existence. Let's look at how a recession will affect cryptocurrencies in the long run. 
                                                                        </p>
                                                                        <h4></h4><br/>
                                                                        <p className="fs-18">
                                                                            <h4>Interest Rate Hikes </h4>
                                                                            Most notably, the interest rate hikes in the last few months that helped curb inflation has negatively affected crypto coins' value. Investors lost confidence in this digital asset and soon withdrew their investments.
                                                                            <p className="fs-18">According to a survey by Financial Times, more than 70% of economists believe that the US economy will witness a recession in 2023. A recession means that the country's economic growth would be harmful, and unemployment would continue to increase.</p>
                                                                            <p className="fs-18">Since many consider crypto coins a volatile investment during an economic crises, we expect to see their value decline further. Overall, market sentiments and economic conditions make it difficult for crypto to rebound. As the FED continues to hike interest rates, investors would turn to safe-haven investments instead of cryptocurrencies. </p>
                                                                        </p>

                                                                       
                                                                        <p className="fs-18">
                                                                            <h4>Bearish Trends in the Market</h4>
                                                                            <p>The bearish trends in the crypto market are not new since these digital assets are famous for their volatility. We have seen in the past how the market has experienced a bear run in challenging economic situations, such as the crash in 2018.</p>
                                                                            <p>However, the crypto market did rebound in the next few years and reached an all-time high in its market cap in 2021. But the recent loss in its value is quite significant since coins like Bitcoin have come close to breaking their resistance levels. Though the recession won't lead to the coin's demise, it is a significant setback. </p>
                                                                        </p>

                                                                        <p className="fs-18">
                                                                            <h4>New Innovations that Can Impact the Coin's Value </h4>
                                                                            <p>Innovation plays a critical role in mitigating the impact of recession in the long run. An example is the boom of the micro-gig economy and increased reliance on e-commerce after the 2008-09 recession. Since Blockchain is a new and innovative technology, we might see widespread adoption in this recession. </p>
                                                                            <p>Many industries have started using this technology to their advantage. Therefore, there is a chance that cryptocurrencies on the Blockchain would experience the same growth as people adopt this new technology.</p>
                                                                        </p>
                                                                        <p className="fs-18">
                                                                            <h4>Most Altcoins Will Die</h4>
                                                                            <p>While coins like Bitcoin and Ether have a good chance of surviving the recession, the altcoins will not be as lucky. In the recent sell-off, various altcoins that saw a boom in their value have lost around 99% of their value. This decline led to massive losses for investors, and it is unlikely they will gain their confidence again.</p>
                                                                            <p>However, cryptocurrencies with optimal adoption rates are more likely to come on top after the recession. Coins like Ethereum will likely grow and survive the recession since they have a firm grip over the layer-one blockchain ecosystem. </p>
                                                                            <p>Nevertheless, a bearish market will negatively affect the value of digital assets in the coming months. Coins that don't have a high market capitalization, higher uncertainty, and dismissive liquidity are more likely to collapse.</p>
                                                                        </p>
                                                                        <p className="fs-18">
                                                                            <h4>Which Cryptocurrencies Have a Chance of Surviving the Recession? </h4>
                                                                            <p>While the crypto market is highly volatile, it has helped investors earn decent returns on their investments. So, you might want to find out which currencies are more likely to survive a recession. Unfortunately, experts and analysts still find it difficult to predict a crypto coin's value. </p>
                                                                            <p>Industry experts believe that the top 20 cryptocurrencies might see some decline during the recession, but they can survive the tough times ahead. These crypto coins have a higher market capitalization and better historical price performance. However, it would help if you kept an eye on the latest trends and changing market situations to know how the crypto coins' prices will react.</p>
                                                                        </p>
                                                                    </Col>
                                                                </Row>
                                                            </Container>
                                                        </Col>
                                                    </Row>
                                                    {/* <Row>
                                                        <Col className="text-center"> <Button className="mt-5" variant="primary" size="lg">Show All</Button>{' '}</Col>
                                                    </Row> */}
                                                </Container>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section>
                        
                        <Container fluid>
                            <Row className="">
                                <Col className="section-5 pb-5 pt-5 align-itens-center d-flex">
                                    <Container>
                                            <Row className="align-items-center justify-content-center h-100">
                                                <Col md={6}>
                                                    <h2 className="sectionMainHeading mb-5">
                                                        Contact Me
                                                    </h2>
                                                    <Form>
                                                        <Container>
                                                            <Row>
                                                                <Col md={6} className="mb-5">
                                                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                                        <Form.Control size="lg" type="email" placeholder="Enter your name" />
                                                                    </Form.Group>
                                                                </Col> 
                                                                <Col md={6} className="mb-5">
                                                                    <Form.Group className="mb-3 rounded-pill border-primary" controlId="exampleForm.ControlInput1">
                                                                        <Form.Control size="lg" type="email" placeholder="Enter you email" />
                                                                    </Form.Group>
                                                                </Col> 
                                                                <Col sm={12} className="mb-5">
                                                                    <Form.Group className="mb-3 rounded-pill border-primary" controlId="exampleForm.ControlTextarea1">
                                                                        <Form.Control as="textarea" rows={3} />
                                                                    </Form.Group>
                                                                </Col>
                                                                <Col sm={12} className="mb-5">
                                                                    <Button variant="outline-primary" className="w-50 rounded-pill bg-white text-dark" size="lg">Send Message</Button>{' '}
                                                                </Col>
                                                            </Row>
                                                        </Container>
                                                    </Form>
                                                </Col>
                                            </Row>
                                    </Container>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </Col>
            </Row>
            <FooterComponent />
        </Container>
    );
};

export default Blog;