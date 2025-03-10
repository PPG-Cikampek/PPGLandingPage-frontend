import React from 'react'


const CategoriesView = () => {
    return (
        <div>
            <div className='max-w-6xl mt-6 mx-auto flex flex-col gap-4'>

                <section className="bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Section 1</h2>
                    <p className="text-gray-800">
                        This content appears above the background images thanks to z-index positioning.
                        The white background has partial opacity and blur effect for better readability.
                    </p>
                </section>

                <section className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Section 2</h2>
                    <p className="text-gray-800">
                        Each section maintains its own background with backdrop blur,
                        creating a frosted glass effect over the stacked background images.
                    </p>
                </section>

                <section className="bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Section 3</h2>
                    <p className="text-gray-800">
                        The background images are stacked with decreasing opacity,
                        creating depth while maintaining content legibility.
                    </p>
                </section>

            </div>
        </div>
    )
}

export default CategoriesView