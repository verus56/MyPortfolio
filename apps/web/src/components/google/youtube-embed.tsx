// reference: https://github.com/vercel/next.js/blob/canary/packages/third-parties/src/google/youtube-embed.tsx

import React from 'react'
import type { ScriptProps } from 'next/script'
import Script from 'next/script'
import { YouTubeEmbed as TPCYouTubeEmbed } from 'third-party-capital'

import ThirdPartyScriptEmbed from '../third-party-script-embed'
import type { YouTubeEmbed as YouTubeEmbedTypes } from '@/types/google'

const scriptStrategy = {
  server: 'beforeInteractive',
  client: 'afterInteractive',
  idle: 'lazyOnload',
  worker: 'worker',
}

export default function YouTubeEmbed(props: YouTubeEmbedTypes) {
  const { html, scripts, stylesheets } = TPCYouTubeEmbed(props)

  return (
    <ThirdPartyScriptEmbed
      height={props.height || null}
      width={props.width || null}
      html={html}
      dataNtpc="YouTubeEmbed"
    >
      {scripts?.map((script) => (
        <Script
          key={script.url}
          src={script.url}
          strategy={scriptStrategy[script.strategy] as ScriptProps['strategy']}
          stylesheets={stylesheets}
        />
      ))}
    </ThirdPartyScriptEmbed>
  )
}