// reference: https://github.com/vercel/next.js/blob/canary/packages/third-parties/src/google/google-maps-embed.tsx

import { GoogleMapsEmbed as TPCGoogleMapEmbed } from 'third-party-capital'

import ThirdPartyScriptEmbed from '../third-party-script-embed'
import type { GoogleMapsEmbed as GoogleMapsEmbedTypes } from '@/types/google'

export default function GoogleMapsEmbed(props: GoogleMapsEmbedTypes) {
  const { apiKey, ...restProps } = props
  const formattedProps = { ...restProps, key: apiKey }
  const { html } = TPCGoogleMapEmbed(formattedProps)

  return (
    <ThirdPartyScriptEmbed
      height={formattedProps.height || null}
      width={formattedProps.width || null}
      html={html}
      dataNtpc="GoogleMapsEmbed"
    ></ThirdPartyScriptEmbed>
  )
}
