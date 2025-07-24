import { ChevronLeft, ChevronRight } from 'lucide-react';

const NavigationButton = ({ direction, onClick }: { direction: 'left' | 'right'; onClick: () => void }) => (
  <div
    className={`absolute ${direction === 'left' ? 'left-[10px]' : 'right-[10px]'} top-1/2 -translate-y-1/2 z-[4] h-[25px] w-[25px] cursor-pointer text-white flex items-center justify-center`}
    onClick={onClick}
  >
    <button className='bg-white text-black rounded-full'>{direction === 'left' ? <ChevronLeft size={25} /> : <ChevronRight size={25} />}</button>
  </div>
)

export default NavigationButton
