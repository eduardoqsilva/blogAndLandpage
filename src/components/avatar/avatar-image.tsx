import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";

type AvatarSize = 'xs' | 'sm'

type AvatarImageProps = ImageProps & {
  size: AvatarSize
}

const avatarSize = {
  sm: 'size-5',
  xs: 'size-9'
}

export function AvatarImage({ src, alt, size = 'xs', ...rest }: AvatarImageProps) {
  return (
    <div className={cn('relative overflow-hidden rounded-full border-blue-200 border-[1px]', avatarSize[size])}>
      <Image alt={alt} src={src} fill {...rest} />
    </div>
  )
}