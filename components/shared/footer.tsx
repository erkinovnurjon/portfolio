import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  PlusCircledIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';
import SheetDemo from './sheet';

const Footer = () => {
 
  
    return (
      <div className="container mx-auto px-12 md:px-32 my-16">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col justify-center">
            <div className="flex items-center justify-center gap-4 md:gap-6">
              <Link
                href={"https://www.linkedin.com/in/nurjon-erkinov-58a3b3262/"}
              >
                <LinkedInLogoIcon className="w-8 h-8 hover:translate-y-1 hover:transition-all" />
              </Link>
              <Link href={"https://www.instagram.com/____n.7777/"}>
                <InstagramLogoIcon className="w-8 h-8 hover:translate-y-1 hover:transition-all" />
              </Link>
              <Link href={"https://github.com/erkinovnurjon"}>
                <GitHubLogoIcon className="w-8 h-8 hover:translate-y-1 hover:transition-all" />
              </Link>
              <Link href={"https://t.me/erkinoff_n"}>
                <PlusCircledIcon className="w-8 h-8 hover:translate-y-1 hover:transition-all" />
              </Link>
            </div>
            <div className="text-center font-['Heebo'] text-[#21243d] dark:text-slate-300 py-5">
              Copyright © 2020 All rights reserved
            </div>

            <SheetDemo />
          </div>
        </div>
      </div>
    );
  }


export default Footer;
