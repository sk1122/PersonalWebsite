import Head from 'next/head'
import Image from 'next/image'
import parse from "html-react-parser"
import Project from '../components/project'

const projects = [
  {
    title: 'throwitin - a decentralized crowdfunding platform',
    image: '/throwitin.png',
    description: "<a href='https://throwitin.xyz' target='_blank' className='project'>throwitin</a> is a decentralized crowdfunding platform where buidlers can get funding for their ideas and investors can invest in them, investors get an NFT on every successful investment and this NFT works as a governance token and the NFT holder can vote on proposals by buidler, so we are turning side projects into a mini-DAO, <br /> <b>we won web3hacks by <a href='https://twitter.com/harsh_eth/status/1478010638496505858' target='_blank' className='project'>questbook</a> with this project</b>",
    links: {
      twitter: 'https://twitter.com/throwitin_',
      website: 'https://throwitin.xyz',
      demoVideo: 'https://youtu.be/LMqrUIjJbiY',
      github: 'https://github.com/sk1122/light-funding-frontend'
    },
    tags: ['web3', 'working'],
    width: 200,
    height: 200
  },
  {
    title: 'bayze - manage multiple ad accounts from a single dashboard',
    image: '/bayze.png',
    description: "<a href='https://bayze.in' target='_blank' className='project'>bayze</a> helps digital marketers manage multiple ad accounts from facebook and google, it also has a unique dashboard where marketers can sort campaings, ads based on clients and it helps in collaborative work!",
    links: {
      twitter: 'https://twitter.com/bayzecorp',
      website: 'https://bayze.in',
      demoVideo: '',
      github: 'https://github.com/sk1122/Bayze-Frontend'
    },
    tags: ['web2', 'working'],
    width: 300,
    height: 200
  },
  {
    title: 'escrypt - freelancer market for web3 co\'s and dao\'s',
    image: '',
    description: "<a href='#' target='_blank' className='project'>escrypt</a> helps web3 devs find more interesting and challenging work, doing which they can earn money, hiring in web3 is not easy today and this is can be a possible solution to that!",
    links: {
      twitter: '',
      website: 'https://es-crypto.vercel.app/',
      demoVideo: '',
      github: 'https://github.com/sk1122/EsCrypto'
    },
    tags: ['web3','working'],
    width: 300,
    height: 200
  },
  {
    title: 'mailman - email client built on polygon',
    image: '',
    description: "<a href='https://mailman.xyz' target='_blank' className='project'>mailman</a> is a mailing client on polygon where you can send messages to other addresses and have a great chat with them, all the data is encrypted using your public key which can only be seen by you because of asymmetric encryption!",
    links: {
      twitter: '',
      website: '',
      demoVideo: '',
      github: 'https://github.com/sk1122/Mailman'
    },
    tags: ['web3','working'],
    width: 300,
    height: 200
  },
  {
    title: 'yaadein - a nft based calendar to store your lovely memories',
    image: '',
    description: "<a href='https://yaadein.xyz' target='_blank' className='project'>yaadein</a> is a nft calendar where users can bid on a day's nft, buy it and customize it to store their memory on-chain!",
    links: {
      twitter: '',
      website: '',
      demoVideo: '',
      github: 'https://github.com/sk1122/yaade-contracts'
    },
    tags: ['web3', 'working'],
    width: 300,
    height: 200
  },
]

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start h-full py-2 font-inter">
      <Head>
        <title>Satyam Kulkarni</title>
        <link rel="icon" href="/me.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
      </Head>

      <main className='w-full h-full md:h-96 mt-16 flex flex-col md:flex-row justify-center items-center space-x-10'>
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full relative">
          <Image className='rounded-full' src={'/me.jpg'} layout='fill'></Image>
        </div>
        <div className="flex flex-col justify-center items-start p-10">
          <h1 className='text-2xl font-bold'>Satyam Kulkarni</h1>
          <p className='text-md font-normal w-96'>18, building <a href="https://throwitin.xyz" target='_blank' className='project'>throwitin</a>, trying to market <a href="https://bayze.in" target='_blank' className='project'>bayze</a> (failing till now, but still trying because I believe in it😉), A builder building stuff that I like</p>
          <p className='text-md font-normal'>wagmi🖖</p>
          <div className="flex justify-start space-x-4 text-xl mt-5">
            <a href="https://twitter.com/sk1122_" target='_blank'>
              <i className="fab fa-twitter" style={{ color: '#1DA1F2' }}></i>
            </a>
            <a href="https://github.com/sk1122" target='_blank'>
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/satyam-kulkarni" target='_blank'>
              <i className="fab fa-linkedin" style={{ color: '#2867B2' }}></i>
            </a>
          </div>
        </div>
      </main>
      <div className="w-full h-1/3 flex flex-col justify-center items-center space-y-5 bg-violet-100 p-10">
        <h2 className='text-3xl font-bold project'>A little about me</h2>
        <p className='mt-2 text-lg font-normal w-full md:w-1/2'>I am Satyam Kulkarni, 18, building <a href="https://throwitin.xyz" target='_blank' className='project'>throwitin</a>, trying to market <a href="https://bayze.in" target='_blank' className='project'>bayze</a> (failing till now, but still trying because I believe in it😉), I also have worked as a Backend Dev(Django) at <a href="https://webloominc.com/" target='_blank' className='project'>Webloom Solutions</a>. I am currently building stuff in web3, there's a lot to learn and build in web3, before this I used to work mostly in Django (my first web framework, so a different connection with it✨) though I think that Django is a great framework, some say it is slow but deep down we all know that it is one of the best framework (with drf ofcourse) to build an MVP from scratch. I still code in Django a lot, because there are still some things that we need to do in web2🥲, I also have built a lot of cool frontend's in <a href="https://github.com/sk1122?tab=repositories&q=&type=&language=javascript&sort=" className='project'>React/Next and Svelte</a> (Some in JS, Some in TS)</p>
        <p className='mt-2 text-lg font-normal w-full md:w-1/2'>
          <a href="https://bayze.in" target='_blank' className='project'>bayze</a> is built in Typescript, Nodejs, Nextjs, I started this project in around Oct 2021, started building out the thing while my buddy <a href="https://twitter.com/itz_prajwal22" className='project'>Prajwal</a> started asking questions to agencies, we both didn't knew shit about startups or marketing or even how to build a product from scratch but we learnt the hard way and still learning, trying hard to grow <a href="https://bayze.in" target='_blank' className='project'>bayze</a> without ads or any paid stuff, but onboarding traditional businesses as a 18 year old is hard!
        </p>
        <p className='mt-2 text-lg font-normal w-full md:w-1/2'>
          Right now, I have been all into web3 and trying new stuff daily, currently building <a href="https://throwitin.xyz" target='_blank' className='project'>throwitin</a> with some <a href="https://twitter.com/harsh_eth/status/1478010638496505858?s=20" target='_blank' className='project'>awesome people</a>. I really love building in web3 and will continue to do it till I love it, I am more inclined towards NFT's and DAO's but the main thing I did not add DeFi is because I have not understood it very well but I am learning it every single day because consistency makes a man perfect! I have mostly built dApps on Ethereum, Polygon but have tried Solana, Avalanche.
        </p>
        <p className='mt-2 text-lg font-normal w-full md:w-1/2'>
          Besides technology, I love listening to music, <a href="#favourites" className='project'>my favourites</a>, I love to trek around Sahyadri, haven't got the chance to do it more often but have trekked some forts in Sahyadri and boy don't ask me about the experience😱, <a href="https://imgur.com/a/HkYsp7R" target='_blank' className='project'>this</a> can summarize it, I also used to play cricket, a lot, but haven't played it for 3 years, my most teen years have gone in front of a screen😐, I write on <a href="https://medium.com/satyam-kulkarni" target='_blank' className='project'>Medium</a> and on my twitter, I mostly write about technical stuff but trying to write more and more about other things, do send some tips! 
        </p>
        <p className='mt-2 text-lg font-normal w-full md:w-1/2'>
          <code>college_name = undefined</code> <span className='text-sm'>(not dropped out though😉)</span>
        </p>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center space-y-5 p-10">
        <h2 className='text-3xl font-bold project'>Projects</h2>
        {projects.map((value) => (
          <Project title={value.title} image={value.image} width={value.width} height={value.height}>
            <p className='text-md mt-5'>{parse(value.description)}</p>
            <div className='flex justify-start items-center mt-5 space-x-5'>
              {value.links.twitter && <a href={value.links.twitter} className='project'><i className="fab fa-twitter mr-2" style={{ color: '#1DA1F2' }}></i>twitter</a>}
              {value.links.github && <a href={value.links.github} className='project'><i className="fab fa-github mr-2"></i>github</a>}
              {value.links.website && <a href={value.links.website} className='project'><i className="fas fa-link mr-2" style={{ color: 'gray' }}></i>website</a>}
              {value.links.demoVideo && <a href={value.links.demoVideo} className='project'><i className="fab fa-youtube mr-2" style={{ color: 'red' }}></i>video</a>}
            </div>
            <div className='flex justify-start items-center mt-5 space-x-5'>
              {value.tags.map(v => (
                <p className='text-sm font-semibold px-2 py-1 rounded-full' style={{ backgroundColor: 'yellow' }}>{v}</p> 
              ))}
            </div>
          </Project>
        ))}
      </div>
      <div className='w-full h-full flex flex-col justify-center items-center space-y-5 p-10 bg-violet-100'>
        <h2 className="text-3xl font-bold project">Other Projects</h2>
        <p>These are the projects that I have to deploy but I am procastinating😥</p>
        <div className='w-full h-full flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-5 flex-wrap'>
          
          <div className="w-96 h-64 flex flex-col justify-center items-center p-5 space-y-2 bg-yellow-100 rounded-3xl">
            <h2 className='font-bold text-2xl'>codewars</h2>
            <p><a href="https://github.com/sk1122/codewars" target='_blank' className='project'>codewars</a> is a coding game, you and your partner will receive a coding question to solve, whoever solves first wins!, It was built using Node.js, React.js and Websockets</p>
            <div className="flex space-x-5">
              <a href="https://github.com/sk1122/codewars" className='project'><i className="fab fa-github mr-2"></i>github</a>
              {/* <a href="https://github.com/sk1122/codewars" className='project'><i className="fas fa-link mr-2" style={{ color: 'gray' }}></i>website</a> */}
            </div>
          </div>

          <div className="w-96 h-64 flex flex-col justify-center items-center p-5 space-y-2 bg-yellow-100 rounded-3xl">
            <h2 className='font-bold text-2xl'>kanban board</h2>
            <p><a href="https://github.com/sk1122/Bayze-Kanban" target='_blank' className='project'>kanban board</a> is all about Managing Projects with colorful sticky notes tracked on a Virtual board. Rest API is built using Django Rest Framework, JSON Web Token is used to Authenticate Users, Frontend is built using Svelte and Tailwind.</p>
            <div className="flex space-x-5">
              <a href="https://github.com/sk1122/Bayze-Kanban" className='project'><i className="fab fa-github mr-2"></i>github</a>
              {/* <a href="https://github.com/sk1122/codewars" className='project'><i className="fas fa-link mr-2" style={{ color: 'gray' }}></i>website</a> */}
            </div>
          </div>

          <div className="w-96 h-64 flex flex-col justify-center items-center p-5 space-y-2 bg-yellow-100 rounded-3xl">
            <h2 className='font-bold text-2xl'>ETHWallet</h2>
            <p><a href="https://github.com/sk1122/ETHWallet" target='_blank' className='project'>ethwallet</a> is a discord based custodial wallet for ERC-20 tokens</p>
            <div className="flex space-x-5">
              <a href="https://github.com/sk1122/ETHWallet" className='project'><i className="fab fa-github mr-2"></i>github</a>
              {/* <a href="https://github.com/sk1122/codewars" className='project'><i className="fas fa-link mr-2" style={{ color: 'gray' }}></i>website</a> */}
            </div>
          </div>

          <div className="w-96 h-64 flex flex-col justify-center items-center p-5 space-y-2 bg-yellow-100 rounded-3xl">
            <h2 className='font-bold text-2xl'>chat app using firebase</h2>
            <p><a href="https://github.com/sk1122/FirebaseChatApp" target='_blank' className='project'>A Chat App</a> built with Firebase Realtime Database & Next JS🚀</p>
            <div className="flex space-x-5">
              <a href="https://github.com/sk1122/FirebaseChatApp" className='project'><i className="fab fa-github mr-2"></i>github</a>
              <a href="https://firebase-chat-app-ruddy.vercel.app/" className='project'><i className="fas fa-link mr-2" style={{ color: 'gray' }}></i>website</a>
            </div>
          </div>
          
        </div>
      </div>

      <div className='w-full h-full flex flex-col justify-center items-center space-y-5 p-10'>
        <h2 className="text-3xl font-bold project">Favourites✨</h2>
        <h2 className='w-3/4'>i don't like to share my playlist with anyone, i like to be secretive in that place because we can find more things about a person from his/her choices, but still I will share it, so please judge me and send me what you think about me after listening to my playlist</h2>
        <ul>
          <li>my favourite artists, right now, are - <span className='project'>prateek kuhad</span>, <span className='project'>taylor swift</span>, <span className='project'>ed sheeran</span>, <span className='project'>otnicka</span>, (if you are not in this list, don't be sad, send me your playlist to my <a href="mailto:punekar.satyam@gmail.com" className='project'>mail</a>😛)</li>
          <li>my favourite songs, right now, are - <span className='project'>all too well</span>, <span className='project'>pause</span>, <span className='project'>cold/mess</span>, <span className='project'>shivers</span>, <span className='project'>gesi baglan</span></li>
          <li>my favourite books, right now, are - <span className='project'>zero to one</span>, <span className='project'>rework</span>, <span className='project'>sherlock holmes</span>, <span className='project'>homo sapiens</span>, <span className='project'>do epic shit</span></li>
        </ul>
        <h2 className='w-3/4'>
          send me your recommendation to my <a href="mailto:punekar.satyam@gmail.com" className='project'>mail</a>, or tag me on <a href="https://twitter.com/sk1122_" className='project'>twitter</a>, or wait for <span className="project">mailman</span> to launch and send it to my address
        </h2>
      </div>

      <div className="w-full h-full flex justify-center items-center bg-violet-100 p-10 space-x-5 text-2xl">
        <a href="https://twitter.com/sk1122_" target='_blank'>
          <i className="fab fa-twitter" style={{ color: '#1DA1F2' }}></i>
        </a>
        <a href="https://github.com/sk1122" target='_blank'>
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/satyam-kulkarni" target='_blank'>
          <i className="fab fa-linkedin" style={{ color: '#2867B2' }}></i>
        </a>
        <a href="https://medium.com/satyam-kulkarni" target='_blank'>
          <i className="fab fa-medium"></i>
        </a>
        <a href="https://drive.google.com/file/d/1Lc1sr6mHNbLvTjG-Qy1Iil0Bog_ZaqkZ/view?usp=sharing" target='_blank'>
          <i className="fas fa-file-pdf"></i>
        </a>
        <a href="https://www.youtube.com/channel/UCRaIw4VcaKrxOCo2CaFHdyw" target='_blank'>
          <i className="fab fa-youtube" style={{ color: 'red' }}></i>
        </a>
      </div>
    </div>
  )
}
