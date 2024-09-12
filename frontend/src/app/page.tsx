'use client'

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Page() {
	const history = useRouter()

	useEffect(() => {
		history.push('/store')
	}, [])

  return <></>
}