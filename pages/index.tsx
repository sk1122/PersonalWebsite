import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen py-2 font-inter">
      <Head>
        <title>Satyam Kulkarni</title>
        <link rel="icon" href="/me.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
      </Head>

      <main className='w-full h-96 mt-16 flex justify-center items-center space-x-10'>
        <div className="w-64 h-64 rounded-full relative">
          <Image className='rounded-full' src={'/me.jpg'} layout='fill'></Image>
        </div>
        <div className="flex flex-col justify-center items-start">
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
        <p className='mt-2 text-lg font-normal w-1/2'>I am Satyam Kulkarni, 18, building <a href="https://throwitin.xyz" target='_blank' className='project'>throwitin</a>, trying to market <a href="https://bayze.in" target='_blank' className='project'>bayze</a> (failing till now, but still trying because I believe in it😉), I also have worked as a Backend Dev(Django) at <a href="https://webloominc.com/" target='_blank' className='project'>Webloom Solutions</a>. I am currently building stuff in web3, there's a lot to learn and build in web3, before this I used to work mostly in Django (my first web framework, so a different connection with it✨) though I think that Django is a great framework, some say it is slow but deep down we all know that it is one of the best framework (with drf ofcourse) to build an MVP from scratch. I still code in Django a lot, because there are still some things that we need to do in web2🥲, I also have built a lot of cool frontend's in <a href="https://github.com/sk1122?tab=repositories&q=&type=&language=javascript&sort=" className='project'>React/Next and Svelte</a> (Some in JS, Some in TS)</p>
        <p className='mt-2 text-lg font-normal w-1/2'>
          <a href="https://bayze.in" target='_blank' className='project'>bayze</a> is built in Typescript, Nodejs, Nextjs, I started this project in around Oct 2021, started building out the thing while my buddy <a href="https://twitter.com/itz_prajwal22" className='project'>Prajwal</a> started asking questions to agencies, we both didn't knew shit about startups or marketing or even how to build a product from scratch but we learnt the hard way and still learning, trying hard to grow <a href="https://bayze.in" target='_blank' className='project'>bayze</a> without ads or any paid stuff, but onboarding traditional businesses as a 18 year old is hard!
        </p>
        <p className='mt-2 text-lg font-normal w-1/2'>
          Right now, I have been all into web3 and trying new stuff daily, currently building <a href="https://throwitin.xyz" target='_blank' className='project'>throwitin</a> with some <a href="https://twitter.com/harsh_eth/status/1478010638496505858?s=20" target='_blank' className='project'>awesome people</a>. I really love building in web3 and will continue to do it till I love it, I am more inclined towards NFT's and DAO's but the main thing I did not add DeFi is because I have not understood it very well but I am learning it every single day because consistency makes a man perfect! I have mostly built dApps on Ethereum, Polygon but have tried Solana, Avalanche.
        </p>
        <p className='mt-2 text-lg font-normal w-1/2'>
          Besides technology, I love listening to music, <a href="#favourites" className='project'>my favourites</a>, I love to trek around Sahyadri, haven't got the chance to do it more often but have trekked some forts in Sahyadri and boy don't ask me about the experience😱, <a href="https://imgur.com/a/HkYsp7R" target='_blank' className='project'>this</a> can summarize it, I also used to play cricket, a lot, but haven't played it for 3 years, my most teen years have gone in front of a screen😐, I write on <a href="https://medium.com/satyam-kulkarni" target='_blank' className='project'>Medium</a> and on my twitter, I mostly write about technical stuff but trying to write more and more about other things, do send some tips! 
        </p>
        <p className='mt-2 text-lg font-normal w-1/2'>
          <code>college_name = undefined</code> <span className='text-sm'>(not dropped out though😉)</span>
        </p>
      </div>
      <div className="w-full h-full flex flex-col justify-center items-center space-y-5 p-10">
        <h2 className='text-3xl font-bold project'>Projects</h2>
      </div>
    </div>
  )
}
