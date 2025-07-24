import { Media } from '@/app/types'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

const ThumbnailGallery = ({
  activeMediaIndex,
  setActiveMediaIndex,
  setIsVideoPlaying,
  previewMediaItems,
}: {
  activeMediaIndex: number
  setActiveMediaIndex: Dispatch<SetStateAction<number>>
  previewMediaItems: Media[]
  setIsVideoPlaying: Dispatch<SetStateAction<boolean>>
}) => {
  return (
    <div className="flex gap-4 p-4 overflow-x-auto scrollbar-none">
      {previewMediaItems.map((item, index) => (
        <div key={index}>
          <div>
            <div
              className={`relative w-[55px] rounded cursor-pointer ${index === activeMediaIndex ? 'overflow-hidden outline-[2px] outline-primary' : 'border-0'}`}
              onClick={() => {
                setActiveMediaIndex(index)
                setIsVideoPlaying(false)
              }}
            >
              <div className="rounded transition-opacity duration-300 ease-in-out text-[0px]">
                <Image alt="preview_gallery" src={item.thumbnail_url || item.resource_value} width="500" height="500" className="w-full object-cover rounded" />
              </div>
              {item.resource_type === 'video' && (
                <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <div className="transition-opacity duration-300 ease-in-out text-[0px]">
                    <Image alt="Play The Video" src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg" width="20" height="20" className="transparent" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
export default ThumbnailGallery
