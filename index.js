let id='';
const animation=`
    <div class="animation-page">
        <div class="animation-item animation-item-1"></div>
        <div class="animation-item animation-item-2"></div>
        <div class="animation-item animation-item-3"></div>
    </div>
`;
const cardFlip=`
    <div class="cover-card">
        <div class="card-flip">
            <div class="front-card">
            THIS NOW DEPRECATED HTML TAG, POPULAR IN THE EARLY DAYS OF THE INTERNET, MAGICALLY MADE TEXT SCROLL ACROSS THE SCREEN
            </div>
            <div class="back-card">WHAT IS THE MARQUEE TAG</div>
        </div>
    </div>
`;
const card1=`
    <div class="card1">
        <div class="top-card1">
            <div>A</div>
            <div class="medium-card1">&spades;</div>
        </div>
        <div class="center-card1">&spades;</div>
        <div class="bottom-card1">
            <div class="oposite-card1">A</div>
            <div class="oposite-card1 medium-card1">&spades;</div>
        </div>
    </div>
`;
const card2=`
    <div class="card2">
        <div class="left-card2">
            <div>4</div>
            <div class="heart-card2">&hearts;</div>
        </div>
        <div class="middle-card2">
            <div>&hearts;</div>
            <div>&hearts;</div>
            <div class="oposite-card2">&hearts;</div>
            <div class="oposite-card2">&hearts;</div>
        </div>
        <div class="right-card2">
            <div>4</div>
            <div class="heart-card2">&hearts;</div>
        </div>
    </div>
`;
const flag1=`
   <div class="flag1">
       <div class="line-flag1"></div>
       <div class="line-flag1 line1-flag1"></div>
   </div>
`;
const flag2=`
    <div class="flag2">
        <div class="circle-flag2"></div>
    </div> 
`;
const flag3=`
    <div class="flag3">
        <div class=" line-flag3 line1-flag3"></div>
        <div class="line-flag3"></div>
    </div>
`;
const flag4=`
    <div class="flag4">
        <div class="line1-flag4"></div>
        <div class="line2-flag4">
            <div class="circle-flag4"></div>
        </div>
        <div class="line3-flag4"></div>
    </div>
`;
const loadingBar=`
    <div class="loadingbar">
        <div class="progressbar-loadingbar"></div>
    </div>
`;
const laodingVideo=`
    <div class="circle-loading">
    </div>
`;
const nestedCircles=`
    <div class="container-circle">
        <div class="sub-container-circle">
            <div class="child-circle">
                <div class="main-container-circle">
                </div>
            </div>
        </div>
    </div>
`;
const profile=`
    <div class="item-profile">
        <img class="icon1-profile" src="images/icon.avif" alt="icon">
        <div class="hero-section-profile">
            <img class="cat-profile" src="images/profile.jpeg" alt="icon">
            <div class="content-profile">
                <h2>Abstract Gradient Project</h2>
                <p>Scrimsbee McScrimslee</p>
            </div>
        </div>
        <div class="hide-profile">
            <div class="icons-profile">
                <ion-icon name="heart"></ion-icon>
                <p>8</p>
            </div>
            <div class="icons-profile">
                <ion-icon name="chatbubble-ellipses"></ion-icon>
                <p>32</p>
            </div>
        </div>
    </div>
`;
const profileCard=`
    <div class="profilecard">
        <img class="img-profilecard" src="images/profile1.jpg" alt="profile">
        <div class="main-profilecard">
            <h3>Scrimton Scrimsby</h3>
            <p class="name-profilecard">scrimsallday3000</p>
            <p>I'm the world's most public Fortran dev.</p>
        </div>
        <button>Edit Profile</button>
    </div>
`;
const searchButton=`
    <input class="inputbox" id="inputbox" type="text" placeholder="Search...">
`;
const stories=`
    <div class="profile-stories">
        <div class="image-stories unchecked-stories">
            <img class="img-stories" src="images/profile-1.jpg" alt="profile-1">
        </div>
        <div class="name-stories">Juliao</div>
    </div>
    <div class="profile-stories">
        <div class="image-stories live-stories viewed-stories">
            <img class="img-stories" src="images/profile-2.jpg" alt="profile-2">
        </div>
        <div class="name-stories">Scrimdella</div>
    </div>
    <div class="profile-stories">
        <div class="image-stories unchecked-stories">
            <img class="img-stories" src="images/profile-3.jpg" alt="profile-3">
        </div>
        <div class="name-stories">Gumdrop</div>
    </div>
`;
const stylingButton=`
    <div class="button-container">
        <button type="button" class="button-style">
            Start Coding!
        </button>
    </div>
`;
const switchButton=`
    <label for="btn">
        <input class="input-switch" type="checkbox" id="btn">
        <div class="button-switch">
            <div class="circle-switch"></div>
        </div>
    </label>
`;
const wordsSwap=`
    <div class="paragraph-swap">
        <p class="contant-swap">I love</p>
        <div class="words-swap"></div>
    </div>
`;
const mainPage=`
<section class="main-page">
        <button class="main-button" data-id="animation">Animation</button>
        <button class="main-button" data-id="card-flip">Card Flip</button>
        <button class="main-button" data-id="card-1">Card 1</button>
        <button class="main-button" data-id="card-2">Card 2</button>
        <button class="main-button" data-id="flag-1">Flag 1</button>
        <button class="main-button" data-id="flag-2">Flag 2</button>
        <button class="main-button" data-id="flag-3">Flag 3</button>
        <button class="main-button" data-id="flag-4">Flag 4</button>
        <button class="main-button" data-id="loading-bar">Loading Bar</button>
        <button class="main-button" data-id="loading-video">Loading Video</button>
        <button class="main-button" data-id="nested-circles">Nested Circles</button>
        <button class="main-button" data-id="profile">Profile</button>
        <button class="main-button" data-id="profile-card">Profile card</button>
        <button class="main-button" data-id="search-button">Search Button</button>
        <button class="main-button" data-id="instagram-stories">Instagram Stories</button>
        <button class="main-button" data-id="styling-button">Styling Button</button>
        <button class="main-button" data-id="toggle-button">Toggle Button</button>
        <button class="main-button" data-id="words-swap">Words Swap</button>
</section>
`;
document.querySelector('.header').addEventListener('click',()=>{
    document.querySelector('main').innerHTML=mainPage;
document.querySelectorAll(".main-button").forEach(button => {
    button.addEventListener('click', ()=>{
        id= button.dataset.id;
        if(id =='animation'){
            document.querySelector('main').innerHTML=animation;
        }
        else if (id =='card-flip') {
            document.querySelector('main').innerHTML=cardFlip;
        }
        else if (id =='card-1') {
            document.querySelector('main').innerHTML=card1;
        }
        else if (id =='card-2') {
            document.querySelector('main').innerHTML=card2;
        }
        else if (id =='flag-1') {
            document.querySelector('main').innerHTML=flag1;
        }
        else if (id =='flag-2') {
            document.querySelector('main').innerHTML=flag2;
        }
        else if (id =='flag-3') {
            document.querySelector('main').innerHTML=flag3;
        }
        else if (id =='flag-4') {
            document.querySelector('main').innerHTML=flag4;
        }
        else if (id =='loading-bar') {
            document.querySelector('main').innerHTML=loadingBar;
        }
        else if (id =='loading-video') {
            document.querySelector('main').innerHTML=laodingVideo;
        }
        else if (id =='nested-circles') {
            document.querySelector('main').innerHTML=nestedCircles;
        }
        else if (id =='profile') {
            document.querySelector('main').innerHTML=profile;
        }
        else if (id =='profile-card') {
            document.querySelector('main').innerHTML=profileCard;
        }
        else if (id =='search-button') {
            document.querySelector('main').innerHTML=searchButton;
        }
        else if (id =='instagram-stories') {
            document.querySelector('main').innerHTML=stories;
        }
        else if (id =='styling-button') {
            document.querySelector('main').innerHTML=stylingButton;
        }
        else if (id =='toggle-button') {
            document.querySelector('main').innerHTML=switchButton;
        }
        else if (id =='words-swap') {
            document.querySelector('main').innerHTML=wordsSwap;
        }

    });  
});
});
document.querySelectorAll(".main-button").forEach(button => {
    button.addEventListener('click', ()=>{
        id= button.dataset.id;
        if(id =='animation'){
            document.querySelector('main').innerHTML=animation;
        }
        else if (id =='card-flip') {
            document.querySelector('main').innerHTML=cardFlip;
        }
        else if (id =='card-1') {
            document.querySelector('main').innerHTML=card1;
        }
        else if (id =='card-2') {
            document.querySelector('main').innerHTML=card2;
        }
        else if (id =='flag-1') {
            document.querySelector('main').innerHTML=flag1;
        }
        else if (id =='flag-2') {
            document.querySelector('main').innerHTML=flag2;
        }
        else if (id =='flag-3') {
            document.querySelector('main').innerHTML=flag3;
        }
        else if (id =='flag-4') {
            document.querySelector('main').innerHTML=flag4;
        }
        else if (id =='loading-bar') {
            document.querySelector('main').innerHTML=loadingBar;
        }
        else if (id =='loading-video') {
            document.querySelector('main').innerHTML=laodingVideo;
        }
        else if (id =='nested-circles') {
            document.querySelector('main').innerHTML=nestedCircles;
        }
        else if (id =='profile') {
            document.querySelector('main').innerHTML=profile;
        }
        else if (id =='profile-card') {
            document.querySelector('main').innerHTML=profileCard;
        }
        else if (id =='search-button') {
            document.querySelector('main').innerHTML=searchButton;
        }
        else if (id =='instagram-stories') {
            document.querySelector('main').innerHTML=stories;
        }
        else if (id =='styling-button') {
            document.querySelector('main').innerHTML=stylingButton;
        }
        else if (id =='toggle-button') {
            document.querySelector('main').innerHTML=switchButton;
        }
        else if (id =='words-swap') {
            document.querySelector('main').innerHTML=wordsSwap;
        }

    });  
});