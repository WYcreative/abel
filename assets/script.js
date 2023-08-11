import myJson from './data/data.json' assert {type: 'json'};

// Exit Intro

const btnExitIntro = document.querySelector('.js-exitIntro');

if (btnExitIntro) {
    const btnImg = btnExitIntro.querySelector('.cta-img')

    btnExitIntro.closest('main').style.overflow = 'hidden';
    btnExitIntro.closest('main').style.height = '100vh';

    const imgIn = btnImg.dataset.src
    const imgOut = btnImg.src

    btnExitIntro.addEventListener('mouseenter', (e)=> {
        btnImg.src = imgIn
    })

    btnExitIntro.addEventListener('mouseleave', (e)=> {
        btnImg.src = imgOut
    })

    btnExitIntro.addEventListener('click', (e) => {
        const el = e.currentTarget
        const introWrapper = el.closest('section')
        const backgroundWrapper = document.querySelector('.background-wrapper')
        document.body.classList.add('go-forward')

        const audio = document.querySelector('audio');
        audio.play();


        setTimeout(() => {
            window.location = '/abel/content.html'
        }, 5000);
    })
}

// --------------

const bellRing = document.querySelector('.bell-day');

if (bellRing) {
   function openRandomLink() {
        console.log(myJson.length);
        const randomIndex = Math.floor(Math.random() *  myJson.length);
        const randomLink = myJson[randomIndex].link;
        window.open(randomLink, '_blank');
    }

    bellRing.addEventListener('click', openRandomLink);
}



const allAudios = document.querySelectorAll('.audio-item');

allAudios.forEach(audio => {

    const audioPic = audio.querySelector('figcaption img')

    if (audioPic) {
        const imgIn = audioPic.dataset.src
        const imgOut = audioPic.src

        audio.addEventListener('mouseenter', (e)=> {
            audioPic.src = imgIn
        })

        audio.addEventListener('mouseleave', (e)=> {
            audioPic.src = imgOut
        })


        audio.addEventListener('click',(e) => {
            const target = e.currentTarget
            const currentAudio = target.querySelector('audio')

            allAudios.forEach(el => {
                el.querySelector('audio').pause()
                el.querySelector('audio').currentTime = 0
                el.classList.remove('moving')
            })
            currentAudio.play()
            target.classList.add('moving')
            currentAudio.onpause = () =>  target.classList.remove('moving')
        })
    }
})
