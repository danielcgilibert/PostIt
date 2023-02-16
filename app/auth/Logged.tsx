'use client'

import Image from 'next/image'
import Link from 'next/link'

type User = {
  image: string
}
export default function Logged({ image }: User) {
  return (
    <li className="flex gap-8 items-center">
      <button className="text-sm bg-gray-700 text-white py-2 px-6 rounded-xl disabled:opacity-25">
        Sign Out
      </button>
      <Link href={'/dashboard'}>
        <Image
          width={64}
          height={64}
          src={image}
          alt="profile"
          className="w-14 rounded-full"
        />
      </Link>
    </li>
  )
}
