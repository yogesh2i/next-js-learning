import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      about student
      <Link href={'/about/7'}>all</Link>
    </div>
  )
}
