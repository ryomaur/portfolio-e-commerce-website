import Image from "next/image";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";
import { LuHeart, LuShoppingBag, LuUser } from "react-icons/lu";

const Nav = () => {
  return (
    <>
      <nav className="w-full font-sans bg-bgtransparent backdrop-blur-[32px] fixed top-0">
        <div className="max-w-[1440px] mx-auto h-14 flex items-center justify-between text-foreground">
          <Link href={"/"} className="ml-8 hover:opacity-70">
            <Image
              src={"/assets/LOGO.svg"}
              alt="logo"
              height={13}
              width={130}
            />
          </Link>

          <div className="flex gap-10">
            <Link
              href={"/"}
              className="flex items-center relative group hover:opacity-70"
            >
              <FiChevronRight
                size={16}
                className="absolute left-0 top-0 h-full group-hover:block"
                fontWeight={500}
              />
              <div className="text-sm ml-5">ホーム</div>
            </Link>
            <Link
              href={"/products"}
              className="flex items-center relative group hover:opacity-70"
            >
              <FiChevronRight
                size={16}
                className="absolute left-0 top-0 h-full hidden group-hover:block"
                fontWeight={500}
              />
              <div className="text-sm ml-5">商品一覧</div>
            </Link>
            <Link
              href={"/about"}
              className="flex items-center relative group hover:opacity-70"
            >
              <FiChevronRight
                size={16}
                className="absolute left-0 top-0 h-full hidden group-hover:block"
                fontWeight={500}
              />
              <div className="text-sm ml-5">ブランド</div>
            </Link>
            <Link
              href={"/support"}
              className="flex items-center relative group hover:opacity-70"
            >
              <FiChevronRight
                size={16}
                className="absolute left-0 top-0 h-full hidden group-hover:block"
                fontWeight={500}
              />
              <div className="text-sm ml-5">サポート</div>
            </Link>
          </div>

          <div className="w-[132px] mr-8 flex items-center gap-6">
            <LuShoppingBag
              size={24}
              className="hover:opacity-70 cursor-pointer text-foreground"
            />
            <LuHeart
              size={24}
              className="hover:opacity-70 cursor-pointer text-foreground"
            />
            <LuUser
              size={24}
              className="hover:opacity-70 cursor-pointer text-foreground"
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
