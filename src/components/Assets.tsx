import Image from 'next/image'

import tailwindLogo from 'assets/tailwind-logo.png'

const assetsPaths = {
  tailwindLogo
}

type AssetsProps = {
  name: keyof typeof assetsPaths
  alt: ''
  width: number
  height: number
  className?: string
}

export const Assets = ({
  name,
  alt = '',
  width,
  height,
  className
}: AssetsProps) => {
  return (
    <Image
      src={assetsPaths[name]}
      width={width}
      height={height}
      className={className}
      alt={alt}
    />
  )
}
