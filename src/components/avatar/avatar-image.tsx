import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

type AvatarSize = 'xs' | 'sm';

type AvatarImageProps = Omit<ImageProps, 'height' | 'width'> & {
  size?: AvatarSize;
};

const avatarSize = {
  xs: 'h-5 w-5',
  sm: 'h-9 w-9',
};

export const AvatarImage = ({
  src,
  alt,
  size = 'xs',
  ...rest
}: AvatarImageProps) => {
  if (!src) {
    return null;
  }

  const normalizedSrc = typeof src === 'string' ? src.trim() : src;

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-full border-blue-200 border-[1px]',
        avatarSize[size]
      )}
    >
      <Image {...rest} src={normalizedSrc} alt={alt} fill />;
    </div>
  );
};
