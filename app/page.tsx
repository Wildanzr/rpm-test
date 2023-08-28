'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [hiddenFrame, setHiddenFrame] = useState<boolean>(true)

  const getFrame = () => {
    const iframe = document.getElementById('rpm-iframe') as HTMLIFrameElement
    if (iframe) {
      console.log('got iframe')
      setHiddenFrame(false)

      // remove sso-btn inside iframe
      const ssoBtn = iframe.contentWindow?.document.getElementById('sso-btn')
      console.log(ssoBtn)
    } else {
      console.log('no iframe')
    }
  }

  // after 3 seconds, get the iframe
  useEffect(() => {
    setTimeout(() => {
      getFrame()
    }, 3000)
  }, [])

  return (
    <main className="w-full min-h-screen">
      <iframe
        id='rpm-iframe'
        src='https://ana-2ertt6.readyplayer.me?frameApi'
        className="min-w-full min-h-screen"
        allowFullScreen
        hidden={hiddenFrame}
      />
    </main>
  )
}
