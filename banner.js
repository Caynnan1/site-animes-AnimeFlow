let banner = document.getElementById("banner");
let bannernm = document.getElementById("banner-name");
let bannerdesc = document.getElementById("banner-desc");
let bannertr = document.getElementById("banner-trailer");

let animebb = {
    banner: '/assets/src/imgs/911611.png',
    nome: 'Black Clover',
    desc: `A história se centra em um jovem chamado Asta, nascido sem poder mágico no reino de Clover (algo inédito), mas com sua ambição, habilidades recém-descobertas e amigos, pretende tornar-se o próximo Rei Mago. Capa do primeiro volume do mangá.`,
    trailer: `https://www.youtube.com/embed/ScKdFRBJhyY?si=1jHedCW6XyWL3dJT`,
}


banner.src = `${animebb.banner}`;
bannernm.textContent = `${animebb.nome}`;
bannerdesc.textContent = `${animebb.desc}`;
bannertr.src = `${animebb.trailer}`;