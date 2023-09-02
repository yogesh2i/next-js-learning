import Link from 'next/link'


export default function page() {
  return (
    <div>
      about page
      <Link href={'/about/student'}>student about</Link>
    </div>
  )
}
