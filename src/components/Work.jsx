import React from 'react'
import Blog from '../assets/Blog.png'
import BudgetTracker from '../assets/BudgetTracker.png'
import DrumKit from '../assets/DrumKit.png'
import Maintainable from '../assets/Maintainable.png'
import PWGenerator from '../assets/PWGenerator.png'
import Quiz from '../assets/Quiz.png'
import Randm from '../assets/randm.png'
import SimonGame from '../assets/SimonGame.png'
import ToDoList from '../assets/ToDoList.png'

const Work = () => {
  return (
    <div name='work' className=' w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6'>Check out some of my recent work</p>
            </div>

{/* Container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* Grid Item */}
                <div 
                style={{backgroundImage: `url(${Blog})`}} 
                className='shadow-lg shadow-]#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Blog Website Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://powerful-castle-34195.herokuapp.com/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demon</button>
                            </a>
                            <a href="https://github.com/vohoang2005/Blog-Website">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                style={{backgroundImage: `url(${BudgetTracker})`}} 
                className='shadow-lg shadow-]#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Budget Tracker Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://obscure-hollows-57042.herokuapp.com/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/vohoang2005/Budget_Tracker">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                style={{backgroundImage: `url(${DrumKit})`}} 
                className='shadow-lg shadow-]#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            DrumKit Game
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://vohoang2005.github.io/DrumGame/index.html">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/vohoang2005/DrumGame">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                style={{backgroundImage: `url(${Maintainable})`}} 
                className='shadow-lg shadow-]#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Managing AC Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://maintainable.herokuapp.com/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/vohoang2005/maintainable">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                style={{backgroundImage: `url(${PWGenerator})`}} 
                className='shadow-lg shadow-]#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Password Generator Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://vohoang2005.github.io/Password-Generator/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/vohoang2005/Password-Generator">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                style={{backgroundImage: `url(${Quiz})`}} 
                className='shadow-lg shadow-]#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Quiz Game
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://vohoang2005.github.io/Web-APIs-Questionaire/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/vohoang2005/Web-APIs-Questionaire">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                style={{backgroundImage: `url(${Randm})`}} 
                className='shadow-lg shadow-]#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Randm Dating Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://ran-dm.herokuapp.com/login">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/vohoang2005/randm">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                style={{backgroundImage: `url(${SimonGame})`}} 
                className='shadow-lg shadow-]#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Simon Game
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://vohoang2005.github.io/SimonGame/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/vohoang2005/SimonGame">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div 
                style={{backgroundImage: `url(${ToDoList})`}} 
                className='shadow-lg shadow-]#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            To Do List Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://evening-beyond-44336.herokuapp.com/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/vohoang2005/ToDoList">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work