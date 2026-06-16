import Image, { ImageProps } from 'next/image';

type AvatarImageProps = ImageProps;

export const AvatarImage = ({
  src,
  alt,
  width = 40,
  height = 40,
  ...rest
}: AvatarImageProps) => {
  if (!src) {
    return null;
  }

  const normalizedSrc = typeof src === 'string' ? src.trim() : src;

  return (
    <Image
      {...rest}
      src={normalizedSrc}
      alt={alt}
      width={width}
      height={height}
    />
  );
};
