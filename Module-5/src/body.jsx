import React from 'react'

export default function Body() {
  return (
    <div> <figure className="md:flex bg-slate-100 rounded-xl w-90 h-100 md:p-1 px-4 dark:bg-slate-800">
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="../public/Screenshot 2023-12-08 152338.png" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “Dheeraj x Nike is not just a fusion of names; it's a seamless blend of comfort, performance, and style. Our footwear emulates a synergy of Dheeraj's commitment to quality and Nike's iconic innovation. Step confidently into a world where every stride is a testament to the perfect marriage of craftsmanship and athletic prowess. Elevate your walk, run, or workout with our meticulously curated collection, embodying the spirit of excellence that defines both brands. Experience the perfect union of fashion and function – Dheeraj x Nike, where every step tells a story of unparalleled comfort and timeless style..”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Sarah Dayan
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Staff Engineer, Algolia
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}
