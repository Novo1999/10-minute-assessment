import PriceTag from '@/app/[locale]/components/course/CourseHero/PriceTag'

const CoursePrice = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <div className="flex items-center justify-between md:flex-col md:items-start">
        <div className="md:mb-3 mt-2">
          <div className="inline-block text-2xl font-semibold">৳1000</div>
          <span className="inline-flex items-center">
            <del className="ml-2 text-base font-normal text-gray-700">৳5000</del>
            <PriceTag className="font-bold" price={4000} />
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between mb-2"></div>
    </div>
  )
}
export default CoursePrice
