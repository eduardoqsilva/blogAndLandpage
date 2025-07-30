import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href={'/'} title={'página inicial'}>
      <Image
        src={'/logo.svg'}
        alt={'logo site'}
        width={116}
        height={32}
      />
    </Link>
  );
}