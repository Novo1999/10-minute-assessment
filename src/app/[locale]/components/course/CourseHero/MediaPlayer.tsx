import NavigationButton from '@/app/[locale]/components/course/CourseHero/NavigationButton'
import PlayButton from '@/app/[locale]/components/course/CourseHero/PlayButton'
import { Media } from '@/app/types'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

const MediaPlayer = ({
  activeMediaIndex,
  setActiveMediaIndex,
  isVideoPlaying,
  setIsVideoPlaying,
  previewMediaItems,
  className = '',
}: {
  isVideoPlaying: boolean
  className?: string
  activeMediaIndex: number
  setActiveMediaIndex: Dispatch<SetStateAction<number>>
  previewMediaItems: Media[]
  setIsVideoPlaying: Dispatch<SetStateAction<boolean>>
}) => {
  const currentMedia = previewMediaItems[activeMediaIndex]
  const nextMedia = () => {
    setActiveMediaIndex((prev) => (prev + 1) % previewMediaItems.length)
    setIsVideoPlaying(false) // Reset video when changing media
  }

  const prevMedia = () => {
    setActiveMediaIndex((prev) => (prev - 1 + previewMediaItems.length) % previewMediaItems.length)
    setIsVideoPlaying(false) // Reset video when changing media
  }
  // Get YouTube embed URL for videos
  const getVideoEmbedUrl = (resourceValue: string) => {
    const embedUrl = `https://www.youtube.com/embed/${resourceValue}?autoplay=1&rel=0&modestbranding=1`
    return embedUrl
  }
  const handlePlayClick = () => {
    const currentMedia = previewMediaItems[activeMediaIndex]
    if (currentMedia && currentMedia.resource_type === 'video') {
      setIsVideoPlaying(true)
    }
  }

  if (!currentMedia) return null
  return (
    <div className={`relative overflow-hidden bg-black aspect-video ${className}`}>
      <div className="relative h-full">
        {isVideoPlaying && currentMedia.resource_type === 'video' ? (
          <div className="w-full h-full">
            <iframe
              width="100%"
              height="100%"
              src={getVideoEmbedUrl(currentMedia.resource_value)}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full bg-black"
            />
          </div>
        ) : (
          <>
            {currentMedia?.resource_type !== 'image' && <PlayButton handlePlayClick={handlePlayClick} />}
            <div className="thumb-wrap">
              <div>
                <div className="transition-opacity duration-300 ease-in-out text-[0px] object-cover">
                  <Image alt="image" src={currentMedia.thumbnail_url || currentMedia.resource_value} width="1000" height="1000" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {!isVideoPlaying && (
        <div>
          <NavigationButton direction="left" onClick={prevMedia} />
          <NavigationButton direction="right" onClick={nextMedia} />
        </div>
      )}
    </div>
  )
}
export default MediaPlayer
