let name = document.getElementById('name');
let tree3 = document.getElementById('tree3');
let bush2 = document.getElementById('bush2');
let tree2 = document.getElementById('tree2');
let elara = document.getElementById('elara');
let bush1 = document.getElementById('bush1');
let bush3 = document.getElementById('bush3');
let bush4 = document.getElementById('bush4');

let click1 = document.getElementById('click1');
let click2 = document.getElementById('click2');
let click3 = document.getElementById('click3');
let click4 = document.getElementById('click4');
let click5 = document.getElementById('click5');
let click6 = document.getElementById('click6');

let than = document.getElementById('than');
let toc = document.getElementById('toc');
let tay = document.getElementById('tay');
let can = document.getElementById('can');
let phai = document.getElementById('phai');
let trai = document.getElementById('trai');

let tho1 = document.getElementById('tho1');
let tho2 = document.getElementById('tho2');
let tho3 = document.getElementById('tho3');
let tho4 = document.getElementById('tho4');
let tho5 = document.getElementById('tho5');
let tho6 = document.getElementById('tho6');
let tho7 = document.getElementById('tho7');

let lighton = document.getElementById('lighton');
let ttrai = document.getElementById('ttrai');
let tphai = document.getElementById('tphai');
let light = document.getElementById('light');
let elara2 = document.getElementById('elara2');
let finale_click =  document.getElementById('finale_click')

const backgroundMusic = document.getElementById('backgroundMusic');


window.addEventListener('scroll', () => {
    let value = window.scrollY;

    //name.style.marginTop = value * 0.2 + 'px';
    name.style.filter = 'blur(' + value * 0.01 + 'px)';
    tree3.style.top = value * -0.4 +'px';
    bush2.style.top = value * 0.3 +'px';
    bush1.style.top = value * 0.4 +'px';
    tree2.style.top = value * 0.4 +'px';
    elara.style.marginTop = value * 0.3 + 'px';
    tree3.style.filter = 'blur(' + value * 0.01 + 'px)';
    tree2.style.filter = 'blur(' + value * 0.01 + 'px)';
    bush2.style.filter = 'blur(' + value * 0.01 + 'px)';
    bush1.style.filter = 'blur(' + value * 0.01 + 'px)';
    bush3.style.filter = 'blur(' + value * 0.01 + 'px)';
    bush4.style.filter = 'blur(' + value * 0.01 + 'px)';
    elara.style.filter = 'blur(' + value * 0.01 + 'px)';

});

click1.addEventListener('click', () => {
    
    elara.style.transform = 'scale(1)'
    tree3.style.top = '0px' ;
    tree2.style.top = '0px' ;
    bush1.style.top = '0px' ;
    bush2.style.top = '0px' ;
    name.style.top = '-50px';
    name.style.transform = 'scale(1)'
    tree2.style.transform = 'scale(1)'
    tree3.style.transform = 'scale(1)'
    bush1.style.transform = 'scale(1)'
    bush2.style.transform = 'scale(1)'
    backgroundMusic.play();
});




click2.addEventListener('click', () => {
    than.style.left = '-1000px';
    toc.style.left = '-204px';
    tay.style.left = '-1000px';
    can.style.left = '327px';
    phai.style.left = '687px';
    trai.style.left = '-33px';
    tho1.style.left = '-450px';
    
    than.style.filter = 'blur(2px)';
    toc.style.filter = 'blur(2px)';
    tay.style.filter = 'blur(0px)';
    can.style.filter = 'blur(0px)';
    phai.style.filter = 'blur(1px)';
    trai.style.filter = 'blur(0px)';



    can.addEventListener('transitionend', (event) => {
        if (event.propertyName === 'left') {
            can.style.transform = 'rotate(-5deg)';
            trai.style.top = '1560px';
            phai.style.top = '1460px';

             }
    }, { once: true });
    
}, { once: true });

tho1.addEventListener('click', () => {
    tho2.style.left = '450px';

    than.style.left = '-1800px';
    toc.style.left = '-1004px';
    tay.style.left = '-1800px';
    can.style.left = '-490px';
    phai.style.left = '-137px';
    trai.style.left = '-853px';
    tho1.style.left = '-1200px';

    phai.style.filter = 'blur(0px)';
    trai.style.filter = 'blur(1px)';

    can.addEventListener('transitionend', (event) => {
        if (event.propertyName === 'left') {

            can.style.transform = 'rotate(8deg)';
            trai.style.top = '1520px';
            phai.style.top = '1540px';
        }
                
    }, { once: true });
});

click3.addEventListener('click', () => {
    lighton.style.opacity = '100%';
    light.style.opacity = '100%';
    elara2.style.opacity = '100%';
    tho3.style.opacity = '100%';


});
tho3.addEventListener('click', () => {
    ttrai.style.opacity = '100%';
    tphai.style.opacity = '100%';
    
    ttrai.addEventListener('transitionend', (event) => {
        if (event.propertyName === 'opacity') {
            tho4.style.opacity = '100%';
        }
    }, { once: true});
});

click4.addEventListener('click', () => {
    tho5.style.opacity = '100%';
    tho5.style.left = '450px';

});
click5.addEventListener('click', () => {
    tho6.style.opacity = '100%';
    tho6.addEventListener('transitionend', (event) => {
        if (event.propertyName === 'opacity') {
            tho7.style.opacity = '100%';
        }
    }, { once: true});
});





finale_click.addEventListener('click', () => {
    click1.scrollIntoView({ behavior: 'smooth' });
    resetAnimations();
});

function resetAnimations() {
    elara.style.transform = 'scale(1.5)'
    tree3.style.top = '-250px' ;
    tree2.style.top = '100px' ;
    bush1.style.top = '-50px' ;
    bush2.style.top = '-50px' ;
    name.style.top = '-200px';
    name.style.transform = 'scale(0.5)'
    tree2.style.transform = 'scale(1.3)'
    tree3.style.transform = 'scale(1.3)'
    bush1.style.transform = 'scale(1.3)'
    bush2.style.transform = 'scale(1.3)'

    than.style.left = '-1100px';
    toc.style.left = '-304px';
    tay.style.left = '-1100px';
    can.style.left = '227px';
    phai.style.left = '587px';
    trai.style.left = '-133px';
    tho1.style.left = '-1000px';
    
    than.style.filter = 'blur(0px)';
    toc.style.filter = 'blur(0px)';
    tay.style.filter = 'blur(2px)';
    can.style.filter = 'blur(2px)';
    phai.style.filter = 'blur(2px)';
    trai.style.filter = 'blur(2px)';

    can.style.transform = 'rotate(0deg)';
    trai.style.top = '1529px';
    phai.style.top = '1490px';

    tho2.style.left = '950px';

    lighton.style.opacity = '0%';
    light.style.opacity = '0%';
    elara2.style.opacity = '0%';
    tho3.style.opacity = '0%';
    ttrai.style.opacity = '0%';
    tphai.style.opacity = '0%';
    tho4.style.opacity = '0%';

    tho5.style.opacity = '0%';
    tho6.style.opacity = '0%';
    tho7.style.opacity = '0%';

    click2.addEventListener('click', () => {
        than.style.left = '-1000px';
        toc.style.left = '-204px';
        tay.style.left = '-1000px';
        can.style.left = '327px';
        phai.style.left = '687px';
        trai.style.left = '-33px';
        tho1.style.left = '-450px';
        
        than.style.filter = 'blur(2px)';
        toc.style.filter = 'blur(2px)';
        tay.style.filter = 'blur(0px)';
        can.style.filter = 'blur(0px)';
        phai.style.filter = 'blur(1px)';
        trai.style.filter = 'blur(0px)';
        can.addEventListener('transitionend', (event) => {
            if (event.propertyName === 'left') {
                can.style.transform = 'rotate(-5deg)';
                trai.style.top = '1560px';
                phai.style.top = '1460px';
    
                 }
        }, { once: true });
    }, { once: true });
}

name.addEventListener('click', () => {
    click2.scrollIntoView({ behavior: 'smooth' });
});

tho2.addEventListener('click', () => {
    click3.scrollIntoView({ behavior: 'smooth' });
});

tho4.addEventListener('click', () => {
    click4.scrollIntoView({ behavior: 'smooth' });
});

tho5.addEventListener('click', () => {
    click5.scrollIntoView({ behavior: 'smooth' });
});

tho7.addEventListener('click', () => {
    click6.scrollIntoView({ behavior: 'smooth' });
});

