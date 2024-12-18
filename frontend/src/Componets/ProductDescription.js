import React from 'react'

const ProductDescription = () => {
    return (
        <>
            <div className='max-padd-container mt-20'>
                <div className=' flex gap-3 mb-4'>
                    <button className='btn-dark rounded-sm !text-xs !py-[6px] w-36'>Description</button>
                    <button className='btn-dark-outline rounded-sm !text-sm !py-[6px] w-36'>Care Guide</button>
                    <button className='btn-dark-outline rounded-sm !text-sm !py-[6px] w-36'>Size Guide</button>
                </div>
                <div className=' flex flex-col pb-16'>
                    <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
                        nulla officia dicta sequi eaque atque voluptatum obcaecati corporis, veniam
                        molestiae eum repellat ullam est facilis id qui explicabo sint vel Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Dolore sunt minima laudantium tempore
                        debitis, dicta perferendis reprehenderit quidem ut nihil esse accusamus harum nisi
                        repellat adipisci enim non nulla illum.</p>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quo asperiores ad perspiciatis vitae fugiat? Velit, eum? Consequatur dolorum
                        pariatur praesentium harum aspernatur commodi, at blanditiis assumenda voluptatem
                        perferendis architecto non!</p>
                </div>
            </div>
        </>
    )
}

export default ProductDescription
