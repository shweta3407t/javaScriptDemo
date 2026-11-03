import React from 'react'

const Cards = () => {
    return (
        <div className='flex flex-row  p-6 place-items-center'>

            <div className='h-4/5 bg-[url("https://nolabels.in/cdn/shop/files/Brown_office_co-ord_set_for_women.jpg?v=1792050229&width=1080")]  
             bg-cover bg-center   w-80  rounded-4xl p-9 mr-5' >

                <div className='h-10 w-10 bg-amber-50 rounded-full text-2xl text-center mb-56 '>1</div>
                <div className=' mb-8  text-blue-50'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quia obcaecati excepturi necessitatibus debitis, odio in eligendi facere accusamus ducimus id doloribus nihil pariatur voluptatibus omnis dolores eaque eius temporibus.</p>
                </div>
                <div>
                    <button className='  h-11  w-48  text-blue-50 bg-amber-950 rounded-4xl'>Satisfied</button>
                </div>

            </div>

            <div className='h-4/5  w-80 bg-[url("https://thumbs.dreamstime.com/b/beautiful-plus-size-woman-exuding-beautiful-plus-size-woman-exuding-confidence-style-posing-black-suit-against-315397172.jpg")]  
             bg-cover bg-center  rounded-4xl p-9 mr-5' >

                <div className='h-10 w-10 bg-amber-50 rounded-full text-2xl text-center mb-56 '>2</div>
                <div className=' mb-8  text-blue-50 ' >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quia obcaecati excepturi necessitatibus debitis, odio in eligendi facere accusamus ducimus id doloribus nihil pariatur voluptatibus omnis dolores eaque eius temporibus.</p>
                </div>
                <div>
                    <button className='  h-11  w-48  bg-black text-blue-50 rounded-4xl'>Undereserved</button>
                </div>

            </div>

            <div className='h-4/5  w-80 bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVAVhk9VDsbk0Wkmylo80XOFKVYIqRbajNqCa_vfAP2vQ6Na7DqE2nNS8&s=10")]  
             bg-cover bg-center   rounded-4xl p-9 mr-5' >

                <div className='h-10 w-10 bg-amber-50 rounded-full text-2xl text-center mb-56 '>3</div>
                <div className=' mb-8   text-blue-50' >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quia obcaecati excepturi necessitatibus debitis, odio in eligendi facere accusamus ducimus id doloribus nihil pariatur voluptatibus omnis dolores eaque eius temporibus.</p>
                </div>
                <div>
                    <button className='  h-11  w-48 bg-emerald-100 text-black rounded-4xl'>Reserved</button>
                </div>

            </div>

            <div className='h-4/5  w-80 bg-[url("https://nolabels.in/cdn/shop/files/Women_s_office_wear_co-ord_set.jpg?v=1792044860&width=1000")]  
             bg-cover bg-center   rounded-4xl p-9 ' >

                <div className='h-10 w-10 bg-amber-50 rounded-full text-2xl text-center mb-56 '>4</div>
                <div className=' mb-8  text-blue-50 '>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui hic quod laborum doloremque placeat esse a illo harum molestiae delectus maxime dignissimos perferendis ratione adipisci beatae ut, veniam facilis quae.</p>
                </div>
                <div>
                    <button className='  h-11  w-48  bg-amber-950 text-blue-50  rounded-4xl'>Appointment</button>
                </div>

            </div>
        </div>
    )
}

export default Cards
