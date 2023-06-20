import { GoGitMerge } from 'react-icons/go';
import { GoArrowDown } from 'react-icons/go';
import { BsBook } from 'react-icons/bs';
import { ImProfile } from 'react-icons/im';
import { ImBriefcase } from 'react-icons/im';
import { GiSkills } from 'react-icons/gi';
export default function AsideBar() {
  return (
    <>
      <div class="w-16 overflow-hidden bg-gray-900 hover:bg-gray-800 hidden md:fixed left-0 top-0 md:flex flex-col items-center justify-start h-screen hover:w-20 transition-all ease-in-out duration-200 rounded-tr-3xl rounded-br-3xl z-50">
        <div class="flex flex-col items-center justify-center h-full space-y-8 mb-8 overflow-hidden">
          <a href="#" class="text-white hover:text-gray-300 transition-colors duration-300">
            <i class="text-2xl ">
              <div className="hover:bg-slate-600 p-2 rounded-full flex justify-center items-center gap-1">
                <ImProfile />
                {/* <span>Links</span> */}
              </div>
            </i>
          </a>
          <a href="#" class="text-white hover:text-gray-300 transition-colors duration-300">
            <i class="text-2xl ">
              <div className="hover:bg-slate-600 p-2 rounded-full flex justify-center items-center gap-1">
                <ImBriefcase />
                {/* <span>Links</span> */}
              </div>
            </i>
          </a>
          <a href="#" class="text-white hover:text-gray-300 transition-colors duration-300">
            <i class="text-2xl ">
              <div className="hover:bg-slate-600 p-2 rounded-full flex justify-center items-center gap-1">
                <GiSkills />
                {/* <span>Links</span> */}
              </div>
            </i>
          </a>
          <a href="#" class="text-white hover:text-gray-300 transition-colors duration-300">
            <i class="text-2xl ">
              <div className="hover:bg-slate-600 p-2 rounded-full flex justify-center items-center gap-1">
                <BsBook />
                {/* <span>Links</span> */}
              </div>
            </i>
          </a>
          <a href="#" class="text-white hover:text-gray-300 transition-colors duration-300">
            <i class="text-2xl ">
              <div className="hover:bg-slate-600 p-2 rounded-full flex justify-center items-center gap-1">
                <GoGitMerge />
                {/* <span>Links</span> */}
              </div>
            </i>
          </a>
          <a href="#" class="text-white hover:text-gray-300 transition-colors duration-300">
            <i class="text-2xl">
              <div className="hover:bg-slate-600 p-2 rounded-full flex justify-center items-center gap-1">
                <GoArrowDown />
                {/* <span>Download</span> */}
              </div>
            </i>
          </a>
          <a href="#" class="text-white hover:text-gray-300 transition-colors duration-300">
            <i class="fas fa-bell text-2xl"></i>
          </a>
        </div>
      </div>
    </>
  );
}
