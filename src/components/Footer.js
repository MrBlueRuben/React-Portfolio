import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
      <Layout className='py-8 flex items-center items-justify-between'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <span className=''>Built by <Link href="/" target='_blank'>MrBlue</Link></span>

        <div className='flex items-center justify-center'>
        <Link href="">hi</Link></div>

      </Layout>
    </footer>
  )
}

export default Footer
