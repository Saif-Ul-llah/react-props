import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import pic from"./download.png"

const apI =
{
"articles": [
{
"source": {
"id": null,
"name": "Chicago Tribune"
},
"author": "Karie Angell Luc",
"title": "‘It’s a mall for cars … exactly’ New digs for Toyota and Tesla drive Skokie Boulevard curb appeal",
"description": "Toyota dealership is building a new 43,274 square foot facility, on Skokie Boulevard in Northbrook, for the sales and service of new and used Toyota vehicles.",
"url": "https://www.chicagotribune.com/suburbs/northbrook/ct-nbs-toyota-new-location-tl-1020-20221014-noqwqltr35gbblzxbtdwgh5piu-story.html",
"urlToImage": "https://www.chicagotribune.com/resizer/sZfOjYsS8UF7RbuAUcnc2Fk7fQ4=/1200x630/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/tronc/5KBLEFHBGJGTLBATNOS7BWLFXU.jpg",
"publishedAt": "2022-10-16T14:03:13Z",
"content": "The auto dealership strip on Northbrooks Skokie Boulevard is revving up now that Toyota is rebuilding near new neighbor Tesla.\r\nWith a heads up to Tesla about whats down the road comes from Mike Leep… [+5364 chars]"
},
{
"source": {
"id": null,
"name": "Slashdot.org"
},
"author": "feedfeeder",
"title": "Tesla, Netflix Set to Report Earnings as Recession Talk Mounts - The Wall Street Journal",
"description": "Tesla, Netflix Set to Report Earnings as Recession Talk MountsThe Wall Street Journal NFLX Stock, Tesla Headline Q3 Earnings Calendar; IBM, Lam Research, Schlumberger Also Set To ReportInvestor's Business Daily TSLA Stock: 3 Things to Watch When Tesla Reports…",
"url": "https://slashdot.org/firehose.pl?op=view&amp;id=166812387",
"urlToImage": null,
"publishedAt": "2022-10-16T13:52:50Z",
"content": "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way."
},
{
"source": {
"id": null,
"name": "Biztoc.com"
},
"author": "bigbets79",
"title": "Citigroup reports $110 million leveraged-loan loss as other banks avoid sector exposure",
"description": "Citigroup took a $110 million writedown on leveraged loans in the third quarter. Wall Street competitors downplayed their exposure to the sector. Citigroup's chief financial officer Mark Mason... #markmason #transactions #jamesgorman #tesla #citigroup #financ…",
"url": "https://biztoc.com/p/x385zbkg?ref=rss",
"urlToImage": "https://cdn.biztoc.com/og/x385zbkg.jpg",
"publishedAt": "2022-10-16T13:38:15Z",
"content": "Citigroup took a $110 million writedown on leveraged loans in the third quarter. Wall Street competitors downplayed their exposure to the sector. Citigroup's chief financial officer Mark Mason told r… [+1096 chars]"
},
{
"source": {
"id": null,
"name": "Freerepublic.com"
},
"author": "www.brayincandy.com",
"title": "Time to Resign Joe (Saturbray)",
"description": "Let the words of my mouth, and the meditation of my heart, be acceptable in thy sight, O LORD, my strength, and my redeemer. Psalm 19:14 (King James Version) It is time to stop this charade and for Biden to resign. He has embarrassed himself and this country …",
"url": "https://freerepublic.com/focus/f-news/4100941/posts",
"urlToImage": null,
"publishedAt": "2022-10-16T13:30:23Z",
"content": "Skip to comments.\r\nTime to Resign Joe (Saturbray)www.brayincandy.com ^\r\n | 10/16/22\r\n | bray\r\nPosted on 10/16/2022 6:30:23 AM PDT by bray\r\nLet the words of my mouth, and the meditation of my heart, b… [+5880 chars]"
},
{
"source": {
"id": null,
"name": "MarketWatch"
},
"author": "Bill Peters",
"title": "Netflix and Tesla stocks are not having a good year, but here comes a chance to turn it around",
"description": "Earnings Watch: Questions about demand dog Netflix and Tesla, while Snap faces an uncertain environment for online advertising --- all will take the stage for Wall Street in the week ahead",
"url": "https://www.marketwatch.com/story/netflix-and-tesla-stocks-are-not-having-a-good-year-but-here-comes-a-chance-to-turn-it-around-11665848500",
"urlToImage": "https://images.mktw.net/im-644949/social",
"publishedAt": "2022-10-16T13:30:00Z",
"content": "Two stocks that have defined Wall Streets boom in the past decade streaming giant Netflix Inc. and electric-vehicle maker Tesla Inc. will hope to turn around some poor recent trajectories as earnings… [+6659 chars]"
},
{
"source": {
"id": null,
"name": "Global News"
},
"author": "Mia Rabson",
"title": "Innovation minister hopes to build EV supply chain: ‘A golden opportunity for Canada’ - National | Globalnews.ca",
"description": "Champagne said the electric vehicle supply chain is a ``golden opportunity'' for Canada with ``dire consequences'' for workers if we don't seize the moment.",
"url": "https://globalnews.ca/news/9202762/innovation-minister-ev-supply-chain-canada/",
"urlToImage": "https://globalnews.ca/wp-content/uploads/2022/10/20221014151040-e5995ca9e7a48a9d25d7212528273467e2f55a388cf476afbfcd337fb5b24622.jpg?quality=85&strip=all&w=720&h=379&crop=1",
"publishedAt": "2022-10-16T12:42:20Z",
"content": "When Innovation Minister Francois-Philippe Champagne gets in front a microphone to talk about electrifying Canada’s auto industry, he has a favourite line to sum up his efforts to attract global inve… [+6221 chars]"
},
{
"source": {
"id": null,
"name": "NDTV News"
},
"author": null,
"title": "Elon Musk Explains Why People Should Never Fear Air Turbulence",
"description": "Tesla Chief Elon Musk recently explained why air turbulence is not a big deal and why one should never be scared during a turbulent flight.",
"url": "https://www.ndtv.com/world-news/elon-musk-explains-why-people-should-never-fear-air-turbulence-3436535",
"urlToImage": "https://c.ndtvimg.com/2022-10/jtohor3_elon-musk-air-turbulence_625x300_16_October_22.jpg",
"publishedAt": "2022-10-16T12:12:08Z",
"content": "Air turbulence is one of the reasons that lead some people to give up air travel.\r\nTesla Chief Elon Musk recently explained why air turbulence is not a big deal and why one should never be scared dur… [+2059 chars]"
},
-{
"source": {
"id": null,
"name": "DailyFX"
},
"author": "Nick Cawley",
"title": "S&P 500, Nasdaq 100, Dow Jones – Q3 Earnings Will Drive Market Action",
"description": "After Thursday’s slump and rally, US equity markets will be looking at a cluster of important Q3 earnings next week, including Tesla, Goldman Sachs, J&J, and Netflix.",
"url": "https://www.dailyfx.com/news/s-p-500-nasdaq-100-dow-jones-q3-earnings-will-drive-market-action-20221016.html",
"urlToImage": "https://a.c-dn.net/b/1Bm3eB/data5.JPG",
"publishedAt": "2022-10-16T12:00:00Z",
"content": "S&amp;P 500, Nasdaq 100, and Dow Jones Forecasts and Analysis\r\n<ul><li>Post-US CPI dump and pump muddies the equity market outlook.</li><li>Tesla, Goldman Sachs, Netflix, and Snap all post next week.… [+3013 chars]"
},
-{
"source": {
"id": "fortune",
"name": "Fortune"
},
"author": "Hillary Hoffower",
"title": "Mark Zuckerberg and Brian Chesky define the post-pandemic CEO culture split",
"description": "Executives promised the world to white-collar workers during the pandemic. Now, some of them are rolling back the perks that employees came to see as a mainstay.",
"url": "https://fortune.com/2022/10/16/mark-zuckerberg-versus-brian-chesky-pandemic-ceo-culture-split/",
"urlToImage": "https://content.fortune.com/wp-content/uploads/2022/10/Zuck-and-Chesky.jpg?resize=1200,600",
"publishedAt": "2022-10-16T11:57:58Z",
"content": "If the next blockbuster superhero movie centered around the return-to-office battle, then the villain and the hero are painstakingly obvious: The CEO ordering workers back to office wears the purple … [+8200 chars]"
},
-{
"source": {
"id": null,
"name": "Spacewar.com"
},
"author": null,
"title": "Elon Musk says SpaceX can't continue to fund Starlink in Ukraine",
"description": "Washington DC (UPI) Oct 14, 2021\n\n\n Tesla founder Elon Musk said Friday that SpaceX could not keep funding its Starlink satellites in Ukraine because the company is losing money. \n Musk said he would no longer fund the Starlink service for Ukraine, later turn…",
"url": "https://www.spacewar.com/reports/Elon_Musk_says_SpaceX_cant_continue_to_fund_Starlink_in_Ukraine_999.html",
"urlToImage": "https://www.spxdaily.com/images-hg/elon-musk-hg.jpg",
"publishedAt": "2022-10-16T11:51:52Z",
"content": "Tesla founder Elon Musk said Friday that SpaceX could not keep funding its Starlink satellites in Ukraine because the company is losing money.\r\nMusk said he would no longer fund the Starlink service … [+3599 chars]"
},
{
"source": {
"id": null,
"name": "Yanko Design"
},
"author": "Srishti Mitra",
"title": "Top 10 electric bikes that are perfect for adrenaline lovers",
"description": "Top 10 electric bikes that are perfect for adrenaline loversBikes get the heart of almost every Automotive lover thumping! Make them electric – and you have the best of both worlds! They’re powerful, super-fast,...",
"url": "https://www.yankodesign.com/2022/10/16/top-10-electric-bikes-that-are-perfect-for-adrenaline-lovers/",
"urlToImage": "https://www.yankodesign.com/images/design_news/2022/10/electric-bikes/Tesla-Model-Z.jpeg",
"publishedAt": "2022-10-16T11:40:20Z",
"content": "Bikes get the heart of almost every Automotive lover thumping! Make them electric and you have the best of both worlds! Theyre powerful, super-fast, menacing to look at, and not to mention a boon to … [+6393 chars]"
},
{
"source": {
"id": "cnn",
"name": "CNN"
},
"author": "Paul R. La Monica",
"title": "Tesla investors try to look past Elon Musk's many, many distractions",
"description": "Elon Musk now wants to buy Twitter after all. While that's good news for Twitter's long-suffering shareholders, Tesla investors hope he still has some time for them. They need a little help, too.",
"url": "https://www.cnn.com/2022/10/16/investing/stocks-week-ahead/index.html",
"urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221013124707-tesla-vehicles-charging-0825.jpg?c=16x9&q=w_800,c_fill",
"publishedAt": "2022-10-16T11:30:44Z",
"content": "A version of this story first appeared in CNN Business Before the Bell newsletter. Not a subscriber? You can sign up right here.\r\nElon Musk now wants to buy Twitter after all. While thats good news f… [+6939 chars]"
},
{
"source": {
"id": null,
"name": "Seeking Alpha"
},
"author": "Wall Street Breakfast",
"title": "Wall Street Breakfast: The Week Ahead",
"description": "The first busy week of the earnings season will feature big reports across sectors...",
"url": "https://seekingalpha.com/article/4546806-wall-street-breakfast-week-ahead",
"urlToImage": "https://static.seekingalpha.com/assets/og_image_1200-29b2bfe1a595477db6826bd2126c63ac2091efb7ec76347a8e7f81ba17e3de6c.png",
"publishedAt": "2022-10-16T11:08:34Z",
"content": "Listen on the go! A daily podcast of Wall Street Breakfast will be available by 8:00 a.m. on Seeking Alpha, iTunes, Stitcher and Spotify.\r\nEconomic reports in the week ahead\r\n The first busy week of … [+7778 chars]"
},
-{
"source": {
"id": "rt",
"name": "RT"
},
"author": "RT",
"title": "Musk and Kim Dotcom talk nuclear war",
"description": "Elon Musk and Kim Dotcom shared their thoughts on nuclear war and ending the Ukraine conflict Read Full Article at RT.com",
"url": "https://www.rt.com/news/564762-musk-dotcom-nuclear-war/",
"urlToImage": "https://cdni.russiatoday.com/files/2022.10/article/634be22485f54045871cd26d.jpg",
"publishedAt": "2022-10-16T11:00:06Z",
"content": "SpaceX and Tesla CEO Elon Musk has admitted that his efforts to de-escalate the Russia-Ukraine conflict have failed. The comments came as he discussed the risks of nuclear war on Twitter with tech en… [+1887 chars]"
},
{
"source": {
"id": null,
"name": "NPR"
},
"author": "The Associated Press",
"title": "Elon Musk suggests his SpaceX company will keep funding satellites in Ukraine",
"description": "Billionaire Elon Musk said in a tweet that his rocket company SpaceX may continue to fund its satellite-based Starlink internet service in Ukraine. Some wondered if he was being sarcastic.",
"url": "https://www.npr.org/2022/10/16/1129353331/elon-musk-suggests-his-spacex-company-will-keep-funding-satellites-in-ukraine",
"urlToImage": "https://media.npr.org/assets/img/2022/10/16/ap22288793545581_wide-a8c793846d151722192af2933a43f8e2cb2b2ced-s1400-c100.jpg",
"publishedAt": "2022-10-16T10:57:34Z",
"content": "FILE - Tesla and SpaceX CEO Elon Musk arrives on the red carpet for the Axel Springer media award in Berlin on Dec. 1, 2020. Musk suggested in a Saturday, Oct. 15, 2022, tweet that his rocket company… [+1722 chars]"
},
{
"source": {
"id": "business-insider",
"name": "Business Insider"
},
"author": "stabahriti@insider.com (Sam Tabahriti)",
"title": "Elon Musk is a combination of Einstein, Tesla, and Rockefeller, says a former SpaceX exec – but even his mother admits no one wants to be him",
"description": "Dolly Singh was head of talent at SpaceX from 2008 until 2013 and made the comments in a new BBC documentary called The Elon Musk Show.",
"url": "https://www.businessinsider.com/musk-einstein-tesla-rockefeller-combined-says-former-spacex-executive-2022-10",
"urlToImage": "https://i.insider.com/634978992f7a5a0018527e6f?width=1200&format=jpeg",
"publishedAt": "2022-10-16T10:55:03Z",
"content": "Elon Musk should be thought of as a combination of Albert Einstein, Nikola Tesla, and John D. Rockefeller, according to the former talent chief of his rocket company SpaceX. \r\nDolly Singh, who worked… [+1925 chars]"
},
{
"source": {
"id": null,
"name": "CryptoGlobe"
},
"author": "Siamak Masnavi",
"title": "InvestAnswers Host on Why $SOL, $MATIC, and $FTM Are His Top Three Altcoin Picks",
"description": "On Friday (October 14), James Mullarney, the host of the very popular YouTube channel “InvestAnswers”, talked about why he the altcoins he is most bullish on are Solana ($SOL), Polygon ($MATIC), and Fantom ($FTM. Mullarney said: “The only two things that I’ve…",
"url": "https://www.cryptoglobe.com/latest/2022/10/investanswers-host-on-why-sol-matic-and-ftm-are-his-top-three-altcoin-picks/",
"urlToImage": "https://cryptoglobe.s3.eu-west-2.amazonaws.com/2022/10/horse-racing-in-the-snow-768x512.jpg",
"publishedAt": "2022-10-16T10:10:31Z",
"content": "On Friday (October 14), James Mullarney, the host of the very popular YouTube channel InvestAnswers, talked about why he the altcoins he is most bullish on are Solana ($SOL), Polygon ($MATIC), and Fa… [+3044 chars]"
},
{
"source": {
"id": null,
"name": "Roanoke Times"
},
"author": "AP",
"title": "AP News in Brief at 6:04 a.m. EDT",
"description": "Ukraine: Rockets strike mayor's office in separatist Donetsk",
"url": "https://roanoke.com/news/national/ap-news-in-brief-at-6-04-a-m-edt/article_76f565f4-1324-5601-b265-fcc06062a12e.html",
"urlToImage": "https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/custom/image/00f1ee32-f2d0-11e6-9926-f7249dbfe53a.jpg?resize=600%2C315",
"publishedAt": "2022-10-16T10:04:02Z",
"content": "Ukraine: Rockets strike mayor's office in separatist Donetsk\r\nKYIV, Ukraine (AP) The mayors office in a key eastern Ukrainian city controlled by pro-Kremlin separatists was struck by rockets Sunday m… [+11988 chars]"
},
{
"source": {
"id": null,
"name": "Billings Gazette"
},
"author": "AP",
"title": "AP News in Brief at 6:04 a.m. EDT",
"description": "Ukraine: Rockets strike mayor's office in separatist Donetsk",
"url": "https://billingsgazette.com/news/national/ap-news-in-brief-at-6-04-a-m-edt/article_73f182c6-c876-506d-bc81-3560dd87a2ae.html",
"urlToImage": "https://bloximages.chicago2.vip.townnews.com/billingsgazette.com/content/tncms/custom/image/c72cf8ac-c550-11ea-86bd-3761faee86a6.jpg?resize=600%2C315",
"publishedAt": "2022-10-16T10:04:02Z",
"content": "Ukraine: Rockets strike mayor's office in separatist Donetsk\r\nKYIV, Ukraine (AP) The mayors office in a key eastern Ukrainian city controlled by pro-Kremlin separatists was struck by rockets Sunday m… [+11988 chars]"
},
{
"source": {
"id": null,
"name": "Richmond.com"
},
"author": "AP",
"title": "AP News in Brief at 6:04 a.m. EDT",
"description": "Ukraine: Rockets strike mayor's office in separatist Donetsk",
"url": "https://richmond.com/news/national/ap-news-in-brief-at-6-04-a-m-edt/article_86b8ec74-fa51-5dd3-9383-f9e0872ca41a.html",
"urlToImage": "https://bloximages.newyork1.vip.townnews.com/richmond.com/content/tncms/custom/image/73769e9c-c54c-11ea-9ace-179ea39eeb22.jpg?resize=600%2C315",
"publishedAt": "2022-10-16T10:04:02Z",
"content": "Ukraine: Rockets strike mayor's office in separatist Donetsk\r\nKYIV, Ukraine (AP) The mayors office in a key eastern Ukrainian city controlled by pro-Kremlin separatists was struck by rockets Sunday m… [+13334 chars]"
},
{
"source": {
"id": null,
"name": "TweakTown"
},
"author": "Jak Connor",
"title": "Elon Musk says his recent post is a conspiracy theorists 'wet dream'",
"description": "SpaceX and Tesla CEO Elon Musk has given in on his position to pull Starlink out of Ukraine, saying 'the hell with it' despite Starlink losing money. Continue reading at TweakTown >",
"url": "https://www.tweaktown.com/news/88946/elon-musk-says-his-recent-post-is-conspiracy-theorists-wet-dream/index.html",
"urlToImage": "https://static.tweaktown.com/news/8/8/88946_01_elon-musk-gives-in-ukraine-will-keep-starlink-despite-the-big-cost_full.jpg",
"publishedAt": "2022-10-16T09:47:02Z",
"content": "Shortly after Russia began its invasion of Ukraine, SpaceX CEO Elon Musk announced that his company would provide Starlink satellite constellations to the country so Ukrainians could stay connected t… [+2384 chars]"
},
{
"source": {
"id": "independent",
"name": "Independent"
},
"author": "Via AP news wire",
"title": "AP News Digest 5:40 a.m.",
"description": "Here are the AP’s latest coverage plans, top stories and promotable content. All times EDT. For up-to-the minute information on AP’s coverage, visit Coverage Plan at https://newsroom.ap.org.",
"url": "https://www.independent.co.uk/news/world/europe/ap-xi-jinping-celebrities-spacex-joe-biden-b2203743.html",
"urlToImage": "https://static.independent.co.uk/2022/10/16/10/APTOPIX_Election_2022_Pennsylvania_27850.jpg?quality=75&width=1200&auto=webp",
"publishedAt": "2022-10-16T09:40:30Z",
"content": "Here are the APs latest coverage plans, top stories and promotable content. All times EDT. For up-to-the minute information on APs coverage, visit Coverage Plan at https://newsroom.ap.org. \r\n TOP STO… [+6783 chars]"
},
{
"source": {
"id": null,
"name": "Billings Gazette"
},
"author": "AP",
"title": "AP News Summary at 5:24 a.m. EDT",
"description": "Ukraine: Rockets strike mayor's office in separatist Donetsk",
"url": "https://billingsgazette.com/news/national/ap-news-summary-at-5-24-a-m-edt/article_93b6e2db-a3bf-5a3a-a55a-eb9eb957e0e4.html",
"urlToImage": "https://bloximages.chicago2.vip.townnews.com/billingsgazette.com/content/tncms/custom/image/c72cf8ac-c550-11ea-86bd-3761faee86a6.jpg?resize=600%2C315",
"publishedAt": "2022-10-16T09:24:12Z",
"content": "Ukraine: Rockets strike mayor's office in separatist Donetsk\r\nKYIV, Ukraine (AP) Russian media reports say the mayors office in a key eastern Ukrainian city controlled by pro-Kremlin separatists has … [+6958 chars]"
},
{
"source": {
"id": null,
"name": "Roanoke Times"
},
"author": "AP",
"title": "AP News Summary at 5:24 a.m. EDT",
"description": "Ukraine: Rockets strike mayor's office in separatist Donetsk",
"url": "https://roanoke.com/news/national/ap-news-summary-at-5-24-a-m-edt/article_26f4d111-0534-5565-b683-91df1bc7dbd0.html",
"urlToImage": "https://bloximages.newyork1.vip.townnews.com/roanoke.com/content/tncms/custom/image/00f1ee32-f2d0-11e6-9926-f7249dbfe53a.jpg?resize=600%2C315",
"publishedAt": "2022-10-16T09:24:12Z",
"content": "Ukraine: Rockets strike mayor's office in separatist Donetsk\r\nKYIV, Ukraine (AP) Russian media reports say the mayors office in a key eastern Ukrainian city controlled by pro-Kremlin separatists has … [+6958 chars]"
},
]
}



function Post(){
    let ps =0    
    let nam =  apI.articles[ps].source.name
    let aut = apI.articles[ps].author
    let tit = apI.articles[ps].title
    let des =apI.articles[ps].description
    let ur =apI.articles[ps].url
    let im = apI.articles[ps].urlToImage
    let date = apI.articles[ps].publishedAt
    
     return(
       
       <div className='main'>
         <div className='di'>
            <div className='set'>
            <img src={im} alt="img" />
            </div>
            <span>Name: <b>{nam}</b></span><br />
            <span>Author: <b>{aut}  </b></span> <br />
            {/* <span> {tit} </span><br/> */}
            <span className='des'><b>Description: </b> {des} </span><br />
            <span> <a href={ur}> Click to learn more ;</a> </span><br />
            <span className='da'>Date: {date}  </span><br />
         </div>
       </div>
      
        
    )
}

function Post1(){
    let ps =15    
    let nam =  apI.articles[ps].source.name
    let aut = apI.articles[ps].author
    let tit = apI.articles[ps].title
    let des =apI.articles[ps].description
    let ur =apI.articles[ps].url
    let im = apI.articles[ps].urlToImage
    let date = apI.articles[ps].publishedAt
    
     return(
       
       <div className='main'>
         <div className='di'>
            <div className='set'>
            <img src={im} alt="img" />
            </div>
            <span>Name: <b>{nam}</b></span><br />
            <span>Author: <b>{aut}  </b></span> <br />
            {/* <span> {tit} </span><br/> */}
            <span className='des'><b>Description: </b> {des} </span><br />
            <span> <a href={ur}> Click to learn more ;</a> </span><br />
            <span className='da'>Date: {date}  </span><br />
         </div>
       </div>
      
        
    )
}

function Post2(){
    let ps =16    
    let nam =  apI.articles[ps].source.name
    let aut = apI.articles[ps].author
    let tit = apI.articles[ps].title
    let des =apI.articles[ps].description
    let ur =apI.articles[ps].url
    let im = apI.articles[ps].urlToImage
    let date = apI.articles[ps].publishedAt
    
     return(
       
       <div className='main'>
         <div className='di'>
            <div className='set'>
            <img src={im} alt="img" />
            </div>
            <span>Name: <b>{nam}</b></span><br />
            <span>Author: <b>{aut}  </b></span> <br />
            {/* <span> {tit} </span><br/> */}
            <span className='des'><b>Description: </b> {des} </span><br />
            <span> <a href={ur}> Click to learn more ;</a> </span><br />
            <span className='da'>Date: {date}  </span><br />
         </div>
       </div>
      
        
    )
}

function Post3(){
    let ps =10    
    let nam =  apI.articles[ps].source.name
    let aut = apI.articles[ps].author
    let tit = apI.articles[ps].title
    let des =apI.articles[ps].description
    let ur =apI.articles[ps].url
    let im = apI.articles[ps].urlToImage
    let date = apI.articles[ps].publishedAt
    
     return(
       
       <div className='main'>
         <div className='di'>
            <div className='set'>
            <img src={im} alt="img" />
            </div>
            <span>Name: <b>{nam}</b></span><br />
            <span>Author: <b>{aut}  </b></span> <br />
            {/* <span> {tit} </span><br/> */}
            <span className='des'><b>Description: </b> {des} </span><br />
            <span> <a href={ur}> Click to learn more ;</a> </span><br />
            <span className='da'>Date: {date}  </span><br />
         </div>
       </div>
      
        
    )
}

function Post4(){
    let ps =4    
    let nam =  apI.articles[ps].source.name
    let aut = apI.articles[ps].author
    let tit = apI.articles[ps].title
    let des =apI.articles[ps].description
    let ur =apI.articles[ps].url
    let im = apI.articles[ps].urlToImage
    let date = apI.articles[ps].publishedAt
    
     return(
       
       <div className='main'>
         <div className='di'>
            <div className='set'>
            <img src={im} alt="img" />
            </div>
            <span>Name: <b>{nam}</b></span><br />
            <span>Author: <b>{aut}  </b></span> <br />
            {/* <span> {tit} </span><br/> */}
            <span className='des'><b>Description: </b> {des} </span><br />
            <span> <a href={ur}> Click to learn more ;</a> </span><br />
            <span className='da'>Date: {date}  </span><br />
         </div>
       </div>
      
        
    )
}

function Post5(){
    let ps =5    
    let nam =  apI.articles[ps].source.name
    let aut = apI.articles[ps].author
    let tit = apI.articles[ps].title
    let des =apI.articles[ps].description
    let ur =apI.articles[ps].url
    let im = apI.articles[ps].urlToImage
    let date = apI.articles[ps].publishedAt
    
     return(
       
       <div className='main'>
         <div className='di'>
            <div className='set'>
            <img src={im} alt="img" />
            </div>
            <span>Name: <b>{nam}</b></span><br />
            <span>Author: <b>{aut}  </b></span> <br />
            {/* <span> {tit} </span><br/> */}
            <span className='des'><b>Description: </b> {des} </span><br />
            <span> <a href={ur}> Click to learn more ;</a> </span><br />
            <span className='da'>Date: {date}  </span><br />
         </div>
       </div>
      
        
    )
}

function Post6(){
    let ps =14    
    let nam =  apI.articles[ps].source.name
    let aut = apI.articles[ps].author
    let tit = apI.articles[ps].title
    let des =apI.articles[ps].description
    let ur =apI.articles[ps].url
    let im = apI.articles[ps].urlToImage
    let date = apI.articles[ps].publishedAt
    
     return(
       
       <div className='main'>
         <div className='di'>
            <div className='set'>
            <img src={im} alt="img" />
            </div>
            <span>Name: <b>{nam}</b></span><br />
            <span>Author: <b>{aut}  </b></span> <br />
            {/* <span> {tit} </span><br/> */}
            <span className='des'><b>Description: </b> {des} </span><br />
            <span> <a href={ur}> Click to learn more ;</a> </span><br />
            <span className='da'>Date: {date}  </span><br />
         </div>
       </div>
      
        
    )
}

function Post7(){
    let ps =16    
    let nam =  apI.articles[ps].source.name
    let aut = apI.articles[ps].author
    let tit = apI.articles[ps].title
    let des =apI.articles[ps].description
    let ur =apI.articles[ps].url
    let im = apI.articles[ps].urlToImage
    let date = apI.articles[ps].publishedAt
    
     return(
       
       <div className='main'>
         <div className='di'>
            <div className='set'>
            <img src={im} alt="img" />
            </div>
            <span>Name: <b>{nam}</b></span><br />
            <span>Author: <b>{aut}  </b></span> <br />
            {/* <span> {tit} </span><br/> */}
            <span className='des'><b>Description: </b> {des} </span><br />
            <span> <a href={ur}> Click to learn more ;</a> </span><br />
            <span className='da'>Date: {date}  </span><br />
         </div>
       </div>
      
        
    )
}


// let array = apI.articles.length
// console.log(array)
const Page=()=>(
    <div>

        <h1>News Forever !</h1>

        <Post />
        <Post1 />
        <Post2 />
        <Post3 />
        <Post4 />
        <Post5 />
        <Post6 />
        <Post7 />
    </div>
    )

ReactDOM.render(<Page/>,document.querySelector("#root"));